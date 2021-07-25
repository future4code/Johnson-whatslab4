import React from "react";
import "./style.css";
import Message from "../Message";
import MessageUser2 from "../MessageUser2";

class Chat extends React.Component {
  state = {
    mensagens: [],
    mensagens2: [],
    valorMensagem: "",
    valorNome: "",
  };

  onChangeNome = (e) => {
    this.setState({ valorNome: e.target.value });
  };

  onChangeMensagem = (e) => {
    this.setState({ valorMensagem: e.target.value });
  };

  adiconarMensagem = () => {
    if (this.state.valorNome.toUpperCase() === "EU") {
      const novasMensagem = {
        texto: this.state.valorMensagem,
        usuario: this.state.valorNome,
      };
      this.setState({
        mensagens: [...this.state.mensagens, novasMensagem],
        valorMensagem: "",
        valorNome: "",
      });
    } else {
      const novasMensagem = {
        texto: this.state.valorMensagem,
        usuario: this.state.valorNome,
      };
      this.setState({
        mensagens: [...this.state.mensagens, novasMensagem],
        valorMensagem: "",
        valorNome: "",
      });
    }
    // console.log("usuario", this.state.usuario);
    // console.log(this.state.mensagens);
  };

  render() {
    return (
      <div className="container">
        <MessageUser2 mensagens={this.state.mensagens2} />
        <Message mensagens={this.state.mensagens}  />
        <div className="formChat">
          <input
            onChange={this.onChangeNome}
            value={this.state.valorNome}
            type="text"
            placeholder="Nome"
            className="inputMsg"
          />
          <input
            onChange={this.onChangeMensagem}
            value={this.state.valorMensagem}
            type="text"
            placeholder="Mensagem"
            className="inputMsg"
          />
          <button onClick={this.adiconarMensagem} type="submit">
            Enviar
          </button>
        </div>
      </div>
    );
  }
}
export default Chat;
