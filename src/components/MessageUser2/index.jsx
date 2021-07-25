import React from "react";
import "./style.css";

const MessageUser2 = (props) => {
  const renderizarMensagens = () => {
    return props.mensagens.map((mensagem, indice) => (
      <div className="divzinha" key={indice}>
        <h3><strong>{mensagem.usuario}</strong></h3>
        <p>{mensagem.texto}</p>
      </div>
    ));
  };
  return <div >{renderizarMensagens()}</div>;
};
export default MessageUser2;
