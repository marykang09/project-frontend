import React from 'react'

class RadioButtonsDifficulty extends React.Component {
    constructor(){
        super()
        this.state = {
            selectedDifficulty: "All Difficulties"
        }
    }

    handleOptionChange = (event) => {
        this.setState({
            selectedDifficulty: event.target.value
        })
    }

    render(){
        return(
            <div className="radiocontainer">
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <form>
                        {/* <form onSubmit={this.handleFormSubmit}> */}
                        <label className="radiolabel">Difficulty</label>
                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="difficulty"
                                value="All Difficulties"
                                checked={this.state.selectedDifficulty === "All Difficulties"}
                                onChange={this.handleOptionChange}
                                className="form-check-input"
                            />
                            All Difficulties
                            </label>
                        </div>
                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="difficulty"
                                value="beginner"
                                checked={this.state.selectedDifficulty === "beginner"}
                                onChange={this.handleOptionChange}
                                className="form-check-input"
                            />
                            Beginner
                            </label>
                        </div>
                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="difficulty"
                                value="intermediate"
                                checked={this.state.selectedDifficulty === "intermediate"}
                                onChange={this.handleOptionChange}
                                className="form-check-input"
                            />
                            Intermediate
                            </label>
                        </div>
                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="difficulty"
                                value="advanced"
                                checked={this.state.selectedDifficulty === "advanced"}
                                onChange={this.handleOptionChange}
                                className="form-check-input"
                            />
                            Advanced
                            </label>
                        </div>
                        <div className="form-group">
                            {/* <button className="btn btn-primary mt-2" type="submit">
                            Save
                            </button> */}
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        );        
    }
        
    
}

export default RadioButtonsDifficulty
