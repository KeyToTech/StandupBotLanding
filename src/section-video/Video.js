
import React from 'react';
import '../section-video/video.css';
import bg from '../image/section-video/bg_video.png';
import img from '../image/section-video/img_copy.png';
const Video = () => (
    <div className="sn-v">
        <img src={bg} className="bg-sn-v" alt="bg" />
        <div className="content-sn-v">
            <img src={img} className="img-v" alt="img" />
        </div>
    </div>
)

export default Video;