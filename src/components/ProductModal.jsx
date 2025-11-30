import React, { useState, useEffect } from 'react'

const ProductModal = ({ product, onClose }) => {
    const [isRotating, setIsRotating] = useState(true)
    const [currentImage, setCurrentImage] = useState(product.image)

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        document.addEventListener('keydown', handleEscape)
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [onClose])

    const toggleRotation = () => {
        setIsRotating(!isRotating)
    }

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    const handleAddToCart = () => {
        // Add to cart functionality would go here
        alert(`${product.name} added to cart!`)
        onClose()
    }

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={handleOverlayClick}
        >
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="lg:w-1/2 bg-muted p-8 flex flex-col items-center">
                        <div className="relative">
                            <img
                                src={currentImage}
                                alt={product.name}
                                className={`w-80 h-80 object-contain cursor-pointer transition-all duration-300 ${isRotating ? 'rotate-3d' : 'rotate-3d paused'
                                    }`}
                                onClick={toggleRotation}
                            />
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
                                {isRotating ? 'Click to Pause' : 'Click to Rotate'}
                            </div>
                        </div>

                        <div className="flex gap-4 mt-6">
                            <button
                                onClick={toggleRotation}
                                className="btn-secondary text-sm"
                            >
                                {isRotating ? 'Pause Rotation' : 'Start Rotation'}
                            </button>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="lg:w-1/2 p-8">
                        <div className="flex justify-between items-start mb-6">
                            <h2 className="text-3xl font-bold text-primary">{product.name}</h2>
                            <button
                                onClick={onClose}
                                className="text-secondary hover:text-primary text-2xl"
                            >
                                ×
                            </button>
                        </div>

                        <p className="text-secondary mb-6">{product.description}</p>

                        <div className="mb-6">
                            <span className="text-4xl font-bold text-primary">${product.price}</span>
                            {product.discount && (
                                <span className="ml-4 text-lg text-red-600 line-through">
                                    ${Math.round(product.price / (1 - parseFloat(product.discount) / 100))}
                                </span>
                            )}
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-secondary">In Stock - Ready to Ship</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                <span className="text-secondary">2-Year Warranty Included</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                <span className="text-secondary">Free Shipping Worldwide</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={handleAddToCart}
                                className="btn-primary flex-1"
                            >
                                Add to Cart
                            </button>
                            <button className="btn-secondary flex-1">
                                Buy Now
                            </button>
                        </div>

                        <div className="mt-8 pt-6 border-t border-muted">
                            <h4 className="font-semibold text-primary mb-2">Features:</h4>
                            <ul className="text-secondary list-disc list-inside space-y-1">
                                <li>Swiss Automatic Movement</li>
                                <li>Sapphire Crystal Glass</li>
                                <li>Water Resistance 100m</li>
                                <li>Genuine Leather Strap</li>
                                <li>Luminous Hands and Markers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductModal