
import products from "./products.json"
import {Col, Container, Row} from "react-bootstrap";
import Product from "./product";

const ProductList = () => {

    return(
        <Container>
            <Row className="gap-5 mt-5">
                {
                    products.map((product,i)=>(
                        <Col key={product.id} md={6} lg={4} xl={3}>
                            <Product {...product}/>
                        </Col>
                    ))
                }

            </Row>

        </Container>
    )
}

export default ProductList