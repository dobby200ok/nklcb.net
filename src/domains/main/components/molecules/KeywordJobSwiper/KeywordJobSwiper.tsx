'use client';

import s from './KeywordJobSwiper.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import classNames from 'classnames';

import { useMobileCheck } from '@/hooks/useResize';
import useJobList from '@/domains/jobList/api/queries';

import { JobListItemProps } from '@/types/JobItemProps';

import SkeletonKeywordJobSwiper from './SkeletonKeywordJobSwiper';

import Link from 'next/link';

interface KeywordJobSwiperProps {
  keyword: string;
}

const KeywordJobSwiper:React.FC<KeywordJobSwiperProps> = ({ keyword }) => {

  const isMobile = useMobileCheck(),
        { data: jobList, isLoading, isFetching } = useJobList(1, keyword, {});

        if (isLoading || isFetching) return <SkeletonKeywordJobSwiper />

  return (
    <Swiper spaceBetween={ isMobile ? 12 : 24 }
            slidesPerView={ isMobile ? 1.5 : 3.5 }
            freeMode={ true }
            slidesOffsetBefore={ isMobile ? 20 : 48 } >
      {
        jobList?.data.map((job: JobListItemProps) => (
          <SwiperSlide key={ job._id }>
            <Link href={ `/jobList/post/${job._id}`}
                  className={ s['slide-item'] }>
              <strong className={ classNames(s['company'], s[`company--${ job.company.en }`]) }>
                { job.company.kr }
              </strong>
              <h4 className={ s['tit-job'] }>
                { job.title }
              </h4>
              <ul className={ s['list-info'] }>
                <li>
                  { job.entryLevel.name }
                </li>
                <li>
                  { job.positionDetail.name }
                </li>
                <li>
                  { job.employmentType }
                </li>
              </ul>
            </Link>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default KeywordJobSwiper;