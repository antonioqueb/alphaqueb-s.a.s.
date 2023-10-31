import ms1 from "../assets/ms1.png";

export default function Calltoactions() {
    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ backgroundColor: '#6f42c1' }}>

                {/* Título y descripción    */}
                <div className="text-center p-5">
                    <h2 className="display-4 fw-bold" style={{ color: '#fff' }}>
                        MS1: Datos Claros, Decisiones Claras.
                    </h2>
                    <p style={{ color: '#fff' }}>
                        Descubre MS1: nuestra última innovación en Odoo. Por tiempo limitado, prueba la claridad de forma gratuita.
                    </p>
                    
                    {/* Aquí puedes añadir un botón si necesitas que el usuario realice una acción específica */}
                    {/* <button className="btn btn-light mt-3">Probar ahora</button> */}
                    <button className="btn btn-light mt-3" style={{ backgroundColor: '#fff', color: '#6f42c1' }}>Programar Instalación</button>
                </div>

            </div>
        </>
    );
}
