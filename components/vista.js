import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//conectar con redux
import { connect } from 'react-redux';

//Cambiar valor a estados
import { setValue } from '../Redux/actions/action1';

//componentes
import TextName from './text';

class Home extends Component {

  _onPress = () => {
    this.props.setValue("name", "Yoryi")
  }

  _onPress2 = () => {
    this.props.setValue("name", "juan")
  }

  render() {
    console.log("I'm rendering Home")
    console.log(this.props.name)

    return (
      <View style={styles.container}>
        <TextName />

        <Text style={styles.instructions}>I'm {this.props.age} years old</Text>
        <Text style={styles.instructions}>My height is: {this.props.height}</Text>
        <Button
          title={'Chnage my data'}
          onPress={this._onPress}
        />

        <Button
          title={'Cambiar otro estado'}
          onPress={this._onPress2}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.reducer1.name,
    age: state.reducer1.age,
    height: state.reducer1.height,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setValue: (varName, value) => {
      dispatch(setValue(varName, value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});