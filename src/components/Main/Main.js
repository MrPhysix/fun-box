import React from 'react';
import './Main.css';
//
import Card from '../Card/Card';
//
import { title, cards } from '../../utils/const';

function Main() {
  return (
    <div className="main">
      <h1 className="main__title">{title}</h1>
      <ul className="main__cats-list">
        {
          cards.map((item) => (
            <Card
              key={item.title[1]}
              slogan={item.slogan}
              title={item.title}
              subtitle={item.subtitle}
              weight={item.weight}
              indent={item.indent}
              isDisabled={item.isDisabled}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default Main;
