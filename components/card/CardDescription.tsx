import {formatCurrencyString, useShoppingCart} from 'use-shopping-cart'

export default function CardDescription({product}: any) {
  const {addItem, removeItem} = useShoppingCart()

  return (
    <>
      <div className="col-span-3 row-span-1">
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="#">
              {product.name}
            </a>
          </h1>
          <p className="text-grey-darker text-sm">
            {formatCurrencyString({
              value: product.price,
              currency: product.currency,
            })}<br/>
          </p>
        </header>
      </div>
      <div className="col-span-3 row-span-1">
        <p className="md:p-4">
          {product.description}
        </p>
      </div>
      <div className="col-span-3 row-span-1">
        <button type="button"
                onClick={() => addItem(product)}
                className="bg-blue-500 text-white px-3 py-2 rounded font-medium mx-3 hover:bg-blue-600 transition duration-200 each-in-out">
          カートに入れる
        </button>
        <button type="button"
                onClick={() => removeItem(product.sku)}
                className="bg-red-500 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-red-600 transition duration-200 each-in-out">
          削除
        </button>
      </div>
    </>
  )
}
