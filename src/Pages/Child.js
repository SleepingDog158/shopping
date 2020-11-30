import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import useDataProducts from "../useCustomHooks/useDataProducts";
import { Button } from "react-bootstrap";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Link } from "react-router-dom";

import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
export const Child = () => {
  const { products, recommended } = useDataProducts();
  const { productId } = useParams();
  const history = useHistory();
  const focus = products.filter((d) => d.id === parseInt(productId));
  
  return (
    <div>
      <a style={{ color: "#0275d8" }} onClick={() => history.goBack()}>
        {" "}
        <BiArrowBack /> Back
      </a>
      {focus?.map((d, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            maxHeight: " 500px",
            overflow: "auto",
          }}
        >
          <img src={d.pic} alt="" style={{ width: "30%", marginRight: "5%" }} />
          <div
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
          >
            <h2 style={{ fontWeight: "bold" }}>{d.name}</h2>
            <h5>
              <mark
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#0275d8",
                  color: "white",
                }}
              >
                {d.price}
              </mark>
            </h5>
            <h5>
              <b>Category:</b> {d.category}
            </h5>
            <h5>
              <b>Description:</b> {d.description}
            </h5>
            <Button variant="primary" style={{ marginTop: "auto" }}>
              Add to cart
            </Button>
          </div>
        </div>
      ))}
      { recommended && (
      <div>
        <div
          style={{
            width: "20%",
            background:
              "linear-gradient(90deg, rgba(2,117,216,1) 0%, rgba(255,255,255,0.6477941518404237) 100%)",
            paddingLeft: "10px",
          }}
        >
          <a style={{ fontFamily: "fantasy", fontSize: 20, color: "white" }}>
            Recommended
          </a>
        </div>
        <div >
            <ScrollMenu
              arrowLeft={
                <div
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    width: "50px",
                    height: "50px",
                    textAlign: "center",
                  }}
                >
                  {"<"}
                </div>
              }
              arrowRight={
                <div
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    width: "50px",
                    height: "50px",
                    textAlign: "center",
                  }}
                >
                  {">"}
                </div>
              }
              data={recommended
                .sort((a, b) => a.buys - b.buys)
                .slice(0, 10)
                .map((product, i) => (
                  <Link to={`/product/${product.id}`} key={i}>
                    <div
                      className="product-card"
                      style={{
                        margin: "15px",
                        width: "150px",
                        height: "300px",
                     
                      }}
                    >
                      <Card style={{ minHeight: "6rem", maxHeight: "18rem" }}>
                        <CardImg
                          top
                          style={{ width: "100%", height: "50%" }}
                          src={product.pic}
                          alt=""
                        />
                        <CardBody >
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
                    </div>
                  </Link>
                ))}
            />
         
        </div>
      </div> )}
    </div>
  );
};
