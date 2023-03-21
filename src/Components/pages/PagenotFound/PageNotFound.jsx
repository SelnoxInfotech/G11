import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className='container'>
        <div className="row">
            <div className='col-12 hedding center' style={{color: "black" }}>
            PageNotFound
            </div>
            <button className='btn '><Link to="/"> Go To Home Page</Link></button>
         
        </div>
    </div>
  )
}
