import React, { useState } from 'react'
import { AccordionItem } from '../../../components';

const FAQ = [
  {id: 1, question: 'Do I need a life insurance policy?', answers: ['Almost everyone can benefit from life insurance. It is the best way to ensure that your survivors remain financially secure. Life insurance serves several purposes.']},
  {id: 2, question: 'Why Should I Choose Car Insurance?', answers: ['Choosing a car insurance policy that addresses your needs starts with choosing the right insurance company. We also understand that having insurance is about more than just protecting your vehicle. It is about making the process after any incident as simple and stress-free as possible.' ]},
  {id: 3, question: 'What else can my international health plan include?', answers: ['Mental health and wellbeing therapies to help care for your mind as well as your body. Freedom to choose a private doctor for your day-to-day care, with no need for a general practitioner’s referral. Cover for many pre-existing conditions (chronic, congenital and hereditary), subject to underwriting']},
]

export const Faq = () => {

const [clicked, setClicked] = useState("0");

const onToggle = (index) => {
if (clicked === index) {
   return setClicked("0");
  }
  setClicked(index);
}

  return (
    <section className='section section--grey'>
      <div className="container container--sm">
        <h2 className="section__title">
          Frequently asked questions
        </h2>
        <div className="accordion accordion--faq" id="accordion--faq">
          {
            FAQ.map(({id, question, answers}) => (
              <AccordionItem key={id} id={id} togglerText={question} contentText={answers} onToggle={onToggle} active={clicked === id}/>
              )
            )
          }
        </div>
      </div>
    </section>
  )
}
