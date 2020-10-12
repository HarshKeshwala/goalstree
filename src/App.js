import React, { useState } from 'react';
import './App.css';

import firebase from './firestore';

const App = () => {

const [goals, setGoals] = useState([]);

const getData = () => {
    firebase.db.collection('Goals').get()
      .then(querySnapshot => {
        console.log(querySnapshot);
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        setGoals(data);
    })
    .catch(err => {
      console.log(err.message)
    })
  }
  // console.log(firebase.db)
   console.log(goals);
  return(
      <div className="App">
        <h1>Goals Tree</h1>

        <button onClick={getData}>Get Data</button>
        {
          goals.map((goal) => (
            <div key={goal.goalId}>
              <p>{goal.name}</p>
              <p>{goal.status}</p>
            </div>
          ))
        }
      </div>
  )
}
export default App;