const Next = ({ width, height, color, onClick, opacity }) => {
  return (

    <svg onClick={onClick} width={width}  height={height} viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L5 5L1 9" stroke={color} stroke-opacity={opacity} stroke-linejoin="round"/>
    </svg>
  )
}

export default Next