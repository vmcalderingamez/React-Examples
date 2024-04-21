import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.cart.amount);
  return (
    <button
      className={classes.button}
      onClick={() => dispatch(uiActions.toggleShow())}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{amount}</span>
    </button>
  );
};

export default CartButton;
