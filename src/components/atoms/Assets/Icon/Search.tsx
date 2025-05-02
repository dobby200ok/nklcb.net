import s from './Icon.module.scss'
import classNames from 'classnames';

interface SearchProps {
  width: number;
  height: number;
  fill?: string;
  active?: boolean;
}

const Search:React.FC<SearchProps> = ({ width, height, fill, active }) => {
  return(
      <div className={ classNames( s['ico-wrap'] ) }
           style={{
            width: width,
            height: height,
            overflow: 'hidden'
           }}>
        <div className={ classNames( s['ico-wrap__inner'], active && s['ico-wrap__inner--active'] ) }
             style={{
               width: width,
               height: height,
               overflow: 'hidden'
             }}>
          <svg xmlns="http://www.w3.org/2000/svg"
              width={ width }
              height={ height }
              viewBox="0 0 200 200"
              fill="none"
              className={ classNames( s['ico-search'], active && s['ico-search--active'] ) } >
            <path fill={ fill ? fill : '#514F5A' } fillRule="evenodd" d="m131.452 139.937 27.692 27.692a6 6 0 0 0 8.485-8.485l-27.692-27.692a76.972 76.972 0 0 1-8.485 8.485Z" clipRule="evenodd"/>
            <circle cx="95.61" cy="95.61" r="51" stroke={ fill ? fill : '#514F5A' } strokeWidth="12" transform="rotate(-45 95.61 95.61)"/>
          </svg>
        </div>
      </div>
    )
  }

  export default Search;