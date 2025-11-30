import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-bold mb-4">lavs</h3>
                        <p className="opacity-80" style={{ color: '#cbc0b2' }}>
                            Premium watches crafted with precision and passion. Timeless elegance for the modern individual.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#products" className="opacity-80 hover:opacity-100 transition-opacity">Products</a></li>
                            <li><a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">About</a></li>
                            <li><a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Categories</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Dress Watches</a></li>
                            <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Sports Watches</a></li>
                            <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Smart Watches</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <div className="space-y-2 opacity-80">
                            <p>123 Watchmaker Street</p>
                            <p>Geneva, Switzerland</p>
                            <p>hello@lavs.com</p>
                            <p>+41 22 123 4567</p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center opacity-80">
                    <p>&copy; 2024 lavs. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer