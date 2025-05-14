'use client';

import s from './DynamicModal.module.scss';
import classNames from 'classnames';

import className from '@/constants/className';
import Icon from '@/components/atoms/Assets/Icon';

import { useShallow } from 'zustand/shallow';
import { useDynamicModalContext } from '@/providers/DynamicModalProvider';

import FilterModal from '@/components/molecules/DynamicModal/FilterModal';

import VirtualDynamicModal from './VirtualDynamicModal';

import DynamicComplete from '@/components/atoms/Assets/DynamicComplete';

import SearchModal from '@/components/molecules/DynamicModal/SearchModal';

const DynamicModal = () => {

  const { active, type, dimmed, title, text, href, hideModal } = useDynamicModalContext(
        useShallow(state => ({
          active: state.active,
          type: state.type,
          dimmed: state.dimmed,
          title: state.title,
          text: state.text,
          href: state.href,
          hideModal: state.hideModal
        }))
      );

  return (
    <>
      {/* 딤드 레이어 */}
      <div className={ classNames(s['dimmed-layer'], active && dimmed && s['dimmed-layer--active']) }
           style={{ transition: `backdrop-filter 0.5s ease-in-out 0.5s,
                                 -webkit-backdrop-filter 0.5s ease-in-out 0.5s,
                                 background 0.5s ease-in-out 0.5s` }}
           onClick={() => hideModal()} />
      {/* 다이나믹 모달 */}
      <VirtualDynamicModal active={ active }
                           type={ type }
                           focusTrap={ dimmed ? true : false }>
        {/* 헤더 */}
        {
          title &&
          <div className={ classNames( s['modal-header'] ) }>
            <h1 className={ classNames( s['modal-tit'] ) }>
              { title }
            </h1>
            <button type="button"
                    className={ classNames( s['btn-close'] ) }
                    onClick={() => hideModal()}>
              <Icon.Close width={32}
                          height={32}
                          fill='#fff' />
              <span className={ className.a11y }>모달 닫기</span>
            </button>
          </div>
        }
        <div className={ classNames( s['modal-content'] ) }>
          {/* 필터 */}
          {
            type === 'filter' &&
              <FilterModal />
          }
          {/* 토스트 */}
          {
            type === 'toast' &&
            <p role="status"
              aria-live="polite"
              className={ classNames( s['txt-toast'] ) }>
              { text }
            </p>
          }
          {/* 링크 */}
          {
            type === 'link' &&
            <a href={ href }
              target="_blank"
              title="새 창 열림"
              className={ classNames( s['link-apply'] ) }>
              { text }
            </a>
           }
           {/* 알럿 */}
           {
              type === 'alert' &&
              <>
                <div className={ classNames( s['alert-info'] ) }
                    role="alert"
                    aria-live="polite">
                  <h1 className={ classNames( s['tit-alert'] ) }>
                    { text }
                  </h1>
                </div>
                <div className={ classNames( s['btn-wrap'] ) }>
                  <button type="button"
                          className={ classNames( s['btn-confirm'] ) }
                          onClick={() => hideModal()}>
                    확인
                  </button>
                </div>
              </>
            }
            {/* 완료 */}
            {
              type === 'complete' &&
              <>
                <div className={ classNames( s['ico-complete'] ) }>
                  <DynamicComplete loop={ false } />
                </div>
              </>
            }
             {/* 검색 */}
             {
              type === 'search' &&
                <SearchModal />
            }
        </div>
      </VirtualDynamicModal>
    </>
  )
}

export default DynamicModal;