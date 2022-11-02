import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    name: '',
    description: '',
    attr1: '',
    attr2: '',
    attr3: '',
    image: '',
    rare: '',
    trunfo: false,
    hasTrunfo: false,
    deleteCard: true,
    isSaveButtonDisabled: true,
    saveCard: [],
    filterCardName: '',
    filterCardRare: '',
    filterCardSuper: false,
    rareDisabled: false,
    nameDisabled: false,
  };

  onInputChange = ({ target }) => {
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({ [target.name]: value }, () => {
      const { description,
        image,
        rare,
        attr1,
        attr2,
        attr3,
        name,
      } = this.state;

      const newButtonDisabledState = !description.length > 0
      || !name.length > 0
      || !image.length > 0
      || !rare.length > 0
      || attr1 < '0'
      || attr2 < '0'
      || attr3 < '0'
      || attr1 > '90'
      || attr2 > '90'
      || attr3 > '90'
      || Number(attr1) + Number(attr2) + Number(attr3) > '210';

      this.setState({
        isSaveButtonDisabled: newButtonDisabledState,
      });
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();

    const { description,
      image,
      rare,
      attr1,
      attr2,
      attr3,
      name,
      trunfo,
    } = this.state;

    const valueCard = {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
    };

    this.setState(({ saveCard }) => ({
      saveCard: [...saveCard, valueCard],
      name: '',
      description: '',
      image: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      rare: '',
    }));
    if (trunfo) this.setState({ hasTrunfo: true, trunfo: false });
  };

  onDeleteButtonClick = ({ target }) => {
    const { trunfo } = this.state;
    const divCard = target.parentNode;

    divCard.parentNode.removeChild(divCard);

    if (!trunfo) this.setState({ hasTrunfo: false, trunfo: false });
    this.setState({ deleteCard: true });
  };

  handleSearchChangeName = (event) => {
    this.setState({
      filterCardName: event.target.value,
    });
  };

  handleSearchChangeRare = (event) => {
    this.setState({
      filterCardRare: event.target.value,
    });
  };

  handleSearchChangeSuper = (event) => {
    const value = event.target.checked;
    const { filterCardSuper } = this.state;
    this.setState({
      filterCardSuper: value,
    });
    if (filterCardSuper === false) {
      this.setState({ rareDisabled: true, nameDisabled: true });
    }
    if (filterCardSuper === true) {
      this.setState({ rareDisabled: false, nameDisabled: false });
    }
  };

  render() {
    const { name,
      description, attr1, attr2,
      attr3, image, rare,
      trunfo, hasTrunfo, isSaveButtonDisabled,
      saveCard, deleteCard, filterCardName,
      filterCardRare, filterCardSuper, rareDisabled,
      nameDisabled,
    } = this.state;

    const filterCarName = saveCard.filter(
      (carItem) => carItem.name.includes(filterCardName),
    );

    const filterCarRare = filterCarName.filter((carItem) => {
      if (filterCardRare === '') {
        return carItem;
      }
      if (filterCardRare === 'todas') {
        return carItem;
      }
      return carItem.rare === filterCardRare;
    });

    const filterCarSuper = filterCarRare.filter((carItem) => {
      if (filterCardSuper === false) {
        return carItem;
      }
      return carItem.trunfo === true;
    });

    return (
      <div>
        <h1>ADICIONE NOVA CARTA</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <section>
          <h1>PRÉ-VISUALIZAÇÃO</h1>
          <div>
            <Card
              cardName={ name }
              cardDescription={ description }
              cardAttr1={ attr1 }
              cardAttr2={ attr2 }
              cardAttr3={ attr3 }
              cardImage={ image }
              cardRare={ rare }
              cardTrunfo={ trunfo }
            />
          </div>
          <labe>
            Filtro por nome
            <input
              data-testid="name-filter"
              value={ filterCardName }
              onChange={ this.handleSearchChangeName }
              disabled={ nameDisabled }
              type="text"
            />
          </labe>
          <br />
          <labe>
            Filtro por raridade
            <select
              data-testid="rare-filter"
              value={ filterCardRare }
              onChange={ this.handleSearchChangeRare }
              disabled={ rareDisabled }
            >
              <option value="todas">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </labe>
          <labe>
            Super Trunfo
            <input
              data-testid="trunfo-filter"
              value={ filterCardSuper }
              onChange={ this.handleSearchChangeSuper }
              type="checkbox"
            />
          </labe>
          <div>
            { filterCarSuper.map((value, index) => (
              <Card
                key={ `${value.name} = ${index}` }
                cardName={ value.name }
                cardDescription={ value.description }
                cardAttr1={ value.attr1 }
                cardAttr2={ value.attr2 }
                cardAttr3={ value.attr3 }
                cardImage={ value.image }
                cardRare={ value.rare }
                cardTrunfo={ value.trunfo }
                deleteCard={ deleteCard }
                onDeleteButtonClick={ this.onDeleteButtonClick }
              />))}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
