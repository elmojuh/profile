import { theme } from '../../../theme/theme';

const footerStyle={
  fontFamily: 'sans-serif',
  color: 'white',
  textAlign: 'center',
  background: 'black',
  position: 'absolute',
  padding: '15px',
  width: '100%',
  bottom: '-3em',
}


export default function Footer() {
  return (
    <div style={footerStyle}>
      All Rights Reserved. At 2023
    </div>
  )
}