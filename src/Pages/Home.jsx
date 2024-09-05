const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center bg-blue-500 text-white h-screen text-center p-8">
                <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
                <p className="text-lg mb-8">Explore our amazing features and start your journey with us.</p>
                <button className="bg-white text-blue-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100">
                    Get Started
                </button>
            </section>
        </div>
    );
};

export default Home;