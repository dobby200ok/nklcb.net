'use client'

import s from './JobCardItem.module.scss';
import classNames from 'classnames';
import BookmarkButton from '@/components/atoms/Buttons/BookmarkButton';
import Skeleton from '@/components/atoms/Skeleton';

const SkeletonJobCardItem = () => {

  return (
    <li className={ classNames( s['job-card'] ) } >
        <div className={ classNames( s['job-card__inner'] ) }>
          <div className={ classNames( s['company-wrap'], s['company-wrap--pc'] ) }>
            <strong className={ classNames(s['company'])} >
              <Skeleton>
              회사명
              </Skeleton>
            </strong>
          </div>
          <div className={ classNames( s['job-card__info'] ) }>
            <div className={ classNames( s['main-info'] ) } >
              <div className={ classNames( s['card-top'] ) }>
                <div className={ classNames( s['company-wrap'], s['company-wrap--mobile'] ) }>
                  <strong className={ classNames(s['company'])} >
                    <Skeleton>
                      회사명
                    </Skeleton>
                  </strong>
                </div>
              </div>
              <div className={ classNames( s['tit-wrap'] ) }>
                <strong className={ classNames( s['job-tit'] ) }>
                    <Skeleton>
                      공고명
                    </Skeleton>
                </strong>
              </div>
                <div className={ classNames( s['detail-info'] ) }>
                  <ul className={ classNames( s['detail-list'] ) } >
                    <li>
                      <Skeleton>기타</Skeleton>
                    </li>
                    <li>
                      <Skeleton>정규</Skeleton>
                    </li>
                    <li>
                      <Skeleton>신입</Skeleton>
                    </li>
                    <li className={ classNames( s['list-item--mobile'] ) }>
                      <Skeleton>상시</Skeleton>
                  </li>
                  </ul>
                </div>
            </div>
            <div className={ classNames( s['sub-info']) }>
              <div className={ classNames( s['btn-wrap'] ) } >
                <Skeleton>
                  <BookmarkButton id={ '123' }
                                  company={ 'naver' } />
                </Skeleton>
              </div>
              <div className={ classNames( s['info-box'] ) }>
                <dl className={ classNames( s['info-list'] ) }>
                  <div>
                    <dt><Skeleton>남은 기간</Skeleton></dt>
                    <dd>
                    <Skeleton>남은 기간</Skeleton>
                    </dd>
                  </div>
                  <div>
                    <dt><Skeleton>등록일</Skeleton></dt>
                    <dd><Skeleton>등록일</Skeleton></dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
    </li>
  )
};

export default SkeletonJobCardItem;