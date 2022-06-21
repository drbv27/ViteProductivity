import React, { useState } from "react";
import ConteRegistro from "./formregistro/ConteRegistro";
import LabelRegistro from "./formregistro/LabelRegistro";
import InputRegistro from "./formregistro/InputRegistro";
import TextareaRegistro from "./formregistro/TextareaRegistro";
import BotonRegiActiv from "./formregistro/BotonRegiActiv";
import Titulo from "./ui/Titulo";
import ContBloq from "./formlogin/ContBloq";
import ConSubBlo from "./formregistro/ConSubBlo";
import data from "../../data/data.js"

const FormRegistro = () => {
  const datain = data;
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
  /* console.log(data); */
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

      <label for="subprocesos">Escoja el subproceso:</label>
      <input list="subprocesos" name="prueba" id="prueba" onChange={cambio}/>

      <datalist id="subprocesos">
      {datain.map((subproc) => (
          <option>{subproc.subproceso}</option>
        ))}
      </datalist>

     {/*  <select name="prueba" id="prueba" onChange={cambio}>
        {datos.map((subproc) => (
          <option>{subproc.subproceso}</option>
        ))}
      </select> */}

      <input type="tipo" id="identificador" size="tamaño" name="nombre" value={subp===""
        ?"prueba":
        datain
          .filter((subpr) => subpr.subproceso.includes(subp))
          .map((filtrado) => (
            filtrado.proceso
          ))}/>
      <input type="tipo" id="identificador" size="tamaño" name="nombre" value={subp===""
        ?"prueba":
        datain
          .filter((subpr) => subpr.subproceso.includes(subp))
          .map((filtrado) => (
            filtrado.macroproceso
          ))}/>


     

      <BotonRegiActiv tipo="submit" text="Registrar Actividad" />
    </ConteRegistro>
  );
};

export default FormRegistro;
