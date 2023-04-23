import React from 'react'
import { ProductCard } from '../components/ProductCard'
import { useTitle } from '../hooks/useTitle';

export const Home = ({title}) => {
  useTitle(title);

    const products = [
        {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "src/assets/images/book.jpg"},
        {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "src/assets/images/headphones.jpg"},
        {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "src/assets/images/shirt.jpg"},
        {"id": 4, "name": "Logitech H111 Wired", "price": 39, "image": "src/assets/images/shoes.jpg"},
        {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": "src/assets/images/watch.jpg"},
        {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "src/assets/images/book.jpg"}
      ]
  return (
    <main>
      <section className="products">
        { products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
