import React from 'react';
import '../styles/Footer.scss';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='footer-container'>
            <a  href="mailto: lfranckx@gmail.com">
                <i className="fas fa-paper-plane"></i>&nbsp; Email
            </a>

            <section className='social-media'>
                <div className='social-icons'>
                    <a
                        href='https://www.facebook.com/lfranckx/'
                        target='_blank'
                        className='social-icon-link facebook'
                        aria-label='Facebook'
                    >
                        <i className='fab fa-facebook-f icon' />
                    </a>
                    <a
                        href='https://www.instagram.com/lachnr0ll/'
                        target='_blank'
                        className='social-icon-link instagram icon'
                        aria-label='Instagram'
                    >
                        <i className='fab fa-instagram icon' />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/lachlanfranckx/'
                        target='_blank'
                        className='social-icon-link twitter'
                        aria-label='LinkedIn'
                    >
                        <i className='fab fa-linkedin icon' />
                    </a>
                    <a
                        href='https://github.com/lfranckx'
                        target='_blank'
                        className='social-icon-link github'
                        aria-label='Github'
                    >
                        <i className="fab fa-github icon"></i>
                    </a>
                </div>
            </section>
        </div>
    );
}