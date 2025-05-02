// @ name : FilterButton
// @ description : 버튼 클릭 시 다이나믹 필터 모달을 호출하는 컴포넌트

'use client'

import { useState } from "react";
import classNames from "classnames";
import Icon from "@/components/atoms/Assets/Icon"
import s from './FilterButton.module.scss';
import className from "@/constants/className";
import useModal from "@/hooks/useDynamicModal";

const FilterButton = () => {

  const [filterActive, setFilterActive] = useState<boolean>(false),
        { filter, hide } = useModal();

  const handleActiveFilterModal = () => {
    
    setFilterActive(! filterActive);

    if(filterActive) {
      hide();
    } else {
      filter(() => setFilterActive(false));
    }
  }

  return (
      <button type="button"
              className={ classNames( s['btn-filter'] ) }
              title="필터"
              onClick={ handleActiveFilterModal }>
        <Icon.Filter width={ 32 }
                     height={ 32 }
                     active={filterActive}  />
        <span className={ className.a11y }>필터</span>
      </button>
  )
}

export default FilterButton;