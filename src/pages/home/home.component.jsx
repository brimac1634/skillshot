import React, { useEffect } from 'react';

const Home = ({ homeSection }) => {

    useEffect(() => {
        if (homeSection) {
            // scroll to ref
        }
    }, [homeSection])
    
    return ( 
        <div className='w-screen'>
            <video 
                className='w-screen'
                preload='metadata' 
                playsInline 
                autoPlay
                loop 
                muted 
            >
                <source src='https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/en-us/production/en-us/static/hero-mobile-5e6cfa76937624c2bad0db07f9839fcc.webm' type='video/webm' />
                <source src='https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/en-us/production/en-us/static/hero-mobile-06c76b9c9b7a5f6acacbfd321c5b0f10.mp4' type='video/mp4' />
            </video>
        </div>
    );
}
 
export default Home;