export default function CategoryButton({
  category,
  setCategory,
  selectedCategory,
}: {
  category: any;
  setCategory: any;
  selectedCategory: any;
}) {
  return (
    <button
      className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${
        selectedCategory === category.id
          ? 'bg-blue-100 border-blue-300'
          : 'bg-white border-gray-200'
      }`}
      onClick={() => setCategory(category.id)}
    >
      <div className="flex items-center justify-center">
        <span>{category.name}</span>
        <span
          className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${
            category === '0'
              ? 'text-white bg-blue-300'
              : 'text-gray-400 bg-gray-100'
          }`}
        >
          15
        </span>
      </div>
    </button>
  );
}
