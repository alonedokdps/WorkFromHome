import React from "react";
import {useParams} from "react-router-dom";
import Data from "./data/Data";
const Child = () => {
  const invoicesId = useParams();

  const invoice = Data.find(
    (item) => item.id.toString() === invoicesId.invoicesId
  );
  console.log(invoice);
  return (
    <div>
      <h1>
        trang cua id #{invoice?.id} ten la {invoice?.title}
      </h1>
    </div>
  );
};

export default Child;
