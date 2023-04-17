import React from "react";
import Card from "react-bootstrap/Card";
import "./TeamCard.css";

export default function TeamCard (props) {
    return (
        <Card className="team-card" style={{ width: "90%"}}>
            <div className="title-container">            
            <h4>{props.fullName}</h4>
            <a href={props.linkedinUrl} target="_blank"><img id="linkedin-img" src="https://i.imgur.com/F8Z9gM5.png" /></a>
            </div>
            <Card.Img className="team-member-img" src={props.src} title={props.fullName} />
            <Card.Text>{props.description}</Card.Text>
        </Card>
    )
}