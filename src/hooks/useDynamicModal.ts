
// @ name : useDynamicModal
// @ description : 다이나믹 모달에 관한 함수를 정의합니다.
//                 전역 상태를 zustand를 통해 관리하며, 이를 갱신합니다.
// @ example : const { hide } = useModal();
//             hide();

import { useDynamicModalContext } from '@/providers/DynamicModalProvider';
import { useShallow } from 'zustand/shallow';


const useModal = () => {

  const { activeModal, hideModal } = useDynamicModalContext(
    useShallow((state) => ({
      active: state.active,
      stack: state.stack,
      activeModal: state.activeModal,
      hideModal: state.hideModal
    }))
  )

  const hide = () => {

    hideModal();

  }

  const toast = (text: string, callBack?: () => void) => {
    
    activeModal({
      active: true,
      type: 'toast',
      text,
      callBack
    });

  }

  const alert = (text: string, callBack?: () => void) => {

    activeModal({
      active: true,
      dimmed: true,
      type: 'alert',
      text,
      callBack,
    })

  }

  const filter = (callBack?: () => void) => {

    activeModal({
      title: '필터',
      active: true,
      dimmed: true,
      type: 'filter',
      callBack,
    })

  }

  const link = (text: string, href: string, callBack?: () => void) => {

    activeModal({
      active: true,
      type: 'link',
      text: text,
      href: href,
      callBack
    })

  }

  const complete = (callBack?: () => void) => {

    activeModal({
      active: true,
      type: 'complete',
      callBack
    })

  };

  const search = (callBack?: () => void) => {

    activeModal({
      title: '검색',
      active: true,
      dimmed: true,
      type: 'search',
      callBack,
    })
    
  }

  return {
    hide,
    alert,
    toast,
    link,
    filter,
    complete,
    search
  }
}

export default useModal