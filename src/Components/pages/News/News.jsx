import React from 'react'
import Newscard from '../../Component/News/New'
import { NewsState } from "../../context/NewsApi";


export default function News() {
  return (
    <div>


      <NewsState>
        <Newscard></Newscard>
      </NewsState>
    </div>
  )
}
