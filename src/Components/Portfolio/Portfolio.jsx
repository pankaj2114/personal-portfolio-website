import React from 'react';
import './Portfolio.css';
import CryptoWatch from '../../assets/Cryptowatch.webp';
import Todo from '../../assets/todolist.png';
import Digitalclock from '../../assets/digital-clock.jpg';
import Covid19 from '../../assets/covidtracker.png';
import WordCount from '../../assets/wordcount.webp';
import TicTac from '../../assets/tictactoe.png';

const Portfolio = () => {
  return (
    <>
     <section id='portfolio' className='portfolio__section'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={CryptoWatch} alt="CryptoWatch" />
          </div>
          <h3>CryptoBook</h3>
          <div className="portfolio__btn">
          <a href="https://github.com/pankaj2114" className='btn' target='_blank' >Github</a>
          <a href="https://extraordinary-nougat-eedf28.netlify.app/" className="btn btn-primary" target='_blank' >Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Todo} alt="Todo List" />
          </div>
          <h3>TODO List App</h3>
          <div className="portfolio__btn">
          <a href="https://github.com/pankaj2114" className='btn' target='_blank' >Github</a>
          <a href="https://delightful-vacherin-2bdf85.netlify.app/" className="btn btn-primary" target='_blank' >Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Digitalclock} alt="Digital Clock" />
          </div>
          <h3>Digital Clock</h3>
          <div className="portfolio__btn">
          <a href="https://github.com/pankaj2114" className='btn' target='_blank' >Github</a>
          <a href="https://helpful-sundae-e24172.netlify.app/" className="btn btn-primary" target='_blank' >Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Covid19} alt="Covid 19 Tracker" />
          </div>
          <h3>Covid 19 Tacker</h3>
          <div className="portfolio__btn">
          <a href="https://github.com/pankaj2114" className='btn' target='_blank' >Github</a>
          <a href="https://coruscating-meringue-7b696a.netlify.app/" className="btn btn-primary" target='_blank' >Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={WordCount} alt="Word Char Count" />
          </div>
          <h3>Word Char Count</h3>
          <div className="portfolio__btn">
          <a href="https://github.com/pankaj2114" className='btn' target='_blank' >Github</a>
          <a href="https://word-counter-html-css-js.netlify.app/" className="btn btn-primary" target='_blank' >Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={TicTac} alt="Tic Tac toe game" />
          </div>
          <h3>TicTacToe Game</h3>
          <div className="portfolio__btn">
          <a href="https://github.com/pankaj2114" className='btn' target='_blank' >Github</a>
          <a href="https://tic-tac-toe-game-html-cs-js.netlify.app/" className="btn btn-primary" target='_blank' >Live Demo</a>
          </div>
        </article>

      </div>


      
    </section>
    </>
    )
}

export default Portfolio;
