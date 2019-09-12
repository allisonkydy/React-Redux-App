import React from 'react';
import { connect } from 'react-redux';

const Animal = () => {
  return (
    <div>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    animal: state.animal,
    error: state.error,
    isFetching: state.isFetching,
  }
}

export default connect(mapStateToProps, {})(Animal);
