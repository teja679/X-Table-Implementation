import { useState } from 'react'
import './App.css'
import { data } from './data'


function App() {
  const [sortedData, setSortedData] = useState(data)

  const sortDataByDate = () => {
    const newData = [...sortedData].sort((a, b) => {
      if (b.date === a.date) {
        return b.views - a.views;
      }
      return new Date(b.date) - new Date(a.date)
    });
    setSortedData(newData);
  }
  const sortDataByViews = () => {
    const newData = [...sortedData].sort((a, b) => {
      if (b.views === a.views) {
        return new Date(b.date) - new Date(a.date)
      }
      return b.views - a.views;
    });
    setSortedData(newData);
  }
  return (
    <main className='App'>
      <h1>Date and Views Table</h1>
      <section className='btns'>
        <button onClick={sortDataByDate}>Sort by Date</button>
        <button onClick={sortDataByViews}>Sort by Views</button>
      </section>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {sortedData && sortedData.map(({ date, views, article }) => (
            <tr key={`${date}_${article}_${views}`}>
              <td>{date}</td>
              <td>{views}</td>
              <td>{article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default App
