import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const dispatch = useDispatch();

  // Mock variants for demonstration - in real app, this would come from product data
  const variants = product.variants || [
    { id: 0, name: "Default", color: "#333", inStock: true },
    { id: 1, name: "Blue", color: "#007bff", inStock: true },
    { id: 2, name: "Red", color: "#dc3545", inStock: false },
    { id: 3, name: "Green", color: "#28a745", inStock: true },
  ];

  const currentVariant = variants[selectedVariant];
  const isInStock = currentVariant?.inStock && product.rating?.count > 0;

  const handleAddToCart = () => {
    if (!isInStock) return;

    const productWithVariant = {
      ...product,
      selectedVariant: currentVariant,
      variantId: `${product.id}-${currentVariant.id}`,
    };

    dispatch(addCart(productWithVariant));
    toast.success(`Added ${product.title.substring(0, 20)}... to cart`);
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const handleImageError = (e) => {
    e.target.src = "/assets/main.png.jpg"; // Fallback image
    setIsImageLoaded(true);
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
      <div className="product-card">
        <div className="product-card__image-container">
          {!isImageLoaded && (
            <div className="product-card__image-skeleton">
              <div className="skeleton-loader"></div>
            </div>
          )}
          <img
            src={product.image}
            alt={product.title}
            className={`product-card__image ${isImageLoaded ? "loaded" : ""}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
          {!isInStock && (
            <div className="product-card__out-of-stock-overlay">
              <span>Out of Stock</span>
            </div>
          )}
          <div className="product-card__badge">{product.category}</div>
        </div>

        <div className="product-card__content">
          <h3 className="product-card__title" title={product.title}>
            {product.title}
          </h3>

          <p className="product-card__description">
            {product.description.length > 100
              ? `${product.description.substring(0, 100)}...`
              : product.description}
          </p>

          <div className="product-card__rating">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`star ${
                  i < Math.floor(product.rating?.rate || 0) ? "filled" : ""
                }`}
              >
                ★
              </span>
            ))}
            <span className="rating-count">({product.rating?.count || 0})</span>
          </div>

          <div className="product-card__price">
            <span className="current-price">${product.price}</span>
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice}</span>
            )}
          </div>

          <div className="product-card__variants">
            <label className="variant-label">Variant:</label>
            <div className="color-indicators">
              {variants.map((variant) => (
                <button
                  key={variant.id}
                  className={`color-indicator ${
                    selectedVariant === variant.id ? "active" : ""
                  } ${!variant.inStock ? "disabled" : ""}`}
                  style={{ backgroundColor: variant.color }}
                  onClick={() =>
                    variant.inStock && setSelectedVariant(variant.id)
                  }
                  title={variant.name}
                  disabled={!variant.inStock}
                />
              ))}
            </div>
          </div>

          <div className="product-card__actions">
            <Link
              to={`/product/${product.id}`}
              className="btn btn-secondary btn-view"
            >
              View Details
            </Link>

            {isInStock ? (
              <button
                className="btn btn-primary btn-add-to-cart"
                onClick={handleAddToCart}
              >
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                Add to Cart
              </button>
            ) : (
              <button className="btn btn-disabled" disabled>
                <i className="fa fa-ban" aria-hidden="true"></i>
                Out of Stock
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
