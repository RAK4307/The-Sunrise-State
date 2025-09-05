import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SubscriptionPage.css';

// --- Reusable Sub-Components ---

const FeatureCard = ({ icon, title, description, color }) => (
    <div className="feature-card">
        <div className="feature-icon" style={{ backgroundColor: color }}>
            <span>{icon}</span>
        </div> 
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
    </div>
);

const PricingCard = ({ plan, isCurrent }) => (
    <div className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}>
        {plan.highlighted && <div className="popular-tag">Most Popular</div>}
        <h3 className="plan-name">{plan.name}</h3>
        <p className="plan-price">{plan.price}<span className="price-period">/{plan.period}</span></p>
        <ul className="plan-features">
            {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
            ))}
        </ul>
        <Link to={isCurrent ? '#' : '/payment'} className={`cta-button ${isCurrent ? 'disabled' : ''}`}>
            {isCurrent ? 'Current Plan' : `Start ${plan.name}`}
        </Link>
    </div>
);

const TestimonialCard = ({ quote, name, role, stars }) => (
    <div className="testimonial-card">
        <div className="testimonial-stars">
            {'★'.repeat(stars)}
        </div>
        <p className="testimonial-quote">"{quote}"</p>
        <p className="testimonial-author">{name}, <span className="testimonial-role">{role}</span></p>
    </div>
);

const FaqItem = ({ item, index, activeFaq, setActiveFaq }) => {
    const isOpen = index === activeFaq;

    const toggleFaq = () => {
        setActiveFaq(isOpen ? null : index);
    };

    return (
        <div className="faq-item">
            <button className="faq-question" onClick={toggleFaq}>
                <span>{item.q}</span>
                <span className={`faq-icon ${isOpen ? 'open' : ''}`}>+</span>
            </button>
            <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                <p>{item.a}</p>
            </div>
        </div>
    );
};


// --- Main Page Component ---

const SubscriptionPage = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [billingCycle, setBillingCycle] = useState('monthly');
    const [activeFaq, setActiveFaq] = useState(null);

    const pricingData = {
        monthly: [
            { name: 'Free', price: '$0', period: 'month', features: ["Access to 3 free articles per month", "Daily top-headlines newsletter"], isCurrent: true },
            { name: 'Monthly', price: '$10', period: 'month', features: ["Unlimited article access", "Full access to our archives", "Listen to audio articles", "Ad-free reading experience"] },
            { name: 'Annual', price: '$8', period: 'month', features: ["All Monthly features", "Save 20% compared to monthly", "Exclusive weekly newsletter", "Early access to special reports"], highlighted: true }
        ],
        annually: [
            { name: 'Free', price: '$0', period: 'year', features: ["Access to 3 free articles per month", "Daily top-headlines newsletter"], isCurrent: true },
            { name: 'Monthly', price: '$120', period: 'year', features: ["Unlimited article access", "Full access to our archives", "Listen to audio articles", "Ad-free reading experience"] },
            { name: 'Annual', price: '$96', period: 'year', features: ["All Monthly features", "Save 20% compared to monthly", "Exclusive weekly newsletter", "Early access to special reports"], highlighted: true }
        ]
    };

    const faqData = [
        { q: "Can I cancel my subscription at any time?", a: "Yes, you can cancel your subscription anytime through your account settings. Your access will continue until the end of your current billing period." },
        { q: "What is included in the Annual plan?", a: "The Annual plan includes everything in the Monthly plan, plus a 20% discount, an exclusive weekly newsletter, and early access to our special reports." },
        { q: "Do you offer student or group discounts?", a: "We do! Please contact our support team with your details, and we'll be happy to assist you with special pricing options." },
        { q: "How can I access my subscription on different devices?", a: "Simply log in with your account on any device, including our mobile and tablet apps, to get full access to your subscription content." }
    ];

    const testimonials = [
        {
            quote: "The Sunrise State has become my go-to source for unbiased news. The quality of journalism is unmatched.",
            name: "Alex Johnson",
            role: "Marketing Director",
            stars: 5,
        },
        {
            quote: "I love the in-depth analysis and the clean, ad-free reading experience. The annual plan is a great value!",
            name: "Samantha Lee",
            role: "Software Engineer",
            stars: 5,
        },
        {
            quote: "Finally, a news platform that respects my intelligence. The features are fantastic and the content is top-notch.",
            name: "Michael Chen",
            role: "University Professor",
            stars: 4,
        },
    ];

    // Simple carousel logic
    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="subscription-page">
            {/* 1. Hero Section */}
            <section className="hero-section">
                <h1>Choose Your Subscription</h1>
                <p>Join The Sunrise State for unparalleled access to journalism that matters. Cancel anytime.</p>
            </section>

            {/* 2. Features Row */}
            <section className="features-section">
                <h2>Why Subscribe to The Sunrise State?</h2>
                <div className="features-grid">
                    <FeatureCard
                        icon="📰"
                        title="Unrivaled Journalism"
                        description="Access award-winning articles, reports, and analysis from our global team."
                        color="#e0f2fe"
                    />
                    <FeatureCard
                        icon="📱"
                        title="Multi-Platform Access"
                        description="Read on your phone, tablet, or desktop with our beautifully designed apps."
                        color="#dcfce7"
                    />
                    <FeatureCard
                        icon="🎧"
                        title="Audio Articles"
                        description="Listen to our top stories on the go, perfect for your commute."
                        color="#f3e8ff"
                    />
                    <FeatureCard
                        icon="✨"
                        title="Ad-Free Experience"
                        description="Enjoy uninterrupted reading without any distracting advertisements."
                        color="#ffedd5"
                    />
                </div>
            </section>

            {/* 3. Pricing Plans Section */}
            <section className="pricing-section">
                <div className="pricing-toggle-container">
                    <span className={`toggle-label ${billingCycle === 'monthly' ? 'active' : ''}`}>Monthly</span>
                    <button className="toggle-switch" onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annually' : 'monthly')} aria-label={`Switch to ${billingCycle === 'monthly' ? 'annual' : 'monthly'} billing`}>
                        <span className={`toggle-handle ${billingCycle}`}></span>
                    </button>
                    <span className={`toggle-label ${billingCycle === 'annually' ? 'active' : ''}`}>Annually</span>
                </div>
                <div className="pricing-grid">
                    {pricingData[billingCycle].map((plan, index) => (
                        <PricingCard
                            key={index}
                            plan={plan}
                            isCurrent={plan.isCurrent}
                        />
                    ))}
                </div>
            </section>

            {/* 4. Testimonials Section */}
            <section className="testimonials-section">
                <h2>What Our Readers Say</h2>
                <div className="testimonial-carousel">
                    <div className="testimonial-wrapper" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                        {testimonials.map((t, i) => (
                            <TestimonialCard key={i} {...t} />
                        ))}
                    </div>
                    <button onClick={prevTestimonial} className="carousel-nav prev">‹</button>
                    <button onClick={nextTestimonial} className="carousel-nav next">›</button>
                </div>
            </section>

            {/* 5. FAQ Section */}
            <section className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <FaqItem key={index} item={item} index={index} activeFaq={activeFaq} setActiveFaq={setActiveFaq} />
                    ))}
                </div>
            </section>

            {/* 6. Support Section */}
            <section className="support-section">
                <h2>Still have questions?</h2>
                <p>Our support team is here to help you with any questions about our plans, content, or your account.</p>
                <div className="support-buttons">
                    <button className="support-btn-contact">Contact Support</button>
                    <button className="support-btn-email">Email Us</button>
                </div>
            </section>
        </div>
    );
};

export default SubscriptionPage;
