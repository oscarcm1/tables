import React from 'react'
import "./dataTable.css"
import { backgroundColor } from './Table';
import { EditIcon, DeleteIcon } from './Icons';


// Componente Tabla

function DataTable(props) {
  {
    Object.keys(props.data).map((i) => (
      i % 2 === 0 ? backgroundColor.push('#fff') : backgroundColor.push('aliceblue')
    ))
  }

  return (
    <div className='container-table' >
      <div className='dataTable'>
        <h2>{props.title}</h2>
        <div className='search'>
          <input placeholder='Search' />
          <button><i className="bi bi-search"></i></button>
        </div>
        <table>
          <thead>
            <tr>
              <th></th>
              {Object.keys(props.tableHeader).map((index) => (
                <th scope="col" key={props.tableHeader[index]}>{props.tableHeader[index]}</th>
              ))}
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {Object.keys(props.data).map((key) => (
              <tr key={key} >
                <td style={{ background: backgroundColor[key] }}><input type='checkbox'></input></td>
                {Object.keys(props.tableHeader).map((index) => (

                  <td data-label={props.tableHeader[index]} key={index} style={{ background: backgroundColor[key] }}  >
                    {props.data[key][props.tableHeader[index]]}
                  </td>
                ))}
                <td style={{ background: backgroundColor[key] }}><button className='delete'><EditIcon /></button></td>
                <td style={{ background: backgroundColor[key] }}><button className='edit'><DeleteIcon /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DataTable