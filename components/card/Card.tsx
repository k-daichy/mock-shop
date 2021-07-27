import CardImage from "./CardImage"
import CardDescription from "./CardDescription"

export default function Card({product}: any) {
  return (
    <div className="p-5 m-auto rounded border-solid border-2">
      <div className="w-50 m-auto">
        <CardImage image={product.image}/>
        <CardDescription product={product}/>
      </div>
    </div>
  )
}
