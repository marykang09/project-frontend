import React from 'react'
import { Link } from 'react-router-dom'

const Pose = (props) => {
    return (
        <Link className="item" to={`/poses/${props.pose.id}`} >
            <div>
                    <h2> {props.pose.english_name} </h2>
                <p>
                    {/* <img src={props.pose.img_url}></img> */}
                </p>
            </div>
        </Link>
    )
}

export default Pose