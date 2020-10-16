import React from "react";

import { Switch, useParams, Link, Route } from "react-router-dom";
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
import { Child } from "./Child";
import useDataProducts from "../useCustomHooks/useDataProducts";
export const Category = () => {
  const {category } = useDataProducts();
  const { id } = useParams();
  const focus = category.find((d) => d.id === parseInt(id));
  console.log(focus)
  const shownProducts = focus?.products
  console.log(shownProducts)
  return (
    <Container style={{ height: "100%" }}>
      <h2
        style={{ textAlign: "center", marginBottom: "15px", fontWeight: "400" }}
      >
        {focus?.name}
      </h2>
      <Row>
        {shownProducts?.map((product, i) => (
          <Col
            sm="2"
            style={{ marginBottom: "15px" }}
            className="product-card"
            key={i}
          >
            <Link to={`/product/${product.id}`}>
              <span className="tooltiptext">{product.name}</span>
              <Card style={{ minHeight: "6rem", maxHeight: "18rem" }}>
                <CardImg
                  top
                  style={{ width: "100%", height: "50%" }}
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
            </Link>
          </Col>
        ))}
      </Row>
      <Switch>
        <Route path="/product/:productId" component={Child} />
      </Switch>
    </Container>
  );
};
