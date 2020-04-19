import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './component/Formulario';
import Cita from './component/Cita';


function App() {

  // citas en LocalStore

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  // Arreglo de citas
  const [citas, setCitas] = useState(citasIniciales);

  // Funciona  que tome la cita actual y agrege la nueva
  const crearCita = cita => {
    setCitas([...citas, cita])
  }

  // Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas]);

  // Función que elimina una sita por id
  const eliminarCita = id => {
    setCitas(citas.filter(cita => cita.id !== id));
  }

  // Mesaje condicional
  const titulo = (citas.length === 0) ? 'No hay citas' : 'Administra tus Cistas'

  return (
    <Fragment>
      <h1>Administrador de citas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}></Formulario>
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              ></Cita>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default App;
