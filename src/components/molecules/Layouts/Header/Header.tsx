
// @ name : Header
// @ description : 공통 헤더 레이아웃 컴포넌트
// @ example : <Header />

import s from './Header.module.scss';

import classNames from 'classnames';
import Link from 'next/link';

import DynamicLogo from '@/components/atoms/Assets/DynamicLogo';
import NavLink from './NavLink';
import className from '@/constants/className';

const Header:React.FC = () => {

  return (
    <header id="header"
            className={ classNames( s['header'] ) }>
      <div className={ classNames( s['header__inner'])  }>
        <h1 className={ classNames( s['logo'] ) }>
          <Link className={ classNames( s['logo-link'] ) }
                href='/'>
            <DynamicLogo loop={ false }  />
          </Link>
        </h1>
        <nav className={ classNames( s['nav'] ) }>
          <h2 className={ className.a11y }>
            서비스 메뉴
          </h2>
            <div className={ classNames( s['nav__inner'] ) }>
              <ul className={ classNames( s['nav-list'] ) }>
                <li>
                  <NavLink href="/jobList">
                    채용공고
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/scrapList">
                    스크랩
                  </NavLink>
                </li>
              </ul>
            </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;