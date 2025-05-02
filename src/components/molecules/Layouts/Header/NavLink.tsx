
// @ name : NavLink
// @ description : React의 NavLink와 동일한 동작을 하는 컴포넌트
//                 현재 경로와 Link href의 경로가 일치하면 active 효과를 부여합니다.
//                 usePathname 사용을 위해 클라이언트 사이드 렌더링
// @ example : <NavLink href="/href">링크</NavLink>

'use client'

import s from './Header.module.scss';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import classNames from "classnames";
import { useEffect, useState, ReactNode } from 'react';

import { queryUtils } from '@/utils/utils';

interface NavLinkProps {
  href: string;
  children: ReactNode
}

const NavLink:React.FC<NavLinkProps> = ({ href, children }) => {
  
  const pathName = usePathname(),
        [ path, setPath ] = useState<string>(href);

  useEffect(() => {

    if(href.includes('/jobList')) {
      const query = queryUtils.set();
      setPath(`${href}?${query}`);
    }

  }, [href]);

  return (
    <Link href={ path }
          className={ classNames( s['nav-link'], s[`nav-link--${ href?.substring(1) }`], pathName.includes( href ) && s['nav-link--active'] ) }>
        { children }
    </Link>
  )
}

export default NavLink;