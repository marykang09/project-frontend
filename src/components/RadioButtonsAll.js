import React from 'react'
import RadioButtonsCategory from './RadioButtionsCategory'
import RadioButtonsAction from './RadioButtonsAction'
import RadioButtonsDifficulty from './RadioButtonsDifficulty.js'

class RadioButtonsAll extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className="radiobuttons">
                <RadioButtonsCategory/>
                <RadioButtonsAction/>
                <RadioButtonsDifficulty/>
               
            </div>
        )
    }
}

export default RadioButtonsAll