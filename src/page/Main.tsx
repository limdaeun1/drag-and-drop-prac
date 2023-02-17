import { Route, Routes, useLocation  } from 'react-router-dom'
import styled from 'styled-components'
import { useGet } from 'shared/http'

import Header from 'components/core/Header'
import Projectbar from 'components/core/Projectbar'
import Sidebar from 'components/core/Sidebar'
import Calendar from 'components/calendar/Calendar'
import Board from 'components/board/Board'
import History from 'components/history/History'
import Modal from 'components/ui/Modal'
import Cardpop from 'components/board/Cardpop'

const Main = () => {
  const location = useLocation();
  

  return (
    <>
    <Cardpop/>
    <Modal/>
    <Container>
        <Header/>
        <Sidecore>
            {/* <Sidebar/> */}
            <Projectbar/>
              <Routes>
                <Route path='/' element={<Calendar/>} />
                <Route path='/history/*' element={<History/>} />
                <Route path='/item/*' element={<Board/>} />
              </Routes>
        </Sidecore>
    </Container>
    </>
  )
}

export default Main

const Container = styled.div`
  width: 100%;
  height: 100vh;
`

const Sidecore = styled.div`
  display: flex;
`