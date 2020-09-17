import React, { useState } from 'react';

import './App.css';
import Heading from './components/Heading';
import Filter from './components/Filter';
import Activity from './components/Activity';
import Main from './components/Main';

function App() {
  const [type, setType] = useState('all');
  const [participants, setParticipants] = useState('all');
  const [money, setMoney] = useState('all');
  const [activity, setActivity] = useState('');
  return (
    <div className="App">
      <Heading />
      <Main
        type={type}
        participants={participants}
        money={money}
        setActivity={setActivity}
      />
      <Filter
        setType={setType}
        setParticipants={setParticipants}
        setMoney={setMoney}
      />
      <Activity activity={activity} />
    </div>
  );
}

export default App;
