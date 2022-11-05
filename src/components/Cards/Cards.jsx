import React from 'react'
import Card from '../Card/Card'
import { dataCard } from '../../Data/dataSidebar'
import './Cards.css'

const Cards = () => {
  return (
    <div className="cards">
        { dataCard.map((card, id) => {
            return (
                <div className="container">
                    <Card
                        title={card.title}
                        color={card.color}
                        barValue={card.barValue}
                        value={card.value} 
                        png={card.png}
                        series={card.series}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default Cards
