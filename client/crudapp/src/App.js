import React from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      emailValOne: '',
      ageVal: '',
      stdID: '',
      emailValTwo: '',
      ageValTwo: '',
      stdIDForDel: ''
    }
  }

  //CREATE
  inputBoxEmailOne(eve) {
    var val = eve.target.value;

    this.setState({
      emailValOne: val
    })
  }

  inputBoxAge(eve) {
    var val = eve.target.value;

    this.setState({
      ageVal: val
    })
  }


  createStudent() {
    axios.post("http://localhost:3050/api/createStudent", { email: this.state.emailValOne, age: this.state.ageVal })
      .then(function (response) {
        console.log(response.config.data);
      })
  }

  //READ
  readStudent() {
    axios.get('http://localhost:3050/api/readStudent')
      .then((response) => {

        for (var i = 0; i < response.data.length; i++) {
          console.log(response.data[i].email);
          console.log(response.data[i].age);
        }
      })
  }

  //UPDATE
  inputBoxID(eve) {
    var val = eve.target.value;
    this.setState({
      stdID: val
    })
  }

  inputBoxEmailTwo(eve) {
    var val = eve.target.value;
    this.setState({
      emailValTwo: val
    })
  }

  inputBoxAgeTwo(eve) {
    var val = eve.target.value;
    this.setState({
      ageValTwo: val
    })
  }

  updateStudent() {

    var UpdateStudent = {
      email: this.state.emailValTwo,
      age: this.state.ageValTwo
    }

    axios.put('http://localhost:3050/api/updateStudent/' + this.state.stdID, UpdateStudent)
      .then((response) => {
        console.log(response);
      })
  }

  //DELETE

  inputBoxIDdelete(eve) {
    var val = eve.target.value;
    this.setState({
      stdIDForDel: val
    })
  }

  deleteStudent() {
    axios.delete("http://localhost:3050/api/deleteStudent/" + this.state.stdIDForDel)
      .then((response) => {
          console.log(response);
      })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1>CRUD APPLICATION</h1>
        <div className="App-intro">
          <form>
            <input type="text" name="email" placeholder="email address" onChange={this.inputBoxEmailOne.bind(this)} value={this.state.emailValOne} /><br />
            <input type="text" name="age" placeholder="your age" onChange={this.inputBoxAge.bind(this)} value={this.state.ageVal} />
            <br /><br />
            <input type="button" onClick={this.createStudent.bind(this)} value="Create Student" />
          </form><br />

          <form>
            <input type="button" onClick={this.readStudent.bind(this)} value="Read Student" />
          </form><br />

          <form>
            <input type="text" name="email" placeholder="Student ID" onChange={this.inputBoxID.bind(this)} value={this.state.stdID} /><br />
            <input type="text" name="email" placeholder="email address" onChange={this.inputBoxEmailTwo.bind(this)} value={this.state.emailValTwo} /><br />
            <input type="text" name="age" placeholder="student age" onChange={this.inputBoxAgeTwo.bind(this)} value={this.state.ageValTwo} />
            <br /><br />
            <input type="button" onClick={this.updateStudent.bind(this)} value="Update Student" />
          </form><br />

          <form>
            <input type="text" name="email" placeholder="Student ID" onChange={this.inputBoxIDdelete.bind(this)} value={this.state.stdIDForDel} /><br />
            <input type="button" onClick={this.deleteStudent.bind(this)} value="delete Student" />
          </form><br />

        </div>
      </div>
    );
  }
}

export default App;
