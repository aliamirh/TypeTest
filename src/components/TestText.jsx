import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import TypeInput from './TextInput';

function TestText() {
  let randomWords = require('random-words');
  const [userInput, setUserInput] = useState('');
  return (
    <div>
      <Card>{randomWords({ exactly: 10, join: ' ' })}</Card>
      <TypeInput onUserInput={setUserInput} />
      <p>{userInput}</p>
    </div>
  );
}

export default TestText;
