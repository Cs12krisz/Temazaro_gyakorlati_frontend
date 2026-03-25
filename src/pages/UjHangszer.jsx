import axios from "axios"
import Navigation from "../modules/Nav"
import { useNavigate } from "react-router-dom"



function UjHangszer() {
    const navigate = useNavigate();

    const submitEvent = (event) => {
    event.preventDefault()
    event.persist()

    const id = event.target.id.value
    const name = event.target.name.value
    const brand = event.target.brand.value
    const price = event.target.price.value
    const quantity = event.target.quantity.value
    const imageURL = event.target.imageURL.value

    const jsonBody = {
        id : id,
        name: name,
        brand: brand,
        price: parseInt(price),
        quantity: parseInt(quantity),
        imageURL: imageURL
    }

    console.log(jsonBody)

    axios.post("http://localhost:3001/instruments", jsonBody)
    .then((tartalom) => {alert(tartalom.data); navigate("/")})
    .catch((errors) => console.error("Hiba: "+errors.data.message))

}
    return(
        <>
        <Navigation/>
        <h1>Új hangszer hozzáadása</h1>
            <form method="post" onSubmit={submitEvent}>
                <input type="text" className="form-control" required name="id" placeholder="Id" /><br/>
                <input type="text" className="form-control" required name="name" placeholder="Name" /><br/>
                <input type="text" className="form-control" required name="brand"placeholder="Brand" /><br/>
                <input type="text" className="form-control" required name="price" placeholder="Price" /><br/>
                <input type="text" className="form-control" required name="quantity" placeholder="Quantity" /><br/>
                <input type="text" className="form-control" name="imageURL" placeholder="ImageURL" /><br/>
                <input className="btn btn-primary" type="submit" value="Hozzáad" />
            </form>
        </>
    )
}

export default UjHangszer;