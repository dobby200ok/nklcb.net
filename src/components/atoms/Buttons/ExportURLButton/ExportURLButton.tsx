// @ name : ExportURLButton
// @ description : 버튼 클릭 시 클립 보드에 현재 라우터를 저장하며 다이나믹 토스트 모달을 호출합니다.

'use client'

import s from './ExportURLButton.module.scss';
import Icon from '@/components/atoms/Assets/Icon';
import classNames from 'classnames';
import className from '@/constants/className';
import useModal from '@/hooks/useDynamicModal';

interface ExportURLButtonProps {
  url: string;
}

const ExportURLButton:React.FC<ExportURLButtonProps> = ({ url }) => {

  const { toast } = useModal();

  const useCopyURLHandler = async () => {

    try {

      await navigator.clipboard.writeText(url);
      
      toast('클립보드에 복사되었습니다.');

    } catch (error) {

      console.log(error);
      
    }
  }
  

  return (
    <button className={ classNames( s['btn-copy'] ) }
            type="button"
            title="링크 복사"
            onClick={ useCopyURLHandler }>
      <Icon.ExportURL width={ 32 }
                      height={ 32 } />
      <span className={ className.a11y }>링크 복사</span>
    </button>
  )
}

export default ExportURLButton;