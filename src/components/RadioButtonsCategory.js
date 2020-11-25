import React from 'react'
// import { connect } from 'react-redux'


class RadioButtonsCategory extends React.Component {
    constructor(){
        super()
        this.state = {
            category: "All Categories"
        }
    }

    onChange = (event) => {
        console.log("inside radiobuttons what is event.target?", event.target.value)
        this.setState({ category: event.target.value})

        this.props.updateChange(event.target.value)
    }

    render(){
        return(
            <div className="radiocontainer">
                    <div className="col-sm-12">
                        <form>
                        {/* <form onSubmit={this.handleFormSubmit}> */}
                        <label className="radiolabel">Category</label>
                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="category"
                                value="All Categories"
                                checked={this.state.category === "All Categories"}
                                onChange={this.onChange}
                                className="form-check-input"
                            />
                            All Categories
                            </label>
                        </div>
                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="category"
                                value="standing"
                                checked={this.state.category === "standing"}
                                onChange={this.onChange}
                                className="form-check-input"
                            />
                            Standing
                            </label>
                        </div>
                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="category"
                                value="seated"
                                checked={this.state.category === "seated"}
                                onChange={this.onChange}
                                className="form-check-input"
                            />
                            Seated
                            </label>
                        </div>
                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="category"
                                value="supine"
                                checked={this.state.category === "supine"}
                                onChange={this.onChange}
                                className="form-check-input"
                            />
                            Supine
                            </label>
                        </div>
                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="category"
                                value="prone"
                                checked={this.state.category === "prone"}
                                onChange={this.onChange}
                                className="form-check-input"
                            />
                            Prone
                            </label>
                        </div>
                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="category"
                                value="arm and leg support"
                                checked={this.state.category === "arm and leg support"}
                                onChange={this.onChange}
                                className="form-check-input"
                            />
                            Arm & Leg Support
                            </label>
                        </div>
                        <div className="form-check">
                            <label>
                            <input
                                type="radio"
                                name="category"
                                value="arm balance and inversion"
                                checked={this.state.category === "arm balance and inversion"}
                                onChange={this.onChange}
                                className="form-check-input"
                            />
                            Arm Balance & Inversion
                            </label>
                        </div>
                        <div className="form-group">
                        </div>
                        </form>
                    </div>
            </div>
        )        
    }
        
    
}

export default RadioButtonsCategory

// const mapDispatchToProps = (dispatch) => ({
//     clickedCategory: (option) => { dispatch(clickedCategory(option))},
//     clickedAllCategory: (option) => { dispatch(clickedAllCategory(option))}

// })

// export default connect(null, mapDispatchToProps)(RadioButtonsCategory)
