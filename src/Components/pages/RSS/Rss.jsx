import React from 'react'
import { FaRssSquare } from "react-icons/fa";
export default function Rss() {
    return (
        <div className='fluid-container'>
            {/* <div className='row ' > */}
            <div className='col-12 center'>
                <ol className='RSS' >
                    <li>
                        <a href='https://g11prediction.com/Rss/Breakingnewsrss-Feed.xml' className='calling'><span> <FaRssSquare /> Breaking News </span> </a>
                    </li>
                    <li>
                        <a href='https://g11prediction.com/Rss/icc-cricket-world-cup-2023RSS-feed.xml' className='calling'><span> <FaRssSquare />Icc-cricket-world-cup-2023 </span> </a>

                    </li>
                    <li>
                        <a href='https://g11prediction.com/Rss/icc-cricket-world-cup-2024RSS-feed.xml' className='calling'><span> <FaRssSquare /> Icc-cricket-world-cup-2024</span> </a>

                    </li>
                    <li>
                        <a href='https://g11prediction.com/Rss/ipl-2023RSS-feed.xml' className='calling'><span> <FaRssSquare />Ipl-2023 </span> </a>

                    </li>
                    <li>
                        <a href='https://g11prediction.com/Rss/ipl-2024RSS-feed.xml' className='calling'><span> <FaRssSquare />Ipl-2024 </span> </a>
                    </li>
                </ol>
            </div>

        </div>
        // </div>
    )
}
