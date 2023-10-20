import { React, useState, useEffect } from "react";
import DataTable from "./DataTable";
import { dataFake, dataFake2 } from "./Data";
import { NextIcon, BeforeIcon } from "./Icons";
import Menu from "./menu/Menu";
export let backgroundColor = [];

//Pasar la Data en formato JSON
let JSONdata = dataFake2;
//Arreglo de Filas por Página
let rowPage = [10, 20, 50, 100];

let dataTD = [];
let dataHeader = [];

function getHeaderTable() {
    var miObjetoJSON = JSONdata[0];
    for (var clave in JSONdata[0]) {
        if (miObjetoJSON.hasOwnProperty(clave)) {
            dataHeader.push(clave);
        }
    }
}
getHeaderTable();

function Table() {
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const [minPage, setMinPage] = useState(0);
    const [maxPage, setMaxPage] = useState(0);
    const [sizeData, setSizeData] = useState(0);
    // Filas por página valor Inicial 10
    const [rows, setRows] = useState(10);


    function cleanData() {
        setData([]);
        backgroundColor = [];
        dataTD = [];
    }

    useEffect(() => {
        cleanData();
        let sizeTable = Object.keys(JSONdata).length;
        setSizeData(sizeTable);

        if (rows <= sizeTable) {
            let maxPage = Math.round(sizeTable / rows);
            let startTable = 0;
            setMinPage(page + 1);
            setMaxPage(maxPage);
            if (page <= 0) {
                startTable = 0;
                setPage(startTable);
            } else if (page >= maxPage - 1) {
                startTable = (maxPage - 1) * rows;
                setPage(maxPage - 1);
            } else {
                startTable = page * rows;
            }
            llenaData();

            function llenaData() {
                for (let i = 0; i < rows; i++) {
                    // console.log(dataFake[page + i])
                    if (JSONdata[startTable + i] != null) {
                        dataTD.push(JSONdata[startTable + i]);
                    } else {
                        dataTD.push("");
                    }
                }
                // console.log("Carga de Datos Completa");
                setData(dataTD);
            }
        }
    }, [page, rows]);

    function ShowSelected() {
        let combo = document.getElementById("rows");
        let selected = combo.options[combo.selectedIndex].value;
        setRows(selected);
    }



    return (
        <div className="">

            <Menu/>

            <div className="dashboard">

            <DataTable
                title={"Table Responsive con CSS"}
                data={data}
                tableHeader={dataHeader}
            />

            <div className="pagination">
                <div className="data-pagination">
                    <div>
                        <p> Página {minPage} de {maxPage}</p>
                    </div>
                    <div className="rows-page">
                        <span>Filas por Página</span>
                        <select name="select" id="rows" onChange={ShowSelected}>
                            {Object.keys(rowPage).map((index) => (
                                <option key={index} value={"" + rowPage[index]}>{rowPage[index]}</option>
                            ))}

                        </select>
                    </div>
                </div>
                <div className="pagination-button">
                    <button onClick={() => setPage(page - 1)}>
                        <BeforeIcon />
                    </button>
                    <button onClick={() => setPage(page + 1)}>
                        <NextIcon />
                    </button>
                </div>

                <div className="data-total">
                    <span>Total de Datos</span><p>{sizeData}</p>
                </div>
            </div>
         </div>
        </div>
    );
}

export default Table
