import React, { useEffect } from "react";
import Footer from "../Footer";
import '../../styles/Portfolio.scss';

export default function Portfolio(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <main className={'portfolio'}>
                <section className='margin-bottom projects-section'>
                    <h2 className={'h2 margin-bottom'}>Professional Work</h2>

                    <div className='pro-project'>
                        <a href='https://www.omgartistry.com/' target="_blank" rel="noreferrer">
                            <img src="https://lfranckx.github.io/portfolio/images/omglogo.png" alt='omg-artistry' className='project-image'/>
                        </a>
                        <p className='p'>Click image to view</p>
                        <div className='top-line'></div>
                        <p className='text-left p-large'>
                            OMG Artistry is an e-commerce store for celebrity hair and makeup artist Olivia Smalley.
                            The goal of the job was to streamline her branding through the use of captivating story-telling
                            copy, uniformed colors and fonts, and create an overall professional and easy to navigate store front,
                            while keeping responsive at the forefront to capitalize on the majority of her consumer base using
                            smartphones. 

                        </p>
                        
                        <h3 className='h4 margin-bottom'>What challenges did I face?</h3>
                        <p className='text-left p-large'>
                            As well as optimizing her site's look, navigation, and responsiveness the client wanted to implement 
                            several new features to help boost her social media views and sell a subscription service to some of
                            her more valuable tutorial videos for other aspring hair stylists and makeup artists. There were many
                            discussions and directions on how to change the overall design of the store and solving issues pertaining
                            to Shopify's payment system.
                        </p>

                        <h3 className='h4 margin-bottom'>What did I learn?</h3>
                        <p className='text-left p-large'>
                            Constant communication with the client was key to the ultimate success of the project. I was able to 
                            accomplish all the desired changes to the design while maintaining a responsive and elegant design. 
                            I did much research into creating new features for her subscription service and laid out several different 
                            options for her to choose from to ensure she receieved the best outcome and ultimately save on cost.
                        </p>

                        <h3 className='h4 margin-bottom'>Languages and Technologies</h3>
                        <div className={'skills-list margin-top'}>
                            <i className="fab fa-shopify"></i>
                            <i className="fab fa-js-square"></i>
                            <i className="fab fa-html5"></i>
                            <i className="fab fa-css3-alt"></i>
                        </div>
                    </div>
                </section>

                <div className='bottom-line-large'></div>

                <section className='margin-top pad-b-2'>
                    <h2 className={'h2 margin-bottom'}>Personal Projects</h2>

                    <div className={'personal-project'}>
                        <a href='https://travelog-client.now.sh/' target="_blank" rel="noreferrer">
                            <img src="https://lfranckx.github.io/portfolio/images/travelog.png" alt='Travelog' className='project-image'/>
                        </a>

                        <a href='https://workout-creator-capstone-client.vercel.app/' target="_blank" rel="noreferrer">
                            <img src="https://lfranckx.github.io/portfolio/images/MyMetcon.png" alt='MyMetcon' className='project-image'/>
                        </a>

                        <a href='https://lfranckx.github.io/tourBus/' target="_blank" rel="noreferrer">
                            <img src="https://lfranckx.github.io/portfolio/images/TourBus.png" alt='TourBus' className='project-image'/>
                        </a>

                        <a href='https://lfranckx.github.io/drum-machine/' target="_blank" rel="noreferrer">
                            <img src="https://lfranckx.github.io/portfolio/images/DrumMachine.png" alt='DrumMachine' className='project-image'/>
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}