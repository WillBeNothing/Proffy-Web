import React, {useState, FormEvent} from 'react'
import {useHistory} from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import './styles.css'
import Input from '../../components/input'
import WarningIcon from '../../assets/icons/warning.svg'
import Textarea from '../../components/TextArea'
import Select from '../../components/select'
import api from '../../services/api'


function TeacherForm() {

    const history = useHistory()
    
    const [name, setname] =useState('')
    const [avatar, setavatar] =useState('')
    const [Bio, setBio] =useState('')
    const [Whatsapp, setWhatsapp] =useState('')
    const [subject, setsubject] =useState('')
    const [cost, setcost] =useState('')
    const [DDD, setDDD] = useState('')

    function handleCreateClass(e: FormEvent) {

        e.preventDefault()

       api.post('classes', {
        name,
        avatar,
        whatsapp: `${DDD}${Whatsapp}`,
        bio: Bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems
    }).then(() => {
        alert("Cadastro finalizado com sucesso")
        history.push('/')
    })
    .catch((err) => {
        alert("Erro no cadastro")
    })
    }

   
    
    
    

    const [scheduleItems, setScheduleItem] = useState([
        {week_day:0, from:"", to:""}
    ])

    function setScheduleItemsValue(position: number, field: string, value:string) {
       const newArray = scheduleItems.map((scheduleItem, index) => {
           if(index === position) {
               return {
                   ...scheduleItem, [field]:value
               }


               
           }

           return scheduleItem
           
       })

       setScheduleItem(newArray)
    }

    function addNewScheduleItem() {
        setScheduleItem ([
            ...scheduleItems,
            {week_day:0, from:"8:00", to:"16:00"}
        ]
            
        )
    }

    
    return (
        <div id="page-teacher-form" className="container">
        <PageHeader title="Que bom que você quer dar aulas"
            description="O primeiro passo é preencher este formulário de inscrição"
        />

        <main>
            <form onSubmit={handleCreateClass}> 
                <fieldset>
                <legend>Seus dados</legend>

                <Input 
                    name="name" 
                    label="Nome Completo" 
                    value={name} 
                    onChange={(e) => {setname(e.target.value)}}
                    />
                
                <Input name="avatar" 
                    label="Link para sua foto"
                    value={avatar}
                    onChange={(e) => {setavatar(e.target.value)}}
                />
                <div className="DDD">
                <Input 
                    name="DDD"
                    label="DDD"
                    value={DDD}
                    maxLength={2}
                    onChange={(e) => {setDDD(e.target.value)}}
                    />
                <Input 
                    name="whatsapp"
                    label="Whatsapp"
                    value={Whatsapp}
                    onChange={(e) => {setWhatsapp(e.target.value)}}
                    
                />
                </div>
                

                <Textarea 
                    name="bio" 
                    label="Biografia"
                    value={Bio}
                    onChange={(e) => {setBio(e.target.value)}}
                />
                
                
                
            </fieldset>

            <fieldset>
                <legend>Sobre Aula</legend>

                <Select 
                name="subject" 
                label="Sua Matéria"
                value={subject}
                onChange={(e) => {setsubject(e.target.value)}}
                options={[
                    {option: "Artes", label: "Artes"},
                    {option: "Química", label: "Química"},
                    {option: "Física", label: "Física"},
                    {option: "Biologia", label: "Biologia"},
                    {option: "Matemática", label: "Matemática"},
                    {option: "Inglês", label: "Inglês"},
                    {option: "Português", label: "Português"},
                    {option: "Sociologia", label: "Sociologia"},
                    {option: "Historia", label: "Historia"},
                    {option: "Filosofia", label: "Filosofia"},
                    {option: "Educação Física", label: "Educação Física"},

                    

                ]}
                
                />
                <Input 
                name="cost" 
                label="Valor da Aula/hora"
                value={cost}
                onChange={(e) => {setcost(e.target.value)}}
                />
                
                
               
                
                
                
            </fieldset>
            <fieldset>
                <legend>
                    Horários disponíneis
                    <button type="button" onClick={addNewScheduleItem}>
                        + Novo Horário
                    </button>
                </legend>

                {scheduleItems.map((scheduleItem, index) => {
                    return (
                        <div key={scheduleItem.week_day} className="schedule-item">
                    <Select  
                        name="week_day" 
                        label="Dia da semana"
                        value={scheduleItem.week_day}
                        onChange={e => setScheduleItemsValue(index, 'week_day', e.target.value)}
                        options={[
                            {option: "0", label: "Domingo"},
                            {option: "1", label: "Segunda-feira"},
                            {option: "2", label: "Terça-feira"},
                            {option: "3", label: "Quarta-feira"},
                            {option: "4", label: "Quinta-feira"},
                            {option: "5", label: "Sexta-feira"},
                            {option: "6", label: "Sábado"}
                            
         
                            
        
                        ]}/>


                        <Input 
                            name="from" 
                            label="Das" 
                            type="time"
                            value={scheduleItem.from}
                            onChange={e => setScheduleItemsValue(index, 'from', e.target.value)} 
                            />
                        <Input 
                        name="to" 
                        label="Até" 
                        type="time"
                        value={scheduleItem.to} 
                        onChange={e => setScheduleItemsValue(index, 'to', e.target.value)} 
                        />
                </div>
                    )
                })}
            </fieldset>

            <footer>
                <p>
                    <img src={WarningIcon} alt="Aviso Importante"/>
                    Importante! <br />
                    Preencha todos os dados  

                    
                </p>
                <button type= "submit">
                    Finalizar Cadastro
                </button>
                
            </footer>
            </form>
        </main>
    </div>
    )
}

export default TeacherForm