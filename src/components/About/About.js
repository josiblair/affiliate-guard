import React, { Component } from 'react';
import './About.css';
import Nav from '../Nav/Nav';
import logo from '../../images/logo.png';
import {Link} from 'react-router-dom';

class About extends Component {

    render() {
        return (
            <div className='about_container'>
                <div className='about_header'>
                    <Nav />
                    <div className='header_content'>
                        <Link to='/'><img src={logo} alt='logo' className='about_logo' /></Link>

                        <div className='right_header'>
                            <div className='contact_info'>
                                <span className='about_phone'>801-677-0076</span>
                                <span className='about_address'>46 W 200 S - BOUNTIFUL, UT 84010</span>
                            </div>

                            <span className='header'>Why Affiliate Guard?</span>
                        </div>
                    </div>
                </div>

                <div className='about_body'>
                    <h2>Affiliate Guard is an industry-specific program providing elite insurance coverage for affiliates.</h2>
                    <div>
                        <h3>We are the only agency in the nation that can provide the Affiliate Guard program.</h3>
                        <p>The Affiliate Guard team specializes in working with gyms. It’s what we do. We know your sport and protect your box with every tool in our arsenal. By removing exclusions you’d find with other providers, we provide a BROAD scope of coverage at a very competitive rate. Affiliate Guard policies are in full compliance with all of CrossFit HQ insurance requirements.</p>
                    </div>
                </div>

                <div>
                    <h2>Services</h2>
                    <div>
                        <h3>Premium Financing:</h3>
                        <p>We are contracted with Capital Premium Financing Company, offering payment options for affiliate’s insurance premiums. Please advise one of our account executives if you would like to finance your premium.</p>

                        <h3>Risk Management:</h3>
                        <p>Once coverage is bound on your policy, a field inspector will be sent out to survey your affiliate location. We will let you know of any recommendations that need to be addressed. This is necessary to keep your risk exposures and premiums down.</p>

                        <h3>Semi-annual Reviews:</h3>
                        <p>Your business is always changing. We will contact you to review any changes to your equipment, location, sales, etc. This is necessary to prevent coverage gaps, as well as premium audits.</p>

                        <h3>In-house Claim Service:</h3>
                        <p>Please notify us immediately of any claim that may arise. We will submit the loss information and put our claims department in contact with you.</p>

                        <h3>Same Day Certificates:</h3>
                        <p>Once coverage is bound on your policy, your certificate of insurance will be sent to you, CrossFit, Inc., and any other parties requiring it.</p>

                        <h3>CrossFit Kids Friendly Insurance Program:</h3>
                        <p>We have made this program so it will cover affiliates that run CrossFit Kids classes.</p>

                        <h3>Review Lease Agreements:</h3>
                        <p>As a added service we will review the insurance section of your lease agreement to make sure you are in compliance with your landlord.</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default About;