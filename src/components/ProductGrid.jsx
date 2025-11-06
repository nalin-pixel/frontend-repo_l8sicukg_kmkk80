import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Casque Bluetooth ANC",
    price: 89.99,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1518443166517-45650ed185a6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Montre connectée Sport",
    price: 129.99,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1518384401463-d3876163c195?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Clavier mécanique RGB",
    price: 59.99,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Aspirateur sans fil",
    price: 149.99,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155223168f?q=80&w=1200&auto=format&fit=crop",
  },
];

function Rating({ value }) {
  const full = Math.floor(value);
  const half = value % 1 >= 0.5;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < full || (half && i === full) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }
        />
      ))}
      <span className="text-xs text-gray-500 ml-1">{value.toFixed(1)}</span>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="mt-3 text-sm font-medium line-clamp-2 min-h-[40px]">{product.title}</h3>
      <div className="mt-1">
        <Rating value={product.rating} />
      </div>
      <div className="mt-2 text-lg font-semibold">{product.price.toFixed(2)} €</div>
      <button className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 rounded">
        Ajouter au panier
      </button>
    </div>
  );
}

function ProductGrid() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold mb-4">Articles populaires</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;
