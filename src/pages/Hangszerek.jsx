import axios from "axios";
import { useEffect, useState } from "react";
import Navigation from "../modules/Nav";
import { Link } from "react-router-dom";

const torles = async (id) => {
    try {
        const tart = await axios.delete(`http://localhost:3001/instruments/${id}`)
        console.log(tart.data?.message)
        console.log(tart.data)
        alert("Sikeres törlés")
        location.assign("/")
    } catch (error) {
        console.error("Hiba: "+error)
    }

}

function Hangszerek() {
    const [, setPending] = useState(false)
    const [adat, setAdat] = useState([])

    const getHangszerek = async () => {
        try {
            setPending(true)
            const tartalom = await axios.get("http://localhost:3001/instruments")
            console.log(tartalom)
            setAdat(tartalom.data)

        } catch (error) {
            console.error("Hiba: " + error)
        }
        finally {
            setPending(false)
        }
    }


    useEffect(() => {
        getHangszerek()
    }, [])

    return (
        <>
            <Navigation />
            <h1>Hangszerek</h1>
            {adat.map((elem, index) => (
                <div key={index} style={{width: 400}}>
                <div className="card" >
                    <div className="card-header">{elem.brand}</div>
                    <div className="card-body">
                        <h4>{elem.name}</h4>
                        <p>{elem.price} HUF</p>
                        <p>Készletben {elem.quantity} db</p>
                        <Link to={`/hangszer/${elem.id}`}><img className="card-image-bottom" src={elem.imageURL} alt="" /></Link>
                    </div>
                    <div className="card-footer">
                        <button className="bg-danger" onClick={() => { torles(elem.id)}}><i className="bi bi-trash"></i>Törlés</button>
                        <button className="bg-warning"><i className="bi bi-pencil"></i>Módosítás</button>
                    </div>
                </div>
                </div>
            ))}
        </>

    )
}

export default Hangszerek;