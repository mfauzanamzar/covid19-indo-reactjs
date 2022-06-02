import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import CasesBox from "./CasesBox";

const CaseByLocation = () => {
  const [data, setData] = useState([]);
  const [positif, setPositif] = useState("");
  const [meninggal, setMeninggal] = useState("");
  const [sembuh, setSembuh] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(
      "https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi"
    );
    setData(response.data);
    setPositif(response.data[0].kasus);
    setMeninggal(response.data[0].meninggal);
    setSembuh(response.data[0].sembuh);
  };

  const selectChangeHandler = (e) => {
    const provinsi = e.target.value;
    const index = data.findIndex((object) => {
      return object.provinsi === provinsi;
    });
    const detail = data[index];
    setPositif(detail.kasus);
    setMeninggal(detail.meninggal);
    setSembuh(detail.sembuh);
  };


  return (
    <Container className="mt-5">
        <p className="content-detail">Pilih Lokasi :</p>
        <select className="w-100 form-select form-select-lg mb-3" name="location" onChange={selectChangeHandler}>
          {data.map((location, index) => (
            <option key={index} value={location.provinsi}>{location.provinsi}</option>
          ))}
        </select>
        <CasesBox kasus={positif} meninggal={meninggal} sembuh={sembuh}/>
    </Container>
  );
};

export default CaseByLocation;
