import React from 'react'

const Chart = () => {
  return (
    <div className="outter-chart">
      <div className="table">
      
      <table>
  <thead>
    <tr>
      <th colSpan="2">Consumption upto 500units</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0-100 units</td>
      <td>0</td>
    </tr>
    <tr>
      <td>101-200 units</td>
      <td>2.25</td>
    </tr>
    <tr>
      <td>201-400 units</td>
      <td>4.5</td>
    </tr>
    <tr>
      <td>401-500 units</td>
      <td>6</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">Consumption above 500units</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0-100 units</td>
      <td>0</td>
    </tr>
    <tr>
      <td>101-400 units</td>
      <td>4.5</td>
    </tr>
    <tr>
      <td>401-500 units</td>
      <td>6.00</td>
    </tr>
    <tr>
      <td>501-600 units</td>
      <td>8.00</td>
    </tr>
    <tr>
      <td>601-800 units</td>
      <td>9.00</td>
    </tr>
    <tr>
      <td>801-1000 units</td>
      <td>10</td>
    </tr>
    <tr>
      <td>Above 1000 units</td>
      <td>11</td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  )
}

export default Chart