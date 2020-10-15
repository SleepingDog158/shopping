import React from "react";
import Footer from "../components/Footer";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import { NavBar } from "../components/Navbar";
import useDataProducts from "../useCustomHooks/useDataProducts";
export const Category = () => {
  const { products } = useDataProducts();
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <NavBar />
      <Container style={{ height: "100%" }}>
        <h2>Products</h2>
        <Row>
          {products?.map((product,i) => (
            <Col sm="2" style={{ marginBottom: "15px" }} className="product-card" key={i}>
              <span className="tooltiptext">{product.name}</span>
              <Card 
                style={{ minHeight: "18rem", maxHeight: "18rem" }}
                onClick={() => console.log(products.length)}
              >
                <CardImg
                  top
                  style={{ width: "10rem", height: "10rem" }}
                  src={product.pic}
                  alt=""
                />
                <CardBody>
                  <CardTitle
                    style={{
                      height: "4rem",
                      fontWeight: "bold",
                      fontSize: 14,
                      overflow: "hidden",
                    }}
                  >
                    {product.name}
                  </CardTitle>
                  <CardText style={{ fontWeight: "bold" }}>
                    {product.price}
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer className="main-footer" />
    </div>
  );
};
