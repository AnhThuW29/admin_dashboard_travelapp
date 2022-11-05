import React from 'react'
import './MainDash.css'
import Cards from '../Cards/Cards.jsx'
import Table from '../Table/Table.jsx'
const MainDash = () => {
  return (
    <div className="MainDash">
        <h1>Dashboard</h1>
        <Cards />
        <Table />
    </div>
  )
}

export default MainDash
