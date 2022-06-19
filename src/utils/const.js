export const title = 'Ты сегодня покормил кота?';

const slogan = ['Сказочное заморское яство', 'Котэ не одобряет?'];
const indent = {
  default: 'Чего сидишь? Порадуй котэ,',
  selected: 'Филе из цыплят с трюфелями в бульоне',
  disabled: ['Печалька', 'закончился'],
};

export const cards = [
  {
    slogan,
    title: ['Нямушка', 'с фуа-гра'],
    subtitle: ['10', 'порций', '', 'мышь в подарок'],
    weight: '0.5',
    indent,
    isDisabled: false,
  },
  {
    slogan,
    title: ['Нямушка', 'с рыбой'],
    subtitle: ['40', 'порций', '2', 'мыши в подарок'],
    weight: '2',
    indent,
    isDisabled: true,
  },
  {
    slogan,
    title: ['Нямушка', 'с курой'],
    subtitle: ['100', 'порций', '5', 'мышей в подарок заказчик доволен'],
    weight: '5',
    indent,
    isDisabled: false,
  },
];
