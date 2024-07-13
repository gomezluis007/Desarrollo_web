import { useMemo } from "react";

export default function useColumnsEnvios() {
    const columns = useMemo(
        () =>[
        {
            Header:"Id envio",
            accessor:"id_envio"
        }, 
        {
            Header:"Fecha de envio",
            accessor:"fecha_envio"
        }, 
        {
            Header:"Id platillos",
            accessor:"id_platillos"
        },
        {
            Header:"Total",
            accessor:"total"
        }
        ],
        []
    );
    return columns;
}
