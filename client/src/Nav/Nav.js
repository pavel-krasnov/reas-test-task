import React from "react";
import "./Nav.scss";

export default class Nav extends React.Component {
    render() {
        const form = this.props.form;
        return (
            <div className="nav">
                <span className={"navElement clickable" + (form === "location" ? " selected" : "")} onClick={() => {this.props.handleClick("location")}}>Město</span>
                <span className="navElement">></span>
                <span className={"navElement clickable" + (form === "property" ? " selected" : "")} onClick={() => {this.props.handleClick("property")}}>Typ nemovitosti</span>
                <span className="navElement">></span>
                <span className={"navElement clickable" + (form === "contacts" ? " selected" : "")} onClick={() => {this.props.handleClick("contacts")}}>Kontakt</span>
            </div>
        )
    }
}