import React from "react";
import useDataProduct from "../useCustomHooks/useDataProducts";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Link } from "react-router-dom";

import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

export const CategoryScroll = () => {
  const { category } = useDataProduct();

  return (
    <div>
      {category.map((d, i) => (
        <div key={i}>
            <div style={{width:"20%", background: "linear-gradient(90deg, rgba(2,117,216,1) 0%, rgba(255,255,255,0.6477941518404237) 100%)", paddingLeft:"10px"}}>
          <a style={{fontFamily:"fantasy", fontSize:20, color:"white"}}>{d.name}</a></div>
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
            data={d.products
              .sort((a, b) => a.buys - b.buys)
              .slice(0, 10)
              .map((product, i) => (
                <Link to={`/product/${product.id}`} key={i}>
                  <div
                    className="product-card"
                    style={{ margin: "15px", width: "150px", height: "300px" }}
                  >
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
                  </div>
                </Link>
              ))}
          />
        </div>
      ))}
    </div>
  );
};
