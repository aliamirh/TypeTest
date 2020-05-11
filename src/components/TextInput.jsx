import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function TextInput(props) {
  return (
    <>
      <form>
        <TextField
          variant='outlined'
          onChange={(event) => {
            props.onUserInput(event.target.value);
          }}
        ></TextField>
      </form>
    </>
  );
}
