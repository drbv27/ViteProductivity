import React from "react";
import ConteRegistro from "./formregistro/ConteRegistro";
import LabelRegistro from "./formregistro/LabelRegistro";
import InputRegistro from "./formregistro/InputRegistro";
import TextareaRegistro from "./formregistro/TextareaRegistro";
import BotonRegiActiv from "./formregistro/BotonRegiActiv";

const FormRegistro = () => {
  return (
    <ConteRegistro>
      <LabelRegistro para="ingreso" texto="Fecha" />
      <InputRegistro tipo="date" ident="ingreso" />
      <LabelRegistro para="inicio" texto="Hora Inicio" />
      <InputRegistro tipo="time" ident="inicio" />
      <LabelRegistro tipo="final" texto="Hora Final" />
      <InputRegistro tipo="time" ident="final" />
      <LabelRegistro para="subproces" texto="Subproceso" />
      <InputRegistro
        tipo="text"
        ident="subproces"
        placeh="Que actividad voy a realizar..."
      />
      <LabelRegistro para="proces" texto="Proceso" />
      <InputRegistro
        tipo="text"
        ident="proces"
        placeh="Que actividad voy a realizar..."
      />
      <LabelRegistro para="macro" texto="Macroproceso" />
      <InputRegistro
        tipo="text"
        ident="macro"
        placeh="Que actividad voy a realizar..."
      />
      <LabelRegistro para="actividad" texto="Actividad" />
      <TextareaRegistro
        ident="actividad"
        placeh="Descripción de la actividad."
        column="30"
        rowst="5"
      />
      <BotonRegiActiv tipo="submit" text="Registrar Actividad" />
    </ConteRegistro>
  );
};

export default FormRegistro;
