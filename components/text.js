import React from 'react';
import {Text} from 'react-native';
import { connect } from 'react-redux';

import RedText from './global/Redtext';

function TextName(props){

  console.log("I'm rendering TextName")

  let val = `Hola ${props.name}`
  return (
    <RedText
      text = {val}
    />
  )
}

const mapStateToProps = state => {
  return {
    name: state.reducer1.name,
  }
}

export default connect(mapStateToProps, null)(TextName) 