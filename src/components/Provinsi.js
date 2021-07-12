import React, { useState, useEffect } from 'react';
import '../index.css';
import axios from 'axios';
import { FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';


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
                <div className="provHeader">
                    <h1>Data Provinsi</h1>
                    <div className="share">
                        <div className="text"><a>Share : </a></div>
                        <div className="wa">
                            <WhatsappShareButton
                                url="https://indonesia-covid-19.netlify.app/"
                                title="Jumlah Covid-19 Indonesia" 
                               >
                                <WhatsappIcon round={true} className="wa-icon" />
                            </WhatsappShareButton>
                        </div>
                        <div className="fb">
                            <FacebookShareButton
                            url="https://indonesia-covid-19.netlify.app/"
                            quote="Jumlah Covid-19 Indonesia" 
                            >
                            <FacebookIcon round={true} className="fb-icon" />
                            </FacebookShareButton>
                            </div>

                    </div>
                </div>
                <table className="tabel">

                    <tr>
                        <th className="tbl-head">Nama Provinsi</th>
                        <th className="tbl-head">Positif</th>
                        <th className="tbl-head">Meninggal</th>
                        <th className="tbl-head">Sembuh</th>
                        <th className="tbl-head">Dirawat</th>
                    </tr>


                    {data.map(dt => (

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
