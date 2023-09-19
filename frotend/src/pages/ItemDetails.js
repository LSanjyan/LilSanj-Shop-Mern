import React from "react";
import { useParams } from "react-router-dom";

function ItemDetails() {
  const { index } = useParams();

  const itemDetails = {
    0: {
      name: "Item 1",
      size: "Medium",
      price: "700.00",
    },
    1: {
      name: "Item 11",
      size: "Medium",
      price: "300.00",
    },
    2: {
      name: "Item 3",
      size: "Medium",
      price: "500.00",
    },
    3: {
      name: "Item 3",
      size: "Medium",
      price: "500.00",
    },
  };

  const currentItem = itemDetails[index];

  if (!currentItem) {
    return <div>Item not found</div>;
  }
  return (
    <div>
      <h2>Item Details</h2>
      <ul>
        <li>
          <strong>Name:</strong> {currentItem.name}
        </li>
        <li>
          <strong>Size:</strong> {currentItem.size}
        </li>
        <li>
          <strong>Price:</strong> {currentItem.price}
        </li>
        {/* More fields as needed */}
      </ul>
    </div>
  );
}

export default ItemDetails;
