import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import Card from '../components/Card';

class WelcomeCard extends React.Component {
  handleClick = () => {
    this.props.actions.getWelcomeCardData();
  }

  render() {
    return (
      <div>
        <Card className="welcome-card simple-card-wide mdl-card mdl-shadow--2dp" {...this.props} />
        <Button onClick={this.handleClick}>Load Welcome Data</Button>
      </div>
    );
  }
}

WelcomeCard.propTypes = {
  actions: PropTypes.shape({
    getWelcomeCardData: PropTypes.func.isRequired,
  }).isRequired,
};

export default WelcomeCard;
