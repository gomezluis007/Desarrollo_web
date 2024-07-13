import Container from 'react-bootstrap/esm/Container';
import '../Styles/App.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useTable } from "react-table";
import useRowsEnvios from "../hooks/useRowsEnvios";
import useColumnsEnvios from "../hooks/useColumnsEnvios";
import { useSortBy } from "react-table";
import { useGlobalFilter, useAsyncDebounce } from "react-table";
import '../Styles/table.css'


function NuevoEnvio() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const datos = useRowsEnvios();
  const [envioInfo, setEnvioInfo] = useState({
    id_envio:'',
    fecha_envio:'',
    id_platillo:'',
  });

  function handleSubmit(evt){
    evt.preventDefault()
    datos.push(envioInfo)
    console.log(datos)
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEnvioInfo({ ...envioInfo, [name]: value });
    console.log(envioInfo)
  };

  return (
    <div>
      <Container>
        <Button variant="primary" onClick={handleShow}>
          Agregar Envio
        </Button>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar un Nuevo Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="envio.id_envio">
                <Form.Label>Id de Envio</Form.Label>
                <Form.Control type="text" placeholder="pe_xxx" 
                name="id_envio"
                value={envioInfo.id_envio}
                onChange={handleChange}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="envio.fecha_envio">
                <Form.Label>Fecha de envio</Form.Label>
                <Form.Control type="date" placeholder="" 
                name="fecha_envio"
                value={envioInfo.fecha_envio}
                onChange={handleChange}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="envio.id_platillos">
                <Form.Label>Platillos</Form.Label>
                <Form.Control type="Select" placeholder="" 
                name="id_platillo"
                value={envioInfo.id_platillos}
                onChange={handleChange}/>
              </Form.Group>
              <Button variant="primary" type='submit' onClick={handleClose}>
                Save Changes
              </Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function SendsFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
  const totalProductsAvailable = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);

  const onFilterChange = useAsyncDebounce(
    (value) => setGlobalFilter(value || undefined),
    200
  );

  const handleInputChange = (e) => {
    setValue(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <span className="sends-filter">
      Filtrar
      <input
        size={50}
        value={value || ""}
        onChange={handleInputChange}
        placeholder={`${totalProductsAvailable} Envios realizados...`}
      />
    </span>
  );
}

export function Envio() {
  const columns = useColumnsEnvios();
  const data = useRowsEnvios();
  const table = useTable({ columns, data }, useGlobalFilter, useSortBy);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { globalFilter }
  } = table;

  return (
    <div >
      <br></br>
      <Container>
        <div>
          <h1 className="text-center">Envios</h1>
        </div>
      </Container>
      <br></br>
      <Container>
            {/* Añadimos las propiedades a nuestra tabla nativa */}
        <Table {...getTableProps()} striped bordered hover>
          <thead>
            <tr>
              <th colSpan={4}>
                <SendsFilter
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  globalFilter={globalFilter}
                  setGlobalFilter={setGlobalFilter}
                />
              </th>
            </tr> 
            {
              // Recorremos las columnas que previamente definimos
              headerGroups.map(headerGroup => (
                // Añadimos las propiedades al conjunto de columnas
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Recorremos cada columna del conjunto para acceder a su información
                    headerGroup.headers.map((column) => (
                      // Añadimos las propiedades a cada celda de la cabecera
                      <th {...column.getHeaderProps(column.getSortByToggleProps())}className={
                        column.isSorted
                          ? column.isSortedDesc
                            ? "desc"
                            : "asc"
                          : ""
                        }>
                          {column.render("Header")}
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          {/* Añadimos las propiedades al cuerpo de la tabla */}
          <tbody {...getTableBodyProps()}>
            {
              // Recorremos las filas
              rows.map(row => {
                // Llamamos a la función que prepara la fila previo renderizado
                prepareRow(row);
                return (
                  // Añadimos las propiedades a la fila
                  <tr {...row.getRowProps()}>
                    {
                      // Recorremos cada celda de la fila
                      row.cells.map((cell) => {
                        // Añadimos las propiedades a cada celda de la fila
                        return (
                          <td {...cell.getCellProps()}>
                            {
                              // Pintamos el contenido de la celda
                              cell.render("Cell")
                            }
                          </td>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </Table>
      </Container>
    </div>
    
    
  );
}

export const Envios = () =>{
  return (
    <>
        <Envio/>
        <NuevoEnvio/>
    </>
  )
};