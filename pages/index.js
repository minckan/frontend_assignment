/** @jsxImportSource @emotion/react */
import Link from 'next/link'
import Button from '../components/Button'
import Phone from '../components/Phone'
import Seo from '../components/Seo'
import { StaticHeader, HeaderLogo, Section, SectionInnerWrapper, TextBold, TextNormal, Gap } from '../styles/homeStyle'
import useScrollFadein from '../hooks/useScrollFadein'
import useScrollCount from '../hooks/useScrollCount'

export default function Home() {
  const fade_in_1 = useScrollFadein(0.7, 0)
  const fade_in_2 = useScrollFadein(0.7, 0.1)
  const fade_in_3 = useScrollFadein(0.7, 0.2)
  const fade_in_4 = useScrollFadein(0.7, 0)
  const fade_in_5 = useScrollFadein(0.7, 0.1)
  const fade_in_6 = useScrollFadein(0.7, 0.2)
  const fade_in_7 = useScrollFadein(0.7, 0)
  const fade_in_8 = useScrollFadein(0.7, 0.1)
  const countingNum1 = useScrollCount(700, 0, 2000)
  const countingNum2 = useScrollCount(100, 0, 2000)
  const countingNum3 = useScrollCount(460, 0, 2000)
  return (
    <div>
      <Seo title={'트리플: 여행의 모든 것, 트리플로 한 번에'}></Seo>
      {/* Static Header */}
      <StaticHeader className='header_BaseHeader'>
        <Link href="/"><HeaderLogo className='header__Logo'></HeaderLogo></Link>
        <Link href="https://triple.guide/login?returnUrl=%2Fmy-bookings%2F&type=bookings"><a className='Header__MyBooking'>내 예약</a></Link>
      </StaticHeader>

      <Section className='section__SectionContainer-main'>
        <SectionInnerWrapper className='section__InnerContainer-main'>
          <div className='contents__text'>
            <h1 {...fade_in_4}>여행의 모든 것<br></br>트리플로 한 번에</h1>
            <p {...fade_in_5}>예약부터 일정까지 앱 하나로 간편하게 준비하세요.</p>
            <div {...fade_in_6}><Button displayNm={'앱 설치하기'} hoverActive={true}></Button></div>
          </div>
          <Phone position="main"></Phone>
        </SectionInnerWrapper>
      </Section>

      <Section className='section__SectionContainer-counting'>
        <SectionInnerWrapper className='section__InnerContainer-counting'>
          <article {...fade_in_1} className='container__Image'>
            <div className='image__Triple'></div>
            <p>2019년 2월 기준</p>
          </article>
          <article className='container__Text'>
            <div {...fade_in_2}>
              <p className='text__counting'><span {...countingNum1}/><span>만명</span>의 여행자</p>
              <p className='text__counting'><span {...countingNum2}/><span>만개</span>의 여행리뷰</p>
              <p className='text__counting'><span {...countingNum3}/><span>만개</span>의 여행일정</p>
            </div>
            <dl {...fade_in_3} className='container__Prize'>
              <dt>
                2018 구글 플레이스토어<br/> 올해의 앱 최우수상 수상
              </dt>
              <dt>
                2018 애플 앱스토어<br/>오늘의 여행앱 선정
              </dt>
            </dl>
          </article>
        </SectionInnerWrapper>
      </Section>

      <Section className='section__SectionContainer-rowPrice'>
        <SectionInnerWrapper className='section__InnerContainer-rowPrice'>
          <TextBold align="center" size={52} top={ 150 } {...fade_in_7}>모든 예약을<br></br>최저가로 한 번에!</TextBold>
          <TextNormal align="center"  size={17} top={306} {...fade_in_8}>항공권부터 숙소, 투어·티켓까지 최저가로 예약.<br></br>트리플 전용 특가는 보너스.</TextNormal>
          <div className='container__Phones'>
            <Phone position="rowPrice1"></Phone>
            <Gap gap={ 19 } />
            <Phone position="rowPrice2"></Phone>
            <Gap gap={ 19 } />
            <Phone position="rowPrice3"></Phone>
          </div>
        </SectionInnerWrapper>
      </Section>


    </div>
  )
}
