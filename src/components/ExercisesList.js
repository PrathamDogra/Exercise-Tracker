import React, { Component } from "react";
import axios from "axios";
import Exercise from './Exercise';

class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercises: []
    };
  }
  deleteExercise = id => {
    axios
      .delete("https://exercise-mern-app.herokuapp.com/exercises/" + id)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    this.setState({
      exercises: this.state.exercises.filter(exercise => exercise._id !== id)
    });
  };
  exerciseList=()=>{
    return this.state.exercises.map(exercise=>{
        return (
          <Exercise exercise={exercise} deleteExercise={this.deleteExercise} key={exercise._id}/>
        );
    })
  }
  componentDidMount() {
    axios
      .get("https://exercise-mern-app.herokuapp.com/exercises")
      .then(res => this.setState({ exercises: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}

export default ExercisesList;
