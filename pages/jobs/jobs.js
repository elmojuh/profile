
// meu portifólio. Projetos que mantenho manutenção, não terminados e já finalizados

import { useState } from "react"


export default function Jobs() {

  const data = [
    {
      id: 'artacril',
      link: 'https://artacril.vercel.app/',
      value: 'Art Acril',
      image: '/images/artacril.png'
    },
  ]

  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };
  const handleMouseOut = () => {
    setHovered(false);
  };

  const style = {
    width: '400px',
    position: 'relative',
  }

  const imgStyle = {
    opacity: hovered ? 0.5 : 1, // Define a opacidade da imagem
    transition: 'opacity 0.5s ease', // Define a transição da opacidade
  }

  const title = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    color: 'white',
    width: '100%',
    padding: '10px',
    margin: '0',
  }

  const containerStyle = {
    position: 'relative',
    width: '400px',
  }

  return (
    <div style={style}>
      {data.map(({ id, link, value, image }) => (
        <div key={id} style={containerStyle} onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
          <a href={link} target="_blank">
            <img style={imgStyle}
              src={image}
              alt='project'
            />
            <div style={title}>{value}</div>
          </a>
        </div>
      ))}

    </div>
  );
}
