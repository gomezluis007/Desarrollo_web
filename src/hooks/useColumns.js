import { useMemo } from "react";

export default function useColumns() {
    const columns = useMemo(
      () => [
        {
          Header: "Folio",
          accessor: "folio"
        },
        {
          Header: "Producto",
          accessor: "nombre"
        },
        {
          Header: "Fecha de compra",
          accessor: "fecha_compra"
        },
        {
          Header: "Cantidad",
          accessor: "cantidad"
        },
        {
          Header: "Fecha de expiracion",
          accessor: "fecha_expiracion"
        },
        {
          Header: "Proveedor",
          accessor: "id_proveedor"
        },
        {
          Header: "Coste total",
          accessor: "total"
        }
      ],
      []
    );
   
    return columns;
}