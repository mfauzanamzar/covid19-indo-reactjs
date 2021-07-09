import React, { useState, useEffect } from 'react';
import '../index.css';
import axios from 'axios';


const Provinsi = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi')
            .then(res => {
              
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })


    return (
      <div className="container">
          <div className="provinsi">
          <h1>Data Provinsi</h1>
                    
            <table className="tabel">
                
                <tr>
                   <th className="tbl-head">Nama Provinsi</th>
                   <th className="tbl-head">Positif</th>
                   <th className="tbl-head">Meninggal</th>
                   <th className="tbl-head">Sembuh</th>
                   <th className="tbl-head">Dirawat</th>
                </tr>
                

                {data.map(dt=>(
                    
                <tr className="tbl-prov" key={dt.provinsi}>
                    <td className="nmprov">{dt.provinsi}</td>
                    <td>{dt.kasus}</td>
                    <td>{dt.meninggal}</td>
                    <td>{dt.sembuh}</td>
                    <td>{dt.dirawat}</td>
                </tr>
            
                    ))}         
            </table>
             
          </div>


      </div>
    )
}

export default Provinsi
