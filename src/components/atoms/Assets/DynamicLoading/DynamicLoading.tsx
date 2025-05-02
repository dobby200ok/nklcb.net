// @ name : DynamicLoading
// @ description : 애니메이션이 적용된 로티 로딩 애니메이션을 삽입합니다.
//                 로티는 CSR에서만 동작하며, loop props를 통해 무한 재생 여부를 설정합니다.
// @ example : <DynamicLoading loop={ true } />

'use client';

import dynamic from 'next/dynamic';

import loading from '@/assets/lottie/dynamic-loading.json';
import className from '@/constants/className';

interface LottieProps {
  loop?: boolean;
}

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const DynamicLoading:React.FC<LottieProps> = ({ loop = true }) => {
  return (
    <>
      <Lottie animationData={ loading }
              loop={ loop }
              aria-live="polite" />
      <span className={ className.a11y }>로딩 중</span>
    </>
  )
};

export default DynamicLoading;