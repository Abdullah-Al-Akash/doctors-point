import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
        return (
                <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 px-12">
                        <InfoCard cardTitle='Opening Hours' cardBody='Lorem Ipsum is simply dummy text of the pri' bg='bg-gradient-to-r from-secondary to-primary' img={clock}></InfoCard>
                        <InfoCard cardTitle='Visit Our Location' cardBody='Brooklyn, NY 10036, United States' bg='bg-accent' img={marker}></InfoCard>
                        <InfoCard cardTitle='Contact Us Now' cardBody='+000 123 456789' bg='bg-gradient-to-r from-secondary to-primary' img={phone}></InfoCard>
                </div>
        );
};

export default Info;