import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Review.css";
const ReviewItem = ({ product, handaleRemoveProduct }) => {
  const { name, quantity, img, price, shiping } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-item-details-container">
        <div className="review-item-details">
          <p className="product-naem" title={name}>
            {name.length > 20 ? name.slice(0, 20) + "..." : name}
          </p>
          <p>{price}</p>
          <p>
            <small>shoping:{shiping}</small>
          </p>
          <p>
            <small>quantity:{quantity}</small>
          </p>
        </div>
        <div className="delete-container">
          <button
            onClick={() => handaleRemoveProduct(product)}
            className="delete-btn"
          >
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
