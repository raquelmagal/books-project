const CloseIcon = ({ width, height, color, onClick, background }) => {
  return (

    <svg onClick={onClick} width={width} style={{borderRadius: '100%'}}  height={width} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" fill="white"/>
      <path d="M12.0354 4.50671L12.0707 4.47135L12.0354 4.436L11.564 3.96464L11.5286 3.92929L11.4933 3.96464L8 7.45794L4.50671 3.96464L4.47135 3.92929L4.436 3.96464L3.96464 4.436L3.92929 4.47135L3.96464 4.50671L7.45794 8L3.96464 11.4933L3.92929 11.5286L3.96464 11.564L4.436 12.0354L4.47135 12.0707L4.50671 12.0354L8 8.54206L11.4933 12.0354L11.5286 12.0707L11.564 12.0354L12.0354 11.564L12.0707 11.5286L12.0354 11.4933L8.54206 8L12.0354 4.50671Z" fill="#333333" stroke="#333333" stroke-width="0.1"/>
    </svg>
  )
}

export default CloseIcon
