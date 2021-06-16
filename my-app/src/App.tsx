import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Question from './Question';

function App() {
  return (
    <div className="App">
         <h1>StackOverFlow Questions</h1>
             <p className="p">click on the question to find the answer</p>
              <div id="root">
    
            <table >
             <tr id="table">
            <th>Author</th>
            <th>Title</th>
            <th>Creation_Date</th>
            </tr>
            </table>

</div>
<Question></Question>
    </div>
  );
}

export default App;
