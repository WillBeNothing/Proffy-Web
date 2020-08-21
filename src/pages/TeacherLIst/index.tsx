import React, { useState, FormEvent } from 'react'
import './style.css'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/input'
import Select from '../../components/select'
import api from '../../services/api'
import TeacherItem ,{Teacher } from '../../components/TeacherItem'






function TeacherList() {



    const [subject, setsubject] = useState("")
    const [week_day, setweek_day] = useState("")
    const [time, settime] = useState("")
    const [Teacher, setTeacher] = useState([])


    async function searchTeachers(e: FormEvent) {

        e.preventDefault()

       const response =  await api.get("classes", {
            params : {
                subject,
                week_day,
                time
            }
        }

        
        )

        setTeacher(response.data)

    }
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proofys disponíveis"> 
                <form className="searchTeachers" onSubmit={searchTeachers}>

                     
                    <Select 
                    name="subject" 
                    label="Matéria"
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
    
                        
    
                    ]}/>
                     <Select 
                    name="week_day" 
                    label="Dia da semana"
                    value={week_day}
                    onChange={(e) => {setweek_day(e.target.value)}}
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
                    type="time" 
                    name="time" 
                    label="Horário"
                    value={time}
                    onChange={(e) => {
                    settime(e.target.value)}}
                    />

                    <button type="submit">
                        Buscar
                    </button>

                    
                    
                </form>
            </PageHeader>

            <main>
               {Teacher.map((teacher: Teacher) => {
                   return (
                        <TeacherItem key={teacher.id} teacher={teacher}/>
                   )
               })}
            </main>
        </div>
    )
}

export default TeacherList