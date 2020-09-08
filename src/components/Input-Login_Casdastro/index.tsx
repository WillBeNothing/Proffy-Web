import React, { useState, InputHTMLAttributes} from 'react'
import VisibiltyIcon from '@material-ui/icons/Visibility'


import './style.css'



interface InputLabelProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string

}

const InputLabel: React.FC<InputLabelProps> = ({label, children,...rest}) => {
   



   
    return(

        <div className="container">
            <div className="input-container">
            
                <input
                placeholder={label}
                {...rest}
                
                >
                    
                </input>
            
            </div>

            <div>
               {children}
            </div>
        </div>
        
    )
}

export default InputLabel