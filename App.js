import React, { Component } from "react";
import { Layout, Input, Button } from "antd";

//Import our Firestore module!!
import { firestore } from "firebase";

// Testing if this will go to GIT in the cloud
import "./App.css";

const { Header, Footer, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    //Set the default state of the application
    this.state = { addingTodo: false, pendingTodo: ""};
    //Configure/define event handlers to share the app context (I think it is the app context)
    this.state = this.addTodo.bind(this);
}

async addTodo(evt) {
  //set flag to indicate the state of "Loading"
  this.setState({addingTodo: true});
  // Add a new todo from the value of input - not sure what that means
  await firestore.CollectionReference("todos").add({
    Content: this.state.pendingTodo,
    completed: false
  });
  //Remove the loading flag and clear input - need to know why?????
  this.setState({ addingTodo: false, pendingTodo: ""});
}


render() {
  return (
      <Layout className="App">
        <Header className="App-header">
          <h1>quick Todo</h1>
        </Header>
        <Content className="App-content">
          <Input
          ref="Add-todo-input"
          className= "App-add-todo-input"
          size="large"
          placeholder="What needs to be done?"
          disabled={this.state.addingTodo}
          onChange={evt => this.setState({ pendingTodo: evt.target.value})}
          value={this.state.pendingTodo}
          onPressEnter={this.addTodo}
        />
          <Button
          className="App-add-todo-button"
          size="large"
          type="primary"
          onClick={this.addTodo}
          loading={this.state.addingTodo}
          >
            Add Todo
          </Button>
         </Content>
          <Footer className="App-Footer">&copy; Frustrated Incorporated</Footer>
    </Layout>
    );
  }
}
    
export default App;
