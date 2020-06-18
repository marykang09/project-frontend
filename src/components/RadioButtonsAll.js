import React from 'react'
import RadioButtonsCategory from './RadioButtonsCategory'
import RadioButtonsAction from './RadioButtonsAction'
import RadioButtonsDifficulty from './RadioButtonsDifficulty.js'

import PoseList from './PosesList'

class RadioButtonsAll extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className="radiobuttontop">
                <div className="radiobuttons">
                    <RadioButtonsCategory/>
                    <RadioButtonsAction/>
                    <RadioButtonsDifficulty/>
                </div>
                <PoseList/>
            </div> 
        )
    }
}

export default RadioButtonsAll