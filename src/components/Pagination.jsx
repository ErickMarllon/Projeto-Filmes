import React from "react";


import {
  PaginationContainer,
  PaginationContain,
  Button,
} from "../style/PaginationStyle.jsx";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;
const limit = 100;
const Pagination = ({ total, offset, setOffset }) => {
  const pages = total;
  const maxFirst = limit;
  const first = Math.min(Math.max(offset - MAX_LEFT, 1), maxFirst);
  function onPageChange(page) {
    setOffset(page);

  }

  return (
    <PaginationContainer>
      <PaginationContain>
        <ul>
          <li>
            <Button
              onClick={() => onPageChange(offset - 1)}
              disabled={offset === 1}
            >
              <BsChevronLeft />
            </Button>
          </li>
          {Array.from({ length: Math.min(MAX_ITEMS, pages) })
            .map((_, index) => index + first)
            .map((page) => (
              <li key={page}>
                <Button
                  onClick={() => onPageChange(page)}
                  active={page === offset ? "active" : null}
                >
                  {page}
                </Button>
              </li>
            ))}
          <li>
            <Button
              onClick={() => onPageChange(offset + 1)}
              disabled={offset === limit}
            >
              <BsChevronRight />
            </Button>
          </li>
        </ul>
      </PaginationContain>
    </PaginationContainer>
  );
};

export default Pagination;
