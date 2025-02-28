import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ page, setPage, hasNextPage }) => {
  return (
    <div className="flex justify-center mt-6">
      <button
        className="px-4 py-2 mx-2 bg-gray-700 rounded disabled:opacity-50 flex items-center"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        <FaArrowLeft className="mr-1" /> Previous
      </button>
      <span className="text-xl mx-2">{page}</span>
      <button
        className="px-4 py-2 mx-2 bg-gray-700 rounded disabled:opacity-50 flex items-center"
        onClick={() => setPage(page + 1)}
        disabled={!hasNextPage}
      >
        Next <FaArrowRight className="ml-1" />
      </button>
    </div>
  );
};

export default Pagination;
