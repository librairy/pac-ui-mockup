formHistory = [
  {
    date: "2025-05-10 14:30",
    description:
      "Actualización de dirección de notificación en base a nuevos documentos subidos.",
    user: "Asistente",
    is_uploaded: false,
    formData: {
      ...(typeof getBaseFormData === "function" ? getBaseFormData() : {}),
      not_nombre_via: "Calle Vieja",
      not_numero: "5",
      not_cp: "06701",
      not_localidad: "Villanueva de la Serena",
      not_provincia: "Badajoz",
    },
    changedFields: [
      "not_nombre_via",
      "not_numero",
      "not_cp",
      "not_localidad",
      "not_provincia",
    ],
  },
  {
    date: "2025-05-03 10:15",
    description: "Actualización datos de contacto y dirección.",
    user: "Ana Pérez",
    is_uploaded: true,
    formData: {
      ...(typeof getBaseFormData === "function" ? getBaseFormData() : {}),
      sol_telefono: "924856097",
      sol_movil: "649092919",
      sol_email: "ana.perez@example.com",
      not_nombre_via: "Calle Nueva",
      not_numero: "10",
    },
    changedFields: [
      "sol_telefono",
      "sol_movil",
      "sol_email",
      "not_nombre_via",
      "not_numero",
    ],
  },
  {
    date: "2025-04-28 16:30",
    description: "Modificación de IBAN y ayudas solicitadas.",
    user: "Carlos López",
    is_uploaded: false,
    formData: {
      ...(typeof getBaseFormData === "function" ? getBaseFormData() : {}),
      iban: "ES5021000000000000000001",
      ayuda_jovenes: true,
      ayuda_abrs: true,
    },
    changedFields: ["iban", "ayuda_jovenes"],
  },
  {
    date: "2025-04-20 09:00",
    description: "Creación inicial del formulario.",
    user: "Sistema",
    is_uploaded: false,
    formData: typeof getBaseFormData === "function" ? getBaseFormData() : {},
    changedFields: [],
  },
];

function populateHistoryList() {
  const historyListUl = document.getElementById("historyList"); // Asumimos que ahora es un UL

  if (!historyListUl || typeof formHistory === "undefined") {
    console.error(
      "Elemento #historyList (debe ser UL) no encontrado o formHistory no definido."
    );
    if (historyListUl) {
      historyListUl.innerHTML =
        '<li class="list-group-item text-danger">Error al cargar el historial.</li>';
    }
    return;
  }

  // Aplicar clases de list-group al UL
  historyListUl.className = "list-group list-group-flush";
  historyListUl.innerHTML = ""; // Limpiar lista

  if (formHistory.length === 0) {
    historyListUl.innerHTML =
      '<li class="list-group-item text-center p-4"><em class="text-muted">No hay historial de cambios.</em></li>';
    return;
  }

  formHistory.forEach((entry) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item list-group-item-action"; // list-group-item-action para efecto hover y cursor
    listItem.style.cursor = "pointer"; // Asegurar cursor pointer

    let userIconClass = "fas fa-user text-secondary"; // Icono por defecto
    let userText = entry.user;

    if (entry.user.toLowerCase() === "sistema") {
      userIconClass = "fas fa-desktop text-primary";
      userText = "Sistema";
    } else if (entry.user.toLowerCase() === "asistente") {
      userIconClass = "fas fa-robot text-[#6f42c1]";
      userText = "Asistente";
    }

    const formattedDate = new Date(entry.date).toLocaleString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    listItem.innerHTML = `
      <div class="d-flex w-100 justify-content-between align-items-center">
        <p class="font-semibold text-sm">${entry.description}</p>
        <small class="text-muted">${formattedDate}</small>
      </div>
      <div class="d-flex w-100 justify-content-between align-items-center mt-1">
        <small class="d-flex align-items-center">
          <i class="${userIconClass} fa-fw me-2"></i> ${userText}
        </small>
        ${
          entry.is_uploaded
            ? '<span class="badge text-bg-success" title="Subido al SGA">Subido</span>'
            : ""
        }
      </div>
    `;

    listItem.addEventListener("click", () => {
      if (typeof applyHistoryEntry === "function") {
        applyHistoryEntry(entry);
      }
      if (typeof toggleHistoryPanel === "function") {
        // toggleHistoryPanel();
      }
    });
    historyListUl.appendChild(listItem);
  });
}

