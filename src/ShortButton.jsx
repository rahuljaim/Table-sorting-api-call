import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLong, faUpLong } from "@fortawesome/free-solid-svg-icons";

const ShortButton = ({ tdata, column, updataval }) => {
  const [data, setData] = useState(false);
  const onHandle = () => {
    if (data) {
      setData(false);
      let sort = tdata.sort((a, b) => (a[column] > b[column] ? 1 : -1));
      // console.log(sort);
      updataval(sort, false);
    } else {
      setData(true);
      let sort = tdata.sort((a, b) => (a[column] < b[column] ? 1 : -1));
      // console.log(sort);
      updataval(sort, true);
    }
  };
  return (
    <>
      {data ? (
        <FontAwesomeIcon icon={faDownLong} onClick={onHandle} />
      ) : (
        <FontAwesomeIcon icon={faUpLong} onClick={onHandle} />
        // <button >^</button>
      )}
    </>
  );
};
export default ShortButton;
