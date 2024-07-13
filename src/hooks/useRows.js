import { useMemo } from "react";

export default function useRows() {
    const rows = useMemo(
      () => [
        {
          folio:'500',
          nombre:'Refrigerador',
          fecha_compra:'08/07/2024',
          cantidad:'1',
          fecha_expiracion:'25/07/2024',
          id_proveedor:'PEPSICO',
          total:'500'
        },
        {
          folio:'486',
          nombre:'cebolla',
          fecha_compra:'08/07/2024',
          cantidad:'2',
          fecha_expiracion:'25/07/2024',
          id_proveedor:'SABRITAS',
          total:'500'
        },
        {
          folio:'537',
          nombre:'tortillas',
          fecha_compra:'10/05/2024',
          cantidad:'4 kg',
          fecha_expiracion:'14/05/2024',
          id_proveedor:'DOÑA_PELOS',
          total:'500'
        },
        {
          folio:'631',
          nombre:'Refrescos',
          fecha_compra:'10/06/2024',
          cantidad:'3 cajas',
          fecha_expiracion:'15/06/2024',
          id_proveedor:'COCA_COLA',
          total:'500'
        }
      ],
      []
    );
    return rows;
}