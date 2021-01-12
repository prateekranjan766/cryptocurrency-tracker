import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>{"  "}</th>
        <th>Name</th>
        <th>Symbol</th>
        <th>Market Rank</th>
        <th>Current Price</th>
        <th>Price Change % (in 24h)</th>
        <th>Market Capitalisation</th>
        <th>Last Updated</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
