import React from "react";
import Nav from "../Nav/Nav";
import Location from "../Location/Location";
import Property from "../Property/Property";
import Contacts from "../Contacts/Contacts";
import "../index.scss";
import axios from "axios";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: "location",
            location: "",
            property: "",
            name: "",
            email: "",
            tel: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.makePost = this.makePost.bind(this);
    }

    handleClick(newForm) {
        this.setState({
            form: newForm
        });
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    makePost(event) {
        event.preventDefault();
        axios.post("/clients", {
            location: this.state.location,
            property: this.state.property,
            name: this.state.name,
            email: this.state.email,
            tel: this.state.tel
        })
        .then(res => {
            console.log(res);
            const client = res.data.client;
            alert(`Stvořen a uložen do DB klient se jmenem ${client.name}, e-mailem ${client.email} a telefonem ${client.tel}, který chce prodat ${client.property} ve městě ${client.location} ;)`);
        })
        .then(err => {
            console.log(err);
        });
    }

    render() {
        let form;
        switch(this.state.form) {
            case "property":
                form = <Property handleClick={this.handleClick} handleInputChange={this.handleInputChange} />;
                break;
            case "contacts":
                form = <Contacts handleInputChange={this.handleInputChange} makePost={this.makePost} />;
                break;
            default:
                form = <Location handleClick={this.handleClick} handleInputChange={this.handleInputChange} />;
        }
        return (
            <div className="App">
                <Nav form={this.state.form} handleClick={this.handleClick} />
                {form}
            </div>
        );
    }
}