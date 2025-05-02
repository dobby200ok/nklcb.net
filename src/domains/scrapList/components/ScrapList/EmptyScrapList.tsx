'use client'

import s from './ScrapList.module.scss'

import classNames from 'classnames'
import { useEffect, useState } from 'react';

import Link from 'next/link';

import { queryUtils } from '@/utils/utils';

const EmptyScrapList = () => {

  const [path, setPath] = useState<string>('/jobList');

  useEffect(() => {

    const query = queryUtils.set();
    
    if(query) {
      setPath(`/jobList?${query}`);
    }

  }, [])

  return (
    <div className={ classNames( s['empty-page'] ) }>
      <p className={ classNames( s['txt-empty'] ) }>
        아직 스크랩한 공고가 없어요. <br />
        마음에 드는 공고를 스크랩해 보세요!
      </p>
      <div className={ s['btn-wrap'] }>
        <Link href={ path }
              className={ classNames( s['btn-link'] ) }>
          스크랩하러 가기
        </Link>
      </div>
    </div>
  )
}

export default EmptyScrapList