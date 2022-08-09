import React from 'react'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/nav-icon5.svg';
import navIcon6 from '../assets/img/nav-icon6.svg';


const SocialIcons = () => {
  return (
    <span className="social-icons-group">
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/bajegbo-joseph/" title="LinkedIn"><img src={navIcon1} alt="" /></a>
            <a href="https://github.com/sagacious123" title="Github"><img src={navIcon4} alt="" /></a>
            <a href="mailto:damilolaj23@gmail.com" title="Gmail"><img src={navIcon5} alt="" /></a>
            <a href="https://twitter.com/damilolaj23" title="Twitter"><img src={navIcon6} alt="" /></a>
        </div>
        {/* <button className="vvd" onClick={() => console.log('connect')}><span>Let’s Connect</span></button> */}
    </span>
  )
}

export default SocialIcons
