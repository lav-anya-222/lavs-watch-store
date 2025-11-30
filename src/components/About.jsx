import React, { useEffect, useState } from 'react'

const About = () => {
    const [displayedSections, setDisplayedSections] = useState({
        title: '',
        quote: '',
        para1: '',
        para2: '',
        para3: '',
        beeNote: '',
        promiseTitle: '',
        promiseText: ''
    })
    const [showFeatures, setShowFeatures] = useState(false)

    const content = {
        title: "ABOUT LAVS🐝",
        quote: "“BORN WITH 60 YEARS OF WISDOM IN A 20-YEAR-OLD SOUL, I SEE TIME DIFFERENTLY.”",
        para1: "AT LAVS™, WE BELIEVE WATCHES ARE MORE THAN TIMEKEEPERS—THEY'RE STORYTELLERS. WHILE MY AGE READS 20, MY PERSPECTIVE CARRIES THE DEPTH OF SIX DECADES. THIS UNIQUE BLEND OF YOUTHFUL INNOVATION AND TIMELESS WISDOM SHAPES EVERY TIMEPIECE WE CREATE.",
        para2: "OUR WATCHES BRIDGE GENERATIONS—COMBINING CUTTING-EDGE TECHNOLOGY WITH CLASSIC CRAFTSMANSHIP THAT WOULD MAKE MASTER WATCHMAKERS PROUD. EACH PIECE IS DESIGNED NOT JUST TO TELL TIME, BUT TO CELEBRATE IT.",
        para3: "WHY BEES? BECAUSE LIKE THE HUMBLE BEE, WE BELIEVE IN PRECISION, COMMUNITY, AND CREATING SOMETHING SWEET THAT STANDS THE TEST OF TIME.",
        features: [
            { title: "YOUNG PRECISION", desc: "MODERN TECH MEETS TIMELESS ACCURACY" },
            { title: "OLD SOUL WISDOM", desc: "60 YEARS OF INSIGHT IN EVERY DESIGN" },
            { title: "TIMELESS INNOVATION", desc: "FUTURE-FORWARD DESIGNS THAT NEVER AGE" }
        ],
        promiseTitle: "OUR PROMISE",
        promiseText: "“WE DON'T JUST SELL WATCHES—WE CRAFT COMPANIONS FOR YOUR JOURNEY. EACH LAWS™ TIMEPIECE IS A REMINDER THAT WHILE TIME MOVES FORWARD, STYLE AND QUALITY ARE ETERNAL. WHETHER YOU'RE 20 WITH OLD-SOUL WISDOM OR 60 WITH YOUTHFUL SPIRIT, OUR WATCHES ARE MADE FOR YOU.”"
    }

    useEffect(() => {
        const sections = ['title', 'quote', 'para1', 'para2', 'para3', 'promiseTitle', 'promiseText']
        let currentSection = 0
        let currentIndex = 0

        const typeNextSection = () => {
            if (currentSection < sections.length) {
                const section = sections[currentSection]
                const sectionText = content[section]

                if (currentIndex < sectionText.length) {
                    setDisplayedSections(prev => ({
                        ...prev,
                        [section]: sectionText.substring(0, currentIndex + 1)
                    }))
                    currentIndex++
                    setTimeout(typeNextSection, 5) // Changed from 30 to 15 (2x faster)
                } else {
                    currentIndex = 0
                    currentSection++
                    setTimeout(typeNextSection, 200) // Changed from 500 to 250 (2x faster)

                    // Show features after the main paragraphs
                    if (section === 'para3') {
                        setTimeout(() => setShowFeatures(true), 150) // Changed from 300 to 150 (2x faster)
                    }
                }
            }
        }

        // Start animation
        setTimeout(typeNextSection, 250) // Changed from 500 to 250 (2x faster)
    }, [])

    return (
        <section id="about" className="py-16 bg-muted">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Animated Title */}
                    <h2 className="text-4xl font-bold italic text-primary mb-8 tracking-wider min-h-[50px] flex items-center justify-center">
                        {displayedSections.title}
                        {displayedSections.title.length < content.title.length && (
                            <span className="inline-block w-1 h-10 bg-primary ml-2 animate-pulse"></span>
                        )}
                    </h2>

                    <div className="prose prose-lg text-secondary mx-auto">
                        {/* Animated Quote */}
                        <p className="text-xl mb-6 font-semibold italic text-primary tracking-wide min-h-[30px]">
                            {displayedSections.quote}
                            {displayedSections.quote.length < content.quote.length && displayedSections.title.length === content.title.length && (
                                <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse"></span>
                            )}
                        </p>

                        {/* Animated Paragraph 1 */}
                        <p className="mb-6 italic font-semibold tracking-wide min-h-[100px]">
                            {displayedSections.para1}
                            {displayedSections.para1.length < content.para1.length && displayedSections.quote.length === content.quote.length && (
                                <span className="inline-block w-0.5 h-4 bg-secondary ml-1 animate-pulse"></span>
                            )}
                        </p>

                        {/* Animated Paragraph 2 */}
                        <p className="mb-6 italic font-semibold tracking-wide min-h-[80px]">
                            {displayedSections.para2}
                            {displayedSections.para2.length < content.para2.length && displayedSections.para1.length === content.para1.length && (
                                <span className="inline-block w-0.5 h-4 bg-secondary ml-1 animate-pulse"></span>
                            )}
                        </p>

                        {/* Animated Bee Note */}
                        <p className="mb-8 italic text-primary font-semibold tracking-wide min-h-[50px]">
                            {displayedSections.para3}
                            {displayedSections.para3.length < content.para3.length && displayedSections.para2.length === content.para2.length && (
                                <span className="inline-block w-0.5 h-4 bg-primary ml-1 animate-pulse"></span>
                            )}
                        </p>

                        {/* Features Grid - Animated Appearance */}
                        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 transition-all duration-500 ${showFeatures ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' // Changed duration from 1000 to 500
                            }`}>
                            {content.features.map((feature, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white text-2xl">
                                            {index === 0 ? '🎯' : index === 1 ? '🧠' : '⚡'}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold italic text-primary mb-2 tracking-wide">
                                        {feature.title}
                                    </h3>
                                    <p className="text-secondary italic font-semibold tracking-wide">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Animated Promise Section */}
                        <div className="mt-12 p-6 bg-background rounded-lg border border-muted">
                            <h4 className="text-xl font-semibold italic text-primary mb-4 tracking-wide min-h-[30px]">
                                {displayedSections.promiseTitle}
                                {displayedSections.promiseTitle.length < content.promiseTitle.length && displayedSections.para3.length === content.para3.length && (
                                    <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse"></span>
                                )}
                            </h4>
                            <p className="text-secondary italic font-semibold tracking-wide min-h-[100px]">
                                {displayedSections.promiseText}
                                {displayedSections.promiseText.length < content.promiseText.length && displayedSections.promiseTitle.length === content.promiseTitle.length && (
                                    <span className="inline-block w-0.5 h-4 bg-secondary ml-1 animate-pulse"></span>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About