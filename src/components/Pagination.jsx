import React from "react";

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;
const limit=100
const Pagination = ({ total, offset, setOffset }) => {
  const pages = total;
  const maxFirst = limit;
  const first = Math.min(Math.max(offset - MAX_LEFT, 1), maxFirst);
  function onPageChange(page) {
    setOffset(page);
  }

  return (
    <ul className="pagination">
      <li>
        <button
          onClick={() => onPageChange(offset - 1)}
          disabled={offset === 1}
        >
          Anterior
        </button>
      </li>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={page === offset ? "active" : null}
            >
              {page}
            </button>
          </li>
        ))}
      <li>
        <button
          onClick={() => onPageChange(offset + 1)}
          disabled={offset === limit}
        >
          Próxima
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
