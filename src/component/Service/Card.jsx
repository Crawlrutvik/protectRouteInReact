import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import loadingImg from '../../img/loading.png'
import Data from './data.json';

const Card = () => {
    const navigate = useNavigate()
    const [Detaildata, SetDetailData] = useState([])
    const [loading, SetLoading] = useState(false)
    const { id } = useParams();
    useEffect(() => {
        SetDetailData(
            Data.filter((value) => {
                return value?.id === parseInt(id)
            })
        )
    }, [id])
    console.log('Detaildata: ', Detaildata);
    useEffect(()=>{
        // Detaildata.length <= 0 && SetLoading(true)
        if (Detaildata.length > 0) {
            SetLoading(true)
        } else {
            SetLoading(true)
        }
    },[Detaildata])
  
    return (
        <>
            <button onClick={() => {
                navigate("/service")
            }}>Back</button>
            {loading && <div className='loading'>
                <img src={loadingImg} alt="" />
                </div>}
            {
                Detaildata?.map((lang) => {
                    return (
                        <div className='detail' key={lang?.id}>
                            <h2>language Name:- {lang?.lanuageName}</h2>
                            <p>about:- {lang?.about}</p>
                        </div>
                    )
                })
            }

        </>

    )
}

export default Card