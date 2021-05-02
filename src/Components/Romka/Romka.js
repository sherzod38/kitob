import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import cardImg1 from '../../Assets/images/Tafsir/siyrat.jpg';
import cardImg2 from '../../Assets/images/Tafsir/siyrat1.jpg';

import './Romka.scss';

const Romka = ({title, cardImg, author}) => {

    const [ openedPage, setOpenedPage]  = useState("");


    return (
        <div className="card">
                <div className={`wrapper ${openedPage == "active" ? 'opened' : ''}`}>
                    <div className="card-inner1">
                        <img className='card-img1' src={cardImg1} alt=""/>
                        <h3>{title}Siyrat</h3>
                        <h4>{author} </h4>
                    </div>
                    <div className="card-inner2">
                        <img className='card-img2' src={cardImg2} alt=""/>
                    </div>
                </div>
    
                {/* <a   onClick={() => setOpenedPage("active")} className={`button ${openedPage == "active" ? 'opened' : ''}`}> */}
                    {/* <span class="plus__img1" id="spanPlus1">|</span> */}
                    {/* <span class="plus__img2" id="spanPlus2">|</span> */}
                {/* </a> */}
        </div>
    )
}

export default Romka;