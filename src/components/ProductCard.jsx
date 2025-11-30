import React, { useState } from 'react'

const ProductCard = ({ product, onProductClick, onAddToCart }) => {
    const [isHovered, setIsHovered] = useState(false)

    const handleAddToCart = (e) => {
        e.stopPropagation()
        onAddToCart(product.name)
    }

    return (
        <div
            className="relative bg-white rounded-2xl shadow-lg border border-muted overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-105"
            onClick={() => onProductClick(product)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Shine Effect Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent transform -skew-y-12 transition-all duration-1000 z-10 pointer-events-none ${isHovered ? 'translate-y-full opacity-0' : '-translate-y-full opacity-100'
                }`}></div>

            {/* Pulse Glow Effect */}
            <div className={`absolute inset-0 rounded-2xl bg-primary/5 transition-all duration-500 pointer-events-none ${isHovered ? 'opacity-100 animate-pulse' : 'opacity-0'
                }`}></div>

            {/* Header Section */}
            <div className="relative bg-gradient-to-r from-muted to-background py-6 text-center overflow-hidden">
                {/* Header Shine */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 transition-all duration-700 pointer-events-none ${isHovered ? 'translate-x-full' : '-translate-x-full'
                    }`}></div>

                <h3 className="text-2xl font-bold text-primary mb-2 relative z-10">{product.name}</h3>
                <div className="flex items-baseline justify-center relative z-10">
                    <span className="text-4xl font-bold text-primary">${product.price}</span>
                    {product.discount && (
                        <span className="text-red-600 text-sm ml-2 line-through">
                            ${Math.round(product.price / (1 - parseFloat(product.discount) / 100))}
                        </span>
                    )}
                </div>
            </div>

            {/* Product Image Container */}
            <div className="relative px-8 py-6 bg-background overflow-hidden">
                {/* Image Shine Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent transform rotate-45 transition-all duration-1000 pointer-events-none ${isHovered ? 'translate-y-full opacity-0' : '-translate-y-full opacity-100'
                    }`}></div>

                <div className="relative w-full h-48 flex items-center justify-center">
                    <img
                        src={product.image}
                        alt={product.name}
                        className={`max-w-full max-h-full object-contain transition-all duration-500 ${isHovered ? 'scale-110 rotate-2' : 'scale-100 rotate-0'
                            }`}
                    />

                    {/* Image Glow */}
                    <div className={`absolute inset-0 bg-primary/10 rounded-xl blur-xl transition-all duration-500 pointer-events-none ${isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
                        }`}></div>
                </div>

                {/* Floating Badges */}
                <div className={`absolute top-4 right-4 transition-all duration-500 transform ${isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                    }`}>
                    {product.discount ? (
                        <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-bounce">
                            {product.discount} OFF
                        </div>
                    ) : (
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
                            NEW
                        </div>
                    )}
                </div>
            </div>

            {/* Product Info */}
            <div className="relative p-6 overflow-hidden">
                {/* Content Shine */}
                <div className={`absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent transform -skew-y-6 transition-all duration-800 pointer-events-none ${isHovered ? 'translate-y-full' : '-translate-y-full'
                    }`}></div>

                <p className="text-secondary text-center mb-6 leading-relaxed relative z-10">
                    {product.description}
                </p>

                <div className="space-y-3 mb-6 relative z-10">
                    <div className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
                        <span className="text-secondary">Premium {product.category.toLowerCase()}</span>
                    </div>
                    <div className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
                        <span className="text-secondary">Lifetime warranty</span>
                    </div>
                    <div className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
                        <span className="text-secondary">Free shipping</span>
                    </div>
                </div>

                <p className="text-secondary text-sm text-center mb-4 italic relative z-10 transform transition-all duration-300 hover:scale-105">
                    The choice is yours.
                </p>

                <div className="flex gap-3 relative z-10">
                    <button
                        onClick={handleAddToCart}
                        className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                    >
                        Add to Cart
                    </button>
                    <button className="flex-1 bg-muted text-primary py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 active:scale-95 border border-muted hover:border-primary">
                        Quick View
                    </button>
                </div>

                {product.discount && (
                    <p className="text-primary text-sm text-center mt-4 font-semibold relative z-10 animate-pulse">
                        🎉 Save {product.discount} 🎉
                    </p>
                )}
            </div>

            {/* Border Glow Effect */}
            <div className={`absolute inset-0 rounded-2xl border-2 border-primary/30 transition-all duration-500 pointer-events-none ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}></div>
        </div>
    )
}

export default ProductCard