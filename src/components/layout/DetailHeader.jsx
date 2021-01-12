import { useEffect, useContext } from "react";
import CoinContext from "./../../context/coinContext";
import "./DetailHeader.scss";

const DetailHeader = () => {
  const coinContext = useContext(CoinContext);
  const { getDetails, details, loading } = coinContext;
  useEffect(() => {
    getDetails();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      {loading === false && (
        <>
          <div className="heading">
            <img src={details.image.small} alt="coinImage" />
            <h1>{details.name}</h1>
          </div>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: details.description.en }}
          ></div>
        </>
      )}
    </>
  );
};

export default DetailHeader;
