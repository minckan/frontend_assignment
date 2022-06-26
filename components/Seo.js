import Head from 'next/head'

export default function Seo({ title }) {
    return (
        <Head>
            <title>{ title }</title>
            <meta name="description" content="최저가 예약부터 여행 일정까지 앱 하나로 한 번에! / 항공권, 숙소, 투어·티켓 할인 / 제주도 포함 국내&amp;해외 도시별 여행정보 / 동선 보며 일정짜기 / 장소별 리뷰 / 가계부, 날씨, 길찾기" />
            <meta name="msapplication-TileImage" content="https://triple.guide/icons/favicon-144x144.png"></meta>
            <meta name="msapplication-TileColor" content="#1FC1B6" />
            <link rel="apple-touch-icon-precomposed" href="https://triple.guide/icons/favicon-152x152.png"/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}