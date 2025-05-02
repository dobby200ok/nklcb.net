import s from './page.module.scss'
import classNames from 'classnames';

import className from '@/constants/className';
import Icon from '@/components/atoms/Assets/Icon';
import LinkButton from '@/components/atoms/Buttons/LinkButton';

const NotFound = () => {
  return (
    <div className={ classNames( s['error-page'] ) }>
      <div className={ classNames( s['error-page__inner'] ) }>
        <div className={ classNames( s['ico-wrap'] ) }>
          <Icon.NotFound width={ 266 } height={ 105 } />
          <span className={ className.a11y }>
            페이지를 찾을 수 없습니다.
          </span>
        </div>
        <div className={ classNames( s['info-txt'] ) }>
          <h3 className={ classNames( s['tit-error'] ) }>
            이런, 이 경로의 페이지도 만들어 둘걸..!
          </h3>
          <p className={ classNames( s['txt-error'] ) }>
            여기로 들어오실 줄은 몰랐어요.<br />
            이용에 불편을 드려 죄송해요.<br />
            메인 페이지로 이동하셔서 다시 진행해주세요.
          </p>
          <div className={ s['btn-wrap'] }>
            <LinkButton href='/'
                        size="large">
              메인으로 가기
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound;