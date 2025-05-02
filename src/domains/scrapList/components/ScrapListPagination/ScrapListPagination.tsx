
// @ name : ScrapListPagination
// @ description : 스크랩 공고 리스트의 페이지네이션을 렌더합니다.
// @ example : <Pagination page={ 1 } />

'use client'

import s from './ScrapListPagination.module.scss'

import { useEffect, useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import className from '@/constants/className';
import Icon from '@/components/atoms/Assets/Icon';
import useScrapList from '@/domains/scrapList/api/queries';
import { useMobileCheck } from '@/hooks/useResize';

interface ScrapListPaginationProps {
  page : number;
}

const ScrapListPagination:React.FC<ScrapListPaginationProps> = ({ page }) => {

  const [id, setId] = useState<string[]>([]),
        { mutate, data: scrapList } = useScrapList(),
        totalPage = scrapList?.totalSize ? Math.ceil(scrapList.totalSize / 15) : 0,
        isMobile = useMobileCheck();

  
  const pageUnit = isMobile ? 5 : 10,
        pageList = Math.ceil(page / pageUnit),
        startPage = (pageList - 1) * pageUnit + 1,
        endPage = Math.min(pageList * pageUnit, totalPage);

  useEffect(() => {

    const store = localStorage.getItem('bookmark');

    if(store) {
        setId(JSON.parse(store));
    }

  }, []);

  useEffect(() => {

    mutate({ page: page, id: id });

  }, [id, page, mutate]);


  return (
    <>
      <div className={ classNames( s['box-pagination'] ) }>
        <strong className={ className.a11y }>페이지 이동</strong>
        <div className={ classNames( s['box-pagination__inner'] ) }>
          {
            startPage > 1 && (
              <div className={ classNames( s['btn-wrap'], s['btn-prev'] ) }>
                <Link href={`/jobList?page=${startPage - 1}`}
                      className={ classNames( s['btn-move'] ) }>
                  <Icon.Arrow width={ 32 }
                              height={ 32 }
                              fill="var(--color-deep-gray)"
                              direction='left' />
                  <span className={ classNames( s['txt-btn'] ) }>이전</span>
                </Link>
              </div>
            )
          }
          <ul className={ classNames( s['list-pagination'] ) }>
            {
              Array.from({ length: endPage - startPage + 1 }).map((_, i) => {
                const pageNumber = (startPage + i)
                return (
                  <li key={pageNumber}>
                    {
                      ( (pageNumber) === page ) ?
                      <>
                        <span className={ className.a11y }>현재 페이지</span>
                        <strong className={ classNames( s['page--active'] ) }>{ pageNumber }</strong>
                      </> :
                      <Link href={ `/scrapList?page=${ pageNumber }` }
                            className={ classNames( s['link-page'] ) }>
                        { pageNumber }
                        <span className={ className.a11y }>페이지로 이동</span>
                      </Link>
                    }
                  </li>
                )
              })
            }
          </ul>
          {
            endPage < totalPage && (
              <div className={ classNames( s['btn-wrap'], s['btn-next'] ) }>
                <Link href={`/scrapList?page=${endPage + 1}`}
                      className={ classNames( s['btn-move'] ) }>
                  <span className={ classNames( s['txt-btn'] ) }>다음</span>
                  <Icon.Arrow width={ 32 }
                              height={ 32 }
                              direction='right'
                              fill="var(--color-deep-gray)" />
                </Link>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default ScrapListPagination;