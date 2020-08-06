import React from "react";
const Pagination = ({ setPage, page, count }) => {
  const renderPage = () => {
    const limit = 100;
    let newCount = count / limit;

    const rest = count % limit;
    if (rest !== 0) {
      newCount = Math.floor(newCount) + 1;
    }
    for (let i = 1; i <= newCount; i++) {
      page.push(
        <button
          onClick={() => {
            setPage(i);
          }}
        >
          {i}
        </button>
      );
    }
    return page;
  };
  return <div>{renderPage()}</div>;
};
export default Pagination;
