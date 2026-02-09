import { useEffect, useRef } from 'react';

const DEFAULT_THROTTLE_MS = 1500;

const SCROLL_KEYS = new Set([
  'ArrowDown',
  'ArrowUp',
  'PageDown',
  'PageUp',
  'Home',
  'End',
  'Space',
]);

const preventIfPossible = (event) => {
  if (event.cancelable) event.preventDefault();
};

export default function useScrollLockNotice({
  enabled,
  onAttempt,
  throttleMs = DEFAULT_THROTTLE_MS,
}) {
  const lastNotifyAt = useRef(0);
  const originalBodyStyle = useRef(null);

  useEffect(() => {
    if (!originalBodyStyle.current) {
      originalBodyStyle.current = {
        overflow: document.body.style.overflow,
        touchAction: document.body.style.touchAction,
      };
    }

    if (enabled) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow =
        originalBodyStyle.current?.overflow ?? '';
      document.body.style.touchAction =
        originalBodyStyle.current?.touchAction ?? '';
    }

    return () => {
      if (originalBodyStyle.current) {
        document.body.style.overflow = originalBodyStyle.current.overflow;
        document.body.style.touchAction =
          originalBodyStyle.current.touchAction;
      }
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return undefined;

    const notify = () => {
      if (!onAttempt) return;
      const now = Date.now();
      if (now - lastNotifyAt.current < throttleMs) return;
      lastNotifyAt.current = now;
      onAttempt();
    };

    const handleWheel = (event) => {
      preventIfPossible(event);
      notify();
    };

    const handleTouchMove = (event) => {
      preventIfPossible(event);
      notify();
    };

    const handleKeyDown = (event) => {
      if (!SCROLL_KEYS.has(event.code)) return;
      preventIfPossible(event);
      notify();
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [enabled, onAttempt, throttleMs]);
}
