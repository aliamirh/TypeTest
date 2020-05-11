import React from 'react';
import Card from '@material-ui/core/Card';

function TypeText() {
  let randomWords = require('random-words');

  return (
    <div>
      <Card>{randomWords(10)}</Card>
    </div>
  );
}

export default TypeText;
