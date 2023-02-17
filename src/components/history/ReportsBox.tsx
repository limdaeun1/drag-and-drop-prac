import React from 'react'
import Table from '@mui/joy/Table';

interface HistoryData {
  historyData : Data
}

interface Data {
  reports : []
}



const ReportsBox = ({historyData}:HistoryData) => {



  return (
    <Table>
      
      <thead>
        <tr>
          <th style={{ width: '10%' }}>Day</th>
          <th style={{ width: '15%' }}>name</th>
          <th style={{ width: '75%' }}>description</th>
        </tr>
      </thead>

      <tbody>
        {historyData?.reports.map((report:{dateOfCreation:any; content: string; user:any; id:number },index) => (
        <tr key={index}>
          <td >{report.dateOfCreation.substr(5,5)}</td>
          <td >{report.user?.name}</td>
          <td >{report.content}</td>
        </tr>
        ))}

      </tbody>  

    </Table>
  )
}

export default ReportsBox