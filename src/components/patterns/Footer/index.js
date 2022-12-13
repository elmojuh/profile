import { theme } from '../../../theme/theme';

export default function Footer() {
  return (
    <Style>
      All Rights Reserved.
    </Style>
  )

  function Style({ children }) {
    return (
      <div>
        {children}
        <style jsx>{`
          div{
            font-family: sans-serif;
            color: white;
            text-align: center; 
            background: black;
            position: absolute;
            padding: 15px;
            width: 100%;
            bottom: -3em;
          }
        `}
        </style>
      </div>
    )
  }
}