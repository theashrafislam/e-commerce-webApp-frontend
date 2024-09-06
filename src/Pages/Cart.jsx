import { useContext, useEffect, useState } from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Cart = () => {
    const { user } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://e-commerce-web-app-backend.vercel.app/products');
                setProducts(response.data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        if (user?.email) {
            const fetchCartItems = async () => {
                try {
                    const response = await axios.get(`https://e-commerce-web-app-backend.vercel.app/carts?email=${user.email}`);
                    setCartItems(response.data);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchCartItems();
        }
    }, [user?.email]);

    // Match cart items with products
    const matchedItems = cartItems?.map(cartItem => {
        const product = products?.find(p => p.id === cartItem.productId);
        return {
            ...cartItem,
            product
        };
    }).filter(item => item.product);


    // Calculate prices
    const subtotal = matchedItems.reduce((sum, item) => {
        return sum + (item.product.discountPrice || 0) * (item.quantity || 1);
    }, 0);

    const shipping = 5; // Fixed shipping cost
    const estimatedTax = 0.05 * subtotal; // Assuming 5% tax rate
    const total = subtotal + shipping + estimatedTax;

    const formatPrice = (price) => (typeof price === 'number' ? price.toFixed(2) : '0.00');

    const handleDelete = (id) => {
        axios.delete(`https://e-commerce-web-app-backend.vercel.app/carts/${id}`)
            .then(response => {
                console.log(response);
                // Remove item from state
                setCartItems(cartItems.filter(item => item._id !== id));
                // Show success alert
                alert('Item deleted successfully.');
            })
            .catch(err => {
                setError('Failed to delete item');
                // Optionally show error alert
                alert('Failed to delete item. Please try again.');
            });
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className='h-screen text-3xl text-center font-semibold pt-10'>No items in the cart.</div>;
    }

    return (
        <HelmetProvider>
            <div className='py-10'>
                <Helmet>
                    <title>Review Your Cart | E-commerce WebApp</title>
                </Helmet>
                <div className="flex flex-col lg:flex-row gap-5">
                    {/* First Column (70%) - Cart Items */}
                    <div className="lg:w-6/10 flex-1">
                        <h1 className="text-2xl font-bold mb-6">An Overview of Your Order</h1>
                        {/* Cart Items */}
                        <div className="space-y-4">
                            {/* Display matched cart items */}
                            {matchedItems.length > 0 ? (
                                matchedItems.map((item) => (
                                    <div key={item.productId} className="border p-4 rounded-lg flex justify-between">
                                        <div className="flex">
                                            <img
                                                className="w-24 h-24 object-cover rounded-lg"
                                                src={item.product.image}
                                                alt={item.product.name}
                                            />
                                            <div className="ml-4">
                                                <h4 className="font-semibold text-lg">{item.product.name}</h4>
                                                <p className="text-gray-600">{item.product.description}</p>
                                            </div>
                                        </div>
                                        <div className="text-red-500 text-2xl flex items-center flex-col gap-10">
                                            <IoTrashOutline
                                                className='text-center cursor-pointer'
                                                onClick={() => handleDelete(item._id)}
                                            />
                                            <p className="text-lg font-semibold text-green-600">
                                                ${formatPrice(item.product.discountPrice)}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div>No items in the cart.</div>
                            )}
                        </div>
                    </div>

                    {/* Second Column (30%) - Order Details */}
                    <div className="lg:w-4/10 lg:pl-5 flex-none">
                        <h1 className="text-xl font-bold mb-6">Order Details</h1>
                        <div className="border p-4 rounded-lg space-y-4">
                            <div className="flex justify-between">
                                <span className="font-semibold">Subtotal:</span>
                                <span>${formatPrice(subtotal)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Shipping:</span>
                                <span>${formatPrice(shipping)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-semibold">Estimated Tax:</span>
                                <span>${formatPrice(estimatedTax)}</span>
                            </div>
                            <div className="flex justify-between font-bold">
                                <span>Total:</span>
                                <span>${formatPrice(total)}</span>
                            </div>
                            <button className="bg-blue-500 text-white w-full py-2 rounded-lg font-semibold mt-4">Go to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Cart;