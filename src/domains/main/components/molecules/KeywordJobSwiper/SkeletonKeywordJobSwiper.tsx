'use client';

import s from './KeywordJobSwiper.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import classNames from 'classnames';

import { useMobileCheck } from '@/hooks/useResize';

const SkeletonKeywordJobSwiper = () => {

  const isMobile = useMobileCheck();

  return (
    <Swiper spaceBetween={ isMobile ? 12 : 24 }
            slidesPerView={ isMobile ? 1.5 : 3.5 }
            freeMode={ true }
            slidesOffsetBefore={ isMobile ? 20 : 48 } >
      {
        Array(5).fill(null).map((_, idx) => (
          <SwiperSlide key={ idx }>
            <div className={ s['slide-item'] }>
              <strong className={ classNames(s['company']) }>
                회사명
              </strong>
              <h4 className={ s['tit-job'] }>
                공고명
              </h4>
              <ul className={ s['list-info'] }>
                <li>기타</li>
                <li>정규</li>
                <li>신입</li>
              </ul>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default SkeletonKeywordJobSwiper;