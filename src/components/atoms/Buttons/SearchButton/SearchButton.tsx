
'use client'

import s from './SearchButton.module.scss';

import classNames from 'classnames';

import useModal from '@/hooks/useDynamicModal';

import className from '@/constants/className';
import Icon from '@/components/atoms/Assets/Icon';

import { useState } from 'react';

const SearchButton = () => {

  const { search, hide } = useModal(),
        [searchActive, setSearchActive] = useState<boolean>(false);

  const handleActiveSearchModal = () => {
    setSearchActive(! searchActive);

    if(searchActive) {
      hide()
    } else {
      search(() => setSearchActive(false));
    }
  }

  return (
    <button type="button"
            className={ classNames( s['btn-search'] ) }
            title="검색"
            onClick={ handleActiveSearchModal }>
      <Icon.Search width={ 32 }
                   height={ 32 }
                   active={ searchActive } />
      <span className={ className.a11y }>검색</span>
    </button>
  )

}

export default SearchButton;