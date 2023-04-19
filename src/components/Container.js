import React, { useState } from 'react'
import chaussure1 from './chaussure1.png'
import chaussure2 from './chaussure2.png'
import chaussure3 from './chaussure3.png'
import chaussure4 from './chaussure4.png'
import chaussure5 from './chaussure5.png'
import emptystarts from './emptystarts.png'
import fillstarts from'./fillstars.png'
import { useEffect } from 'react'


function Container() {

  const [currentChaussure, setCurrentChaussure] = useState(chaussure1);

  const [currentName, setCurrentName] = useState('Air Jordan 1 Mid');

  const [currentPrice, setCurrentPrice] = useState('$129.9');

  const [currentNumber, setCurrentNumber] = useState('01/05');

  const [width, setWidth] = useState(20);

  const handleImageChange = (chaussure) => {
    setCurrentChaussure(chaussure);
  };

  const handleNameChange = (name) => {
    setCurrentName(name);
  };

  const handlePriceChange = (price) => {
    setCurrentPrice(price);
  };

  const handleNumberChange = (number) => {
    setCurrentNumber(number);
  };

  const handleWidthChange = (newWidth) => {
    setWidth(newWidth); 
  };

 
  return (
    
    <div  className='container' >
      
      <main>
        <section className='right'>
          <h1>JUST DO IT</h1>
          <span className='quote'>You'll be amazed to find the best designer shoes.</span>
        </section>
        <section className='center'>
         {currentChaussure && <img   className='shoes' src={currentChaussure}/>}
        </section>
        <section className='left'>
          {currentName && <h2 className='shoes-name'> {currentName} </h2>}
          {currentPrice && <span className='price'>{currentPrice}</span>}
          <h3>GET IT NOW</h3>
        </section>
        </main>
      <div className='carousel-div'>
          <div className='compteur'>
            {currentNumber && <p>{currentNumber}</p>}
            <div className='barre-progression'>
              <div className='progression'  style={{ width: `${width}px`}}></div>
            </div>
          </div>
          <div className='carousel'>
            <div className='box' onClick={() => {
               handleImageChange(chaussure1);
               handleNameChange('Air Jordan 1 Mid');
               handlePriceChange('$129.9');
               handleNumberChange('01/05')
               handleWidthChange(20)}}>
                <img className='tiny-shoes' src={chaussure1}/>
              <div className='caracteristiques'>
                  <p className='title'>Air Jordan 1 Mid</p>
                  <div className='stars'>
                    <img className='star' src={fillstarts} />
                    <img className='star' src={fillstarts} />
                    <img className='star' src={fillstarts} />
                    <img className='star' src={fillstarts} />
                    <img className='star' src={emptystarts} />
                  </div>
                  <span className='tiny-price'>$129.9</span>
                  <span className='colors'>1 color</span>
              </div>
              <span className='plus'>+</span>
            </div>
            <div className='box' onClick={() => {
              handleImageChange(chaussure2);
              handleNameChange('High Off-White');
              handlePriceChange('$10.600')
              handleNumberChange('02/05')
              handleWidthChange(40);
            }}>
            <img className='tiny-shoes' src={chaussure2}/>
              <div className='caracteristiques'>
                <p className='title'>High Off-White</p>
                  <div className='stars'>
                    <img className='star' src={fillstarts} />
                    <img className='star' src={fillstarts} />
                    <img className='star' src={fillstarts} />
                    <img className='star' src={fillstarts} />
                    <img className='star' src={fillstarts} />
                  </div>
                  <span className='tiny-price'>$10.600</span>
                  <span className='colors'>1 color</span>
              </div>
              <span className='plus'>+</span>
            </div>
            <div className='box' onClick={() => {
              handleImageChange(chaussure3);
              handleNameChange('Jumpman Air');
              handlePriceChange('$200');
              handleNumberChange('03/05')
              handleWidthChange(60)}}>
            <img className='tiny-shoes' src={chaussure3}/>
              <div className='caracteristiques'>
                <p className='title'>Jumpman Air</p>
                  <div className='stars'>
                    <img className='star' src={fillstarts} />
                    <img className='star' src={fillstarts} />
                    <img className='star' src={emptystarts} />
                    <img className='star' src={emptystarts} />
                    <img className='star' src={emptystarts} />
                  </div>
                  <span className='tiny-price'>$200</span>
                  <span className='colors'>3 colors</span>
              </div>
              <span className='plus'>+</span>
            </div>
            <div className='box' onClick={() => {
                handleImageChange(chaussure4);
                handleNameChange('Air Jordan 1 OG');
                handlePriceChange('$700')
                handleNumberChange('04/05');
                handleWidthChange(80)}}>
            <img className='tiny-shoes' src={chaussure4}/>
              <div className='caracteristiques'>
                <p className='title'> Air Jordan 1 OG </p>
                  <div className='stars'>
                    <img className='star' src={fillstarts} />
                    <img className='star' src={fillstarts} />
                    <img className='star' src={fillstarts} />
                    <img className='star' src={emptystarts} />
                    <img className='star' src={emptystarts} />
                  </div>
                  <span className='tiny-price'>$700</span>
                  <span className='colors'>1 color</span>
              </div>
              <span className='plus'>+</span>
            </div>
            <div className='box' onClick={() => {
              handleImageChange(chaussure5);
              handleNameChange('Dunk High');
              handlePriceChange('$140')
              handleNumberChange('05/05');
              handleWidthChange(100)}}>
            <img className='tiny-shoes' src={chaussure5}/>
              <div className='caracteristiques'>
                <p className='title'>Dunk High</p>
                  <div className='stars'>
                    <img className='star' src={fillstarts} />
                    <img className='star' src={fillstarts} />
                    <img className='star' src={fillstarts} />
                    <img className='star' src={fillstarts} />
                    <img className='star' src={emptystarts} />
                  </div>
                  <span className='tiny-price'>$140</span>
                  <span className='colors'>7 colors</span>
              </div>
              <span className='plus'>+</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Container