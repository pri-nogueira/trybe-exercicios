import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="name">
          Nome:
          <input
            id="name"
            type="text"
            name="name"
            maxLength="40"
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="email"
            name="email"
            maxLength="50"
          />
        </label>

        <label htmlFor="cpf">
          CPF:
          <input
            id="cpf"
            type="text"
            name="cpf"
            maxLength="11"
          />
        </label>

        <label htmlFor="endereco">
          Endereço:
          <input
            id="endereco"
            type="text"
            name="enderco"
            maxLength="200"
          />
        </label>

        <label htmlFor="cidade">
          Cidade:
          <input
            id="cidade"
            type="text"
            name="cidade"
            maxLength="28"
          />
        </label>

        <label htmlFor="estado">
          Estado:
          <select
            id="estado"
            type="text"
            name="estado"
            maxLength="11"
          >
            <option value="">Selecione</option>
          </select>
        </label>

        <label htmlFor="house">
          <input
          id="house"
          type="radio"
          name="house"
          />
          Casa
        </label>

        <label htmlFor="apart">
          <input
          id="apart"
          type="radio"
          name="apart"
          />
          Apartamento
        </label>

      </fieldset>
    );
  }
}

export default Profile;
