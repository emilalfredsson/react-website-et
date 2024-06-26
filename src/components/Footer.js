import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';



function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling animation
    });
};

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Hafðu samband við okkur í dag
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
              <p>Sími: 862-3002</p>
              <p>Netfang: merking@etomasson.is</p>
              <p>Kennitala: 450510-0250</p>
          </div>
          <div class='footer-link-items'>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
          <Link to='/' className='social-logo' onClick={scrollToTop}>
            </Link>
          </div>
          <small class='website-rights'>ETÓMASSON © 2024</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              //to='/'
              //target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              //to='/'
              //target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              //to='/'
              //target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              //to='/'
              //target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              //to='/'
              //target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;