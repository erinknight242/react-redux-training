import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardList from '../components/CardList';
import * as actions from '../actions/actions';

const mapStateToProps = state => ({ cards: state.cardList });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
