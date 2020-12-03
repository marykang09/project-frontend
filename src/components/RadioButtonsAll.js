import React from 'react'
import Pose from './Pose'
import { connect } from 'react-redux'

class RadioButtonsAll extends React.Component {

    constructor(){
        super()
        this.state = {
            categoryAllOn: true,
            category: "All Categories",
            categoryPoses: [],
            actionAllOn: true,
            action: "All Actions",
            actionPoses: [],
            difficultyAllOn: true,
            difficulty: "All Difficulties",
            difficultyPoses: []
        }
    }

    componentDidMount(){
        console.log("component did mount")
        const allPoses = this.props.poses
        
        this.setState({
            categoryPoses: allPoses,
            actionPoses: allPoses,
            difficultyPoses: allPoses
        })
    }

    onCategoryChange = (event) => {
        this.setState({ category: event.target.value})

        let allPoses = this.props.poses
        if (event.target.value!=="All Categories"){
            this.setState({
                categoryPoses: allPoses.filter(p => p.category === event.target.value),
                categoryAllOn: false
            })
        } else {
            this.setState({
                categoryPoses: allPoses,
                categoryAllOn: true
            })
        }
    }

    onActionChange = (event) => {
        this.setState({ action: event.target.value})

        let allPoses = this.props.poses
        if (event.target.value!=="All Actions"){
            this.setState({
                actionPoses: allPoses.filter(p => p.action === event.target.value),
                actionAllOn: false
            })
        } else {
            this.setState({
                actionPoses: allPoses,
                actionAllOn: true
            })
        }
    }

    onDifficultyChange = (event) => {
        this.setState({ difficulty: event.target.value})

        let allPoses = this.props.poses
        if (event.target.value!=="All Difficulties"){
            this.setState({
                difficultyPoses: allPoses.filter(p => p.difficulty === event.target.value),
                difficultyAllOn: false
            })
        } else {
            this.setState({
                difficultyPoses: allPoses,
                difficultyAllOn: true
            })
        }
    }


    render(){
        let filteredPoses = this.state.categoryPoses.filter( pose => this.state.actionPoses.includes(pose) && this.state.difficultyPoses.includes(pose))
        console.log("filteredPoses", filteredPoses)

        let posesToShow = this.state.categoryAllOn && this.state.actionAllOn && this.state.difficultyAllOn ? this.props.poses : filteredPoses
        console.log("posesToShow", posesToShow)
        // let showFilteredPoses = this.state.filteredPoses.length > 0 ? this.state.filteredPoses : this.props.poses
        let searchFilteredPoses = posesToShow.filter( pose => 
                                                                pose.english_name.toLowerCase().includes(this.props.searchText.toLowerCase()) ||
                                                                pose.sanskrit_name.toLowerCase().includes(this.props.searchText.toLowerCase()))


        return(
            <section id="radiobuttonsall">
                <div className="poses-grid">
                    <div className="radiobuttons">
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
                                    onChange={this.onCategoryChange}
                                    className="form-check-input"
                                />
                                <span className="checkmark"></span>
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
                                    onChange={this.onCategoryChange}
                                    className="form-check-input"
                                />
                                <span className="checkmark"></span>
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
                                    onChange={this.onCategoryChange}
                                    className="form-check-input"
                                />
                                <span className="checkmark"></span>
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
                                    onChange={this.onCategoryChange}
                                    className="form-check-input"
                                />
                                <span className="checkmark"></span>
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
                                    onChange={this.onCategoryChange}
                                    className="form-check-input"
                                />
                                <span className="checkmark"></span>
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
                                    onChange={this.onCategoryChange}
                                    className="form-check-input"
                                />
                                <span className="checkmark"></span>
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
                                    onChange={this.onCategoryChange}
                                    className="form-check-input"
                                />
                                <span className="checkmark"></span>
                                Arm Balance & Inversion
                                </label>
                            </div>
                            <div className="form-group">
                            </div>
                        </form>

                        <form>
                            <label className="radiolabel">Action</label>
                            <div className="form-check">
                                <label>
                                <input
                                    type="radio"
                                    name="action"
                                    value="All Actions"
                                    checked={this.state.action === "All Actions"}
                                    onChange={this.onActionChange}
                                    className="form-check-input"
                                />
                                <span className="checkmark"></span>
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
                                    onChange={this.onActionChange}
                                    className="form-check-input"
                                />
                                <span className="checkmark"></span>
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
                                    onChange={this.onActionChange}
                                    className="form-check-input"
                                />
                                <span className="checkmark"></span>
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
                                    onChange={this.onActionChange}
                                    className="form-check-input"
                                />
                                <span className="checkmark"></span>
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
                                    onChange={this.onActionChange}
                                    className="form-check-input"
                                />
                                <span className="checkmark"></span>
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
                                    onChange={this.onActionChange}
                                    className="form-check-input"
                                />
                                <span className="checkmark"></span>
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
                                    onChange={this.onActionChange}
                                    className="form-check-input"
                                />
                                <span className="checkmark"></span>
                                Neutral
                                </label>
                            </div>
                            <div className="form-group">
                            </div>
                            </form>

                            <form>
                            <label className="radiolabel">Difficulty</label>
                            <div className="form-check">
                                <label>
                                <input
                                    type="radio"
                                    name="difficulty"
                                    value="All Difficulties"
                                    checked={this.state.difficulty === "All Difficulties"}
                                    onChange={this.onDifficultyChange}
                                    className="form-check-input"
                                />
                                <span className="checkmark"></span>
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
                                    onChange={this.onDifficultyChange}
                                    className="form-check-input"
                                />
                                <span className="checkmark"></span>
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
                                    onChange={this.onDifficultyChange}
                                    className="form-check-input"
                                />
                                <span className="checkmark"></span>
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
                                    onChange={this.onDifficultyChange}
                                    className="form-check-input"
                                />
                                <span className="checkmark"></span>
                                Advanced
                                </label>
                            </div>
                            <div className="form-group">
                            </div>
                        </form>

                    </div>

                    <div className="pose-list">
                            {searchFilteredPoses.length > 0 ? searchFilteredPoses.map(pose => (
                                <Pose
                                    classname="card-pose"
                                    key={pose.id}
                                    pose={pose}
                                    editing={false}
                                    sequence={""} />
                            )) :  <h3> no poses found, please try a different search </h3>}   
                    </div>
                </div>
            </section> 
        )
    }
}

const mapStateToProps = (state) => {

    return {
        searchText: state.searchText,
        poses: state.poses.filter(
            pose => 
                pose.english_name.toLowerCase().includes(state.searchText.toLowerCase()) ||
                pose.sanskrit_name.toLowerCase().includes(state.searchText.toLowerCase())
        )
    }
}

export default connect(mapStateToProps)(RadioButtonsAll)