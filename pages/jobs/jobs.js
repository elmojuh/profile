
// meu portifólio. Projetos que mantenho manutenção, não terminados e já finalizados

import { useState } from "react"

const projects = [
  {
    id: 'artacril',
    link: 'https://artacril.vercel.app/',
    value: 'Art Acril',
    image: '/images/artacril.png'
  }
]

const style = {
  width: '400px',
}

const img1 = {
  display: 'block',
  width: '100%',
  height: 'auto',
  transition: 'transform 0.3 ease-in-out',
}

const title = {
  position: 'absolute',
  bottom: '0',
  left: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  color: 'white',
  width: '100%',
  padding: '10px',
  margin: '0',
}

export default function Jobs() {

  const [hovered, setHovered] = useState(false);
  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div style={style} className='container'>
      {projects.map(({ id, link, value, image }) => (
        <div key={id}>
          <a href={link} target="_blank">
            <img style={img1}
              src={image}
              alt='project'
              className={hovered ? 'hovered-image' : ''}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover} />
            <div style={title}>{value}</div>
          </a>
        </div>
      ))}

    </div>
  );
}
