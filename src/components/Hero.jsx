import React, { useEffect, useState } from 'react'
import backgroundVideo from '../assets/timepiece-background.mp4'

const Hero = () => {
    const [displayedTitle, setDisplayedTitle] = useState('')
    const [displayedTagline, setDisplayedTagline] = useState('')
    const [displayedDescription, setDisplayedDescription] = useState('')
    const [showButtons, setShowButtons] = useState(false)

    const content = {
        title: "TIME",
        tagline: "REDEFINED",
        description: "WHERE CENTURIES OF CRAFTSMANSHIP MEET TOMORROW'S INNOVATION.",
        passion: "EACH TICK TELLS A STORY OF PRECISION AND PASSION."
    }

    useEffect(() => {
        // Reset states
        setDisplayedTitle('')
        setDisplayedTagline('')
        setDisplayedDescription('')
        setShowButtons(false)

        let titleIndex = 0
        let taglineIndex = 0
        let descriptionIndex = 0

        const typeTitle = () => {
            if (titleIndex < content.title.length) {
                // Use the current index to get the correct character in order
                const currentText = content.title.substring(0, titleIndex + 1)
                setDisplayedTitle(currentText)
                titleIndex++
                setTimeout(typeTitle, 150)
            } else {
                setTimeout(typeTagline, 500)
            }
        }

        const typeTagline = () => {
            if (taglineIndex < content.tagline.length) {
                const currentText = content.tagline.substring(0, taglineIndex + 1)
                setDisplayedTagline(currentText)
                taglineIndex++
                setTimeout(typeTagline, 120)
            } else {
                setTimeout(typeDescription, 500)
            }
        }

        const typeDescription = () => {
            if (descriptionIndex < content.description.length) {
                const currentText = content.description.substring(0, descriptionIndex + 1)
                setDisplayedDescription(currentText)
                descriptionIndex++
                setTimeout(typeDescription, 50)
            } else {
                setTimeout(() => setShowButtons(true), 500)
            }
        }

        // Start animation
        setTimeout(typeTitle, 800)
    }, [])

    const scrollToProducts = () => {
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="relative py-16 md:py-24 overflow-hidden min-h-screen flex items-center">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
            </div>

            <div className="container mx-auto px-4 relative z-20 text-center">
                <div className="max-w-3xl mx-auto">
                    {/* Title */}
                    <div className="mb-8">
                        <h1 className="text-5xl md:text-7xl font-bold italic text-white tracking-wider drop-shadow-2xl min-h-[90px] flex items-center justify-center">
                            {displayedTitle}
                            {displayedTitle.length < content.title.length && (
                                <span className="inline-block w-1 h-16 bg-white ml-2 animate-pulse"></span>
                            )}
                        </h1>

                        <h2 className="text-4xl md:text-6xl font-bold italic text-white tracking-wider drop-shadow-2xl min-h-[90px] flex items-center justify-center">
                            {displayedTagline}
                            {displayedTagline.length < content.tagline.length && displayedTitle.length === content.title.length && (
                                <span className="inline-block w-1 h-14 bg-white ml-2 animate-pulse"></span>
                            )}
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                        <p className="text-xl md:text-2xl italic text-white drop-shadow-lg max-w-2xl mx-auto min-h-[40px] font-semibold tracking-wide">
                            {displayedDescription}
                            {displayedDescription.length < content.description.length && displayedTagline.length === content.tagline.length && (
                                <span className="inline-block w-0.5 h-6 bg-white ml-1 animate-pulse"></span>
                            )}
                        </p>

                        <p className="text-lg md:text-xl italic text-white mt-4 drop-shadow-lg font-semibold tracking-wide">
                            {content.passion}
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 
                        ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        <button onClick={scrollToProducts}
                            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 shadow-lg text-lg italic tracking-wide transform hover:scale-105 transition-all">
                            Begin Your Journey
                        </button>

                        <button onClick={scrollToProducts}
                            className="bg-white bg-opacity-20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-30 backdrop-blur-sm shadow-lg text-lg italic tracking-wide transform hover:scale-105 transition-all">
                            Explore Collection
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero