import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../Home/Home.css'
import Type from './Type'
import myImg from '../../Assets/avatar.svg'
import Tilt from 'react-parallax-tilt';

export default function Home() {
    return (
        <div>
            <Navbar />
            <div>
                <div className='heading-home'>
                    <h1>Hi There!</h1>
                    <div className='typewriter-name'>
                        <Type />
                    </div>
                </div>
                <div className='d-flex bottom-content'>
                    <div className='first-div'>
                        <h1 className='main-content'>LET ME <span className='yellow'>INTRODUCE </span> MYSELF</h1>
                        <div>
                            <span>Passionate and energetic final-year B-Tech Computer Science student. Quick to grasp new concepts and apply them
                                effectively. Strong problem-solving and analytical skills, complemented by excellent teamwork and communication
                                abilities. Seeking opportunities to enhance skills and contribute to impactful projects in the tech industry</span>
                        </div>
                    </div>
                    <div className='image'>
                        <Tilt>
                            <img src={myImg} alt='avatar' />
                        </Tilt>
                    </div>
                </div>
            </div>
        </div>
    )
}
