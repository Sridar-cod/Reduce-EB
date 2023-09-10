import React from 'react'
import Home from './Home';
import Calculator from './Calculator';
import Chart from './Chart';
import { Routes, Route } from "react-router-dom";

const Content = () => {
  return (
    <main>
      <div className="content-outter">
        
        <div>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Calculator" element={<Calculator />} />
      <Route path="/Chart" element={<Chart />} />
     </Routes>
        </div>
        </div>
      </main>
  )
}

export default Content