import React, { useState } from "react";
import ConteRegistro from "./formregistro/ConteRegistro";
import LabelRegistro from "./formregistro/LabelRegistro";
import InputRegistro from "./formregistro/InputRegistro";
import TextareaRegistro from "./formregistro/TextareaRegistro";
import BotonRegiActiv from "./formregistro/BotonRegiActiv";
import Titulo from "./ui/Titulo";
import ContBloq from "./formlogin/ContBloq";
import ConSubBlo from "./formregistro/ConSubBlo";

const FormRegistro = () => {
  const datos = [
    {
      subproceso: "subproceso",
      proceso: "proceso",
      macroproceso: "macroproceso",
    },
    {
      subproceso: "Asamblea General",
      proceso: "Gobierno",
      macroproceso: "Gerencia",
    },
    {
      subproceso: "Junta Directiva",
      proceso: "Gobierno",
      macroproceso: "Gerencia",
    },
    {
      subproceso: "Comite Asesor",
      proceso: "Gobierno",
      macroproceso: "Gerencia",
    },
    {
      subproceso: "Dimensionar la Oportunidad",
      proceso: "Descubrimiento de clientes",
      macroproceso: "Innovación",
    },
    {
      subproceso: "Diseño de Prototipo",
      proceso: "Descubrimiento de clientes",
      macroproceso: "Innovación",
    },
    {
      subproceso: "Mantenimiento Preventivo",
      proceso: "Manejo de equipos",
      macroproceso: "Soporte",
    },

    {
      subproceso: "Mantenimiento Correctivo",
      proceso: "Manejo de equipos",
      macroproceso: "Soporte",
    },
  ];
  const [subp, setSubp] = useState("");
  function cambio(e) {
    e.preventDefault();
    const evento = e.target.value;
    setSubp(evento);
    /* console.log(evento); */
  }
  return (
    <ConteRegistro>
      <ContBloq>
        <ConSubBlo>
          <LabelRegistro para="ingreso" texto="Fecha" />
          <InputRegistro tipo="date" ident="ingreso" />
        </ConSubBlo>
        <ConSubBlo>
          <LabelRegistro para="inicio" texto="Hora Inicio" />
          <InputRegistro tipo="time" ident="inicio" />
        </ConSubBlo>
      </ContBloq>
      <ContBloq>
        <ConSubBlo>
          <LabelRegistro tipo="final" texto="Hora Final" />
          <InputRegistro tipo="time" ident="final" />
        </ConSubBlo>
        <ConSubBlo>
          <LabelRegistro para="subproces" texto="Subproceso" />
          <InputRegistro
            tipo="text"
            ident="subproces"
            placeh="Que actividad voy a realizar..."
          />
        </ConSubBlo>
      </ContBloq>
      <ContBloq>
        <ConSubBlo>
          <LabelRegistro para="proces" texto="Proceso" />
          <InputRegistro
            tipo="text"
            ident="proces"
            placeh="Que actividad voy a realizar..."
          />
        </ConSubBlo>
        <ConSubBlo>
          <LabelRegistro para="macro" texto="Macroproceso" />
          <InputRegistro
            tipo="text"
            ident="macro"
            placeh="Que actividad voy a realizar..."
          />
        </ConSubBlo>
      </ContBloq>
      <ContBloq>
        <ConSubBlo>
          <LabelRegistro para="actividad" texto="Actividad" />
          <TextareaRegistro
            ident="actividad"
            placeh="Descripción de la actividad."
            column="50"
            rowst="3"
          />
        </ConSubBlo>
      </ContBloq>

      <label for="browser">Choose your browser from the list:</label>
      <input list="browsers" name="browser" id="browser" onChange={cambio}/>

      <datalist id="browsers">
      {datos.map((subproc) => (
          <option>{subproc.subproceso}</option>
        ))}
        {/* <option value="Edge"/>
        <option value="Firefox"/>
        <option value="Chrome"/>
        <option value="Opera"/>
        <option value="Safari"/> */}
      </datalist>

      <select name="prueba" id="prueba" onChange={cambio}>
        {datos.map((subproc) => (
          <option>{subproc.subproceso}</option>
        ))}
      </select>

      <input type="tipo" id="identificador" size="tamaño" name="nombre" value={subp===""
        ?"prueba":
        datos
          .filter((subpr) => subpr.subproceso.includes(subp))
          .map((filtrado) => (
            filtrado.proceso
          ))}/>
      <input type="tipo" id="identificador" size="tamaño" name="nombre" value={subp===""
        ?"prueba":
        datos
          .filter((subpr) => subpr.subproceso.includes(subp))
          .map((filtrado) => (
            filtrado.macroproceso
          ))}/>


     

      <BotonRegiActiv tipo="submit" text="Registrar Actividad" />
    </ConteRegistro>
  );
};

export default FormRegistro;
