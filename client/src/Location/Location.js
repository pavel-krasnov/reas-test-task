import React from "react";
import "../index.scss";
import "./Location.scss";

export default class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validInput: false,
            locations: [
                "Praha",
                "Brno",
                "Ostrava",
                "Plzeň",
                "Liberec",
                "Olomouc",
                "České Budějovice",
                "Ústí nad Labem",
                "Hradec Králové",
                "Pardubice",
                "Zlín",
                "Karlovy Vary",
                "Tábor"
            ]
        }
    }
    render() {
        const gridItems = this.state.locations.map((item, index) => {
            return (
                <div className="gridItem" key={index}>
                    <div className="radioContainer">
                        <input  type="radio"
                                id={item}
                                name="location"
                                value={item}
                                onChange={(event) => {
                                    this.props.handleInputChange(event);
                                    this.setState({validInput: true});
                                }} 
                        />
                        <label htmlFor={item} className="radioLabel">
                            {item}
                            <span className="checkMark"></span>
                        </label>
                        
                    </div>
                </div>
            )
        });
        return (
            <div className="Location container">
                <h1>Kde se nachází vaše nemovitost?</h1>
                <p>Vyberte město</p>
                <form>
                    <div className="gridContainer">
                        {gridItems}
                    </div>
                    <button className="nextBtn"
                            onClick={(event) => {
                                event.preventDefault();
                                this.state.validInput ? this.props.handleClick("property") : alert("Vyberte město")
                            }}>
                            Pokračovat
                    </button>
                </form>
            </div>
        );
    }
}