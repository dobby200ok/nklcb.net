
// @ name : Footer
// @ description : 공통 푸터 레이아웃 컴포넌트
// @ example : <Footer />

import s from './Footer.module.scss';

import classNames from 'classnames';

import Logo from '@/components/atoms/Assets/Logo';
import Icon from '@/components/atoms/Assets/Icon';
import AnchorButton from '@/components/atoms/Buttons/AnchorButton';

import className from '@/constants/className';

const Footer = () => {
  return (
    <footer className={ classNames(s['footer']) }>
      <div className={ classNames(s['footer__inner']) }>
        <div className={ classNames(s['logo-wrap']) }>
          <h2 className={ classNames(s['logo']) }>
            <div className={ classNames(s['logo--pc']) }>
              <Logo width={ 118 } />
            </div>
            <div className={ classNames(s['logo--mobile']) }>
              <Icon.Symbol width={ 32 } height={ 32 } />
            </div>
            <span className={ className.a11y }>홈페이지 안내</span>
          </h2>
          <ul className={ classNames(s['list-link']) }>
            <li>
              <a href="http://pf.kakao.com/_cxmxmnn/chat"
                 target="_blank"
                 title="새 창 열림">
                <Icon.Chat width={ 32 } height={ 32 } />
                <span className="blind">카카오톡 문의하기</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/dobby200ok/nklcb.git"
                 target="_blank"
                 title="새 창 열림">
                <Icon.Github width={ 32 } height={ 32 } />
                <span className="blind">깃허브 탐험하기</span>
              </a>
            </li>
          </ul>
        </div>
        <p className={ classNames(s['info-txt']) }>
          <span className={ classNames( s['info-txt__compnay'] ) }>
            <span className={ classNames(s['emph--naver']) }>네</span>이버 <span className={ classNames(s['emph--kakao']) }>카</span>카오 <span className={ classNames(s['emph--line']) }>라</span>인 <span className={ classNames(s['emph--coupang']) }>쿠</span>팡 <span className={ classNames(s['emph--baemin']) }>배</span>달의민족 <span className={ classNames(s['emph--daangn']) }>당</span>근마켓 <span className={ classNames(s['emph--toss']) }>토</span>스
          </span>
          <span className={ classNames( s['info-txt__txt'] ) }>
            채용 공고를 한 번에!
          </span>
        </p>
        <div className={ classNames(s['list-wrap']) }>
          <ul className={ classNames(s['info-list']) }>
            <li>
              <strong className={ classNames(s['list-tit']) }>
                <i className={ classNames( s['ico-wrap'] ) }>
                  <Icon.Symbol width={ 40 } height={ 40 } />
                </i>우리는..
              </strong>
              <p className={ classNames(s['list-txt']) }>
                하루 2번 구인 정보를 수집하고 업데이트해요!
              </p>
              <ul className={ classNames(s['list-dot']) }>
                <li>오전 2시 : 전일 오후 12시 ~ 오전 12시까지 신규 공고</li>
                <li>오후 2시 : 금일 오전 12시 ~ 오후 12시까지 신규 공고</li>
              </ul>
            </li>
            <li>
              <strong className={ classNames(s['list-tit']) }>
                <i className={ classNames( s['ico-wrap'] ) }>
                  <Icon.Chat width={ 40 } height={ 40 } />
                </i>
                문의
              </strong>
              <p className={ classNames(s['list-txt']) }>
              버그, 개선 의견 등 문의에 대해 언제나 열려있습니다.<br />
              카카오톡 채널을 통해 연락 주세요!
              </p>
              <div className={ classNames(s['btn-wrap']) }>
                <AnchorButton primary={ false }
                              size="medium"
                              href="http://pf.kakao.com/_cxmxmnn/chat"
                              target="_blank"
                              title="새 창 열림" >
                  카카오톡 문의하기
                </AnchorButton>
              </div>
            </li>
            <li>
              <strong className={ classNames(s['list-tit']) }>
                <i className={ classNames( s['ico-wrap'] ) }>
                  <Icon.Github width={ 40 } height={ 40 } />
                </i>
                깃허브
              </strong>
              <p className={ classNames(s['list-txt']) }>
                사이트 코드는<br />
                여기서 보실 수 있어요.
              </p>
              <div className={ classNames(s['btn-wrap']) }>
                <AnchorButton primary={ false }
                              size="medium"
                              href="https://github.com/dobby200ok/nklcb.git"
                              target="_blank"
                              title="새 창 열림"  >
                    깃허브 탐험하기
                </AnchorButton>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;