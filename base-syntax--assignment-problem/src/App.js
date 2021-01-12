import React, { Component } from 'react';
import './App.css';
import UserInput from "./User/UserInput"
import UserOutput from "./User/UserOutput"



class App extends Component {

  state = {
    users: [
      { username: "Boop", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, provident?" },
      { username: "Gigi", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam doloribus repudiandae minima sed nemo. Cumque?"}
    ]
  }

  changeContentHandler = (event) => {
    this.setState({
      users: [
        { username: event.target.value, content: event.target.value },
        { username: "Gigi", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam doloribus repudiandae minima sed nemo. Cumque?"}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <UserOutput username={this.state.users[0].username} content={this.state.users[0].content}/>
        <UserInput username={this.state.users[0].username} content={this.state.users[0].content} change={this.changeContentHandler}/>
        <UserOutput username={this.state.users[1].username} content={this.state.users[1].content}/>
        <UserInput/>
      </div>
    );
  }
}

export default App;
