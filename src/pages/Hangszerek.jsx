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
            <div className="container">
                <div className="row g-4">
                    {adat.map((elem, index) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                            <div className="card h-100 shadow-sm" >
                                <div className="card-header">{elem.brand}</div>
                                <div className="card-body">
                                    <h6 className="card-title">{elem.name}</h6>
                                    <p>{elem.price} HUF</p>
                                    <p>Készletben {elem.quantity} db</p>
                                    <Link to={`/hangszer/${elem.id}`}><img className="card-image-top p-3" src={elem.imageURL} alt="hangszer" style={{ objectFit: "contain", height: "180px" }} /></Link>
                                </div>
                                <div className="card-footer">
                                    <button className="bg-danger" onClick={() => { torles(elem.id) }}><i className="bi bi-trash"></i>Törlés</button>
                                    <button className="bg-warning"><i className="bi bi-pencil"></i>Módosítás</button>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>

    )
}

export default Hangszerek;