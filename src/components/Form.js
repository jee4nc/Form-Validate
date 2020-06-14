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

    // if (nam === "Contact") {
    //   if (!Number(val)) {
    //     alert("Debes escribir un numero en Contacto");
    //   }
    // }
    this.setState({ [nam]: val });
  };

  mySubmitHandler = (event) => {
    let numero = this.state.Contact;
    if (!Number(numero)) {
      alert("En contacto debe ir un numero");
    }
    console.log();
  };
  render() {
    return (
      <div className="form_container">
        <form onSubmit={this.mySubmitHandler}>
          <h1>Hello {this.state.Nombre} </h1>
          <h1>Tu correo es : {this.state.Email}</h1>
          <div className="form_container__rows">
            <label>Nombre</label>
            <input
              type="text"
              id="name"
              name="Nombre"
              onChange={this.handleInputChange}
            ></input>
          </div>
          <div className="form_container__rows">
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="Email"
              onChange={this.handleInputChange}
            ></input>
          </div>
          <div className="form_container__rows">
            <label>Numero de contacto</label>
            <input
              type="number"
              id="contact"
              name="Contact"
              onChange={this.handleInputChange}
            ></input>
          </div>
          <div className="form_container__rows">
            <label>Mensaje</label>
            <textarea
              id="message"
              name="Message"
              onChange={this.handleInputChange}
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
