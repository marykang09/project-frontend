import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap'

const Pose = (props) => {
    console.log("Poses's props when rendered by Form:", props)

    return (
        
         <div>
            <Card border="light" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.pose.img_url} />
            <Card.Body>
                <Link className="item" to={`/poses/${props.pose.id}`} >
                    <Card.Title> {props.pose.english_name} </Card.Title>
                </Link>
                    <Card.Text>
                                {props.pose.sanskrit_name} <br></br>
                                {props.editing ? (
                                            <>
                                            <style type="text/css">
                                                {`
                                                .btn-flat {
                                                background-color: #ABDAE1;
                                                color: white;
                                                }
                        
                                                .btn-md {
                                                padding: 1rem 1.5rem;
                                                font-size: 1.5rem;
                                                }
                                                `}
                                            </style>
                        
                                            <Button variant="flat" size="md">
                                                Add
                                            </Button>
                                            </> ) : null
                                }
                    </Card.Text>
            </Card.Body>
            </Card>
        </div>
        
    )
}


export default Pose