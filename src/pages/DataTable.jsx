import React from 'react'
import "./dataTable.css"
import { dataFake } from './Data'

var miObjetoJSON = dataFake[0];
let headerTable = [];

for (var clave in dataFake[0]) {
  if (miObjetoJSON.hasOwnProperty(clave)) {
    headerTable.push(clave)
  }
}
function DataTable() {
  return (
    <div className='container-table' >

      <div className='dataTable'>
        <h2>Table Responsive con CSS</h2>
        <div className='search'>
          <input placeholder='Search' />
          <button><i class="bi bi-search"></i></button>
        </div>
        <table id="miTabla">

          <thead>
            <tr>
              {Object.keys(headerTable).map((index) => (
                <th scope="col" key={headerTable[index]}>{headerTable[index]}</th>
              ))}
            </tr>
          </thead>
          <tbody>

            {Object.keys(dataFake).map((key) => (

              <tr key={dataFake[key].first_name}>
                {/* {console.log(key)} */}
                {Object.keys(headerTable).map((index) => (
                  <td data-label={headerTable[index]} >
                    {dataFake[key][headerTable[index]]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div id="paginacion"></div>

        <div className='pagination'>
          <div className='data-pagination'>
            <p>Página 1 de 10</p>
            <input type='number' placeholder='1' />
          </div>
          <div className='back'>
            <button><i className="bi bi-chevron-double-left"></i></button>
            <button><i className="bi bi-chevron-left"></i></button>
          </div>

          <div className='next'>
            <button><i className="bi bi-chevron-right"></i></button>
            <button><i className="bi bi-chevron-double-right"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataTable