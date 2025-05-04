'use client'

// @ name : DirectLink
// @ description : 반복되는 컨텐츠 스킵을 제공하는 접근성 컴포넌트

import s from './DirectLink.module.scss';

import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface HeadingProps {
  id: string;
  text: string;
}

const DirectLink = () => {

  const pathname = usePathname(),
        [dirLink, setDirLink] = useState<HeadingProps[]>([]);

  useEffect(() => {

    const headingList:HeadingProps[] = [];

    document.querySelectorAll<HTMLElement>('h1, h2, h3').forEach((e) => {
      if(! e.id) {
        e.id = crypto.randomUUID();
      }

      const heading = {
        id: e.id,
        text: e.innerText
      }

      headingList.push(heading);
    })

    setDirLink(headingList);

  }, [pathname]);

  return (
    <div className={ classNames( s['dir-link'] ) }>
      {
        dirLink.map((e: HeadingProps) => (
          <a key={ e.id }
             href={ `#${ e.id }` }>
            { e.text } 바로 가기
          </a>
        ))
      }
    </div>
  )
}

export default DirectLink;