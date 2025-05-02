interface NotFoundProps {
width: number;
height: number;
}

const NotFound:React.FC<NotFoundProps> = ({ width, height }) => {
  return (
  <svg xmlns="http://www.w3.org/2000/svg"
       width={ width }
       height={ height }
       viewBox="0 0 266 107"
       fill="none">
      <path fill="#D9D9D9" d="M0 .95h19.109v76.437H0zM76.437 106.05h-19.11V.949h19.11z" />
      <path fill="#FFDE00" d="M76.437 58.277v19.11H19.11v-19.11z" />
      <path fill="#07B53B" d="M171.219.95v19.109H113.89V.949z" />
      <path fill="#03C75A" d="M113.891 106.05H94.782V.949h19.109z" />
      <path fill="#2BC2BC" d="M94.782 106.05V86.94h57.328v19.11z" />
      <path fill="#E0311F" d="M171.219 106.05H152.11V20.059h19.109z" />
      <path fill="#D9D9D9" d="M189.563.95h19.109v76.437h-19.109zM266 106.05h-19.109V.949H266z" />
      <path fill="#FFDE00" d="M266 58.277v19.11h-76.437v-19.11z" />
    </svg>
  )
}

export default NotFound;