<ConteRegistro>
<ContBloq>
  <ConSubBlo>
    <LabelRegistro para="ingreso" texto="Fecha" />
    <InputRegistro tipo="date" ident="formFecha" />
  </ConSubBlo>
  <ConSubBlo>
    <LabelRegistro para="inicio" texto="Hora Inicio" />
    <InputRegistro tipo="time" ident="formInicio" />
  </ConSubBlo>
</ContBloq>
<ContBloq>
  <ConSubBlo>
    <LabelRegistro tipo="final" texto="Hora Final" />
    <InputRegistro tipo="time" ident="formFinal" />
  </ConSubBlo>
  
{/*         <ConSubBlo>
    <LabelRegistro para="subproces" texto="Subproceso" />
    <InputRegistro
      tipo="text"
      ident="subproces"
      placeh="Que actividad voy a realizar..."
    />
  </ConSubBlo> */}

</ContBloq>
<ContBloq>
{/*   <ConSubBlo>
    <LabelRegistro para="proces" texto="Proceso" />
    <InputRegistro
      tipo="text"
      ident="proces"
      placeh="Que actividad voy a realizar..."
    />
  </ConSubBlo> */}
{/*        <ConSubBlo>
    <LabelRegistro para="macro" texto="Macroproceso" />
    <InputRegistro
      tipo="text"
      ident="macro"
      placeh="Que actividad voy a realizar..."
    />
  </ConSubBlo> */}
</ContBloq>
<ContBloq>
  <ConSubBlo>
    <LabelRegistro para="actividad" texto="Actividad" />
    <TextareaRegistro
      ident="formActividad"
      placeh="Descripción de la actividad."
      column="50"
      rowst="3"
    />
  </ConSubBlo>
</ContBloq>

<label htmlFor="subprocesos">Escoja el subproceso:</label>
<input list="subprocesos" name="formSubproceso" id="formSubproceso" onChange={cambio}/>

<datalist id="subprocesos">
{datain.map((subproc,index) => (
    <option key={index}>{subproc.subproceso}</option>
  ))}
</datalist>

<input type="tipo" id="formProceso" size="tamaño" name="formProceso" readOnly value={subp===""
  ?"":
  datain
    .filter((subpr) => subpr.subproceso.includes(subp))
    .map((filtrado) => (
      filtrado.proceso
    ))}/>
<input type="tipo" id="formMacroproceso" size="tamaño" name="formMacroproceso" readOnly value={subp===""
  ?"":
  datain
    .filter((subpr) => subpr.subproceso.includes(subp))
    .map((filtrado) => (
      filtrado.macroproceso
    ))}/>




<BotonRegiActiv tipo="submit" text="Registrar Actividad" />
</ConteRegistro>
);