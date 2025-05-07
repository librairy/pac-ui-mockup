// Contenido de historial.js

formHistory = [
  {
    date: "2025-05-10 14:30",
    description:
      "Actualización de dirección de notificación en base a nuevos documentos subidos.",
    user: "Asistente",
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
    formData: typeof getBaseFormData === "function" ? getBaseFormData() : {},
    changedFields: [],
  },
];

function populateHistoryList() {
  // Asegúrate de que los IDs 'historyList', 'pac-form' y las variables
  // formHistory, applyHistoryEntry existan y estén accesibles.
  const historyListContainer = document.getElementById("historyList");
  // 'formHistory' y 'pacForm' (o una referencia al formulario) deben estar disponibles
  // en el scope donde se llama esta función o pasarse como parámetros.

  if (!historyListContainer || typeof formHistory === "undefined") {
    console.error(
      "Elementos necesarios para el historial no encontrados o formHistory no definido."
    );
    if (historyListContainer)
      historyListContainer.innerHTML =
        '<p class="text-red-500">Error al cargar el historial.</p>';
    return;
  }

  historyListContainer.innerHTML = "";
  if (formHistory.length === 0) {
    historyListContainer.innerHTML =
      '<p class="text-gray-500">No hay historial de cambios.</p>';
    return;
  }

  formHistory.forEach((entry) => {
    const entryDiv = document.createElement("div");
    entryDiv.className =
      "p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-150";

    let userDisplayHTML = "";
    if (entry.user.toLowerCase() === "sistema") {
      userDisplayHTML = `<span class="flex items-center text-xs text-gray-500 mt-1" title="Sistema">
                       <i class="fas fa-desktop fa-fw mr-2 text-blue-500"></i> Sistema
                     </span>`;
    } else if (entry.user.toLowerCase() === "asistente") {
      userDisplayHTML = `<span class="flex items-center text-xs text-gray-500 mt-1" title="Asistente">
                       <i class="fas fa-robot fa-fw mr-2 text-purple-500"></i> Asistente
                     </span>`;
    } else {
      userDisplayHTML = `<span class="flex items-center text-xs text-gray-500 mt-1" title="${entry.user}">
                       <i class="fas fa-user fa-fw mr-2 text-gray-400"></i> ${entry.user}
                     </span>`;
    }

    entryDiv.innerHTML = `
      <p class="font-semibold text-sm text-blue-600">${new Date(
        entry.date
      ).toLocaleString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })}</p>
      <p class="text-sm text-gray-700 mt-1">${entry.description}</p>
      ${userDisplayHTML}
    `;

    entryDiv.addEventListener("click", () => {
      // applyHistoryEntry debe estar disponible
      applyHistoryEntry(entry);
      toggleHistoryPanel(); // toggleHistoryPanel también debe estar disponible
    });
    historyListContainer.appendChild(entryDiv);
  });
}
