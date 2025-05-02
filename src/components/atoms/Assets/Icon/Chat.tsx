interface ChatProps {
  width: number;
  height: number;
}

const Chat:React.FC<ChatProps> = ({ width, height }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={ width }
         height={ height } 
         viewBox="0 0 200 200"
         fill="none">
      <path fill="#03C75A" fillOpacity=".6"
        d="M88.188 47.324c.253-13.86 11.694-24.89 25.554-24.636l41.465.76c13.86.253 24.89 11.694 24.636 25.554l-.473 25.839A6.274 6.274 0 0 1 172.982 81l-60.287-1.104c-13.86-.254-24.89-11.695-24.636-25.555l.129-7.017Z" />
      <path fill="#FAE100" fillOpacity=".6"
        d="M21.76 100.087C21.76 77.395 40.157 59 62.849 59h57.065C142.605 59 161 77.395 161 100.087v22.826C161 145.605 142.605 164 119.913 164H35.456c-7.563 0-13.695-6.132-13.695-13.696v-50.217Z" />
      <circle cx="66.967" cy="111.5" r="6.5" fill="#E0311F" />
      <circle cx="91.38" cy="111.5" r="6.5" fill="#E0311F" />
      <circle cx="115.793" cy="111.5" r="6.5" fill="#E0311F" /></svg>
    )
  }

  export default Chat;