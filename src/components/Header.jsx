import React, { useState } from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMenuOpen(false)
    }

    return (
        <header className="bg-background border-b border-muted sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo - Normal */}
                    <div>
                        <h1 className="text-2xl font-bold text-primary cursor-pointer">
                            LAVS🐝
                        </h1>
                    </div>

                    {/* Desktop Navigation - Normal */}
                    <nav className="hidden md:flex space-x-8">
                        <button
                            onClick={() => scrollToSection('products')}
                            className="text-secondary hover:text-primary transition-colors font-medium"
                        >
                            Products
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-secondary hover:text-primary transition-colors font-medium"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-secondary hover:text-primary transition-colors font-medium"
                        >
                            Contact
                        </button>
                    </nav>

                    {/* Mobile Menu Button - Normal */}
                    <button
                        className="md:hidden text-secondary"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className="w-6 h-0.5 bg-secondary mb-1.5"></div>
                        <div className="w-6 h-0.5 bg-secondary mb-1.5"></div>
                        <div className="w-6 h-0.5 bg-secondary"></div>
                    </button>
                </div>

                {/* Mobile Navigation - Normal */}
                {isMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4 border-t border-muted pt-4">
                        <div className="flex flex-col space-y-4">
                            <button
                                onClick={() => scrollToSection('products')}
                                className="text-secondary hover:text-primary transition-colors text-left py-2"
                            >
                                Products
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="text-secondary hover:text-primary transition-colors text-left py-2"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="text-secondary hover:text-primary transition-colors text-left py-2"
                            >
                                Contact
                            </button>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}

export default Header