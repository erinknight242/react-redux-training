import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import Card from '../components/Card';

class CardList extends React.Component {
  handleClick = () => {
    this.props.actions.getCardListData();
  }

  render() {
    return (
      <div className="cards-wrapper">
        {this.props.cards.map(card => (
          <Card key={card.id} className="card-item simple-card-wide mdl-card mdl-shadow--2dp" {...card} />
        ))}
        <Button onClick={this.handleClick}>Load Card List</Button>
      </div>
    );
  }
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    className: PropTypes.string,
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    msg: PropTypes.string,
    id: PropTypes.number,
  })),
  actions: PropTypes.shape({
    getCardListData: PropTypes.func.isRequired,
  }).isRequired,
};

CardList.defaultProps = {
  cards: [],
};

export default CardList;
