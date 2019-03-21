import React from 'react';
import { connect } from 'react-redux';
import { actions, increment, decrement } from '../redux/redux-demo';
import { getValue } from '../create-store';

function ReduxIncrementer(props) {
  return (
    <div>
      <button className="btn btn-danger" onClick={props.decrement}>
        -
      </button>
      &nbsp;<span>{props.value}</span>&nbsp;
      <button className="btn btn-primary" onClick={props.increment}>
        +
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  value: getValue(state),
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: actions.INCREMENT }),
  decrement: () => dispatch({ type: actions.DECREMENT }),
});

const newerMapDispatchToProps = {
  increment,
  decrement,
};

export default connect(
  mapStateToProps,
  newerMapDispatchToProps
)(ReduxIncrementer);
