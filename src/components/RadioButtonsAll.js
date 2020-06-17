import React from 'react'
import RadioButtonsCategory from './RadioButtionsCategory'
import RadioButtonsAction from './RadioButtonsAction'
import RadioButtonsDifficulty from './RadioButtonsDifficulty.js'
import SearchBar from './SearchBar'

class RadioButtonsAll extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className="radiobuttontop">
                <SearchBar/>
                <div className="radiobuttons">
                    <RadioButtonsCategory/>
                    <RadioButtonsAction/>
                    <RadioButtonsDifficulty/>
                
                </div>
            </div>
        )
    }
}

export default RadioButtonsAll