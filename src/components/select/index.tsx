import React, {SelectHTMLAttributes} from "react"
import './style.css'






interface Props extends SelectHTMLAttributes<HTMLSelectElement>{
    label: string
    name: string
    options: Array<{
        option: string
        label: string
    }>
}

const Select: React.FC<Props> = ({label, name, options, ...rest}) => {
   return(
        <div className="select-block">
        <label htmlFor={name}>{label}</label>
        <select defaultValue="" id={name} {...rest}>
            <option value="" disabled  hidden>Selecione uma opção</option>
           {options.map(option => {
               return (
               <option key={option.option} value={option.option}>{option.label}</option>
               )
           })} 
        </select>
    </div>
    )
}

export default Select