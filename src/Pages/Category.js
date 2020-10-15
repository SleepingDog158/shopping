import React, { useState,useEffect } from "react";

import { useParams } from "react-router-dom";
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

import useDataProducts from "../useCustomHooks/useDataProducts";
export const Category = () => {
  const { products, category } = useDataProducts();
  const { id } = useParams();
 
  console.log(id);
  const focus = category.find((d) => id);
  console.log(focus);
  const shownProducts = products.filter((d) => d.category === focus?.name);
  console.log(shownProducts);
  return (
    
    <Container style={{ height: "100%" }}>
      <h2>{focus?.name}</h2>
      <Row>
        {shownProducts?.map((product, i) => (
          <Col
            sm="2"
            style={{ marginBottom: "15px" }}
            className="product-card"
            key={i}
          >
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
  );
};
