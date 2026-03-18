import axios from "axios"
import { useEffect, useState,  } from "react"
import { useParams, Link } from "react-router-dom"



function EgyHangszer() {
    const [hang, setHang] = useState({})
    const params = useParams()
    const id = params.id;
    

    useEffect(() => {
            axios.get(`http://localhost:3001/instruments/${id}`)
            .then((tartalom) => setHang(tartalom.data))
            .catch((errors) => console.error("Hiba: "+ errors))
    }, [id])


    return(
        <>
            <div className="card">
                <div className="card-header">{hang.brand}</div>
                <div className="card-body">
                    <h4>{hang.name}</h4>
                    <p>{hang.price} HUF</p>
                    <p>{hang.quantity} db</p>
                    <img src={hang.imageURL}></img>
                </div>
                <div className="card-footer">
                    <Link to="/" target=""><button><i className="bi arrow-left"></i>Vissza</button></Link>
                </div>
            </div>
        </>
    )
}

export default EgyHangszer