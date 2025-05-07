// @ name : FocusTrapDynamicModal
// @ description : 다이나믹 모달이 활성화되었을 때, 자식으로 전달받는 children에
//                 대화형 컨텐츠가 있는 경우 포커스 트랩을 활성화합니다.

'use client';

import { useRef, useEffect, ReactNode } from "react";
import useModal from "@/hooks/useDynamicModal";

interface FocusTrapDynamicModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const FocusTrapDynamicModal:React.FC<FocusTrapDynamicModalProps> = ({ children }) => {

  const focusContainer = useRef<HTMLDivElement>(null),
        activeIndex = useRef<number | null>(null),
        { hide } = useModal();

  useEffect(() => {

      const container = focusContainer.current;

      if (!container) return;

      const beforeHandlerElement = document.activeElement as HTMLElement,
            interactiveContents = container.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])');

      const handleTabKeydownEvent = (event : KeyboardEvent) => {

        if(event.key === 'Tab') {

          event.preventDefault();

          const next = activeIndex.current ===  null ? 0 : event.shiftKey ? activeIndex.current - 1 : activeIndex.current + 1,
                max = interactiveContents.length - 1,
                tabIndex = next < 0 ? max : next > max ? 0 : next;

          activeIndex.current = tabIndex;
          interactiveContents[tabIndex]?.focus();

        }

        if(event.key === 'Escape') {
          hide();
          beforeHandlerElement.focus();
        }
      }

      document.addEventListener('keydown', handleTabKeydownEvent);

      return() => document.removeEventListener('keydown', handleTabKeydownEvent);

  }, []);

  return (
    <div style={{ height: '100%' }}
         ref={focusContainer}>
      { children }
    </div>
  )
}

export default FocusTrapDynamicModal;