
// @ name : JobCardItem
// @ description : 부모로부터 채용 공고 리스트에 대한 정보를 받아
//                 클라이언트에서 채용 공고 리스트를 렌더합니다.
// @ example : <JobCardItem jobId="123"
//                          company={ { kr: '네이버', en : 'naver' } }
//                          title="네이버 개발자 채용 공고"
//                          detailList={ [ '백엔드', '정규', '경력' ] }
//                          dateInfo={ { ... } }  />

'use client'

import s from './JobCardItem.module.scss';
import classNames from 'classnames';
import { dateUtils } from '@/utils/utils';
import Badge from '@/components/atoms/Badge';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import BookmarkButton from '@/components/atoms/Buttons/BookmarkButton';
import { localStorageUtils } from '@/utils/utils';

import { JobListItemProps } from '@/types/JobItemProps';

const JobCardItem:React.FC<JobListItemProps> = ({ _id, company, title, positionDetail, entryLevel, date, employmentType }) => {

  const [isVisitied, setIsVisited] = useState<boolean>(false),
        [createDt, setCreateDt] = useState<string>(''),
        [leftTime, setLeftTime] = useState<string>(''),
        [isNewPost, setIsNewPost] = useState<boolean>(false),
        [isAlmostDue, setIsAlmostDue] = useState<boolean>(false),
        [isClosePost, setIsClosePost] = useState<boolean>(false);

  useEffect(() => {

    // @ desc : 공고 로컬 스토리지 방문 처리
    if(localStorageUtils.includes('visitedPost', _id)) {
      setIsVisited(true);
    }

    // @ desc : 공고의 등록일과 남은 기간을 문자열로 치환
    const createDate = dateUtils.getTimeAgo( dateUtils.strToDate(date.create, date.createTime) );

    setCreateDt( createDate );

    setIsNewPost( ( createDate.includes('방금') || createDate.includes('분') || createDate.includes('시간') ) );

    if( date.infinity ) {
      setLeftTime('상시');
    }

    if( date.end.ymd && date.end.time ) {
      const leftDate = dateUtils.getTimeLeft( dateUtils.strToDate( date.end.ymd, date.end.time ) );
      
      setLeftTime( leftDate );

      setIsClosePost( leftDate.includes('종료') );
      setIsAlmostDue( ( leftDate.includes('분') || leftDate.includes('시간') ) );
    }
  }, [_id, date]);
  
  return (
    <li className={ classNames( s['job-card'] ) } >
        <div className={ classNames( s['job-card__inner'] ) }>
          <div className={ classNames( s['company-wrap'], s['company-wrap--pc'] ) }>
            <strong className={ classNames(s['company'], s[`company--${company.en}`])} >
              { company.kr }
            </strong>
          </div>
          <div className={ classNames( s['job-card__info'], (isVisitied) && s['job-card__info--visited'], (isClosePost) && s['job-card__info--closed'] ) }>
            <div className={ classNames( s['main-info'] ) } >
              <div className={ classNames( s['card-top'] ) }>
                <div className={ classNames( s['company-wrap'], s['company-wrap--mobile'] ) }>
                  <strong className={ classNames(s['company'], s[`company--${company.en}`])} >
                    { company.kr }
                  </strong>
                </div>
                {
                  ( isClosePost || isVisitied || isNewPost || isAlmostDue ) &&
                  <div className={ classNames( s['badge-wrap'] ) }>
                      <Badge color={ isClosePost ? 'gray' : 
                                    isAlmostDue ? 'red' :
                                    isVisitied ? 'gray' :
                                    isNewPost ? 'blue' : '' }>
                        {
                          isClosePost ? '마감된 공고에요' :
                          isAlmostDue ? `마감까지 ${ leftTime } 남았어요` :
                          isVisitied ? '이미 본 공고에요' :
                          isNewPost ? '새로 올라왔어요!' : ''
                        }
                      </Badge>
                  </div>
                }
              </div>
              <div className={ classNames( s['tit-wrap'] ) }>
                <strong className={ classNames( s['job-tit'] ) }>
                  <Link className={ classNames( s['link-job'] ) } 
                        href={ `/jobList/post/${_id}` } >
                    { title }
                  </Link>
                </strong>
              </div>
              <div className={ classNames( s['detail-info'] ) }>
                <ul className={ classNames( s['detail-list'] ) } >
                  <li>{ entryLevel.name }</li>
                  <li>{ positionDetail.name }</li>
                  <li>{ employmentType }</li>
                  <li className={ classNames( s['list-item--mobile'] ) }>
                    <strong className={ isAlmostDue ? classNames(s['emph-txt']) : '' }>
                      { ( leftTime.includes('상시') || leftTime.includes('종료') )? leftTime : `${leftTime} 남음` }
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
            <div className={ classNames( s['sub-info']) }>
              <div className={ classNames( s['btn-wrap'] ) } >
                <BookmarkButton id={ _id }
                                company={ company.en } />
              </div>
              <div className={ classNames( s['info-box'] ) }>
                <dl className={ classNames( s['info-list'] ) }>
                  <div>
                    <dt>남은 기간</dt>
                    <dd>
                      <strong className={ isAlmostDue ? classNames(s['emph-txt']) : '' }>{ leftTime }</strong>
                    </dd>
                  </div>
                  <div>
                    <dt>등록일</dt>
                    <dd>{ createDt }</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
    </li>
  )
};

export default JobCardItem;