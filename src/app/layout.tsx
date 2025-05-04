import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import '@/styles/global.scss';

import Providers from "@/providers/RQProvider";
import className from "@/constants/className";

import Header from "@/components/molecules/Layouts/Header";
import Footer from "@/components/molecules/Layouts/Footer";

import DirectLink from "@/components/molecules/DirectLink";

import { GoogleAnalytics } from '@next/third-parties/google'

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
  // userScalable: false, 접근성으로 인한 삭제
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={ `${notoSansKr.className}` }>
        <Providers>
          <div className="wrapper">
            <DirectLink />
            <Header />
            <div className="content">
              <article>
                <h2 id="content" className={ className.a11y }>본문</h2>
                { children }
              </article>
            </div>
            <Footer />
          </div>
        </Providers>
        {
          process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          )
        }
      </body>
    </html>
  );
}
