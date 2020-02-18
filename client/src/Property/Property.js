import React from "react";
import "../index.scss";
import "./Property.scss";

export default class Property extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validInput: false,
            propertyTypes: [
                "Byt",
                "Dům",
                "Komerční objekt",
                "Jiné"
            ]
        }
    }
    render() {
        const propertyItems = this.state.propertyTypes.map((item, index) => {
            return (
                <div key={index} className="radioContainer">
                    <input  id={item}
                            type="radio"
                            name="property"
                            value={item}
                            onChange={(event) => {
                                this.props.handleInputChange(event);
                                this.setState({validInput: true});
                            }} 
                    />
                    <label className="radioLabel" htmlFor={item}>{item}</label>
                    <span className="checkMark"></span>
                </div>
            );
        });
        return (
            <div className="Property container">
                <h1>O jakou nemovitost se jedná?</h1>
                <p>Vyberte typ nemovitosti</p>
                <form>
                    {propertyItems}
                    <button className="nextBtn"
                            onClick={(event) => {
                                event.preventDefault();
                                this.state.validInput ? this.props.handleClick("contacts") : alert("Vyberte typ nemovitosti");
                            }}>
                            Pokračovat
                    </button>
                </form>
            </div>
        );
    }
}