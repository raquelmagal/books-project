const LogOutIcon = ({ width, height, color, onClick, background }) => {
  return (
    
    <svg onClick={onClick} width={width}  height={width} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle r="15.5" transform="matrix(-1 0 0 1 16 16)" stroke="#333333" stroke-opacity="0.2"/>
      <path d="M19 12L23 16M23 16L19 20M23 16H12.5" stroke="#333333" stroke-linejoin="round"/>
      <path d="M14.5 9H11C9.89543 9 9 9.89543 9 11V21C9 22.1046 9.89543 23 11 23H14.5" stroke="#333333" stroke-linejoin="round"/>
    </svg>
  )
}

export default LogOutIcon
