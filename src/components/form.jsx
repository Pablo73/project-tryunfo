import React, { Component } from 'react';

export class Form extends Component {
  render() {
    return (
      <form>
        <labe>
          Nome
          <input
            data-testid="name-input"
            name="name"
            type="text"
            // value={value}
            // onChange={handleChange}
          />
        </labe>
        <labe>
          Descrição
          <input
            data-testid="description-input"
            name="description"
            type="textarea"
            // value={value}
            // onChange={handleChange}
          />
        </labe>
        <labe>
          Attr01
          <input
            data-testid="attr1-input"
            name="attr1"
            type="number"
            // value={value}
            // onChange={handleChange}
          />
        </labe>
        <labe>
          Attr02
          <input
            data-testid="attr2-input"
            name="attr2"
            type="number"
            // value={value}
            // onChange={handleChange}
          />
        </labe>
        <labe>
          Attr03
          <input
            data-testid="attr3-input"
            name="attr3"
            type="number"
            // value={value}
            // onChange={handleChange}
          />
        </labe>
        <labe>
          Imagem
          <input
            data-testid="image-input"
            name="image"
            type="text"
            // value={value}
            // onChange={handleChange}
          />
        </labe>
        <labe>
          Raridade
          <select data-testid="rare-input" name="rare">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </labe>
        <labe>
          Super Trybe Trunfo
          <input
            data-testid="trunfo-input"
            name="trunfo"
            type="checkbox"
            // value={value}
            // onChange={handleChange}
          />
        </labe>
        <button data-testid="save-button" type="button">Salvar</button>
      </form>
    );
  }
}

export default Form;
