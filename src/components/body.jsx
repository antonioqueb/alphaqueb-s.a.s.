import Logo from '../assets/ms1.png';

export default function Body() {
    return (
        <>
            {/* Primera Caja */}
            <div className="container mt-5">
                <div className="row">
                    {/* Columna de Texto */}
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <h2 className="text-body-emphasis mb-3">El Desafío</h2>
                        <p className="lead">Odoo es potente, pero no siempre se adapta perfectamente a todos. Aquí es donde entramos.</p>
                    </div>

                    {/* Columna de Imagen */}
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        <img src={Logo} alt="Descripción de la imagen" width="350" height="350" className="img-fluid mx-auto"/>
                    </div>
                </div>
            </div>
             {/* Segunda Caja */}
             <div className="container mt-5">
                <div className="row">
                    {/* Columna de Imagen */}
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        <img src={Logo} alt="Descripción de la imagen" width="350" height="350" className="img-fluid mx-auto"/>
                    </div>
                    {/* Columna de Texto */}
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <h2 className="text-body-emphasis mb-3">La Colaboración</h2>
                        <p className="lead">Nos sumergimos en tu mundo, entendemos tus desafíos y diseñamos módulos que son extensiones de tus visiones.</p>
                    </div>
                </div>
            </div>
            {/* Tercera Caja */}
            <div className="container mt-5">
                <div className="row">
                    {/* Columna de Texto */}
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <h2 className="text-body-emphasis mb-3">La Transformación</h2>
                        <p className="lead">Odoo, pero mejor. Una plataforma adaptada a ti, que impulsa tu éxito y refleja tu identidad.</p>
                    </div>

                    {/* Columna de Imagen */}
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        <img src={Logo} alt="Descripción de la imagen" width="350" height="350" className="img-fluid mx-auto"/>
                    </div>
                </div>
            </div>

        </>
    );
}
