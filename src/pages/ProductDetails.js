import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axios } from '../configs/Axios';
import Loading from '../components/Loading';
import '../styles/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/products/${id}`);
        setProduct(response.data);
        setSelectedImage(response.data.images[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div className="details-page">
        <div className="details-left">
          <img src={selectedImage} alt={product?.title} className="details-full-image" />
          <div className="details-images">
            {product?.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={product.title}
                className={`details-images-list ${selectedImage === image && 'selected'}`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        <div className="details-right">
          <h1>{product?.title.toUpperCase()}</h1>
          <p>{product?.description}</p>
          <h1>&#36;{product?.price}</h1>
          <div className="details-quantity">
            <h3>Quantity</h3>
            <button className="quantity-decrement" onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
              -
            </button>
            <p className="quantity-count">{quantity}</p>
            <button className="quantity-increment" onClick={() => setQuantity(quantity + 1)}>
              +
            </button>
          </div>
          <button className="details-add-to-cart-btn" onClick={() => alert('Added to cart')}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
