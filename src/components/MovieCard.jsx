const fallbackPoster = "/placeholder-poster.svg";

function MovieCard({ title, img }) {
  const src = img || fallbackPoster;
  return (
    <div className="flex flex-col text-gray-700 bg-white shadow-md rounded-xl w-full max-w-[11rem] sm:max-w-[12rem] overflow-hidden">
      <div className="bg-white h-56 sm:h-64">
        <img src={src} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="p-3">
        <p className="text-sm font-medium text-blue-gray-900 truncate">{title}</p>
      </div>
    </div>
  );
}

export default MovieCard;
