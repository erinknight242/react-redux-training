import { connect } from 'react-redux';
import CardList from '../components/CardList';

const mapStateToProps = state => ({ cards: state.cardList });

export default connect(mapStateToProps)(CardList);
