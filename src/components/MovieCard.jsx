function MovieCard({ title, img }) {
  return (
    <div className="flex flex-col text-gray-700 bg-white shadow-md rounded-xl w-48 overflow-hidden">
      <div className="bg-white h-64">
        <img src={img} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="p-3">
        <p className="text-sm font-medium text-blue-gray-900 truncate">{title}</p>
      </div>
    </div>
  );
}

export default MovieCard;
