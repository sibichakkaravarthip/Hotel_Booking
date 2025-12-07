import '../Main.css';

export function About(){
    return(
        <div className="page-container">
            <div className="page-content">
                <section className="section-hero">
                    <h1>About StayComfort</h1>
                    <p className="subtitle">Your Gateway to Comfortable and Affordable Stays</p>
                </section>

                <section className="section-content">
                    <h2>Who We Are</h2>
                    <p>
                        StayComfort is a leading hotel booking platform dedicated to providing budget-friendly 
                        and comfortable accommodations for travelers worldwide. With years of experience in the 
                        hospitality industry, we understand what makes a great stay.
                    </p>
                </section>

                <section className="section-content">
                    <h2>Our Mission</h2>
                    <p>
                        To deliver exceptional hotel experiences at affordable prices, making quality 
                        accommodations accessible to everyone. We believe that a comfortable stay shouldn't 
                        break the bank, and we're committed to proving that.
                    </p>
                </section>

                <section className="section-content">
                    <h2>What We Offer</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>🏨 Variety of Rooms</h3>
                            <p>From cozy single rooms to spacious family suites, we have options for everyone.</p>
                        </div>
                        <div className="feature-card">
                            <h3>💰 Affordable Prices</h3>
                            <p>Budget-friendly rates without compromising on quality and comfort.</p>
                        </div>
                        <div className="feature-card">
                            <h3>⭐ Modern Amenities</h3>
                            <p>Free WiFi, air conditioning, hot water, and more in every room.</p>
                        </div>
                        <div className="feature-card">
                            <h3>🎯 Easy Booking</h3>
                            <p>Simple, fast, and secure online booking with just a few clicks.</p>
                        </div>
                        <div className="feature-card">
                            <h3>24/7 Support</h3>
                            <p>Our friendly customer service team is always ready to help you.</p>
                        </div>
                        <div className="feature-card">
                            <h3>🌍 Trusted Service</h3>
                            <p>Thousands of happy guests have experienced our hospitality.</p>
                        </div>
                    </div>
                </section>

                <section className="section-content">
                    <h2>Why Choose Us?</h2>
                    <ul className="benefits-list">
                        <li>✓ Verified and secure payment options</li>
                        <li>✓ Instant booking confirmation</li>
                        <li>✓ Free cancellation up to 24 hours before check-in</li>
                        <li>✓ Best price guarantee</li>
                        <li>✓ Clean and hygienic rooms</li>
                        <li>✓ Friendly and professional staff</li>
                    </ul>
                </section>

                <section className="section-cta">
                    <h2>Ready to Book Your Perfect Stay?</h2>
                    <p>Start exploring our rooms and make your reservation today!</p>
                    <a href="/click" className="btn-cta">Browse Rooms</a>
                </section>
            </div>
        </div>
    )
}