import React from 'react';
import heropic from '../../../assets/img/hero-img1.png'

export const Hero = () => {
  return (
    <section className='section section--hero'>
      <div className="container hero-container">
        <div className="hero-container__info">
          <h1>Better insurance starts here </h1>
        </div>
        <div className="button-wrap">
        <a href='#insurance' className="button button--primary">
            Get started
          </a>
        </div>
        
        <div className="hero-container__img">
          <img src={heropic} alt="laptop" />
        </div>
      </div>
    </section>
  )
}

