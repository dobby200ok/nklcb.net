
interface BookmarkProps {
  width: number;
  height: number;
  fill?: string;
}

const Bookmark:React.FC<BookmarkProps> = ({ width, height, fill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         width={ width }
         height={ height }
         viewBox="0 0 200 200"
         fill="none">
        <path fill={ fill ? fill : "#514F5A" }
              style={{ display: fill ? 'block' : 'none' }}
              d="M56 25.52c-8.837 0-16 7.163-16 16V174.48l60-51.962 60 51.962V41.519c0-8.836-7.163-16-16-16H56Z"/>
        <mask id="a" fill="#fff">
          <path fillRule="evenodd"
            d="M56 25.52c-8.837 0-16 7.163-16 16V174.48l60-51.962 60 51.962V41.519c0-8.836-7.163-16-16-16H56Z"
            clipRule="evenodd" />
        </mask>
        <path fill={ fill ? fill : "#514F5A" }
          d="M40 174.481H28a12 12 0 0 0 19.856 9.071L40 174.481Zm60-51.962 7.856-9.071a12 12 0 0 0-15.712 0l7.856 9.071Zm60 51.962-7.856 9.071A12 12 0 0 0 172 174.481h-12ZM52 41.519a4 4 0 0 1 4-4v-24c-15.464 0-28 12.536-28 28h24Zm0 132.962V41.519H28v132.962h24Zm-4.144 9.071 60-51.962-15.712-18.142-60 51.962 15.712 18.142Zm44.288-51.962 60 51.962 15.712-18.142-60-51.962-15.712 18.142ZM148 41.52V174.48h24V41.519h-24Zm-4-4a4 4 0 0 1 4 4h24c0-15.465-12.536-28-28-28v24Zm-88 0h88v-24H56v24Z"
          mask="url(#a)" />
    </svg>

  )
}

export default Bookmark;