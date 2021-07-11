import Link from "next/link";
import {Badge, IconButton} from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useShoppingCart} from "use-shopping-cart";


export default function ShoppingCart() {
  const {
    cartCount,
  } = useShoppingCart()
  return (
    <Link href={"/cart"}>
      <IconButton aria-label="cart" color={"inherit"}>
        <Badge badgeContent={cartCount}>
          <ShoppingCartIcon/>
        </Badge>
      </IconButton>
    </Link>
  )
}
