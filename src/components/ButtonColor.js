import React from 'react';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const styles = {
  button: {
    background: 'linear-gradient(45deg, #b47fff 10%, #4635fa 90%)',
    borderRadius: '3',
    border: '0',
    color: 'white',
    height: '48',
    width: '200',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
};

export default function ButtonColor() {
  const [color, setColor] = React.useState('default');


  return (
    <React.Fragment>
          <Switch
            checked={color === 'white'}
            value="dynamic-class-name"
          />
      <Button
        style={{
          ...styles.button,
        }}
      >
        {'dynamic inline-style value'}
      </Button>
    </React.Fragment>
  );
}
