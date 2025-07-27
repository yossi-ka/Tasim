import classes from "../../css/accessNumbers.module.css";

function SingleAccessNumber({ accessNumber }) {
  const { number, state, zone } = accessNumber;

  return (
    <div className={classes.card}>
      <div className={classes.info}>
        <div className={classes.label}>מספר גישה:</div>
        <div className={classes.value}>{number}</div>
      </div>
      <div className={classes.info}>
        <div className={classes.label}>מדינה:</div>
        <div className={classes.value}>{state}</div>
      </div>
      <div className={classes.info}>
        <div className={classes.label}>אזור:</div>
        <div className={classes.value}>{zone}</div>
      </div>
    </div>
  );
}

export default SingleAccessNumber;
