import React from "react";
import "./../sass/formulario.scss";

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Nombre: "",
      Email: "",
      Contact: null,
      Message: "",
    };
  }

  handleInputChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    const htmlmsg = document.getElementById("label_msg");
    const htmlmsg_border = document.getElementById("message");
    const borderstyle = "3px solid red";
    this.setState({ [nam]: val });
    let msg = this.state.Message;
    if (msg.length > 100) {
      htmlmsg_border.style.border = borderstyle;
      htmlmsg.textContent = "El mensaje no puede exceder 100 caracteres";
    }
    if (msg.length < 100) {
      htmlmsg.textContent = "Mensaje";
      htmlmsg_border.style.border = "none";
    }
  };

  mySubmitHandler = (event) => {
    const pattern = new RegExp("^[A-Z]+$", "i");
    let numero = this.state.Contact;
    let nombre = this.state.Nombre;
    if (!Number(numero)) {
      alert("COntacto es obligatorio, y no puede contener letras");
    }
    if (!pattern.test(nombre)) {
      alert("El nombre es obligatorio y no puede contener numeros");
    }
    if (nombre.length < 1) {
      alert("Al parecer tienen un nombre muy extraño, intenta con otro...");
    }
  };
  render() {
    return (
      <div className="form_container">
        <form onSubmit={this.mySubmitHandler} className="form_form">
          <h1>Hello {this.state.Nombre} </h1>
          <div className="form_container__rows">
            <label>Nombre</label>
            <input
              type="text"
              id="name"
              name="Nombre"
              onChange={this.handleInputChange}
              placeholder="Your name here :D"
            ></input>
          </div>
          <div className="form_container__rows">
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="Email"
              onChange={this.handleInputChange}
              placeholder="Your Email here :)"
            ></input>
          </div>
          <div className="form_container__rows">
            <label>Numero de contacto</label>
            <input
              type="number"
              id="contact"
              name="Contact"
              onChange={this.handleInputChange}
              placeholder="Your number of contact here c:"
            ></input>
          </div>
          <div className="form_container__rows">
            <label id="label_msg">Mensaje</label>
            <textarea
              id="message"
              name="Message"
              onChange={this.handleInputChange}
              placeholder="Your message here :*"
            ></textarea>
          </div>
          <div className="Boton">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}
export default Formulario;
