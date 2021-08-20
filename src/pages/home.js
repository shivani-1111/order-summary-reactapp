import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="orderSummaryContainer">
                    <div className="container-fluid">
                        <div className="orderSummaryImage">
                            <img src="assets/images/illustration-hero.svg" className="orderSummaryMainImg" />
                        </div>
                        <h1 className="summaryOrderHeading">Order Summary</h1>
                        <p className="summaryOrderContent">
                            You can now listen to millions of songs, audiobooks, and podcasts on any
                            device anywhere you like!
                        </p>
                        <div className="orderSummaryPlanContainer">
                            <div className="musicIcon">
                                <img src="assets/images/icon-music.svg" />
                            </div>
                            <div className="orderSummaryPlancontentContainer">
                                <div className="planHeading">Annual Plan</div>
                                <div className="planPrice">$59.99/year</div>
                            </div>
                            <a href="#" className="orderSummaryButton">Change</a>
                        </div>

                        <button className="btn btn-primary">Proceed to Payment</button>
                        <a className="btn btn-cancel">Cancel Order</a>
                    </div>
                </div>
                <div className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                    Coded by <a href="#">Shivani Rajput</a>.
                </div>
            </div>
        );
    }
}

export default Home

