import React from "react";

const Pagination = ({ setPage, page, data, offset, setOffset }) => {
  return (
    <>
      <div>
        {data.data.offset > 0 && (
          <button
            onClick={() => {
              setOffset(offset - 100);
              setPage(page - 1);
            }}
          >
            Page précédente
          </button>
        )}
        <div>
          <span>{page}</span>
        </div>

        {data.data.offset + 100 < data.data.total && (
          <button
            onClick={() => {
              setOffset(offset + 100);
              setPage(page + 1);
            }}
          >
            Page Suivante
          </button>
        )}
      </div>
    </>
  );
};

export default Pagination;
