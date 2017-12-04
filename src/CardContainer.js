import React, { Component } from 'react';
import Card from './Card';

const CardContainer = ({dataSet}) => {
  const cardList = dataSet.map((district, index) => {
    return (
      <Card key={index} />
    )
  })
  return (
    <section>
      {cardList}
    </section>
  )
}

export default CardContainer;
