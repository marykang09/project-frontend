import React from 'react'
import { connect } from 'react-redux'


class RadioButtonsDifficulty extends React.Component {
    constructor(){
        super()
        this.state = {
            difficulty: "All Difficulties"
        }
    }

    onChange = (event) => {
        this.setState({ difficulty: event.target.value})

        this.props.updateChange(event.target.value)
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
                                checked={this.state.difficulty === "All Difficulties"}
                                onChange={this.onChange}
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
                                checked={this.state.difficulty === "beginner"}
                                onChange={this.onChange}
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
                                checked={this.state.difficulty === "intermediate"}
                                onChange={this.onChange}
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
                                checked={this.state.difficulty === "advanced"}
                                onChange={this.onChange}
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

// const mapDispatchToProps = (dispatch) => ({
//     clickedDifficulty: (obj) => { dispatch(clickedDifficulty(obj))}
// })

// export default connect(null, mapDispatchToProps)(RadioButtonsDifficulty)
export default RadioButtonsDifficulty