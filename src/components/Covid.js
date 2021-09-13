import React, { useState, useEffect } from 'react';
import '../index.css';
import axios from 'axios';
import Moment from 'react-moment';
import logo from '../pictures/logocov2.png'

const Covid = () => {
    const [data, setData] = useState([])

    useEffect(() => {

        axios.get('https://apicovid19indonesia-v2.vercel.app/api/indonesia')
            .then(res => {

                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (
        <div className="container">


            <div className="covid">
                <div className="top">
                    <div className="header">
                        <img className="logo-header" src={logo} alt="logo" />
                        <div className="tanggal">  <a><Moment format="dddd, DD MMM yyyy">{data.lastUpdate}</Moment></a>
                            </div>
                        <div className="tanggal-mbl">
                            <div className="bln ang"><a><Moment format="MMM">{data.lastUpdate}</Moment></a></div>
                            <div className="tgl ang" ><a><Moment format="DD">{data.lastUpdate}</Moment></a></div>
                            <div className="thn ang"><a><Moment format="YYYY">{data.lastUpdate}</Moment></a></div>
                       
                        
                        </div>
                    </div>
                    <div className="kasus">

                        <div className="box positif">
                            <div className="status pst"><a>Positif</a></div>
                            <div className="data angka"><a>{data.positif}</a></div>
                        
                        </div>
                        <div className="box  meninggal">
                            <div className="status mng"><a>Meninggal</a></div>
                            <div className="angka"><a>{data.meninggal}</a></div>
                            </div>


                        <div className="box sembuh">
                            <div className="status smb"><a>Sembuh</a></div>
                            <div className="angka"><a>{data.sembuh}</a></div>
                            
                        </div>
                        <div className="box rawat">
                            <div className="status drw"><a>Dirawat</a></div>
                            <div className="angka"><a>{data.dirawat}</a></div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Covid;
