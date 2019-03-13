
import React from 'react';
import '../section-video/video.css';
import bg from '../image/section-video/bg_video.png';
import img from '../image/section-video/img_copy.png';
import bgFirst from '../image/section-video/bg_circle.png';
import bgSecond from '../image/section-video/bg.png';
import icon from '../image/section-video/icon.png';

const Video = () => (
    <div className="sn-v">
        <img src={bg} className="bg-sn-v" alt="bg" />
        <div className="content-sn-v">
            <img src={img} className="img-v" alt="img" />
            <div className="player-container">
                <img src={bgFirst} className="bg-f-pl" alt="bg-pl" />
                <img src={bgSecond} className="bg-s-pl" alt="bg-pl" />
                <img src={icon} className="icon-play" alt="icon-p" />
            </div>
        </div>
    </div>
)

export default Video;