// VALIDACIONES
const formValidations = [
  {
    id: "val001",
    type: "error",
    message:
      "El CIF/NIF del solicitante es obligatorio y no puede estar vacío.",
    fieldId: "sol_cif_nif",
    fieldLabel: "CIF/NIF Solicitante",
  },
  {
    id: "val002",
    type: "incidencia",
    message: "El número de teléfono fijo parece incompleto. Revise el formato.",
    fieldId: "sol_telefono",
    fieldLabel: "Teléfono Solicitante",
  },
  {
    id: "val003",
    type: "aviso",
    message: "No se ha marcado la autorización para comunicaciones por SMS.",
    fieldId: "com_sms",
    fieldLabel: "Autorización SMS",
  },
  {
    id: "val004",
    type: "error",
    message: "El IBAN es incorrecto o está incompleto.",
    fieldId: "iban",
    fieldLabel: "IBAN",
  },
  {
    id: "val005",
    type: "incidencia",
    message:
      "Los ingresos agrarios de 2023 son significativamente diferentes a los de 2022.",
    fieldId: "fiscal_ingresos_agrarios_2023",
    fieldLabel: "Ingresos Agrarios 2023",
  },
];

// function populateValidationsList() {
//   const validationsListUl = document.getElementById("validationsList"); // Asumimos que ahora es un UL
//   if (!validationsListUl) {
//     console.error("Elemento #validationsList (debe ser UL) no encontrado.");
//     return;
//   }

//   // Aplicar clases de list-group al UL
//   validationsListUl.className = "list-group list-group-flush";
//   validationsListUl.innerHTML = ""; // Limpiar lista

//   if (formValidations.length === 0) {
//     validationsListUl.innerHTML =
//       '<li class="list-group-item text-center p-4"><em class="text-muted">No hay validaciones pendientes.</em></li>';
//     return;
//   }

//   formValidations.forEach((val) => {
//     const listItem = document.createElement("li");
//     listItem.className = "list-group-item list-group-item-action"; // list-group-item-action para efecto hover y cursor
//     listItem.style.cursor = "pointer"; // Asegurar cursor pointer

//     let iconClass = "";
//     let textColorClass = ""; // Usaremos textColorClass para el texto y el icono para consistencia
//     let typeText = "";

//     switch (val.type) {
//       case "error":
//         iconClass = "fas fa-times-circle";
//         textColorClass = "text-danger"; // Rojo para errores
//         typeText = "Error";
//         break;
//       case "incidencia":
//         iconClass = "fas fa-exclamation-triangle"; // Cambiado a triángulo para diferenciar de aviso
//         textColorClass = "text-warning"; // Amarillo/Naranja para incidencias
//         typeText = "Incidencia";
//         break;
//       case "aviso":
//         iconClass = "fas fa-info-circle"; // Cambiado a círculo de info para avisos
//         textColorClass = "text-info"; // Azul para avisos
//         typeText = "Aviso";
//         break;
//       default:
//         iconClass = "fas fa-question-circle";
//         textColorClass = "text-secondary";
//         typeText = "Desconocido";
//     }

//     listItem.innerHTML = `
//       <div class="d-flex align-items-center">
//         <i class="${iconClass} ${textColorClass} fa-fw me-3 mt-1"></i>
//         <div class="flex-grow-1">
//           <div class="d-flex justify-content-between align-items-center">
//             <p class="mb-0 font-semibold text-sm">${typeText}: ${
//       val.fieldLabel || val.fieldId
//     }</p>
//           </div>
//           <small class="text-muted d-block mt-1">${val.message}</small>
//         </div>
//       </div>
//     `;
//     listItem.addEventListener("click", () => {
//       if (typeof applyValidationFocus === "function") {
//         applyValidationFocus(val);
//       }
//       if (typeof toggleValidationsPanel === "function") {
//         toggleValidationsPanel(); // Descomentar si quieres que el panel se cierre al hacer clic
//       }
//     });
//     validationsListUl.appendChild(listItem);
//   });
// }
