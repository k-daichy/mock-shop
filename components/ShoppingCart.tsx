import Link from "next/link";
import {useShoppingCart} from "use-shopping-cart";


export default function ShoppingCart() {
  const {
    cartCount,
  } = useShoppingCart()
  return (
    <Link href={"/cart"}>
      <a className="px-4 py-2 mt-2 text-sm text-white bg-indigo-700 hover:bg-indigo-500 rounded-lg sm:mt-0">
      カート
      <span className="mb-3 px-2 py-1 text-white text-sm ml-0.5">{cartCount}</span>
      </a>
    </Link>
  )
}
