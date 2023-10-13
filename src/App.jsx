import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { dataMain } from './Data'
function App() {
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 5;
  const lastIndex = currentPage *  recordsPerPage; 
  const firstIndex = lastIndex - recordsPerPage; 
  const records = dataMain.slice(firstIndex, lastIndex)

  const npages = Math.ceil(dataMain.length / recordsPerPage)
  const numbers = [...Array(npages + 1).keys()].slice(1)

  return (
    <>
      <table>
        <th>
        <td>Sex</td>
          <td>Name</td>
        </th>
        <th>
          <td>Age</td>
        </th>
        <th>
          <td>Sex</td>
        </th>
        
        
        <tbody>
          {records.map((n, i)=>(

            <tr key={i}>
              <td>{n.id}</td>
          <td>{n.name}</td>
          <td>{n.Age}</td>
          <td>{n.sex}</td>
          </tr>
          ))}
        </tbody>
      </table>
            <nav>
              <ul className='pagination'>
              <li className='page-Item'>
                <a href="#" className='pagePrev' onClick={prevPage}>Prev</a>
              </li>
              {
                numbers.map((number, index)=>(
                  <li className={`page-Item ${currentPage === number ? "active " : ""}`} key={index}>
                    <a href="#" className='page-Item' onClick={()=>ChangeCPage(number)}>{number}</a>

                  </li>
                ))
              }
              <li className='page-Item'>
                <a href="#" className='Nextpage' onClick={nextPage}>Next</a>
              </li>
              </ul>
            </nav>
    </>
  )

  
  function ChangeCPage(id)
  {
setCurrentPage(id)
  }
  function prevPage (){
if(currentPage !== firstIndex){
  setCurrentPage(currentPage - 1)
}
  }


  function nextPage  () {
if(currentPage !== lastIndex){
  setCurrentPage(currentPage + 1)

}
  }
}

export default App
