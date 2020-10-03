import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
//import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import './App.css';

const store = ConfigureStore();

class App extends Component {

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.props.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.props.todos.filter(todo => todo.id !== id)] });
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.props.todos, newTodo] })
  };

  render() {
    console.log(this.props)
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="container">
              <Header />
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos todos={this.props.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                </React.Fragment>
              )} />
              <Route path="/about" component={About} />          
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(App);
