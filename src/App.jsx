import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductsGrid from './components/ProductsGrid'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProductModal from './components/ProductModal'

function App() {
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleProductClick = (product) => {
        setSelectedProduct(product)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedProduct(null)
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Hero />
            <ProductsGrid onProductClick={handleProductClick} />
            <About />
            <Contact />
            <Footer />

            {isModalOpen && selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={closeModal}
                />
            )}
        </div>
    )
}

export default App