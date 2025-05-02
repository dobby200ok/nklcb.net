'use client'

import s from './../JobPost.module.scss';
import classNames from 'classnames';

import BookmarkButton from '@/components/atoms/Buttons/BookmarkButton';
import ExportURLButton from '@/components/atoms/Buttons/ExportURLButton';

import Skeleton from '@/components/atoms/Skeleton';

const SkeletonJobPost = () => {
  
  return (
    <div className={ classNames( s['post-wrap'])  }>
      <div className={ classNames( s['post-header'] ) }>
        <div className={ classNames( s['post-top'] ) }>
          <strong className={ classNames( s['company-name'] ) }>
            <Skeleton>네이버</Skeleton>
          </strong>
          <div className={ classNames( s['btn-utils'] ) }>
            <Skeleton>
              <ExportURLButton url={ `${process.env.NEXT_PUBLIC_BASE_URL}/jobList/post` } />
            </Skeleton>
            <Skeleton>
              <BookmarkButton id={ '123' }
                              company={ 'naver' } />
            </Skeleton>
          </div>
        </div>
        <div className={ classNames( s['post-title'] ) }>
          <Skeleton>공고명</Skeleton>
        </div>
        <div className={ classNames( s['post-info'] ) }>
          <ul className={ classNames( s['list-info'] ) }>
            <li>
              <Skeleton>기타</Skeleton>
            </li>
            <li>
              <Skeleton>경력</Skeleton>
            </li>
            <li>
              <Skeleton>신입</Skeleton>
            </li>
          </ul>
        </div>
        <div className={ classNames( s['btn-tab'] ) }>
          <ul className={ classNames( s['tab-list'] ) }>
            <li>
              <button type="button"
                      className={ classNames( s['btn-tab'], s['btn-tab--active'] ) }>
                <Skeleton>공고명</Skeleton>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className={ classNames( s['post-content'] ) }>
        <div className={ classNames( s['box-summary'] ) }>
          <strong className={ classNames( s['tit-summary'] ) }>
            <Skeleton>AI 요약</Skeleton>
          </strong>
          <p className={ classNames( s['txt-summary'] ) }>
            <Skeleton>요약 내용</Skeleton>
          </p>
        </div>
        <dl className={ classNames( s['content-list'] ) }>
          {
            Array.from({ length : 5 }).map(() => (
              <div className={ classNames( s['post-article'] ) }
                   key={ crypto.randomUUID() }>
                  <dt>
                    <Skeleton>문단 제목</Skeleton>
                  </dt>
                  <dd>
                    <p className={ classNames( s['article-info'] ) }>
                      <Skeleton>문단 내용</Skeleton>
                    </p>
                  </dd>
              </div>
            ))
          }
        </dl>
      </div>
    </div>
  )
}

export default SkeletonJobPost;