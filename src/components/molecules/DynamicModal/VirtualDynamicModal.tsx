// @ name : VirtualDynamicModal
// @ description : 다이나믹 모달을 렌더하기 전 사전 컨텐츠의 사이즈를 인식하고
//                 width, height 값을 고정시킵니다.

'use client';

import s from './DynamicModal.module.scss';
import { useState, useEffect, useRef, ReactNode } from "react";
import { useResize } from '@/hooks/useResize';
import FocusTrapDynamicModal from './FocusTrapDynamicModal';

import classNames from "classnames";

interface VirtualDynamicModalProps {
  active: boolean;
  type: string;
  focusTrap: boolean;
  children: ReactNode;
}

const VirtualDynamicModal:React.FC<VirtualDynamicModalProps> = ({ active, type, focusTrap, children }) => {

  const [renderComplated, setRenderComplated] = useState<boolean>(false),
        [size, setSize] = useState<{ width: number, height: number | string}>({ width: 112, height: 24 }),
        virtualDOM = useRef<HTMLDivElement>(null),
        { innerSize } = useResize();

  useEffect(() => {
    setRenderComplated(false);
  }, [type, children, innerSize]);

  useEffect(() => {
    if (! renderComplated && virtualDOM.current) {
      const rect = virtualDOM.current.getBoundingClientRect();
  
      setSize({ width: rect.width, height: rect.height });
  
      requestAnimationFrame(() => {
        setRenderComplated(true);
      });
    }
  }, [renderComplated, type, children]);

  return (
    <>
      {
        (active && ! renderComplated) &&
        <div aria-hidden='true'
             style={{ visibility: 'hidden', position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: -9999 }}>
          <div ref={ virtualDOM }
               className={ classNames( s['dynamic-modal'], s['dynamic-modal--virtual'], type && s[`dynamic-modal--${type}`]) }>
            { children }
          </div>
        </div>
      }
      <div className={ classNames( s['dynamic-modal'], s['dynamic-modal--render'], (active && renderComplated) && s['dynamic-modal--active'], type && s[`dynamic-modal--${type}`] ) }
           style={{ transition: `all 0.5s ease-in-out`,
                    zIndex: 9999,
                    width: ( active && renderComplated ) ? size.width : 80,
                    height: ( active && renderComplated ) ? size.height: 16
            }}>
        <div className={ classNames( s['dynamic-modal__inner'], (active && renderComplated) && s['dynamic-modal__inner--active'] ) }>
          {
            ( active && renderComplated ) && 
              focusTrap ? <FocusTrapDynamicModal>{ children }</FocusTrapDynamicModal> :
              children
          }
        </div>
      </div>
    </>
  )
};

export default VirtualDynamicModal;