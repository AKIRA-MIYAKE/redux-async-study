import { connect } from 'react-redux';

import { execTasks } from '../../actions';

import Button from '../presentational/Button';

export default connect(
  state => ({
    title: 'Start',
    isEnabled: !state.isLoading
  }),
  dispatch => ({
    didClick: () => {
      dispatch(execTasks());
    }
  })
)(Button);
