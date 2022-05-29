import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';

const Banner = () => {
        return (
                <div className=''>
                        <div class="hero min-h-screen container mx-auto">
                                <div class="hero-content flex-col lg:flex-row-reverse">
                                        <div className="w--lg-50">
                                                <img src={chair} class="max-w-full rounded-lg shadow-2xl" />
                                        </div>
                                        <div>
                                                <h1 class="text-5xl font-bold">Your New Smile from Here</h1>
                                                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                                <button class="btn btn-primary bg-gradient-to-r from-secondary primary text-white font-bold">Get Started</button>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Banner;