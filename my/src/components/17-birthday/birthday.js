import data from "./people.json"
import {useState} from "react";
import {Button, Container} from "react-bootstrap";
import ProductCard from "./product-card";
const Birthday = () => {

    const [products, setProducts] = useState(data)

    const deleteProduct = (id) => {
        const arr = products.filter((item)=>item.id !== id);
        setProducts(arr)
    }

    return(
        <div>
            <Container>
                <h1>Bugün Doganlar</h1>
                <p>Bugün dogan {products.length} ürün bulundu</p>

                {products.map((item)=><ProductCard {...item} key={item.id} deleteProduct={deleteProduct}/>)}

                <Button variant="danger" onClick={()=> setProducts([])}>Remove All</Button>
                <Button variant="success" onClick={()=> setProducts(data)}>Reload Data</Button>
            </Container>
        </div>
    )
}

export default Birthday