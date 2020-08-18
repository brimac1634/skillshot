import React, { useEffect, useRef, createRef } from 'react';

import { homeNav } from '../../constants/nav';

const Home = ({ homeIndex }) => {
    const refs = useRef(homeNav.map(({ section }) => createRef(section)));

    useEffect(() => {
        if (refs?.current[homeIndex]?.current) {
            refs.current[homeIndex].current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [homeIndex])
    
    return ( 
        <div className='w-screen'>
            <section ref={refs.current[0]} className='h-screen'>
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
            </section>
            <section ref={refs.current[1]} className='h-screen'>

            </section>
            <section ref={refs.current[2]} className='h-screen bg-green-400'>

            </section>
            <section ref={refs.current[3]} className='h-screen'>

            </section>
            <section ref={refs.current[4]} className='h-screen'>

            </section>
        </div>
    );
}
 
export default Home;