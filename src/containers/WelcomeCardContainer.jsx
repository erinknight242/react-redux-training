import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WelcomeCard from '../components/WelcomeCard';
import * as actions from '../actions/actions';

const mapStateToProps = state => ({ ...state.welcomeCard });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeCard);
