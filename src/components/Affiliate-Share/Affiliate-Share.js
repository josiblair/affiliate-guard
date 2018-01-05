import React, { Component } from 'react';
import './Affiliate-Share.css';
import Nav from '../Nav/Nav';
import logo from '../../images/logo.png';
import affShare from '../../images/aff_share.jpg';

class AffiliateShare extends Component {

    render() {
        return (
            <div className='aff_share_container'>
                <Nav />

                <div className='aff_share_header'>
                    <img src={logo} alt='logo' />
                    <span>INTRODUCES</span>
                    <span>AFFILIATE SHARE</span>
                    <span>It's Not Insurance. It's Health Care for Healthy People.</span>
                </div>

                <div className='aff_share_body'>
                    <div>
                        <h2>Affiliate SHARE is a shared health care program for box owners who are looking for a better, more affordable option to traditional health insurance. </h2>
                        <h3>We are 100% compliant with the Affordable Care Act.</h3>
                    </div>

                    <div>
                        <img src={affShare} alt='affShare' />
                    </div>

                    <div>
                        <h2>AFFILIATE SHARE MEMBERS ARE HEALTHY</h2>
                        <p>Box owners are fitter, stronger and faster than most. If you only visit the doctor a few times a year but pay thousands in insurance premiums, you are paying too much for your good health. Affiliate SHARE rewards its members with lower out-of-pocket costs and the freedom to navigate personal care. Join a community of like-minded individuals who are committed to fitness and want to save money on health care.</p>
                    </div>

                    <div>
                        <h2>A REWARDING ALTERNATIVE TO HEALTH INSURANCE</h2>
                        <div>
                            <p>Health insurance companies do not calculate premiums by level of fitness or wellness. That’s why Affiliate SHARE is better. Reward yourself for your healthy lifestyle.</p>
                            <ul>The ACA provides for annual preventative health care. Affiliate SHARE is out to show how active members can be healthier. We pay members $10 each month, simply for participating in our study and sharing these stats:
                                    <li>Height</li>
                                <li>Weight</li>
                                <li>Resting heart rate</li>
                                <li>Heart rate after exercise</li>
                                <li>Number of times you worked out for 30+ minutes</li>
                            </ul>
                            <p>(We keep this submitted data confidential and it is not part of your medical record.)</p>
                            <p>Sick of large deductibles? Your cost is no more than the first $500 of three medical events, and there are no copays.</p>
                        </div>
                    </div>

                    <div>
                        <h2>WHAT IS SHARED CARE?</h2>
                        <div>
                            <p>When you join Affiliate Share, you are a contract employee of SHMI. To maintain your eligible status, you simply share STATS each month: height, weight, your pulse at rest) your pulse after exercise and the number of times you exercised or worked out for 30+ minutes last month. You will be paid $10 each month for submitting the STATS and receive a 1095 for reporting ACA coverage on your tax return. All data submitted will be kept confidential.</p>
                            <p>Members also enjoy a host of money saving tools, discounts and services dedicated to their wellness. The plan offers free telephone consultations with knowledgeable physicians 24 hours a day, 7 days a week. Representatives negotiate all of your medical bills to ensure the lowest cost, and issue a check to the Affiliate SHARE member to meet medical expenses over the first $500.</p>
                            <p>Members typically save 30 – 50% of the cost of a comparable Gold health insurance plan. When you join Affiliate SHARE, you are a member of the sharing community that goes back 20 years and is now over 600,000 strong.</p>
                        </div>
                    </div>

                    <div>
                        <h2>Signing up for Affiliate SHARE is Easy.</h2>
                        <button>Fill Out Application</button>
                        <button>Get More Info</button>
                    </div>

                </div>
            </div >
        )
    }
}

export default AffiliateShare;