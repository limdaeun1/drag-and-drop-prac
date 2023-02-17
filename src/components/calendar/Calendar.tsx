import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';

const Calendar = () => {

    const location = useLocation();

    if (location.search !== '') {
            return null;
    }

  return (
    <CalendarContainer>
        <CalendarHeader>
            calendar
        </CalendarHeader>
    </CalendarContainer>
  )
}

export default Calendar

const CalendarContainer = styled.div`
  border:1px solid #80808037;
  width: calc(100% - 22rem);
  margin:0 0.2rem;
`

const CalendarHeader = styled.div`
    height: 3rem;
    background-color: #80808037;
`
