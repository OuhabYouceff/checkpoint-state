import React from "react";
import img from "./DSC03552.JPG";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
            fullname: "Mr Moon",
            bio: "single reason: 12033.#@%$ km away from Ms Sun",
            imgSrc: img,
            profession: "Night lighter",
            },
            show: false,
            Render: {display: 'initial'},
            
        };
    }

handleShow = () => {
    this.setState({
    show: (this.state.show = true),
    });
    console.log(this.state.show);
};
handleUnshow = () => {
    this.setState({
    show: (this.state.show = false),
    });
    console.log(this.state.show);
};




render() {
    return (
    <div>
        <button className="bshow" onClick={this.handleShow}>show</button>
        <button className="bshow" onClick={this.handleUnshow}>Unshow</button>
        {this.state.show ? (
        <div className="something">
            <img
            className="photo"
            style={{
                width: 500,
                height: 500,
            }}
            src={this.state.person.imgSrc}
            />

            <h3 className="title">Fullname:</h3>
            <label className="title2">{this.state.person.fullname}</label>
            <h3 className="title">Bio:</h3>
            <label className="title2">{this.state.person.bio}</label>
            <h3 className="title">Profession:</h3>
            <label className="title2">{this.state.person.profession}</label>
            <br></br>
            {this.props.time}
            
        </div>
        ) : (   
            <h1 className="nothing">Nothing in here :)</h1>
        )}
    </div>
    );
}
}
