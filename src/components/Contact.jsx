import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    const validateForm = () => {
        const newErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid'
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required'
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required'
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters'
        }

        return newErrors
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newErrors = validateForm()

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setIsSubmitting(true)

        // Simulate form submission
        setTimeout(() => {
            setShowSuccess(true)
            setFormData({ name: '', email: '', subject: '', message: '' })
            setIsSubmitting(false)

            // Hide success message after 5 seconds
            setTimeout(() => setShowSuccess(false), 5000)
        }, 1000)
    }

    return (
        <section id="contact" className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-primary mb-4">Get In Touch</h2>
                        <p className="text-secondary text-lg">
                            Have questions about our watches? We'd love to hear from you.
                        </p>
                    </div>

                    {/* Success Message Box */}
                    {showSuccess && (
                        <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl shadow-lg">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-lg">✓</span>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-green-800">Message Sent Successfully!</h3>
                                    <p className="text-green-600 mt-1">
                                        Thank you for your message! We'll get back to you within 24 hours.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowSuccess(false)}
                                    className="ml-auto text-green-500 hover:text-green-700"
                                >
                                    <span className="text-2xl">×</span>
                                </button>
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <h3 className="text-2xl font-semibold text-primary mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center mr-4">
                                        <span className="text-primary">📍</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary">Our Location</h4>
                                        <p className="text-secondary">Lavs Watch Studio<br />Bandra West, Mumbai<br />Maharashtra 400050</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center mr-4">
                                        <span className="text-primary">📞</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary">Phone</h4>
                                        <p className="text-secondary">+91 12345 67890</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center mr-4">
                                        <span className="text-primary">✉️</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary">Email</h4>
                                        <p className="text-secondary">lavs@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center mr-4">
                                        <span className="text-primary">🕒</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary">Business Hours</h4>
                                        <p className="text-secondary">Monday - Friday: 9AM - 6PM<br />Saturday: 10AM - 4PM<br />Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form with Grid Cards and Shine Effect */}
                        <div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Full Name Card */}
                                <div className="relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-400 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                    <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                                        <label htmlFor="name" className="block text-primary font-semibold mb-3 text-lg">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-primary'
                                                }`}
                                            placeholder="Your full name"
                                        />
                                        {errors.name && <p className="text-red-500 text-sm mt-2 font-medium">{errors.name}</p>}
                                    </div>
                                </div>

                                {/* Email Address Card */}
                                <div className="relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-400 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                    <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                                        <label htmlFor="email" className="block text-primary font-semibold mb-3 text-lg">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-primary'
                                                }`}
                                            placeholder="your.email@example.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-2 font-medium">{errors.email}</p>}
                                    </div>
                                </div>

                                {/* Subject Card */}
                                <div className="relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-pink-400 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                    <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                                        <label htmlFor="subject" className="block text-primary font-semibold mb-3 text-lg">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-primary'
                                                }`}
                                            placeholder="What is this regarding?"
                                        />
                                        {errors.subject && <p className="text-red-500 text-sm mt-2 font-medium">{errors.subject}</p>}
                                    </div>
                                </div>

                                {/* Message Card */}
                                <div className="relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-indigo-400 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                    <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                                        <label htmlFor="message" className="block text-primary font-semibold mb-3 text-lg">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-primary'
                                                }`}
                                            placeholder="Tell us more about your inquiry..."
                                        ></textarea>
                                        {errors.message && <p className="text-red-500 text-sm mt-2 font-medium">{errors.message}</p>}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-green-400 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="relative w-full bg-primary text-white py-4 rounded-2xl font-semibold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-lg border-2 border-transparent hover:border-white"
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center justify-center">
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                                Sending...
                                            </div>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add custom animation for tilt effect */}
            <style jsx>{`
                @keyframes tilt {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(0.5deg); }
                    75% { transform: rotate(-0.5deg); }
                }
                .animate-tilt {
                    animation: tilt 10s infinite linear;
                }
            `}</style>
        </section>
    )
}

export default Contact