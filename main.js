//65130500083 Sarawit Kraukham
import { itemList } from './itemList.js'
import { products } from './data/products.js'

window.addEventListener('load', () => {
  const manageItem = itemList(products)
  manageItem.initialPage()
})
