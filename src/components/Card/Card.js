import React, { useState } from 'react';
import './Card.css';
//
import useHover from '../../hooks/useHover';
import CatBackground from '../../images/cat.png';
import CatBackgroundDisabled from '../../images/cat-disabled.png';

function Card({
  slogan, title, subtitle, weight, indent, isDisabled,
}) {
  // states
  const [isSelected, setIsSelected] = useState(false);
  const [hoverRef, isHovered] = useHover();

  // handlers
  const onCardSelect = () => !isDisabled && setIsSelected(!isSelected);
  //
  const style = {
    backgroundImage: !isDisabled ? `url(${CatBackground})` : `url(${CatBackgroundDisabled})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundColor: '#F2F2F2',
  };

  return (
    <div className={`card ${!isDisabled ? 'available' : ''}`} ref={hoverRef}>
      <button
        className="card_button_wrap"
        type="button"
        onClick={onCardSelect}
        disabled={isDisabled}
      >
        <div className={`card__slice ${isSelected && 'active'}`}>
          <p className={`card__slogan ${isSelected && 'active'}`}>{isHovered && isSelected ? slogan[1] : slogan[0]}</p>
        </div>
        <div className={`card__wrapper ${isSelected && 'active'}`} style={style}>
          <h2 className="card__title">
            {title[0]}
            <span className="card__title_span">{title[1]}</span>
          </h2>
          <p className="card__subtitle">
            <span className="card__subtitle_span">
              {subtitle[0]}
              {' '}
            </span>
            {subtitle[1]}
            {' '}
            <br />
            <span className="card__subtitle_span">{subtitle[2]}</span>
            {' '}
            {subtitle[3]}

          </p>
          <div className={`card__sticker ${isSelected && 'active'}`}>
            {weight}
            <span className="card__sticker_span">кг</span>
          </div>
        </div>
      </button>
      {
            !isSelected && !isDisabled
              ? (
                <p className="card__indent">
                  {indent.default}
                  {' '}
                  <button
                    className="card__indent_button"
                    type="button"
                    onClick={onCardSelect}
                  >
                    купи
                  </button>
                </p>
              )
              : (
                <p className="card__indent">
                  {
                    !isDisabled
                      ? indent.selected
                      : `${indent.disabled[0]} ${title[1]} ${indent.disabled[1]}`
                  }
                </p>
              )
      }
    </div>
  );
}

export default Card;
