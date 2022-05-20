import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      age: '',
      confirmar: '',
    }
  }

  handleChance = ({ target }) => {
    const { name, value } = target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }
  
  render() {
    const { name, email, age, confirmar } = this.state
    return (
      <div className="form-css">
        <h1>Estado do React</h1>
        <form className="form">
          <label htmlFor="name">
            Nome:
          <input
          id="name"
          name="name"
          type="text"
          value={ name }
          onChange={ this.handleChance }
          />
          </label>

          <label htmlFor="email">
            Email:
          <input
          id="email"
          name="email"
          type="email"
          value={ email }
          onChange={ this.handleChance }
          />
          </label>

          <label>
            Idade:
          <select
          name="age"
          value={ age }
          onChange={ this.handleChance }
          >
            <option value="">Selecione</option>
            <option value="adult">Maior que 18</option>
            <option value="underage">Menor que 18</option>
          </select>
          </label>
          
          <label>
            Salvar
          <input
          type="checkbox"
          name="confirmar"
          value={ confirmar }
          onChance={ this.handleChance }
          />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
