import Container from 'react-bootstrap/esm/Container';
import '../Styles/App.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React from "react";
import { useTable } from "react-table";
import useRows from "../hooks/useRows";
import useColumns from "../hooks/useColumns";
import Table from 'react-bootstrap/Table';
import { useSortBy } from "react-table";
import { useGlobalFilter, useAsyncDebounce } from "react-table";
import '../Styles/table.css'


export const NuevoProducto= () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const datos = useRows();
  const [productInfo, setProductInfo] = useState({
    folio:"",
    nombre:"",
    fecha_compra:"",
    cantidad:"",
    fecha_expiracion:""
  });

  function handleSubmit(evt){
    evt.preventDefault()
    datos.push(productInfo)
    console.log(datos)
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductInfo({ ...productInfo, [name]: value });
    console.log(productInfo)
  };

  return (
    <div >
      <Container>
        <Button variant="primary" onClick={handleShow}>
          Agregar Producto
        </Button>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar un Nuevo Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="producto.folio">
                <Form.Label>Folio</Form.Label>
                <Form.Control type="number" placeholder="xxx" 
                name="folio"
                value={productInfo.folio}
                onChange={handleChange}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="producto.nombre">
                <Form.Label>Nombre del Producto</Form.Label>
                <Form.Control type="text" placeholder="mesas, refrescos, sabritas, etc..." 
                name="nombre"
                value={productInfo.nombre}
                onChange={handleChange}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="producto.fecha_compra">
                <Form.Label>Fecha de Compra</Form.Label>
                <Form.Control type="date" placeholder="xx/xx/xxxx" 
                name="fecha_compra"
                value={productInfo.fecha_compra}
                onChange={handleChange}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="producto.cantidad">
                <Form.Label>Cantidad en Kg</Form.Label>
                <Form.Control type="text" placeholder="kg, cajas, unidades, etc..." 
                name="cantidad"
                value={productInfo.cantidad}
                onChange={handleChange}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="producto.fecha_compra">
                <Form.Label>Fecha de Expiracion</Form.Label>
                <Form.Control type="date" placeholder="xx/xx/xxxx" 
                name="fecha_expiracion"
                value={productInfo.fecha_expiracion}
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

function ProductsFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
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
    <span className="products-filter">
      Filtrar
      <input
        size={50}
        value={value || ""}
        onChange={handleInputChange}
        placeholder={`${totalProductsAvailable} productos disponibles...`}
      />
    </span>
  );
}

export const Main =() => {
  const columns = useColumns();
  const data = useRows();
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
    <div>
      <br></br>
      <Container>
        <div>
          <h1 className="text-center">Productos</h1>
        </div>
      </Container>
      <br></br>
      <Container>
            {/* Añadimos las propiedades a nuestra tabla nativa */}
        <Table {...getTableProps()} striped bordered hover>
          <thead>
            <tr>
              <th colSpan={4}>
                <ProductsFilter
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
      <br></br>
    </div>
  );
}

export const CompMain = () =>{
  return (
    <>
        <Main/>
        <NuevoProducto/>
    </>
  )
};