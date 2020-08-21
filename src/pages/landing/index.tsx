import {Link} from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/icons/study.svg'
import giveClassesIcon from '../../assets/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/icons/purple-heart.svg'

import './style.css'
import React, { useState, useEffect} from 'react'
import api from '../../services/api'

function Landing() {
    const [TotalConnections, setTotalConnections] = useState(0)

    useEffect(() => {
        api.get('connections').then(res => {
            const {total} = res.data
            setTotalConnections(total)
        })
    }, [])

   
   

    return(
       
           <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos Online</h2>
                </div>

                <img src={landingImg} alt="Plataforma de estudos" 
                className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className= "study">
                        <img src={studyIcon} alt="estudar"/>
                        Estudar
                        </Link>
                       <Link to="/teach" className= "give-classes">
                        <img src={giveClassesIcon} alt="estudar"/>
                        Dar Aulas
                    </Link>
                </div>

                <span className="total-connections">
                   Total de {TotalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração Roxo"/>
                </span>
            </div>
        </div>
        
    )
}

export default Landing
