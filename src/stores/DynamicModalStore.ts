
// @ name : DynamicModalStore
// @ description : 다이나믹 모달과 관련된 스토어를 관리합니다.

import { createStore } from 'zustand';

export interface DynamicModalProps {
  active: boolean;
  type: string;
  dimmed?: boolean;
  title?: string;
  text?: string;
  href?: string;
  stack?: DynamicModalProps;
  callBack?: () => void;
}

export interface DynamicModalStateProps extends DynamicModalProps {
  activeModal: (info: DynamicModalProps) => void;
  hideModal: () => void;
}


let modalTimeout: ReturnType<typeof setTimeout> | null = null;

export const createDynamicModalStore = (initProps?: Partial<DynamicModalProps>) => {
  
  const DEFAULT_PROPS: DynamicModalProps = {
    active: false,
    type: '',
    dimmed: false,
    title: '',
    text: '',
    href: '',
    stack: {} as DynamicModalProps,
    callBack: undefined
  };

  return createStore<DynamicModalStateProps>()((set, get) => ({
    ...DEFAULT_PROPS,
    ...initProps,

    activeModal: (info: DynamicModalProps) => {

      if(modalTimeout) {
        clearTimeout(modalTimeout);
        modalTimeout = null;
      }

      // 토스트 타입인 경우 3초 후 원래 다이나믹 모달로 원복 (디바운싱)
      if(info.type === 'toast') {

        const stack = get().stack;

        set(() => ({
          ...DEFAULT_PROPS,
          ...info,
          stack: stack
        }))

        modalTimeout = setTimeout(() => {

          if(stack?.active) {
            set(() => ({
              ...DEFAULT_PROPS,
              ...stack,
              stack: stack
            }))
          } else {
            set(() => ({
              ...DEFAULT_PROPS
            }))
          }

          modalTimeout = null;
        }, 3000);

      // 완료 타입인 경우 2초 후 원래 다이나믹 모달로 원복 (디바운싱)
      } else if (info.type === 'complete') {

        const dimmed = get().dimmed,
              callBack = get().callBack;
        
        set(() => ({
          ...DEFAULT_PROPS,
          dimmed: dimmed,
          ...info
        }))

        modalTimeout = setTimeout(() => {

          set(() => ({
            ...DEFAULT_PROPS
          }))

          if(callBack) {
            callBack();            
          }

          modalTimeout = null;
        }, 2000)

      } else {
        set(() => ({
          ...DEFAULT_PROPS,
          ...info,
          stack: info
        }));
      }

    },
    
    hideModal: () => {
        const stack = get().stack;

        if(modalTimeout) {
          clearTimeout(modalTimeout);
          modalTimeout = null;
        }

        if(stack?.callBack) {
          stack.callBack();
        }

        set(() => ({
          ...DEFAULT_PROPS
        }))
      }

  }))

}

export type DynamicModalStoreProps = ReturnType<typeof createDynamicModalStore>;