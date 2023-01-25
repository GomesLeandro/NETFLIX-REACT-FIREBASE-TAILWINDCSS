import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID='1' title='Próximos lançamentos' fetchURL={requests.requestUpcoming}/>
      <Row rowID='2'title='Populares' fetchURL={requests.requestPopular}/>
      <Row rowID='3'title='Mais bem avaliados' fetchURL={requests.requestTopRated}/>
      <Row rowID='4'title='Terror' fetchURL={requests.requestHorror}/>
      <Row rowID='5'title='Tendências' fetchURL={requests.requestTrending}/>
    </div>
  )
}

export default Home
