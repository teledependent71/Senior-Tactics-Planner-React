import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Senior Tactics Planner</title>
        <meta property="og:title" content="Senior Tactics Planner" />
      </Helmet>
    </div>
  )
}

export default Home
