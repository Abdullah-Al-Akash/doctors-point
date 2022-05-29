import React from 'react';

const InfoCard = ({ img, cardTitle, cardBody, bg }) => {
        return (
                <div class={`card lg:card-side bg-base-100 shadow-xl ${bg} `}>
                        <figure className="px-5 py-8">
                                <img src={img} alt="Album" />
                        </figure>
                        <div class="card-body text-white">
                                <h2 class="card-title">{cardTitle}</h2>
                                <p>{cardBody}</p>
                        </div>
                </div>
        );
};

export default InfoCard;