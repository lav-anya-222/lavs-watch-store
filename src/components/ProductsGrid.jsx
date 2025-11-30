import React, { useState } from 'react'
import ProductCard from './ProductCard'

// Import multiple images
import watchImage1 from '../assets/watch1.jpg'
import watchImage2 from '../assets/watch2.jpg'
import watchImage3 from '../assets/watch3.jpg'
import watchImage4 from '../assets/watch4.jpg'
import watchImage5 from '../assets/watch5.jpg'
import watchImage6 from '../assets/watch6.jpg'

const ProductsGrid = ({ onProductClick }) => {
    const [showSuccess, setShowSuccess] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')

    const products = [
        {
            id: 1,
            name: 'Classic Chronograph',
            price: 899,
            image: watchImage1,
            description: 'Elegant chronograph with leather strap and sapphire crystal.',
            category: 'DRESS WATCHES'
        },
        {
            id: 2,
            name: 'Sport Edition',
            price: 749,
            image: watchImage2,
            description: 'Durable sports watch with water resistance and stopwatch function.',
            category: 'SPORTS WATCHES',
            discount: '50% OFF'
        },
        {
            id: 3,
            name: 'Smart Classic',
            price: 599,
            image: watchImage3,
            description: 'Blending traditional design with smart features and health tracking.',
            category: 'SMART WATCHES'
        },
        {
            id: 4,
            name: 'Heritage Collection',
            price: 1299,
            image: watchImage4,
            description: 'Limited edition heritage timepiece with automatic movement.',
            category: 'DRESS WATCHES'
        },
        {
            id: 5,
            name: 'Diver Pro',
            price: 849,
            image: watchImage5,
            description: 'Professional diving watch with 200m water resistance and luminous dial.',
            category: 'SPORTS WATCHES'
        },
        {
            id: 6,
            name: 'Urban Smart',
            price: 699,
            image: watchImage6,
            description: 'Modern smartwatch with health tracking, notifications, and premium design.',
            category: 'SMART WATCHES',
            discount: '30% OFF'
        }
    ]

    const categories = ['ALL', 'DRESS WATCHES', 'SPORTS WATCHES', 'SMART WATCHES']

    // Handle Add to Cart with glow effect popup
    const handleAddToCart = (productName) => {
        setSuccessMessage(`${productName} added to cart successfully! 🛒`)
        setShowSuccess(true)

        // Auto hide after 3 seconds
        setTimeout(() => {
            setShowSuccess(false)
        }, 3000)
    }

    return (
        <section id="products" className="py-16 bg-background">
            <div className="container mx-auto px-4">
                {/* Glow Effect Success Popup */}
                {showSuccess && (
                    <div className="fixed top-4 right-4 z-50 max-w-sm">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-75 animate-pulse"></div>
                            <div className="relative bg-white p-6 rounded-xl shadow-2xl border border-green-200">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-lg font-bold">✓</span>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-green-800">Success!</h3>
                                        <p className="text-green-600 mt-1">{successMessage}</p>
                                    </div>
                                    <button
                                        onClick={() => setShowSuccess(false)}
                                        className="ml-auto text-green-500 hover:text-green-700 transition-colors"
                                    >
                                        <span className="text-2xl font-bold">×</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-primary mb-4">Our Collection</h2>
                    <p className="text-secondary text-lg max-w-2xl mx-auto">
                        Discover our carefully curated selection of premium timepieces, each crafted with precision and attention to detail.
                    </p>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className="px-6 py-2 rounded-full border border-muted text-secondary hover:bg-primary hover:text-white transition-colors"
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onProductClick={onProductClick}
                            onAddToCart={handleAddToCart}
                        />
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <button className="btn-primary text-lg">
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ProductsGrid