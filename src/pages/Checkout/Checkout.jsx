import React from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";
import { useStateValue } from "../../ContextAPI/StateProvider";
import CheckoutProduct from "../../components/Products/CheckoutProduct/CheckoutProduct";

function Checkout() {
	const [{ basket }] = useStateValue();
	return (
		<div className="checkout">
			<img
				className="checkout-ad"
				src="https://m.media-amazon.com/images/I/61MkiIMUSvL._SX3000_.jpg"
				alt=""
			/>
			{basket?.length === 0 ? (
				<div>
					<h2>Your shopping basket empty</h2>
					<p>
						You have no item in your basket.To buy one or more items,
						<Link className="checkout-link" to="/">
							"Add to basket"
						</Link>
						next to the item.
					</p>
				</div>
			) : (
				<div>
					<h2>Your shopping basket</h2>
					{basket.map((item) => (
						<CheckoutProduct key={item.id} item={item} />
					))}
				</div>
			)}
		</div>
	);
}

export default Checkout;
