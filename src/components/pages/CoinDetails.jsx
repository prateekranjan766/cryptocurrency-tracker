import React from "react";
import Graph from "./../graph/Graph";
import DetailHeader from "./../layout/DetailHeader";
import DetailsTable from "./../table/detailsTable/DetailsTable";

const CoinDetails = () => {
  return (
    <div>
      <DetailHeader />
      <Graph />
      <DetailsTable />
    </div>
  );
};

export default CoinDetails;
