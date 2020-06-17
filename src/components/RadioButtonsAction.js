import React from 'react'

class RadioButtonsAction extends React.Component {
    constructor(){
        super()
        this.state = {
            selectedAction: "All Actions"
        }
    }

    handleOptionChange = (event) => {
        this.setState({
            selectedAction: event.target.value
        })
    }

    render(){
        return(
            <div className="radiocontainer">
                <div className="row mt-5">
                    <div className="col-sm-12">
                        <form>
                        {/* <form onSubmit={this.handleFormSubmit}> */}
                        <label className="radiolabel">Action</label>
                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="action"
                                value="All Actions"
                                checked={this.state.selectedAction === "All Actions"}
                                onChange={this.handleOptionChange}
                                className="form-check-input"
                            />
                            All Actions
                            </label>
                        </div>
                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="action"
                                value="back bend"
                                checked={this.state.selectedAction === "back bend"}
                                onChange={this.handleOptionChange}
                                className="form-check-input"
                            />
                            Back Bend
                            </label>
                        </div>
                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="action"
                                value="forward bend"
                                checked={this.state.selectedAction === "forward bend"}
                                onChange={this.handleOptionChange}
                                className="form-check-input"
                            />
                            Forward Bend
                            </label>
                        </div>
                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="action"
                                value="lateral bend"
                                checked={this.state.selectedAction === "lateral bend"}
                                onChange={this.handleOptionChange}
                                className="form-check-input"
                            />
                            Lateral Bend
                            </label>
                        </div>
                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="action"
                                value="twist"
                                checked={this.state.selectedAction === "twist"}
                                onChange={this.handleOptionChange}
                                className="form-check-input"
                            />
                            Twist
                            </label>
                        </div>
                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="action"
                                value="balance"
                                checked={this.state.selectedAction === "balance"}
                                onChange={this.handleOptionChange}
                                className="form-check-input"
                            />
                            Balance
                            </label>
                        </div>
                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="action"
                                value="neutral"
                                checked={this.state.selectedAction === "neutral"}
                                onChange={this.handleOptionChange}
                                className="form-check-input"
                            />
                            Neutral
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

export default RadioButtonsAction