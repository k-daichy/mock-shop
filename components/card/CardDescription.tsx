import {formatCurrencyString, useShoppingCart} from 'use-shopping-cart'
import DangerButton from 'components/buttons/DangerButton'
import PrimaryButton from 'components/buttons/PrimaryButton'

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
        <PrimaryButton text="カートに入れる" onClickFunction={() => addItem(product)} />
        <DangerButton text="削除" onClickFunction={() => removeItem(product.sku)} />
      </div>
    </>
  )
}
