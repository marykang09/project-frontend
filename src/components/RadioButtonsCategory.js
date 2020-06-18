import React from 'react'
import { connect } from 'react-redux'


class RadioButtonsCategory extends React.Component {
    constructor(){
        super()
        this.state = {
            selectedCategory: "All Categories"
        }
    }

    handleOptionChange = (event) => {
        console.log("inside radiobuttons handleoptionchange")

        this.setState({
            selectedCategory: event.target.value
        })
        // let obj = {
        //     selectedCategory: event.target.value
        // }
        if(event.target.value === "All Categories"){
        this.props.clickedAllCategory(event.target.value)
        } else {
        this.props.clickedCategory(event.target.value)
        }
    }

    render(){
        return(
            <div className="radiocontainer">
                <div className="row mt-5">
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
                                checked={this.state.selectedCategory === "All Categories"}
                                onChange={this.handleOptionChange}
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
                                checked={this.state.selectedCategory === "standing"}
                                onChange={this.handleOptionChange}
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
                                checked={this.state.selectedCategory === "seated"}
                                onChange={this.handleOptionChange}
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
                                checked={this.state.selectedCategory === "supine"}
                                onChange={this.handleOptionChange}
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
                                checked={this.state.selectedCategory === "prone"}
                                onChange={this.handleOptionChange}
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
                                checked={this.state.selectedCategory === "arm and leg support"}
                                onChange={this.handleOptionChange}
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
                                checked={this.state.selectedCategory === "arm balance and inversion"}
                                onChange={this.handleOptionChange}
                                className="form-check-input"
                            />
                            Arm Balance & Inversion
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
//     clickedCategory: (option) => { dispatch(clickedCategory(option))},
//     clickedAllCategory: (option) => { dispatch(clickedAllCategory(option))}

// })

// export default connect(null, mapDispatchToProps)(RadioButtonsCategory)
export default RadioButtonsCategory