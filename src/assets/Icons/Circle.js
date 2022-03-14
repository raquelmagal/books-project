const Circle = ({ width, height, color, onClick, background }) => {
  return (

    <svg onClick={onClick} width={width}  height={width} viewBox="0 0 32 32" fill={background} xmlns="http://www.w3.org/2000/svg">
      <circle r="15.5" transform="matrix(-1 0 0 1 16 16)" stroke={color} stroke-opacity="0.2"/>
    </svg>
  )
}

export default Circle
