import React from "react";
import "../index.scss";
import "./Contacts.scss";

export default class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            tel: "",
            agreed: false,
            contactsItems: [
                {
                    title: "Jméno a příjmení",
                    name: "name",
                    type: "text"
                },
                {
                    title: "E-mail",
                    name: "email",
                    type: "email"
                },
                {
                    title: "Telefon",
                    name: "tel",
                    type: "tel"
                }
            ]
        }
        this.isInputValid = this.isInputValid.bind(this);
    }

    isInputValid() {
        const isNameValid = this.state.name.split(" ").length >= 2;
        const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email);
        const isTelValid = /([+]?\d{1,3}[. \s]?)?(\d{9}?)/g.test(this.state.tel);
        const isAgreed = this.state.agreed;
        let message = "Uved'te správné údaje:\n";
        message += isNameValid ? "" : "- Jmeno ve formátu 'Jan Čech'\n";
        message += isEmailValid ? "" : "- E-mail ve formátu jancech@seznam.cz\n";
        message += isTelValid ? "" : "- Telefonní číslo ve formátu +420123456789\n";
        message += isAgreed ? "" : "- Musíte zaškrtnout políčko souhlasu!";
        return (isNameValid && isEmailValid && isTelValid && isAgreed) || message;
    }

    render() {
        const contactsElements = this.state.contactsItems.map((item, index) => {
            return (
                <label key={index} className="contactsLabel">
                    {item.title}
                    <input  className="contactsInput"
                            type={item.type}
                            name={item.name}
                            onChange={(event) => {
                                this.props.handleInputChange(event);
                                this.setState({[item.name]: event.target.value});
                            }}
                    />
                </label>
            );
        });
        return (
            <div className="Contacts container">
                <h1>Zadejte vaše kontaktní údaje</h1>
                <p>Představte se</p>
                <form className="contactsForm">
                    {contactsElements}
                    <label className="contactsCheckboxLabel" onChange={() => {this.setState({agreed: !this.state.agree})}}>
                        Souhlasím se zpracováním osobních údajů pro obchodní účely
                        <input className="contactsCheckbox" type="checkbox" />
                        <span className="checkMark"></span>
                    </label>
                    <button className="nextBtn"
                            onClick={(event) => {
                                event.preventDefault();
                                const trueOrMessage = this.isInputValid();
                                trueOrMessage === true ? this.props.makePost(event) : alert(trueOrMessage);
                            }}>
                            Odeslat
                    </button>
                </form>
            </div>
        );
    }
}