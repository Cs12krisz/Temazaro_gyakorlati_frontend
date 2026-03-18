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
    .then((tartalom) => {alert("Új hangszer létrehozva"); console.log(tartalom.data)})
    .catch((errors) => console.error("Hiba: "+errors))

    location.assign("/")

}

function UjHangszer() {
    return(
        <>
        <h1>Új hangszer hozzáadása</h1>
            <form method="post" onSubmit={(event) => submitEvent(event)}>
                <label htmlFor="id">Id</label>
                <input type="text" name="id" /><br/>
                <label htmlFor="id">Name</label>

                <input type="text" name="name" /><br/>
                <label htmlFor="id">Brand</label>

                <input type="text" name="brand" /><br/>
                <label htmlFor="id">Price</label>

                <input type="text" name="price" /><br/>
                <label htmlFor="id">Quantity</label>

                <input type="text" name="quantity" /><br/>
                <label htmlFor="id">ImageURL</label>

                <input type="text" name="imageURL" /><br/>
                <input type="submit" value="Hozzáad" />
            </form>
        </>
    )
}

export default UjHangszer;