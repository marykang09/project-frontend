import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 2.0em;
  text-align: center;
  color: white;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: #a3b9c9;
`;

const TitleWrapper = styled.section`
    padding: 2em;
    background: #ABDAE1;
    color: white;
    font-size: 2.5em;
`;

const PoseDetail = (props) => {

    return (!props.pose ? null : 
    //need to do this to account for INIT state = []
        <div>
            <h1> POSE DETAILS </h1>
            <br></br>
            <div className="line"></div>
            <br></br>
            <img 
                src={props.pose.img_url}
                width={400}
                height={400}
                mode="fit"
                ></img>
            <div>
                <TitleWrapper>
                    <Title> 
                        <h3>
                            NAME: {props.pose.english_name}
                            <br></br>
                            SANSKRIT NAME: {props.pose.sanskrit_name}
                                <br>
                                </br>
                                <br>
                                </br>

                        </h3>
                    </Title>
                </TitleWrapper>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {

    let poseId = parseInt(ownProps.match.params.id)
    //have to parseInt because the params id is a string

    return {
        pose: state.poses.find(pose => pose.id === poseId)
    }
}

export default withRouter(connect(mapStateToProps)(PoseDetail))
// export default PoseDetail
