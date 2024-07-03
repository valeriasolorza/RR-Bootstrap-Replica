import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function StoreListings() {
    return (
    <Container style = {{ marginTop: "40px", textAlign: "center" }}>
        <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
            <Row>
                <Col xs=".5" >
                    <Image src="https://www.instacart.com/image-server/108x108/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png" roundedCircle alt="costco"/>
                </Col>
                <Col>
                    <h5 style={{ fontWeight: "bold" }}>COSTCO</h5>
                    <p>Delivery * Pickup</p>
                </Col>
            </Row>
            <Col sm="1"></Col>
            <Row >
                <Col xs=".5">
                    <Image src="https://www.instacart.com/image-server/108x108/www.instacart.com/assets/domains/warehouse/logo/1487/5ffe3fb7-2a0c-4714-8c71-364d7186a3d3.png" roundedCircle alt="walmart"/>
                </Col>
                <Col>
                    <h5 style={{ fontWeight: "bold" }}>WALMART</h5>
                    <p>Delivery * Pickup</p>
                </Col>
            </Row>
            <Col sm="1"></Col>
            <Row>
                <Col xs=".5" >
                    <Image src="https://www.instacart.com/image-server/108x108/www.instacart.com/assets/domains/warehouse/logo/290/627b03bd-1ef8-4d74-8f3d-346f7f6d18a5.png" roundedCircle alt="vons"/>
                </Col>
                <Col md="6">
                    <h5 style={{ fontWeight: "bold" }}>VONS</h5>
                    <p>Delivery * Pickup</p>
                </Col>
            </Row>
        </Row>
        </Container>
    )
}    