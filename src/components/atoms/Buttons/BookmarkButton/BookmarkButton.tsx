// @ name : BookmarkButton
// @ description : 버튼 클릭 시 로컬 스토리지 bookmark key에 해당 포스트 아이디를 저장합니다.

'use client'

import { useState, useEffect } from 'react';
import classNames from 'classnames';

import s from './BookmarkButton.module.scss';
import Icon from '@/components/atoms/Assets/Icon';
import className from '@/constants/className';
import useModal from '@/hooks/useDynamicModal';
import { localStorageUtils } from '@/utils/utils';

interface BookmarkButtonProps {
  id: string;
  company: string;
}

const BookmarkButton:React.FC<BookmarkButtonProps> = ({ id, company }) => {

  const { toast } = useModal(),
        [bookmark, setBookmark] = useState<boolean>(false);

  const handleBookmarkButtonClick = () => {

    localStorageUtils.toggle('bookmark', id, () => { 
      setBookmark(true);
      toast('공고가 스크랩되었습니다.');
    }, () => {
      setBookmark(false)
    });

  }

  useEffect(() => {

    if(localStorageUtils.includes('bookmark', id)) {
      setBookmark(true);
    }

  }, [id])

  return (
    <button className={ classNames( s['btn-bookmark'] ) }
            type="button"
            onClick={ () => handleBookmarkButtonClick() }
            title="스크랩">
      <Icon.Bookmark width={ 32 }
                     height={ 32 }
                     fill={ bookmark ? `var(--color-${company})` : '' } />
      <span className={ className.a11y }>스크랩</span>
    </button>
  )
}

export default BookmarkButton;