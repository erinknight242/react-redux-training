import { connect } from 'react-redux';
import WelcomeCard from '../components/WelcomeCard';

const mapStateToProps = state => ({ ...state.welcomeCard });

export default connect(mapStateToProps)(WelcomeCard);
