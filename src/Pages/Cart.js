import React,{useState} from "react";
import useDataProducts from "../useCustomHooks/useDataProducts";
import { Table, Button } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
export const Cart = () => {
  const { products } = useDataProducts();
    const [quantity, setQuantity]= useState(1)
  return (
    <div className="container">
      <h2>Your cart</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}></th>
            <th style={{ textAlign: "center" }}>ID</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Price</th>
            <th style={{ textAlign: "center" }}>Quantity</th>
            <th style={{ textAlign: "center" }}>Total</th>
            <th style={{ textAlign: "center" }}></th>
          </tr>
        </thead>
        <tbody>
          {products.slice(0, 3).map((d, i) => (
            <tr>
              <td>
                <img
                  src={d.pic}
                  alt=""
                  style={{ width: "100%", marginRight: "5%" }}
                />
              </td>
              <td
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  padding: "0px",
                  fontWeight: "bold",
                }}
              >
                {d.id}
              </td>
              <td
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  padding: "0px",
                  fontWeight: "bold",
                }}
              >
                {d.name}
              </td>
              <td
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  padding: "0px",
                  fontWeight: "bold",
                }}
              >
                {d.price}
              </td>
              <td
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  padding: "0px",
                  fontWeight: "bold",
                }}
              >
                <input defaultValue="1" type="number" value={quantity} onChange={(event) => {
                    let currentQuantity = event?.target?.value;
                    setQuantity(currentQuantity);
                  }}/>
              </td>
              <td
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  padding: "0px",
                  fontWeight: "bold",
                }}
              >
                {d.price}
              </td>
              <td
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  padding: "0px",
                  fontWeight: "bold",
                }}
              >
                <Button
                  variant="danger"
                  style={{
                    padding: "10px 12px",
                    textAlign: "center",
                    borderRadius: "5px",
                  }}
                >
                  <AiOutlineDelete />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
