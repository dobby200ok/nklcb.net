'use client'

import '@/styles/global.scss';
import s from './page.module.scss';

import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import classNames from 'classnames';

import className from '@/constants/className';
import LinkButton from '@/components/atoms/Buttons/LinkButton';
import Icon from '@/components/atoms/Assets/Icon';

const notoSansKr = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Noto Sans KR', 'Noto Sans KR Fallback', 'Noto Sans KR Fallback Fallback', 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', 'sans-serif'],
});


export const metadata: Metadata = {
  title: "꿈의 기업 채용 공고를 한 번에! | 네카라쿠배",
  description: "네이버 카카오 라인 쿠팡 배달의민족 당근마켓 토스 채용 공고를 한 번에!",
  robots: 'index,follow',
  referrer: 'origin',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: [
      {
        url: '/ico_96x96.png',
        rel: 'apple-touch-icon-precomposed',
      },
      {
        url: '/ico_144x144.png',
        sizes: '114x114',
      },
      {
        url: '/ico_72x72.png',
      },
    ],
  },
  openGraph: {
    title: '네카라쿠배',
    url: 'https://nklcb.net',
    images: [
      {
        url: '/assets/images/og-image.png',
        width: 270,
        height: 270,
        alt: '네카라쿠배'
      }
    ],
    description: '네이버 카카오 라인 쿠팡 배달의민족 당근마켓 토스 채용 공고를 한 번에!',
  },

  twitter: {
    card: 'summary',
    title: '네카라쿠배',
    description: '네이버 카카오 라인 쿠팡 배달의민족 당근마켓 토스 채용 공고를 한 번에!',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function GlobalError() {
  return (
      <html lang="ko">
        <body className={ `${notoSansKr.className}` }>
          <div className="wrapper">
            <div className="content">
              <article>
                <h2 className={ className.a11y }>본문</h2>
                <div className={ classNames( s['error-page'] ) }>
                  <div className={ classNames( s['error-page__inner'] ) }>
                    <div className={ classNames( s['ico-wrap'] ) }>
                      <Icon.Bug width={ 100 } height={ 100 } />
                    </div>
                    <div className={ classNames( s['info-txt'] ) }>
                      <h3 className={ classNames( s['tit-error'] ) }>
                        일시적 오류가 발생했습니다.
                      </h3>
                      <p className={ classNames( s['txt-error'] ) }>
                        이용에 불편을 드려 죄송합니다.<br />
                        메인 페이지로 이동하셔서 다시 진행해주세요.
                      </p>
                      <div className={ s['btn-wrap'] }>
                        <LinkButton href='/'
                                    size="large">
                          메인으로 가기
                        </LinkButton>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </body>
      </html>
  );
}
