import React from 'react'
import SearchBar from './SearchBar'
import RadioButtonsAll from './RadioButtonsAll'

const PosesPage = (props) => {

    return (
        <section id="poses-page">
            <div className="poses">
                    <h1 className="page-headers"> BROWSE POSES </h1>
                    <div className="line"></div>
                    <br></br>
                    <h3> search by english or sanskrit name </h3>
                    <SearchBar/>
                    <br></br>
                    <RadioButtonsAll/>
            </div>
        </section>
    )
}


export default PosesPage