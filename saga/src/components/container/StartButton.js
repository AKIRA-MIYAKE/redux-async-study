import { connect } from 'react-redux';

import actions from '../../actions';

import Button from '../presentational/Button';

export default connect(
  state => ({
    title: 'Start',
    isEnabled: !state.isLoading
  }),
  dispatch => ({
    didClick: () => {
      dispatch(actions.task1Request());
    }
  })
)(Button);
