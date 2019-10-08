import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './Navbar';
import ExercisesList from './ExercisesList';
import CreateUser from './CreateUser';
import EditExercise from './EditExercise';
import CreateExercise from './CreateExercise';

function Main(){
   return (
     <Router>
       <div className="container">
         <Navbar />
         <br />
         <Route path="/" exact component={ExercisesList} />
         <Route path="/edit/:id" component={EditExercise} />
         <Route path="/create" component={CreateExercise} />
         <Route path="/user" component={CreateUser} />
       </div>
     </Router>
   );
}

export default Main;