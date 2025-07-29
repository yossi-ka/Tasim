import React, { useEffect } from "react";

function OrderForm() {
  useEffect(() => {
    document.title = "הזמנה";
  }, []);

  return <div>OrderForm</div>;
}

export default OrderForm;
