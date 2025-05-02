interface GithubProps {
  width: number;
  height: number;
}

const Github:React.FC<GithubProps> = ({ width, height }) => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg"
         width={ width }
         height={ height }
         viewBox="0 0 200 200"
         fill="none">
      <rect width="136" height="136" x="32" y="32" fill="#000" rx="68" />
      <mask id="a" width="136" height="136" x="32" y="32" maskUnits="userSpaceOnUse"
            style={{ maskType: 'alpha' }}>
        <circle cx="100" cy="100" r="68" fill="#0D0D0D" />
      </mask>
      {/* <g mask="url(#a)"> */}
        <path fill="#07B53B" d="M63.156 62c-.8 8 1.667 17 3 20.5l19-8c-5.2-6.4-16.833-11-22-12.5Z" />
        <path fill="#FAE100" d="M137 62c.8 8-1.667 17-3 20.5l-19-8c5.2-6.4 16.833-11 22-12.5Z" />
        <path fill="#2BC2BC"
          d="M63 134.29c5.2 8.8 16.5 8.333 21.5 7l4 4.5c-1.333 1.333-6.1 3.9-14.5 3.5-10.5-.5-11-6.5-16-13-4-5.2-6.333-4.5-7-3.5 1.833-3.167 6.8-7.3 12 1.5Z" />
        <path fill="#E0311F" d="M84 139c0-5.523 4.477-10 10-10h11c5.523 0 10 4.477 10 10v31H84v-31Z" />
        <rect width="82" height="58" x="59" y="71" fill="#03C75A" rx="29" />
      {/* </g> */}
    </svg>
    )
  }

  export default Github;