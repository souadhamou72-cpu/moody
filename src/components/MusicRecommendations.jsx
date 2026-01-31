import { useState, useEffect } from 'react';

const musicByMood = {
  happy: [
    {
      title: 'Happy Vibes 🌞 (Spotify)',
      embed: 'https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC',
      type: 'spotify',
    },
    {
      title: 'Good Mood Music 😊 (YouTube)',
      embed:
        'https://www.youtube.com/embed/videoseries?list=PLx2Jv96o522ORh69HaDKClrz2Midqj8AE',
      type: 'youtube',
    },
    {
      title: 'Feel Good Pop 🎵 (YouTube)',
      embed:
        'https://www.youtube.com/embed/videoseries?list=PLJNlve0_Ebae2aPbjfolLT-6LvZkP8UZA',
      type: 'youtube',
    },
    {
      title: "Don't worry Be happy! 🎶 (YouTube)",
      embed:
        'https://www.youtube.com/embed/videoseries?list=PLAtGYf1DIFh2SVyISyS3FI7njWkvLwCX9',
      type: 'youtube',
    },
  ],

  sad: [
    {
      title: 'Soft Sad Songs 🌧️ (Spotify)',
      embed: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1',
      type: 'spotify',
    },
    {
      title: 'Sad Songs 💔 (YouTube)',
      embed:
        'https://www.youtube.com/embed/videoseries?list=PL3-sRm8xAzY-w9GS19pLXMyFRTuJcuUjy',
      type: 'youtube',
    },
    {
      title: 'Melancholy Vibes 🎹 (YouTube)',
      embed:
        'https://www.youtube.com/embed/videoseries?list=PLgzTt0k8mXzHcKebL8d0uYHfawiARhQja',
      type: 'youtube',
    },
  ],

  relaxed: [
    {
      title: 'Relax & Unwind 🍃 (Spotify)',
      embed: 'https://open.spotify.com/embed/playlist/37i9dQZF1DWU0ScTcjJBdj',
      type: 'spotify',
    },
    {
      title: 'Relaxing Music 🧘‍♀️ (YouTube)',
      embed:
        'https://www.youtube.com/embed/videoseries?list=PL4QNnZJr8sRPmuz_d87ygGR6YAYEF-fmw',
      type: 'youtube',
    },
    {
      title: 'Calm Piano 🎹 (YouTube)',
      embed:
        'https://www.youtube.com/embed/videoseries?list=PLrALqIYcGkyQbyjzpHhpMQFXR1pvgTFak',
      type: 'youtube',
    },
  ],

  angry: [
    {
      title: 'Anger Release 🔥 (Spotify)',
      embed: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX1tyCD9QhIWF',
      type: 'spotify',
    },
    {
      title: 'Rock to Vent 🤘 (YouTube)',
      embed:
        'https://www.youtube.com/embed/videoseries?list=PLknqyEOvGo1YgL11BN1m-YOxaFHl29elY',
      type: 'youtube',
    },
    {
      title: 'Heavy Metal Fury 🎸 (YouTube)',
      embed:
        'https://www.youtube.com/embed/videoseries?list=PLRMAdarzGmBTaUdf3usgQf4_7Y9njBkJf',
      type: 'youtube',
    },
  ],
};

function MusicRecommendations({ mood }) {
  const [playlist, setPlaylist] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    shufflePlaylist();
  }, [mood]);

  function shufflePlaylist() {
    const playlists = musicByMood[mood];
    if (!playlists || playlists.length === 0) return;

    setLoading(true);

    setTimeout(() => {
      const otherPlaylists = playlist
        ? playlists.filter((p) => p.embed !== playlist.embed)
        : playlists;

      const randomIndex = Math.floor(Math.random() * otherPlaylists.length);
      setPlaylist(otherPlaylists[randomIndex]);
      setLoading(false);
    }, 400);
  }

  if (!playlist) return <p>Loading music...</p>;

  return (
    <div>
      <h2>{playlist.title}</h2>

      <p>Source: {playlist.type === 'spotify' ? 'Spotify' : 'YouTube'}</p>

      {loading && <p>Switching vibe... 🎧</p>}

      {!loading && (
        <iframe
          src={playlist.embed}
          width="100%"
          height="380"
          style={{ borderRadius: '12px', border: 'none' }}
          allow="autoplay; encrypted-media"
        ></iframe>
      )}

      <button onClick={shufflePlaylist} disabled={loading}>
        {loading ? 'Loading...' : 'Shuffle music 🔀'}
      </button>
    </div>
  );
}

export default MusicRecommendations;
