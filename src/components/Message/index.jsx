import React from "react";
import "./style.css";
import styled from "styled-components";

const MensagemUnitaria = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #1d8fe1; */
  border-radius: 8px;
  width: 100%;
  height: auto;
  padding: 20px;
  position: absolute;
  /* right: 30px;
  top: 50px; */
  /* align-self: flex-end; */
  color: #f7f7f7;
  line-height: 25px;
  align-items: flex-start;
  word-wrap: break-word;

  margin-right: 1.5em;
`;

const Divzinha = styled.div`
  margin: 10px;
  color: black;
  background: lightpink;
  border-radius: 8px;
  padding: 0.9em 0.8em;
  font-weight: 450;
  line-height: 1.3;
  box-shadow: 3px 2px 1px black;
  word-wrap: break-word;
  max-width: 300px;
`;
const Divzinha2 = styled.div`
  margin: 10px;
  color: black;
  background: #ddf7c8;
  border-radius: 8px;
  padding: 0.9em 0.8em;
  font-weight: 450;
  line-height: 1.3;
  box-shadow: 3px 2px 1px black;
  align-self: flex-end;
  word-wrap: break-word;
  max-width: 300px;
`;

const Messages = (props) => {
  return (
    <MensagemUnitaria>
      {props.mensagens.map((mensagem, indice) => {
        console.log("aquiestou", mensagem);
        if (mensagem.usuario === "eu" || mensagem.usuario === "EU" || mensagem.usuario === "") {
          return (
            <Divzinha2 key={indice}>
              <p>{mensagem.texto}</p>
            </Divzinha2>
          );
        } else {
          return (
            <Divzinha key={indice}>
              <h3>{mensagem.usuario}</h3>
              <p>{mensagem.texto}</p>
            </Divzinha>
          );
        }
      })}
      ;
    </MensagemUnitaria>
  );
};

export default Messages;
