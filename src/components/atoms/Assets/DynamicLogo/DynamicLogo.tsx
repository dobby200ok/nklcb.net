// @ name : DynamicLogo
// @ description : 애니메이션이 적용된 로티 로고를 삽입합니다.
//                 로티는 CSR에서만 동작하며, loop props를 통해 무한 재생 여부를 설정합니다.
// @ example : <DynamicLogo loop={ true } />

'use client';

import dynamic from 'next/dynamic';

import logo from '@/assets/lottie/dynamic-logo.json';
import className from '@/constants/className';

interface LottieProps {
  loop?: boolean;
}

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const DynamicLogo:React.FC<LottieProps> = ({ loop = false }) => {
  return (
    <>
      <Lottie animationData={ logo }
              loop={ loop }
              aria-hidden="true" />
      <span className={ className.a11y }>네카라쿠배</span>
    </>
  )
};

export default DynamicLogo;