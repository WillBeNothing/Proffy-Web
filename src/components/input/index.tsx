import React, {InputHTMLAttributes} from "react"
import './style.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string
    name: string
    money?:boolean
}

const Input: React.FC<InputProps> = ({label, name, money, ...rest}) => {
    return(
        <div className="input-block">
        <label htmlFor={name}>{label}</label> <br />
        <input type="text" id={name} {...rest}/>
        </div>
       
    
    )
}

export default Input