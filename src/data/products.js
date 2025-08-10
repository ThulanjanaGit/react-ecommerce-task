// Enhanced test data with variants to showcase the ProductCard features
export const products = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 199.99,
    originalPrice: 249.99,
    description: "Experience crystal-clear sound with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.8,
      count: 156
    },
    variants: [
      { id: 0, name: "Midnight Black", color: "#1a1a1a", inStock: true },
      { id: 1, name: "Arctic White", color: "#ffffff", inStock: true },
      { id: 2, name: "Ocean Blue", color: "#007bff", inStock: false },
      { id: 3, name: "Rose Gold", color: "#e91e63", inStock: true }
    ]
  },
  {
    id: 2,
    title: "Vintage Denim Jacket",
    price: 89.99,
    description: "Classic vintage-style denim jacket perfect for any season. Made from premium cotton with authentic distressed details.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 4.2,
      count: 89
    },
    variants: [
      { id: 0, name: "Light Blue", color: "#6bb6ff", inStock: true },
      { id: 1, name: "Dark Blue", color: "#1e3a8a", inStock: true },
      { id: 2, name: "Black", color: "#000000", inStock: false },
      { id: 3, name: "Grey", color: "#6b7280", inStock: true }
    ]
  },
  {
    id: 3,
    title: "Elegant Pearl Necklace",
    price: 299.99,
    originalPrice: 399.99,
    description: "Handcrafted pearl necklace with sterling silver clasp. Perfect for special occasions and everyday elegance.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.9,
      count: 234
    },
    variants: [
      { id: 0, name: "Classic White", color: "#f8f9fa", inStock: true },
      { id: 1, name: "Cream", color: "#faf0e6", inStock: true },
      { id: 2, name: "Rose", color: "#ffc0cb", inStock: true },
      { id: 3, name: "Silver", color: "#c0c0c0", inStock: false }
    ]
  },
  {
    id: 4,
    title: "Organic Cotton T-Shirt",
    price: 29.99,
    description: "Soft and comfortable organic cotton t-shirt. Sustainably made and perfect for casual wear.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: {
      rate: 4.5,
      count: 67
    },
    variants: [
      { id: 0, name: "White", color: "#ffffff", inStock: true },
      { id: 1, name: "Pink", color: "#ffc0cb", inStock: true },
      { id: 2, name: "Navy", color: "#000080", inStock: true },
      { id: 3, name: "Forest Green", color: "#228b22", inStock: false }
    ]
  },
  {
    id: 5,
    title: "Smart Fitness Tracker",
    price: 129.99,
    description: "Advanced fitness tracker with heart rate monitoring, GPS, and 7-day battery life. Track your health and fitness goals.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
    rating: {
      rate: 4.3,
      count: 198
    },
    variants: [
      { id: 0, name: "Midnight", color: "#191970", inStock: true },
      { id: 1, name: "Storm Grey", color: "#708090", inStock: true },
      { id: 2, name: "Product Red", color: "#ff0000", inStock: false },
      { id: 3, name: "Sport White", color: "#f5f5f5", inStock: true }
    ]
  },
  {
    id: 6,
    title: "Artisan Coffee Mug Set",
    price: 45.99,
    description: "Handcrafted ceramic coffee mug set. Perfect for your morning brew or as a thoughtful gift.",
    category: "home & kitchen",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400",
    rating: {
      rate: 4.7,
      count: 45
    },
    variants: [
      { id: 0, name: "Earth Tone", color: "#d2b48c", inStock: true },
      { id: 1, name: "Ocean Blue", color: "#4682b4", inStock: true },
      { id: 2, name: "Forest Green", color: "#228b22", inStock: true },
      { id: 3, name: "Sunset Orange", color: "#ff6347", inStock: false }
    ]
  }
];

export default products;
