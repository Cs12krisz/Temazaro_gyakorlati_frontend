import axios from "axios";
import { useEffect, useState } from "react";
import Navigation from "../modules/Nav";
import { Link, useNavigate } from "react-router-dom";


function Hangszerek() {
    const navigate = useNavigate()
    const [, setPending] = useState(false)
    const [adat, setAdat] = useState([])

    const getHangszerek = async () => {
        try {
            setPending(true)
            const tartalom = await axios.get("http://localhost:3001/instruments")
            setAdat(tartalom.data)

        } catch (error) {
            console.error("Hiba: " + error)
        }
        finally {
            setPending(false)
        }
    }

    const torles = async (id) => {
        try {
            const tart = await axios.delete(`http://localhost:3001/instruments/${id}`)
            alert("Sikeres törlés" + tart.data)
            navigate(0)
        } catch (error) {
            console.error("Hiba: " + error.data.message)
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
                <div key={index} className="row g-4">
                    <div className="card" >
                        <div className="card-header">{elem.brand}</div>
                        <div className="card-body">
                            <h4>{elem.name}</h4>
                            <p>{elem.price} HUF</p>
                            <p>Készletben {elem.quantity} db</p>
                            <Link to={`/hangszer/${elem.id}`}><img className="card-image-bottom" src={elem.imageURL} alt="" /></Link>
                        </div>
                        <div className="card-footer">
                            <button className="bg-danger" onClick={() => { torles(elem.id) }}><i className="bi bi-trash"></i>Törlés</button>
                            <button className="bg-warning"><i className="bi bi-pencil"></i>Módosítás</button>
                        </div>
                    </div>
                </div>
            ))}
        </>

    )
}

export default Hangszerek;