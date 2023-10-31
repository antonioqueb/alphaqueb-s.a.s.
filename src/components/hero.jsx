import ms1 from '../assets/ms1.png';

export default function Hero() {
  return (
    <>
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <img src={ms1} alt="React Logo de Alphaqueb Consulting" className="mb-4" width="300" height="300" />
        <h1 className="display-4 fw-bold text-body-emphasis">Transforma tu Odoo. Módulos personalizados que se adaptan a tus necesidades.</h1>
        <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Para nosotros, cada módulo es una obra maestra. No solo programamos; escuchamos, comprendemos y entregamos soluciones.</p>

          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" className="btn  btn-lg px-4 me-sm-3 " style={{backgroundColor: '#6f42c1', color: '#fff'}}>Agenda tu Instalación Sin Costo</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Explora Más Soluciones en Odoo</button>
          </div>
        </div>
      </div>
    </>
  )
}
