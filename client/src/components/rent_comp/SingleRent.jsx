function SingleRent({ rent }) {
  return (
    <div>
      <div>
        <div className="name">{rent.customer_name || "שם לקוח לא מתועד"}</div>
        <div className="country">{rent.country || "אין תיעוד מדינה"}</div>
      </div>
    </div>
  );
}

export default SingleRent;
