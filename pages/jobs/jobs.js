
// meu portifólio. Projetos que mantenho manutenção, não terminados e já finalizados

import { useState } from "react"

const data = [
  {
    id: 'artacril',
    link: 'https://artacril.com',
    value: 'Art Acril',
    image: '/images/artacril.png',
    project: 'Art Acril Project'
  },
]

export default function Jobs() {


  const style = {
    width: '400px',
    position: 'relative',
  }

  const containerStyle = {
    position: 'relative',
    width: '400px',
  }



  const titleStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    color: 'white',
    width: '100%',
    padding: '10px',
    margin: '0',
  }


  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };
  const handleMouseOut = () => {
    setHovered(false);
  };

  const imgStyle = {
    opacity: hovered ? 0.5 : 1, // Define a opacidade da imagem
    transition: 'opacity 0.5s ease', // Define a transição da opacidade
  }

  return (
    <div style={style}>
      {data.map(({ id, link, value, image, project }) => (
        <div key={id} style={containerStyle} onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
          <a href={link} target="_blank">
            <img style={imgStyle} src={image} alt={project} />
            <div style={titleStyle}>{value}</div>
          </a>
        </div>
      ))}

    </div>
  );
}
