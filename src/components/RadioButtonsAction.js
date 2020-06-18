import React from 'react'
import { connect } from 'react-redux'


class RadioButtonsAction extends React.Component {
    constructor(){
        super()
        this.state = {
            action: "All Actions"
        }
    }


    onChange = (event) => {
        this.setState({ action: event.target.value})

        this.props.updateChange(event.target.value)
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
                                checked={this.state.action === "All Actions"}
                                onChange={this.onChange}
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
                                checked={this.state.action === "back bend"}
                                onChange={this.onChange}
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
                                checked={this.state.action === "forward bend"}
                                onChange={this.onChange}
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
                                checked={this.state.action === "lateral bend"}
                                onChange={this.onChange}
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
                                checked={this.state.action=== "twist"}
                                onChange={this.onChange}
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
                                checked={this.state.action === "balance"}
                                onChange={this.onChange}
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
                                checked={this.state.action=== "neutral"}
                                onChange={this.onChange}
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

// const mapDispatchToProps = (dispatch) => ({
//     clickedAction: (obj) => { dispatch(clickedAction(obj))}
// })

// export default connect(null, mapDispatchToProps)(RadioButtonsAction)
export default RadioButtonsAction