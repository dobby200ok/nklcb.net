// @ name : JobPost
// @ description : 채용 공고 컴포넌트. postId 값을 받아 리액트 쿼리를 통해
//                 응답 받은 공고 내용을 렌더합니다.
// @ example : <JobPost postId="123" />

'use client'

import s from './JobPost.module.scss';
import classNames from 'classnames';
import { useEffect } from 'react';

import { JobListItemProps } from '@/types/JobItemProps';
import useModal from '@/hooks/useDynamicModal';
import { dateUtils, localStorageUtils, textUtils } from '@/utils/utils';
import BookmarkButton from '@/components/atoms/Buttons/BookmarkButton';
import ExportURLButton from '@/components/atoms/Buttons/ExportURLButton';
import SkeletonJobPost from '@/components/molecules/JobPost/SkeletonJobPost';

import usePost from '@/domains/post/api/queries';

interface JobPostProps {
  postId : string;
}

type JobContentProps = NonNullable<JobListItemProps['content']>[number];

const JobPost:React.FC<JobPostProps> = ({ postId }) => {

  const { link, alert, hide } = useModal(),
        { data: jobPost, isLoading, isFetching } = usePost(postId),
        { data } = jobPost;

  useEffect(() => {

    localStorageUtils.append('visitedPost', postId);

    // 공고 마감 여부
    if( data.date.infinity ) { // 상시

      link('지원하러 가기', data.origin.url);

    } else {
      const leftDate = dateUtils.getTimeLeft( dateUtils.strToDate( data.date.end.ymd, data.date.end.time ) );

      if(leftDate.includes('종료')) {
        alert('이미 마감된 공고입니다.');
      } else {
        link('지원하러 가기', data.origin.url);
      }
    }

    return(() => hide());

  }, []);

  if (isLoading || isFetching) return <SkeletonJobPost />
  
  return (
    <>
        <div className={ classNames( s['post-wrap'])  }>
          <div className={ classNames( s['post-header'] ) }>
            <div className={ classNames( s['post-top'] ) }>
              <strong className={ classNames( s['company-name'], s[`company-name--${data.company.en}`] ) }>
                { data.company.kr }
              </strong>
              <div className={ classNames( s['utils-wrap'] ) }>
                <ExportURLButton url={ `${process.env.NEXT_PUBLIC_BASE_URL}/jobList/post/${postId}` } />
                <BookmarkButton id={ postId }
                                company={ data.company.en } />
              </div>
            </div>
            <div className={ classNames( s['post-title'] ) }>
              { data.title }
            </div>
            <div className={ classNames( s['post-info'] ) }>
              <ul className={ classNames( s['list-info'] ) }>
                <li>
                  { data.positionDetail.name }
                </li>
                <li>
                  { data.employmentType }
                </li>
                <li>
                  { data.entryLevel.name }
                </li>
              </ul>
            </div>
            <div className={ classNames( s['btn-tab'] ) }>
              <ul className={ classNames( s['tab-list'] ) }>
                <li>
                  <button type="button"
                          className={ classNames( s['btn-tab'], s['btn-tab--active'] ) }>
                    내용
                  </button>
                </li>
                {/* <li>
                  <button type="button"
                          className={ classNames( s['btn-tab'] ) }>
                    코멘트
                  </button>
                </li> */}
              </ul>
            </div>
          </div>
          <div className={ classNames( s['post-content'] ) }>
            {
              data.summaryAI && 
              <div className={ classNames( s['box-summary'] ) }>
                <strong className={ classNames( s['tit-summary'] ) }>
                  AI가 이 공고를 요약해드릴게요!
                </strong>
                <div className={ classNames( s['txt-summary'] ) }>
                  {
                    textUtils.splitParagraphs(data.summaryAI).map((p, i) => (
                      <p key={i}
                         className={ classNames( s['txt-item'] ) }>
                        { p }
                      </p>
                    ))
                  }
                </div>
              </div> 
            }
            <dl className={ classNames( s['content-list'] ) }>
              {
                data.content.map((e:JobContentProps, i: number) => (
                  <div key={i}
                       className={ classNames( s['post-article'] ) } >
                      {
                        e.title && 
                        <dt>{ e.title }</dt>
                      }
                      {
                        e.content &&
                        <dd>
                          {
                            Array.isArray( e.content ) ? (
                              <ul className={ classNames( s['article-list'] ) }>
                                { 
                                  e.content.map((d, di) => (
                                    <li key={di}>
                                        { d }
                                    </li>
                                ))}
                              </ul>
                            ) : 
                            typeof e.content === 'string' && e.title === '조직소개' ?
                              textUtils.splitParagraphs(e.content).map((p, i) => (
                                <p key={i} className={classNames(s['txt-item'])}>
                                  {p}
                                </p>
                              )) :
                            <p key={i} className={classNames(s['txt-item'])}>
                              { e.content }
                            </p>
                          }
                        </dd>
                      }
                  </div>
                ))
              }
            </dl>
          </div>
        </div>
    </>
  )
}

export default JobPost;