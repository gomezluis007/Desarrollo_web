import { useMemo } from "react";

export default function useRows() {
    const rows = useMemo(
        () => [
            {
                id_envio:'pe_34',
                fecha_envio:'25/07/2024',
                id_platillos: ["PLatillo1", "Platillo2"],
                total: '300'
            },
            {
                id_envio:'pe_35',
                fecha_envio:'25/07/2024',
                id_platillos:["PLatillo5", "Platillo9"],
                total: '250'
            },
            {
                id_envio:'pe_36',
                fecha_envio:'28/09/2023',
                id_platillos:["PLatillo7", "Platillo9"],
                total: '425'
            }
        ],
        []
    );
    return rows;
}