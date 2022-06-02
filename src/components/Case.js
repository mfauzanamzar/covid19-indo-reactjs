import React, { useState, useEffect } from "react";
import axios from "axios";
import CasesBox from "./CasesBox";
import Moment from "react-moment";

const Case = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://apicovid19indonesia-v2.vercel.app/api/indonesia")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="mt-5">
    <p className="text-location">Indonesia</p>
      <CasesBox
        kasus={data.positif}
        meninggal={data.meninggal}
        sembuh={data.sembuh}
      />
      <p className="text-last-update mt-2">Last update : <Moment format="MMMM D, Y">{data.lastUpdate}</Moment></p>
    </div>
  );
};

export default Case;
