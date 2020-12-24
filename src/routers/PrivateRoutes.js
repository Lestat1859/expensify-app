import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

export const PrivateRoute = () =>{

};

const mapStateToProps = (state) => ({
  isAuthentificated : !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);