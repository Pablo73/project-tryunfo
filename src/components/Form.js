import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <labe>
          Nome
          <br />
          <input
            data-testid="name-input"
            name="name"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
          />
        </labe>
        <br />
        <labe>
          Descrição
          <br />
          <input
            data-testid="description-input"
            name="description"
            type="textarea"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </labe>
        <br />
        <labe>
          Attr01
          <input
            data-testid="attr1-input"
            name="attr1"
            type="number"
            min={ 0 }
            max={ 90 }
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </labe>
        <br />
        <labe>
          Attr02
          <input
            data-testid="attr2-input"
            name="attr2"
            type="number"
            min={ 0 }
            max={ 90 }
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </labe>
        <br />
        <labe>
          Attr03
          <input
            data-testid="attr3-input"
            name="attr3"
            type="number"
            min={ 0 }
            max={ 90 }
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </labe>
        <br />
        <labe>
          Imagem
          <input
            data-testid="image-input"
            name="image"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </labe>
        <br />
        <labe>
          Raridade
          <select
            data-testid="rare-input"
            name="rare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </labe>
        <br />
        { !hasTrunfo ? (
          <div>
            <labe>Super Trunfo</labe>
            <input
              data-testid="trunfo-input"
              name="trunfo"
              type="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </div>)
          : <h3>Você já tem um Super Trunfo em seu baralho</h3> }
        <button
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
