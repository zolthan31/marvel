import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './functions/createStore';
import Routes from './routes';
import Loader from './components/loader';
import { connect } from 'react-redux';
import Form from './form/Form'

class App extends Component {
  render() {
    return (
      <Provider
        store={store}>
        <WrapperEl>
          <Routes />
        </WrapperEl>
      </Provider>

    );
  }
}

class Wrapper extends Component {
  render() {
    return (
      <>
        {this.props.children}
        {this.props.loading && <Loader />}
      </>
    );
  }
}

const mapStateToProps = state => {
  return { loading: state.global.loading };
};

const WrapperEl = connect(mapStateToProps)(Wrapper);

export default App;