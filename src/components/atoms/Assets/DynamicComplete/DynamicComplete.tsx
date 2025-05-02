// @ name : DynamicComplete
// @ description : 완료 애니메이션을 삽입합니다.
//                 로티는 CSR에서만 동작하며, loop props를 통해 무한 재생 여부를 설정합니다.
// @ example : <DynamicComplete loop={ true } />

'use client';

import dynamic from 'next/dynamic';

import complete from '@/assets/lottie/dynamic-complete.json';
import className from '@/constants/className';

interface LottieProps {
  loop?: boolean;
}

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const DynamicComplete:React.FC<LottieProps> = ({ loop = false }) => {
  return (
    <>
      <Lottie animationData={ complete }
              loop={ loop }
              aria-hidden="true" />
      <span className={ className.a11y }>완료</span>
    </>
  )
};

export default DynamicComplete;