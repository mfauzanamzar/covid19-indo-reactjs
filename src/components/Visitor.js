import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Visitor = () => {
    const [data, setData] = useState([])

    useEffect(() => {

        axios.get('https://api.countapi.xyz/update/covid/unhas/?amount=1')
            .then(res => {

                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    
    
    return (
        <div>
            Visitors : {data.value}
        </div>
    )
}

export default Visitor
