import React, { Fragment } from 'react';
import Formulario from './component/Formulario'

function App() {
  return (
    <Fragment>
      <h1>Administrador de citas</h1>
      <div className="container">
        <div className="row">
           <div className="one-half column">
              <Formulario></Formulario>
           </div>
           <div className="one-half column">

           </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
