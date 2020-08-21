import React from 'react'
import whatsappIcon from '../../assets/icons/whatsapp.svg'
import './styles.css'
import api from '../../services/api'

export interface Teacher {
    id: number
    avatar: string
    name: string
    subject: string
    bio: string
    cost: string
    whatsapp: string

}

interface ItemProps {
    teacher: Teacher
}



const TeacherItem: React.FC<ItemProps> = (props) =>  {

    function addConnections(){

        api.post('connections',{
            user_id: props.teacher.id
        })
    }
    return(
    <article className="teacher-item">
                    <header>
                        <img src={props.teacher.avatar} alt={props.teacher.name}/>
                        <div>
                            <strong>
                            {props.teacher.name}
                            </strong>
                            <span>
                                {props.teacher.subject}
                            </span>
                        </div>
                    </header>

                    <p>
                        {props.teacher.bio}
                    </p>

                    <footer>
                        <p>
                            Preço/hora:
                            <strong>R$ {props.teacher.cost},00</strong>
                        </p>
                        <a target="_blank" onClick={addConnections} href={`https://wa.me/55${props.teacher.whatsapp}`} >
                            <img src={whatsappIcon} alt="Entra em contato"/>
                            Entrar em contato
                            
                        </a>
                    </footer>
                </article>
    )
}

export default TeacherItem
