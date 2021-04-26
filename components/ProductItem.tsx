import productStyles from '../styles/Product.module.css'
import product from '../types/product'

const ProductItem = (prop: { product: product }) => {
  return (
    <div className={productStyles.card}>
      <h3>{prop.product.name}</h3>
      <p>price: {prop.product.price}€</p>
      <p>{prop.product.description}</p>
    </div>
  )
}

export default ProductItem
