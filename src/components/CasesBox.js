import React from 'react'

const CasesBox = ({kasus, meninggal, sembuh}) => {
  return (
    <div className="d-flex justify-content-center align-middle shadow">
    <div className="box positif d-flex justify-content-center align-middle">
      <p className="positif-angka kasus-text">{kasus}</p>
      <p className="text">Positif</p>
    </div>
    <div className="box meninggal d-flex justify-content-center align-middle">
      <p className="meninggal-angka kasus-text">{meninggal}</p>
      <p className="text">Meninggal</p>
    </div>
    <div className="box sembuh d-flex justify-content-center align-middle">
      <p className="sembuh-angka kasus-text">{sembuh}</p>
      <p className="text">Sembuh</p>
    </div>
  </div>
  )
}

export default CasesBox