// @ name : useResize
// @ description : 리사이징 이벤트에 관한 함수를 정의합니다.
// @ example : useResize('debounce', 300) // { width : ... , height : ... }

import { useEffect, useState } from "react"
import { optimizationUtils } from "@/utils/utils"
import breakPoint from "@/constants/breakPoint";

interface SizeProps {
  width: number;
  height: number;
}

export const useResize = (optimization: 'debounce' | 'throttle' = 'debounce', time: number = 300) => {

  const isClient = typeof window !== 'undefined',
        [innerSize, setInnerSize] = useState<SizeProps>({ 
          width: isClient ? window.innerWidth : 0,
          height: isClient ? window.innerHeight : 0
        });

  useEffect(() => {

    if(! isClient) return;

    const handleResize = () => {
      setInnerSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    const optimizationHandleResize = optimization === 'debounce' ? optimizationUtils.debounce(handleResize, time) :
                                                                   optimizationUtils.throttle(handleResize, time);

    window.addEventListener('resize', optimizationHandleResize);

    return() => window.removeEventListener('resize', optimizationHandleResize);

  }, []);

  return { innerSize };
}

// @ name : useMobileCheck
// @ description : 모바일인 지 여부에 대한 값을 관리합니다.

export const useMobileCheck = () => {

  const { innerSize } = useResize();

  return innerSize.width < breakPoint.desktop;

}