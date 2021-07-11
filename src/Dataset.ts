export type Fruit = {
  sku: string,
  id: string
  name: string
  description: string
  price: number
  currency: string
  image: string
}

export const Fruits: Fruit[] = [
  {sku: "sku_01", id: "1", name: "りんご", description:"りんご。めっちゃ赤い。", price: 100, currency: "JPY", image: "apple_red.png"},
  {sku: "sku_02", id: "2", name: "青りんご", description:"青りんご。めっちゃ青い。", price: 120, currency: "JPY", image: "apple_green.png"},
  {sku: "sku_03", id: "3", name: "ぶどう", description:"ぶどう。そんなに好きじゃない。", price: 500, currency: "JPY", image: "grape.png"},
  {sku: "sku_04", id: "4", name: "オレンジ", description:"オレンジ。そんなに食べない。", price: 180, currency: "JPY", image: "orange.png"},
  {sku: "sku_05", id: "5", name: "スイカ", description:"スイカ。高い。", price: 800, currency: "JPY", image: "water_melon.png"},
]
