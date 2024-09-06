import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { IoBagHandleOutline } from 'react-icons/io5';
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://e-commerce-web-app-backend.vercel.app/products');
                setProducts(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleCart = async (product) => {
        if (!user?.email) {
            alert('You need to log in first');
            return;
        }

        const cartItem = {
            email: user.email,
            productId: product.id,
            quantity: 1,
        };

        try {
            const response = await axios.post('https://e-commerce-web-app-backend.vercel.app/cart', cartItem);
            console.log('Product added to cart successfully!', response.data);
            alert('Product added to cart!');
        } catch (error) {
            console.error('Error adding product to cart:', error);
            alert('Failed to add product to cart.');
        }
    };

    if (loading) {
        return <div className='text-center py-10'>Loading...</div>;
    }

    if (error) {
        return <div className='text-center py-10'>Error: {error}</div>;
    }

    return (
        <HelmetProvider>
            <div className='flex flex-col lg:flex-row lg:gap-6 py-10 mx-3 lg:mx-0'>
                <Helmet>
                    <title>Explore Our Products | E-commerce WebApp</title>
                </Helmet>
                {/* Categories Column */}
                <div className='lg:w-1/4 flex flex-col gap-3 lg:border-r-2 lg:pr-5 mb-5 lg:mb-0'>
                    <button className='py-2 px-3 font-bold bg-black text-white rounded-xl border-2'>Rocking Chair</button>
                    <button className='py-2 px-3 text-gray-400 border-2 border-gray-100 rounded-xl'>Side Chair</button>
                    <button className='py-2 px-3 text-gray-400 border-2 border-gray-100 rounded-xl'>Lounge Chair</button>
                </div>

                {/* Product Cards */}
                <div className='lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
                    {products.map((product) => (
                        <div key={product.id} className='border-2 rounded-xl p-4 flex flex-col'>
                            <img className='w-full h-48 object-cover rounded-lg mb-3' src={product.image} alt={product.name} />
                            <h4 className='font-semibold text-lg lg:text-xl py-2 text-start'>{product.name}</h4>
                            <div className='flex gap-1 justify-between text-sm lg:text-lg mb-2 items-center'>
                                <h4 className='font-semibold'>${product.discountPrice}</h4>
                                <del className='font-semibold text-gray-500'>${product.price}</del>
                                <h4 className='font-semibold text-red-600'>{product.off} OFF</h4>
                            </div>
                            <p className='text-gray-600 text-sm text-start mb-3'>{product.des}</p>
                            <div onClick={() => handleCart(product)} className="bg-black w-full flex justify-center rounded-lg mt-4">
                                <button className='flex gap-2 items-center px-3 py-2 rounded-lg'>
                                    <IoBagHandleOutline className='text-2xl text-white' />
                                    <p className='font-bold text-sm lg:text-lg text-white'>Add to cart</p>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Products;