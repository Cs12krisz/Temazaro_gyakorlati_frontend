import axios from "axios"

const submitEvent = (event) => {
    event.preventDefault()
    event.persist()

    const id = event.target.name.value
    const brand = event.target.brand.value
    const price = event.target.price.value
    const quantity = event.target.quantity.value
    const imageURL = event.target.imageURL.value

    const jsonBody = {
        id : id,
        brand: brand,
        price: parseInt(price),
        quantity: parseInt(quantity),
        imageURL: imageURL
    }

    console.log(jsonBody)

    axios.post("http://localhost:3001/instruments", jsonBody)
    .then((tartalom) => {alert(tartalom.data);location.assign("/")})
    .catch((errors) => console.error("Hiba: "+errors.data.message))

}

function UjHangszer() {
    return(
        <>
        <h1>Új hangszer hozzáadása</h1>
            <form method="post" onSubmit={(event) => submitEvent(event)}>
                <input type="text" className="form-control" name="id" placeholder="Id" /><br/>
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