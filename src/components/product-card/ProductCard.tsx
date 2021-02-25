import React from "react";
import { Card } from "react-bootstrap";
import "./ProductCard.css";
import { IProductDetails } from "../../redux/interfaces/SearchEntitles";
import { Button } from "react-bootstrap";
import scooterExpress from "../../assets/images/scooter_express.png";

const ProductCard: React.FC<{ productDetails: IProductDetails }> = ({
  productDetails,
}) => {
  const {
    net,
    item_image,
    item_price,
    item_id,
    item_name,
    productInventory,
  } = productDetails;

  return (
    <Card className="product-details-card">
      <div key={item_id}>
        <div className="product-card-header">
          <img
            src={item_image}
            alt="interview"
            className="product-image"
          />
          <div className="product-description">
            {" "}
            <div className="product-name">{item_name}</div>
            <div className="float-left">Net wt: {net}</div>
            <div className="float-right product-cost">&#8377; {item_price}</div>
          </div>
        </div>
        <img
          src={scooterExpress}
          className="product-scooter-icon m-1"
          alt="interview"
        />
        <div
          className="product-availability "
          dangerouslySetInnerHTML={{
            __html: `${productInventory.next_available_by}`,
          }}
        ></div>
        <Button className="float-right product-card-btn">ADD</Button>
      </div>
    </Card>
  );
};

export default ProductCard;
