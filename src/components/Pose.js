import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const Pose = (props) => {
    return (

        <Link className="item" to={`/poses/${props.pose.id}`} >
            <div>
            <Card border="light" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.pose.img_url} />
            <Card.Body>
                <Card.Title> {props.pose.english_name} </Card.Title>
                <Card.Text>
                             {props.pose.sanskrit_name} 
                </Card.Text>
            </Card.Body>
            </Card>
            </div>
        </Link>
    )
}

export default Pose