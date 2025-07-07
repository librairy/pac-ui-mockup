function getBaseFormData() {
  // Esta función debería idealmente leer los valores actuales del formulario
  // O, para este mockup, devolver un objeto con todos los valores por defecto del HTML.
  // Es VITAL que esta función devuelva un objeto con TODOS los campos y sus valores iniciales.
  return {
    campana: "2025",
    num_solicitud: "367389",
    estado_actual: "Finalizada",
    fecha_registro: "",
    num_registro: "2024000000154555",
    ambito_grabacion: "GESTIÓN DE PACs, S.L.",
    tipo_registro: "",
    codigo_regepa: "1106030141",
    cod_explotacion: "",
    comunidad_autonoma: "Extremadura",
    num_expediente: "11039695",
    sol_cif_nif: "B06258511",
    sol_nombre_razon: "FRUTICOLA CASTELNOVO SL",
    sol_apellido1: "",
    sol_apellido2: "",
    sol_fecha_nac: "",
    sol_genero: "",
    sol_estado_civil: "",
    sol_telefono: "924856096",
    sol_movil: "649092918",
    sol_email: "torrado@tany.es",
    sol_titularidad_compartida: false,
    com_sms: false,
    com_email: true,
    not_tipo_via: "Carretera",
    not_nombre_via: "NAC 430",
    not_numero: "115",
    not_bloque: "",
    not_portal: "",
    not_escalera: "",
    not_planta: "",
    not_puerta: "IZ",
    not_km: "115",
    not_provincia: "Badajoz",
    not_municipio: "Villanueva de la Serena",
    not_cp: "06700",
    not_localidad: "VILLANUEVA DE LA SERENA",
    not_apartado: "",
    not_oficina: "",
    res_igual_not: true, // Este controla la visibilidad de otra sección
    // Campos de dirección residencia (se rellenarán si res_igual_not es false, pero deben existir en el modelo)
    res_tipo_via: "Carretera",
    res_nombre_via: "NAC 430",
    res_numero: "115",
    res_bloque: "",
    res_portal: "",
    res_escalera: "",
    res_planta: "",
    res_puerta: "IZ",
    res_km: "115",
    res_provincia: "Badajoz",
    res_municipio: "Villanueva de la Serena",
    res_cp: "06700",
    res_localidad: "VILLANUEVA DE LA SERENA",
    iban: "ES6221002027690200037255",
    entidad: "2100",
    sucursal: "2027",
    dc: "69",
    num_cuenta: "0200037255",
    fiscal_incorpora: false,
    fiscal_forma_juridica: "Otras personas jurídicas",
    fiscal_cif_integradora: "",
    fiscal_ingresos_integradora_2023: null, // usar null o "" para números vacíos
    fiscal_ingresos_agrarios_2023: 13624150.7,
    fiscal_ingresos_agrarios_2022: 15564544.25,
    fiscal_ingresos_agrarios_2021: 13665204.58,
    fiscal_ingresos_totales_2023: 7069803.74,
    fiscal_costes_laborales: null,
    rep_cif_nif: "76226750N",
    rep_nombre: "ATANASIO",
    rep_apellido1: "NARANJO",
    rep_apellido2: "HIDALGO",
    rep_fecha_nac: "1956-07-22",
    rep_genero: "Hombre",
    rep_telefono: "",
    rep_movil: "",
    rep_email: "",
    responsabilidad_tipo: "juridica", // Radio button
    resp_gerente_titular: "no",
    resp_gerente_familiar: "no",
    resp_comparte_familiar: "no",
    resp_comparte_conyuge: "no",
    resp_gerente_conyuge: "no",
    resp_grupo_empresarial: "no",
    gerente_nif: "76226750N",
    gerente_nombre: "ATANASIO",
    gerente_apellido1: "NARANJO",
    gerente_apellido2: "HIDALGO",
    gerente_fecha_nac: "1956-07-22",
    gerente_genero: "Hombre",
    gerente_email: "",
    gerente_telefono: "",
    gerente_movil: "",
    gerente_jornadas: "-50%",
    gerente_ano_inicio: 1997,
    gerente_formacion: "Cursos de formación agraria",
    gerente_cursos_perfeccionamiento: "no",
    gerente_cif_matriz: "",
    gerente_razon_matriz: "",
    ayuda_abrs: true,
    ayuda_redistributiva: true,
    ayuda_jovenes: false,
    ayuda_proteinas: false,
    ayuda_arroz: false,
    ayuda_remolacha: false,
    ayuda_tomate: false,
    ayuda_frutos_secos: false,
    ayuda_uva_pasa: false,
    ayuda_olivar: false,
    ayuda_algodon: false,
    ayuda_gan_vacuno_carne: false,
    ayuda_gan_terneros_nacimiento: false,
    ayuda_gan_terneros_sostenible: false,
    ayuda_gan_leche_vaca: false,
    ayuda_gan_ovino_caprino_carne: false,
    ayuda_gan_leche_oveja_cabra: false,
    ayuda_gan_ovino_caprino_sin_pastos: false,
    eco_pastoreo_siega_biodiversidad: false,
    eco_pastoreo_extensivo: false,
    eco_siega_sostenible: false,
    eco_islas_biodiversidad: false,
    eco_rotaciones_siembra_directa: true,
    eco_rotacion_mejorantes: true,
    eco_siembra_directa: false,
    eco_cubiertas_lenosos: true,
    eco_cubierta_vegetal: true,
    eco_cubierta_inerte: false,
    eco_espacios_biodiversidad: false,
    eco_espacios_biodiversidad_sub: false,
    eco_lamina_nivelacion: false,
    eco_lamina_siembra_seco: false,
    eco_lamina_secas: false,
    eco_lamina_caballones: false,
    dr_andalucia: false,
    dr_aragon: false,
    dr_asturias: false,
    dr_baleares: false,
    dr_canarias: false,
    dr_cantabria: false,
    dr_castilla_mancha: false,
    dr_castilla_leon: false,
    dr_cataluna: false,
    dr_extremadura: true,
    dr_galicia: false,
    dr_madrid: false,
    dr_murcia: false,
    dr_navarra: false,
    dr_pais_vasco: false,
    dr_rioja: false,
    dr_valenciana: false,
    dr_ex_prod_integrada_frutales_hueso_2019: true,
    declara_datos_verdaderos: true,
    declara_conoce_sigpac: true,
    autoriza_consulta_aeat: true,
    autoriza_consulta_tgss: true,
    // Para la tabla de recintos, necesitaríamos una estructura más compleja, ej: un array de objetos.
    // recintos: [
    //   { recinto_prov_0: "06", recinto_mun_0: "44", ... },
    //   { recinto_prov_1: "06", recinto_mun_1: "44", ... }
    // ]
    // Por simplicidad, no lo implementamos completamente aquí, pero es para tenerlo en cuenta.
  };
}

// Function to toggle visibility of residencia details based on checkbox
function toggleResidencia() {
  const checkbox = document.getElementById("res_igual_not");
  const detailsDiv = document.getElementById("residencia-details");
  if (checkbox && detailsDiv) {
    detailsDiv.classList.toggle("hidden", checkbox.checked);
  }
}

// --- LÓGICA HISTORIAL (simplificada, asumiendo que está aquí o en un .js importado) ---
function toggleHistoryPanel() {
  const historyPanel = document.getElementById("historyPanel");
  if (historyPanel) historyPanel.classList.toggle("translate-x-full");
}

function clearFormHighlights() {
  if (!pacForm) return;
  const highlightedFields = pacForm.querySelectorAll(
    ".campo-modificado-historial"
  );
  highlightedFields.forEach((field) =>
    field.classList.remove("campo-modificado-historial")
  );
}

function applyHistoryEntry(historyEntry, highlight = true) {
  if (!pacForm) return;
  clearFormHighlights(); // Limpia destacados de historial
  clearValidationHighlights(); // Limpia también destacados de validaciones
  const formDataFromHistory = historyEntry.formData;
  for (const fieldId in formDataFromHistory) {
    if (formDataFromHistory.hasOwnProperty(fieldId)) {
      const field = pacForm.elements[fieldId];
      if (field) {
        if (field.length && field[0] && field[0].type === "radio") {
          field.forEach(
            (radio) =>
              (radio.checked = radio.value === formDataFromHistory[fieldId])
          );
        } else if (field.type === "checkbox") {
          field.checked = formDataFromHistory[fieldId];
        } else {
          field.value = formDataFromHistory[fieldId];
        }
      }
    }
  }
  if (highlight && historyEntry.changedFields) {
    historyEntry.changedFields.forEach((fieldId) => {
      const field = pacForm.elements[fieldId];
      if (field) {
        if (field.length && field[0].type === "radio") {
          field.forEach((radio) => {
            if (radio.checked)
              radio.classList.add("campo-modificado-historial");
          });
        } else {
          field.classList.add("campo-modificado-historial");
        }
      }
    });
  }
  if (
    typeof toggleResidencia === "function" &&
    formDataFromHistory.hasOwnProperty("res_igual_not")
  ) {
    toggleResidencia();
  }
}

function showSection(sectionIdToShow) {
  const formSections = document.querySelectorAll(".form-section");
  const formNavigationLinks = document.querySelectorAll(
    "#form-navigation .nav-link"
  );
  formSections.forEach((section) =>
    section.classList.toggle(
      "active",
      section.id === "section-" + sectionIdToShow
    )
  );
  formNavigationLinks.forEach((link) =>
    link.classList.toggle(
      "active-nav-link",
      link.dataset.section === sectionIdToShow
    )
  );
}

// --- LÓGICA DE VALIDACIONES ---
const mockValidationsData = [
  // Grupo: Campos del Formulario
  {
    group: "fields",
    name: "Autorización comunicación por SMS",
    display_message: "Se recomienda autorizar la comunicación por SMS",
    severity: "info",
    failed: true,
    involved_fields: {
      field_data: [{ field_id: "com_sms", section_id: "datos-generales" }],
    },
  },
  {
    group: "fields",
    name: "Autorización comunicación por correo",
    display_message:
      "Se recomienda autorizar la comunicación por correo electrónico",
    severity: "info",
    failed: true,
    involved_fields: {
      field_data: [{ field_id: "com_email", section_id: "datos-generales" }],
    },
  },
  {
    group: "fields",
    name: "El teléfono móvil debe tener 9 dígitos",
    display_message: "Validación correcta",
    severity: "success",
    failed: false,
    involved_fields: { field_data: [] },
  },
  {
    group: "fields",
    name: "Completitud de datos básicos del solicitante",
    display_message: "Domicilio de notificaciones es un campo obligatorio.",
    severity: "error",
    failed: true,
    involved_fields: {
      field_data: [
        { field_id: "not_nombre_via", section_id: "datos-generales" },
      ],
    },
  },
  {
    group: "fields",
    name: "IBAN del solicitante válido",
    display_message: "El formato del IBAN (ES123456789) no es válido.",
    severity: "error",
    failed: true,
    involved_fields: {
      field_data: [{ field_id: "iban", section_id: "datos-generales" }],
    },
  },
  {
    group: "fields",
    name: "Tipo de persona (física/jurídica) es obligatorio",
    display_message: "Validación correcta",
    severity: "success",
    failed: false,
    involved_fields: { field_data: [] },
  },
  {
    group: "fields",
    name: "Validación de Código de Explotación Agraria (CEA) y REA",
    display_message:
      "Código de Explotación Agraria (CEA) no informado. Verificar si es obligatorio para este caso.",
    severity: "warning",
    failed: true,
    involved_fields: {
      field_data: [
        { field_id: "cod_explotacion", section_id: "datos-generales" },
      ],
    },
  },
  {
    group: "fields",
    name: "Validación de ayuda a jóvenes agricultores",
    display_message: "Validación correcta",
    severity: "success",
    failed: false,
    involved_fields: { field_data: [] },
  },
  {
    group: "fields",
    name: "Datos de entidad colaboradora",
    display_message: "Validación correcta",
    severity: "success",
    failed: false,
    involved_fields: { field_data: [] },
  },
  {
    group: "fields",
    name: "Verificación de Agricultor Activo (RD 1048/2022)",
    display_message: "Validación correcta",
    severity: "success",
    failed: false,
    involved_fields: { field_data: [] },
  },
  {
    group: "fields",
    name: "Verificación de requisitos de ayudas asociadas agrícolas",
    display_message: "Validación correcta",
    severity: "success",
    failed: false,
    involved_fields: { field_data: [] },
  },
  {
    group: "fields",
    name: "Validación de NIF/CIF del solicitante",
    display_message: "Validación correcta",
    severity: "success",
    failed: false,
    involved_fields: { field_data: [] },
  },

  // Grupo: Subvenciones Solicitadas
  {
    group: "grants_solicita",
    name: "Verificación de requisitos para la ayuda de pastoreo extensivo",
    display_message:
      "PASTOREO EXTENSIVO - INCUMPLE. Recintos con pastos válidos: 0 | Carga ganadera: Sin superficie de pastos. ERRORES: No se han declarado recintos válidos para pastoreo extensivo.",
    severity: "error",
    failed: true,
    involved_fields: {
      field_data: [
        { field_id: "eco_pastoreo_extensivo", section_id: "datos-generales" },
      ],
    },
  },
  {
    group: "grants_solicita",
    name: "Verificación de requisitos para la ayuda de siega sostenible",
    display_message: "SIEGA SOSTENIBLE - No solicitada - NO ELEGIBLE.",
    severity: "success",
    failed: false,
    involved_fields: { field_data: [] },
  },
  {
    group: "grants_solicita",
    name: "Verificación de requisitos para la ayuda de Islas de biodiversidad en pastos",
    display_message:
      "ISLAS DE BIODIVERSIDAD EN PASTOS - No solicitada - NO ELEGIBLE.",
    severity: "success",
    failed: false,
    involved_fields: { field_data: [] },
  },
  {
    group: "grants_solicita",
    name: "Verificación de requisitos para la ayuda de Siembra directa",
    display_message: "SIEMBRA DIRECTA - No solicitada - NO ELEGIBLE.",
    severity: "success",
    failed: false,
    involved_fields: { field_data: [] },
  },
  {
    group: "grants_solicita",
    name: "Verificación de requisitos para la ayuda de Espacios de biodiversidad en cultivos",
    display_message:
      "ESPACIOS DE BIODIVERSIDAD - INCUMPLE. ERRORES: No se han declarado recintos válidos.",
    severity: "error",
    failed: true,
    involved_fields: {
      field_data: [
        {
          field_id: "eco_espacios_biodiversidad",
          section_id: "datos-generales",
        },
      ],
    },
  },
  {
    group: "grants_solicita",
    name: "Verificación de requisitos para la ayuda de Rotación de cultivos con especies mejorantes",
    display_message:
      "ROTACIÓN ESPECIES MEJORANTES - INCUMPLE: No se han declarado recintos compatibles.",
    severity: "error",
    failed: true,
    involved_fields: {
      field_data: [
        { field_id: "eco_rotacion_mejorantes", section_id: "datos-generales" },
      ],
    },
  },

  // Grupo: BCAM
  {
    group: "BCAM",
    name: "Verificación BCAM 2",
    display_message: "BCAM 2: No aplica.",
    severity: "success",
    failed: false,
    involved_fields: { field_data: [] },
  },
  {
    group: "BCAM",
    name: "Verificación BCAM 9",
    display_message: "BCAM 9: Sin recintos declarados.",
    severity: "success",
    failed: false,
    involved_fields: { field_data: [] },
  },
  {
    group: "BCAM",
    name: "Verificación BCAM 7",
    display_message: "CUMPLE BCAM 7 (por exención).",
    severity: "success",
    failed: false,
    involved_fields: { field_data: [] },
  },
];

const typeToColor = {
  error: {
    border: "border-red-400",
    bg: "bg-red-50",
    text: "text-red-700",
    icon: "fas fa-times-circle text-red-500",
    label: "Error",
    highlightClass: "campo-validacion-error",
  },
  warning: {
    border: "border-yellow-400",
    bg: "bg-yellow-50",
    text: "text-yellow-700",
    icon: "fas fa-exclamation-triangle text-yellow-500",
    label: "Incidencia",
    highlightClass: "campo-validacion-incidencia",
  },
  info: {
    border: "border-blue-400",
    bg: "bg-blue-50",
    text: "text-blue-700",
    icon: "fas fa-info-circle text-blue-500",
    label: "Aviso",
    highlightClass: "campo-validacion-aviso",
  },
};

function toggleValidationsPanel() {
  const validationsPanel = document.getElementById("validationsPanel");
  if (validationsPanel) validationsPanel.classList.toggle("translate-x-full");
}

function populateValidationsList() {
  const validationsListContainer = document.getElementById("validationsList");
  if (!validationsListContainer) return;

  validationsListContainer.innerHTML = ""; // Limpiar lista anterior

  const failedValidations = mockValidationsData.filter((v) => v.failed);

  if (failedValidations.length === 0) {
    validationsListContainer.innerHTML =
      '<div class="text-center p-4 bg-green-50 text-green-700 rounded-lg border border-green-300"><i class="fas fa-check-circle mr-2"></i>¡Todas las validaciones son correctas!</div>';
    return;
  }

  failedValidations.forEach((val) => {
    const color = typeToColor[val.severity] || typeToColor.info;
    const firstField = val.involved_fields?.field_data?.[0];

    let goToFieldButton = "";
    if (firstField?.field_id) {
      goToFieldButton = `<button class="ml-auto text-blue-600 underline text-xs" onclick='applyValidationFocus(${JSON.stringify(
        val
      )})'>Ir al campo</button>`;
    }

    const validationCardHTML = `
      <div class="flex items-start gap-3 p-3 rounded border ${color.border} ${color.bg}">
        <i class="${color.icon} mt-1 text-lg"></i>
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-xs font-semibold uppercase ${color.text}">${color.label}</span>
            ${goToFieldButton}
          </div>
          <span class="block ${color.text}">${val.name}</span>
          <small class="block text-gray-600">${val.display_message}</small>
        </div>
      </div>`;
    validationsListContainer.insertAdjacentHTML(
      "beforeend",
      validationCardHTML
    );
  });
}

function clearValidationHighlights() {
  if (!pacForm) return;
  const errorFields = pacForm.querySelectorAll(".campo-validacion-error");
  errorFields.forEach((el) => el.classList.remove("campo-validacion-error"));

  const incidenciaFields = pacForm.querySelectorAll(
    ".campo-validacion-incidencia"
  );
  incidenciaFields.forEach((el) =>
    el.classList.remove("campo-validacion-incidencia")
  );

  const avisoFields = pacForm.querySelectorAll(".campo-validacion-aviso");
  avisoFields.forEach((el) => el.classList.remove("campo-validacion-aviso"));
}

function applyValidationFocus(validationEntry) {
  if (!pacForm) return;
  const fieldInfo = validationEntry.involved_fields?.field_data?.[0];
  if (!fieldInfo || !fieldInfo.field_id) return;
  toggleValidationsPanel();
  setTimeout(() => {
    clearValidationHighlights();
    const fieldElement = document.getElementById(fieldInfo.field_id);
    const styleInfo = typeToColor[validationEntry.severity] || typeToColor.info;
    if (fieldElement) {
      if (fieldInfo.section_id) showSection(fieldInfo.section_id);
      fieldElement.classList.add(styleInfo.highlightClass);
      fieldElement.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => fieldElement.focus({ preventScroll: true }), 300);
    } else {
      console.warn(`Elemento con ID '${fieldInfo.field_id}' no encontrado.`);
    }
  }, 150);
}

function validateForm() {
  const validationsList = document.getElementById("validationsList");
  const loadingValidations = document.getElementById("loadingValidations");
  const validationButton = document.getElementById("validateButton");
  const validationTimestamp = document.getElementById("validationTimestamp");
  validationsList.innerHTML = "";
  loadingValidations.classList.remove("hidden");
  validationButton.disabled = true;
  validationButton.innerHTML = `<i class='fas fa-spinner fa-spin me-2'></i> Validando...`;
  validationTimestamp.classList.add("hidden");
  setTimeout(() => {
    loadingValidations.classList.add("hidden");
    validationButton.disabled = false;
    validationButton.innerHTML = "Validar";
    const validationDate = document.getElementById("validationDate");
    const now = new Date();
    validationDate.textContent =
      now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) +
      ", " +
      now.toLocaleDateString();
    validationTimestamp.classList.remove("hidden");
    populateValidationsList();
  }, 1500);
}

// --- INICIALIZACIÓN GENERAL ---
document.addEventListener("DOMContentLoaded", () => {
  const formNavigationLinks = document.querySelectorAll(
    "#form-navigation .nav-link"
  );
  const formSections = document.querySelectorAll(".form-section");
  pacForm = document.getElementById("pac-form"); // Asegúrate que pacForm está definido aquí o globalmente si es necesario

  function showSection(sectionIdToShow) {
    formSections.forEach((section) => {
      if (section.id === "section-" + sectionIdToShow) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });

    formNavigationLinks.forEach((link) => {
      if (link.dataset.section === sectionIdToShow) {
        link.classList.add("active-nav-link");
      } else {
        link.classList.remove("active-nav-link");
      }
    });
  }

  formNavigationLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const sectionId = this.dataset.section;
      if (sectionId) {
        showSection(sectionId);
      }
    });
  });

  // Mostrar la sección inicial (Datos Generales)
  showSection("datos-generales");
  toggleResidencia(); // Llamada inicial

  // Cargar el estado más reciente del historial si existe (sin resaltar)
  if (formHistory.length > 0) {
    applyHistoryEntry(formHistory[0], false);
  }

  // Botones Historial
  const historyButton = document.getElementById("historyButton");
  const closeHistoryPanelButton = document.getElementById("closeHistoryPanel");

  if (historyButton) {
    historyButton.addEventListener("click", () => {
      populateHistoryList();
      toggleHistoryPanel();
    });
  }
  if (closeHistoryPanelButton) {
    closeHistoryPanelButton.addEventListener("click", toggleHistoryPanel);
  }

  // Botones Validaciones
  const validationsButton = document.getElementById("validationsButton");
  const closeValidationsPanelButton = document.getElementById(
    "closeValidationsPanel"
  );

  if (validationsButton) {
    validationsButton.addEventListener("click", () => {
      populateValidationsList();
      toggleValidationsPanel();
    });
  }
  if (closeValidationsPanelButton) {
    closeValidationsPanelButton.addEventListener(
      "click",
      toggleValidationsPanel
    );
  }

  // Submit del formulario
  if (pacForm) {
    pacForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Formulario guardado (simulación).");
    });
  }

  // Initialize AI Panel
  const aiGenerationButton = document.getElementById("aiGenerationButton");
  if (aiGenerationButton) {
    aiGenerationButton.addEventListener("click", toggleAiPanel);
  }

  const closeAiPanel = document.getElementById("closeAiPanel");
  if (closeAiPanel) {
    closeAiPanel.addEventListener("click", toggleAiPanel);
  }

  const aiPanelOverlay = document.getElementById("aiPanelOverlay");
  if (aiPanelOverlay) {
    aiPanelOverlay.addEventListener("click", toggleAiPanel);
  }

  const aiFunctionButtons = document.querySelectorAll(".ai-function-btn");
  aiFunctionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const functionName = this.getAttribute("data-function");
      switchAiFunction(functionName);
    });
  });

  const aiDropZone = document.getElementById("aiDropZone");
  const aiFileInput = document.getElementById("aiFileInput");

  if (aiDropZone && aiFileInput) {
    aiDropZone.addEventListener("click", () => {
      aiFileInput.click();
    });

    aiFileInput.addEventListener("change", function (e) {
      handleAiFileUpload(e.target.files);
    });

    aiDropZone.addEventListener("dragover", function (e) {
      e.preventDefault();
      aiDropZone.classList.add("dragover");
    });

    aiDropZone.addEventListener("dragleave", function (e) {
      e.preventDefault();
      aiDropZone.classList.remove("dragover");
    });

    aiDropZone.addEventListener("drop", function (e) {
      e.preventDefault();
      aiDropZone.classList.remove("dragover");
      handleAiFileUpload(e.dataTransfer.files);
    });
  }

  // AI tab switching
  const aiTabButtons = document.querySelectorAll(".ai-tab-btn");
  if (aiTabButtons.length > 0) {
    aiTabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const tabName = this.dataset.tab;

        // Update active tab button
        aiTabButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");

        // Update active tab content
        document.querySelectorAll(".ai-tab-content").forEach((content) => {
          content.classList.remove("active");
        });

        if (tabName === "existing") {
          document
            .getElementById("aiExistingDocuments")
            .classList.add("active");
        } else if (tabName === "upload") {
          document
            .getElementById("aiUploadNewDocument")
            .classList.add("active");
        }
      });
    });
  }

  // Initialize existing documents list from customer data
  updateExistingDocumentsList();

  const aiApplyChanges = document.getElementById("aiApplyChanges");
  if (aiApplyChanges) {
    aiApplyChanges.addEventListener("click", applyAiChanges);
  }

  const aiReviewChanges = document.getElementById("aiReviewChanges");
  if (aiReviewChanges) {
    aiReviewChanges.addEventListener("click", reviewAiChanges);
  }

  // Modal event listeners
  const aiApplyChangesModal = document.getElementById("aiApplyChangesModal");
  if (aiApplyChangesModal) {
    aiApplyChangesModal.addEventListener("click", applyAiChanges);
  }

  const aiReviewChangesModal = document.getElementById("aiReviewChangesModal");
  if (aiReviewChangesModal) {
    aiReviewChangesModal.addEventListener("click", reviewAiChanges);
  }

  const startOptimizationBtn = document.getElementById("startOptimization");
  if (startOptimizationBtn) {
    startOptimizationBtn.addEventListener("click", startOptimization);
  }

  const confirmOptimizationBtn = document.getElementById("confirmOptimization");
  if (confirmOptimizationBtn) {
    confirmOptimizationBtn.addEventListener("click", confirmOptimization);
  }

  const confirmOptimizationModalBtn = document.getElementById(
    "confirmOptimizationModal"
  );
  if (confirmOptimizationModalBtn) {
    confirmOptimizationModalBtn.addEventListener("click", confirmOptimization);
  }

  const cancelOptimizationBtn = document.getElementById("cancelOptimization");
  if (cancelOptimizationBtn) {
    cancelOptimizationBtn.addEventListener("click", cancelOptimization);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const documentsInfo = [
    {
      document_name: "Alta Terceros",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Autorización a una Entidad Colaboradora para el acceso a los datos de sus solicitudes de la campaña anterior, y en su caso, para la firma y/o entrega en el Registro.",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Autorización a Funcionario Público para cumplimentación de trámite telemático",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Autorización a un solicitante para recuperar la solicitud y tipo de otro solicitante en caso de Cambio de titularidad",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Autorización a un solicitante para recuperar los datos de la solicitud del mismo tipo de la campaña anterior de otro solicitante en caso de Subrogaciones/Cesiones de compromiso de PDR",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name: "NIF del solicitante",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: true,
    },
    {
      document_name: "CIF del solicitante",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name: "CIF/NIF del representante legal",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name: "Acreditación del representante legal",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "CIF/NIF del tercero en caso de que se haya autorizado la firma a dicho tercero",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Certificado de estar al corriente de las obligaciones tributarias",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: true,
      is_validated: true,
    },
    {
      document_name:
        "Declaración informativa anual de entidades en régimen de atribución de rentas",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: true,
    },
    {
      document_name:
        "Certificado de estar al corriente en el pago en la Seguridad Social",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: true,
      is_validated: true,
    },
    {
      document_name:
        "Declaración del Impuesto sobre la Renta de las Personas Físicas del solicitante y del cónyuge, en caso de declaración conjunta. Si no se ha hecho nunca declaración de renta, aportar el impreso de alta censal (Mod. 036 ó 037).",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: true,
    },
    {
      document_name: "Modelo 190 de la Agencia Tributaria último año",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Copia del contrato de suministro con la industria azucarera",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: true,
      is_validated: false,
    },
    {
      document_name: "Certificado oficial sobre rendimiento lechero vacuno",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Documentación acreditativa de que realiza labores de mantenimiento de pastos en la superficie de pastos declarada",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Documento de autorización en caso de que la solicitud la tenga que firmar un tercero",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name: "Facturas de venta de la producción agraria",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Documentación que acredite poseer un nivel de capacitación agraria suficiente, acorde al exigido en los programas de DR de su C.A, mediante formación lectiva y/o experiencia profesional",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: true,
    },
    {
      document_name: "Copia de la sentencia o del acto administrativo firme.",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Documento que acredite la fecha de alta en la seguridad social, correspondiente a la actividad agraria que determinó su incorporación",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: true,
      is_validated: true,
    },
    {
      document_name:
        "Análisis físico-químico de los suelos de las parcelas objeto de ayuda",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Libros de registro de explotación establecidos en base a la normativa sectorial",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Documento que acredite la inscripción de los animales objeto de la ayuda en el Libro Oficial de la raza.",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: true,
      is_validated: false,
    },
    {
      document_name:
        "Documentación acreditativa de disponer de asesoramiento técnico para líneas de ayudas de agroambiente y clima y/o apicultura Ecológica",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Modelo 50 de tasas en inscripción de operadores, titulares de fincas Agropecuarias de producción ecológica",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Certificado de la Tesorería Territorial de la Seguridad Social (Vida laboral)",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name: "Certificado empadronamiento",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Certificado de retenciones e ingresos a cuenta de la sociedad",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name: "Contratos de trabajo",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Documento acreditativo de arrendamiento, aparcería o asignación de superficies",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name: "TC-2/8",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Entidades asociadas: Documentación acreditativa del objeto social (Estatutos...)",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Copia de la escritura pública de constitución de la sociedad o transformación de la anterior",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Documentación que justifique la pertenencia de los socios al cebadero comunitario",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name: "Etiquetas de forestación",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Documento que acredite la pertenencia un organismo técnico competente debidamente reconocido que registra y lleva el Libro Genealógico o Libro Zootécnico de la raza.",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Certificado oficial sobre rendimiento lechero ovino/caprino",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name: "Otra documentación no definida en el reglamento",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Copia del contrato suscrito con la industria que va a realizar la transformación (tomate)",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: true,
      is_validated: false,
    },
    {
      document_name: "Autorización de la AEMPS (Cáñamo)",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name: "Contrato con la industria transformadora (Cáñamo)",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name: "Etiquetas de envases de semilla del cáñamo",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name: "Agroambientales - Compromiso en 2 Anualidades",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name: "Agroambientales - Comunicación Rotación Total.",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name: "Certificación en Producción Integrada",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name: "Fotografías georreferenciadas",
      can_be_attached_to_form: false,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name: "Informe de obligaciones de condicionalidad",
      can_be_attached_to_form: false,
      can_be_uploaded: false,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Documentación que justifique la aplicación de la gestión sostenible de insumos",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Contrato de suministro de alfalfa con una o varias explotaciones ganaderas",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Contrato de suministro de alfalfa con una o varias empresas fabricantes de productos para la alimentación animal",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name: "Compromiso de entrega de alfalfa a figura asociativa",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Contrato de suministro de alfalfa con una o varias empresas deshidratadoras de forrajes",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Declaración responsable de la empresa deshidratadora de forrajes",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Contrato entre el agricultor y la empresa productora de semilla certificada",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Certificado de la figura asociativa con indicación de los agricultores que comercializan como terceros (tomate)",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Contrato entre el agricultor y la figura asociativa (tomate)",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Contrato suscrito con la industria transformadora (uva pasa)",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Certificado de la figura asociativa con indicación de los agricultores que comercializan como terceros (uva pasa)",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Contrato entre el agricultor y la figura asociativa (uva pasa)",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Declaración responsable del solicitante respecto al cumplimiento de la gestión y fertilización del suelo y/o gestión de plagas y malas hierbas conforme al REGLAMENTO (UE) 2018/848 DEL PARLAMENTO EUROPEO Y DEL CONSEJO de 30 de mayo de 2018 sobre producción ecológica y etiquetado de los productos ecológicos gestión",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Certificado Asociación de cría de razas autóctonas en peligro de extinción",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Justificación exceso de rotación en Producción Integrada de Tabaco",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Acuerdo entre el titular y el joven agricultor según el cual este último compartirá las responsabilidades gerenciales, los resultados económicos de la explotación, los riesgos inherentes a su gestión y las inversiones que se realicen, en una proporción mínima del 50%",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Documento mediante el cual el titular transmita al joven agricultor, al menos, un tercio de su propiedad en los elementos que constituyen su explotación, uso y aprovechamiento en la que continuarán integrados.",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name: "Informe de la vida laboral",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: true,
    },
    {
      document_name: "Plan empresarial",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Documentación acreditativa de haber iniciado el proceso de instalación",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Autorización del socio a la Administración para consultar sus datos de la SS",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Autorización del socio a la Administración para consultar sus datos de la AEAT",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Certificado emitido por técnico competente sobre cumplimiento de los requisitos de la Intervención Apicultura para la Biodiversidad y con el Real Decreto 209/2002 de 22 de febrero de 2002, sobre la Ordenación de las explotaciones apícolas",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name: "Copia de los Dni de todos los herederos en vigor",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Documentación que justifique el cumplimiento de los requisitos de Joven Agricultor o Resolución del servicio competente",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Copia de la Resolución judicial firme que declare su disolución",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Fallecimiento: Certificado de defunción o denuncia de la desaparición, declaración de ausencia o declaración de fallecimiento",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Testamento y declaración de herederos que demuestre el derecho de uso de la explotación",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Documentación de acuerdo de reparto entre los herederos que permita identificar el reparto de la explotación",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Documento de adjudicación o concesión para la realización del aprovechamiento de rastrojeras, barbechos y restos hortofrutícolas en pastos de uso común",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Incapacidad: Certificado del centro gestor de la Seguridad Social sobre incapacidad de larga duración",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name: "Escritura pública de la compraventa de tierras",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Declaración responsable de disponer en la explotación las instalaciones adecuadas para la realización de transformación de la uva",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: true,
      is_validated: false,
    },
    {
      document_name:
        "Contrato de arrendamiento, aparcería o documento privado suscrito por el propietario que le otorgue la capacidad de uso y disfrute de su aprovechamiento, con referencia catastral, liquidado de impuesto y en vigor",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Escritura pública o documento privado liquidado de impuestos del arrendamiento de tierras",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Documentación que acredite que la parcela está a disposición y existe derecho al uso del recinto",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name: "Declaración Responsable de procedencia del tomate",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name: "NIF del socio",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Autorización de socios a la Administración para consultar sus datos de identidad en la Policía",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name: "Comunicaciones al Registro de Explotaciones",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Declaración responsable que justifica la aplicación puntual de herbicidas al tercer año de realización de la práctica de cubiertas vegetales, por imposibilidad de erradicarla por medios mecánicos o mediante ganado",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Certificado de inscripción en el Registro de Operadores de Producción Integrada de Euskadi a fecha de finalización del plazo de modificación de la solicitud de ayuda",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name: "Contrato firmado con un técnico asesor acreditado",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Autorización que permite el uso de montes de utilidad pública para actividades agropecuarias",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
    {
      document_name:
        "Documento que detalla las actuaciones anuales a realizar para gestión sostenible de pastos",
      can_be_attached_to_form: true,
      can_be_uploaded: true,
      is_required: false,
      is_validated: false,
    },
  ];

  const documentListContainer = document.getElementById(
    "documentListContainer"
  );
  const uploadModalElement = document.getElementById("uploadDocumentModal");
  const uploadModal = new bootstrap.Modal(uploadModalElement);
  const documentNameToUploadSpan = document.getElementById(
    "documentNameToUpload"
  );
  const documentIdentifierInput = document.getElementById("documentIdentifier"); // Para saber qué documento se está subiendo

  // --- Inicio: Lógica del Dropzone para el modal ---
  const docDropZone = document.getElementById("documentDropZone");
  const docFileInput = document.getElementById("documentFileInput");
  const docPreviewContainer = document.getElementById(
    "documentFilePreviewContainer"
  );
  const docDropZoneStatus = document.getElementById("documentDropZoneStatus");
  let selectedFileForUpload = null;

  if (docDropZone && docFileInput && docPreviewContainer) {
    docDropZone.addEventListener("click", () => docFileInput.click());
    docFileInput.addEventListener("change", (e) =>
      handleDocFile(e.target.files[0])
    );

    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      docDropZone.addEventListener(eventName, preventDefaults, false);
      document.body.addEventListener(eventName, preventDefaults, false); // Evita que el navegador abra el archivo
    });

    ["dragenter", "dragover"].forEach((eventName) => {
      docDropZone.addEventListener(
        eventName,
        () => docDropZone.classList.add("border-[#1abc9c]", "bg-gray-100"),
        false
      );
    });

    ["dragleave", "drop"].forEach((eventName) => {
      docDropZone.addEventListener(
        eventName,
        () => docDropZone.classList.remove("border-[#1abc9c]", "bg-gray-100"),
        false
      );
    });

    docDropZone.addEventListener(
      "drop",
      (e) => {
        preventDefaults(e);
        const files = e.dataTransfer.files;
        if (files.length > 0) {
          handleDocFile(files[0]); // Solo tomamos el primer archivo para este modal
        }
      },
      false
    );
  }

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function getFileIconClass(fileName) {
    if (!fileName) return "fas fa-file";
    const extension = fileName.split(".").pop().toLowerCase();
    switch (extension) {
      case "pdf":
        return "fas fa-file-pdf text-danger";
      case "doc":
      case "docx":
        return "fas fa-file-word text-primary";
      case "xls":
      case "xlsx":
        return "fas fa-file-excel text-success";
      case "ppt":
      case "pptx":
        return "fas fa-file-powerpoint text-warning";
      case "zip":
      case "rar":
        return "fas fa-file-archive text-secondary";
      case "txt":
        return "fas fa-file-alt text-muted";
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
        return "fas fa-file-image text-info";
      default:
        return "fas fa-file text-secondary";
    }
  }

  function handleDocFile(file) {
    if (!file) return;
    selectedFileForUpload = file; // Guardamos el archivo seleccionado
    docDropZoneStatus.textContent = `Archivo seleccionado: ${file.name}`;
    docDropZoneStatus.style.display = "block";

    docPreviewContainer.innerHTML = ""; // Limpiar vista previa anterior
    const fileSize =
      file.size > 1024 * 1024
        ? (file.size / (1024 * 1024)).toFixed(1) + " MB"
        : (file.size / 1024).toFixed(1) + " KB";
    const iconClass = getFileIconClass(file.name);
    const itemHTML = `
            <div class="file-preview-item d-flex align-items-center justify-content-between p-2 bg-light border rounded mb-2">
                <div>
                    <i class="${iconClass} me-2"></i>
                    <span class="file-name">${file.name}</span>
                    <small class="text-muted ms-2">(${fileSize})</small>
                </div>
                <button type="button" class="btn-close btn-sm remove-doc-preview" aria-label="Quitar"></button>
            </div>`;
    docPreviewContainer.insertAdjacentHTML("beforeend", itemHTML);

    docPreviewContainer
      .querySelector(".remove-doc-preview")
      .addEventListener("click", function () {
        selectedFileForUpload = null;
        docFileInput.value = ""; // Resetear el input file
        docPreviewContainer.innerHTML = "";
        docDropZoneStatus.style.display = "none";
        docDropZoneStatus.textContent = "";
      });
  }
  // --- Fin: Lógica del Dropzone para el modal ---

  function renderDocuments() {
    if (!documentListContainer) return;
    documentListContainer.innerHTML = ""; // Limpiar antes de renderizar

    documentsInfo.forEach((doc, index) => {
      const canBeAttached = doc.can_be_attached_to_form;
      const isRequired = doc.is_required;
      const isValidated = doc.is_validated;
      const canBeUploaded = doc.can_be_uploaded;

      let requiredHtml = isRequired
        ? `<span><i class="fas fa-exclamation-circle text-warning me-1"></i> Requerido</span>`
        : ``;

      let validatedHtml = isValidated
        ? `<i class="fas fa-check-circle text-success ms-2" title="Validado"></i>`
        : ``;

      // Botón de subida
      let uploadButtonHtml = "";
      if (canBeUploaded) {
        uploadButtonHtml = `
                    <button type="button" class="btn btn-outline-primary btn-sm open-upload-modal-btn" 
                            title="Subir archivo para ${doc.document_name}"
                            data-bs-toggle="modal" data-bs-target="#uploadDocumentModal"
                            data-doc-name="${doc.document_name}"
                            data-doc-id="doc_${index}">
                        <i class="fas fa-upload"></i>
                    </button>`;
      }

      const documentElement = `
                <div class="d-flex align-items-center gap-3 border rounded-lg p-3 bg-gray-50">
                    <div class="flex-grow-1">
                        ${doc.document_name}
                        ${validatedHtml}
                        <div class="text-muted small mt-1">
                            ${requiredHtml}
                        </div>
                    </div>
                    ${uploadButtonHtml}
                </div>`;
      documentListContainer.insertAdjacentHTML("beforeend", documentElement);
    });

    // Añadir event listeners a los nuevos botones
    document.querySelectorAll(".open-upload-modal-btn").forEach((button) => {
      button.addEventListener("click", function () {
        const docName = this.dataset.docName;
        const docId = this.dataset.docId; // Un identificador único si lo necesitas

        documentNameToUploadSpan.textContent = docName;
        documentIdentifierInput.value = docId; // Guardar el ID del documento en el form del modal

        // Resetear el formulario del modal
        document.getElementById("uploadDocumentForm").reset();
        selectedFileForUpload = null;
        docFileInput.value = "";
        docPreviewContainer.innerHTML = "";
        docDropZoneStatus.style.display = "none";
        docDropZoneStatus.textContent = "";

        uploadModal.show();
      });
    });
  }

  // Inicializar la carga de documentos
  if (documentsInfo.length > 0) {
    renderDocuments();
  } else {
    if (documentListContainer) {
      documentListContainer.innerHTML =
        '<p class="text-muted">No hay información de documentos disponible.</p>';
    }
  }

  // Manejar el guardado del documento desde el modal
  const saveDocumentButton = document.getElementById("saveDocumentButton");
  if (saveDocumentButton) {
    saveDocumentButton.addEventListener("click", function () {
      const docId = documentIdentifierInput.value;
      const description = document.getElementById("documentDescription").value;
      const observations = document.getElementById(
        "documentObservations"
      ).value;
      const origin = document.querySelector(
        'input[name="documentOrigin"]:checked'
      ).value;

      if (!selectedFileForUpload) {
        alert("Por favor, selecciona un archivo para subir.");
        return;
      }

      // Aquí iría tu lógica para subir el archivo (selectedFileForUpload) y los datos del formulario
      console.log("Guardando documento para:", docId);
      console.log("Descripción:", description);
      console.log("Observaciones:", observations);
      console.log("Origen:", origin);
      console.log(
        "Archivo:",
        selectedFileForUpload.name,
        selectedFileForUpload.size,
        selectedFileForUpload.type
      );

      // Simulación de subida exitosa:
      alert(
        `Documento '${selectedFileForUpload.name}' para '${documentNameToUploadSpan.textContent}' guardado (simulación).`
      );

      // Cambiar el botón de subida del documento
      const buttonElement = document.querySelector(`[data-doc-id="${docId}"]`);
      if (buttonElement) {
        buttonElement.innerHTML = `
                <i class="fas fa-check me-2" title="Subido"></i>Subido`;
        buttonElement.classList.remove("btn-outline-primary");
        buttonElement.classList.add("btn-outline-secondary");
      }
      uploadModal.hide();
      // Resetear el formulario y el archivo seleccionado para la próxima vez
      document.getElementById("uploadDocumentForm").reset();
      selectedFileForUpload = null;
      docFileInput.value = "";
      docPreviewContainer.innerHTML = "";
      docDropZoneStatus.style.display = "none";
    });
  }
});

// Lógica para la búsqueda en formulario y respuesta de IA
document.addEventListener("DOMContentLoaded", function () {
  const formSearchInput = document.getElementById("form-search-input");
  const formSearchResultsDropdown = document.getElementById(
    "form-search-results-dropdown"
  );
  const formSearchHelpText = document.getElementById("form-search-help-text");

  const aiResponseAreaForm = document.getElementById("ai-response-area");
  const aiResponseTextElementForm = document.getElementById(
    "ai-response-text-form"
  );
  const closeAiResponseButtonForm = document.getElementById(
    "close-ai-response-form"
  );
  const aiThinkingIndicatorForm = document.getElementById(
    "ai-thinking-indicator-form"
  );
  const relevantFieldsContainerForm = document.getElementById(
    "relevant-fields-container-form"
  );
  const relevantFieldsTitleForm = document.getElementById(
    "relevant-fields-title-form"
  );

  const pacForm = document.getElementById("pac-form");
  const formNavigationLinksSide = document.querySelectorAll(
    "#form-navigation .nav-link"
  );
  const formSectionsAll = document.querySelectorAll(".form-section");

  let typingTimeoutForm;
  let allIndexedFormFields = [];

  function indexPacFormFields() {
    allIndexedFormFields = [];
    if (!pacForm) return;

    const elements = pacForm.elements;
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (element.id || element.name) {
        let labelText = "";
        let labelElement = null;
        if (element.id) {
          labelElement = pacForm.querySelector(`label[for="${element.id}"]`);
          if (labelElement) {
            labelText = labelElement.textContent.trim();
          }
        }
        // Si no hay label, intentar obtenerlo del legend del fieldset padre si es único
        if (
          !labelText &&
          element.closest("fieldset") &&
          element
            .closest("fieldset")
            .querySelectorAll("input, select, textarea").length === 1
        ) {
          const legend = element.closest("fieldset").querySelector("legend");
          if (legend) labelText = legend.textContent.trim();
        }
        // Si aún no hay labelText y es un checkbox/radio, buscar label hermano o padre
        if (
          !labelText &&
          (element.type === "checkbox" || element.type === "radio")
        ) {
          let current = element.nextElementSibling;
          if (current && current.tagName === "LABEL")
            labelText = current.textContent.trim();
          else if (
            element.parentElement &&
            element.parentElement.tagName === "LABEL"
          )
            labelText = element.parentElement.textContent.trim();
          else if (element.parentElement.closest("label"))
            labelText = element.parentElement
              .closest("label")
              .textContent.trim();
        }
        if (!labelText)
          labelText = element.placeholder || element.name || element.id;

        let parentSectionElement = element.closest(".form-section");
        let sectionId = null;
        if (parentSectionElement && parentSectionElement.id) {
          sectionId = parentSectionElement.id.replace("section-", "");
        }

        allIndexedFormFields.push({
          id: element.id,
          name: element.name,
          type: element.type,
          labelText: labelText,
          element: element,
          labelElement: labelElement,
          sectionId: sectionId,
        });
      }
    }
  }
  if (pacForm) {
    indexPacFormFields(); // Indexar al cargar
    // Considerar re-indexar si el formulario cambia dinámicamente (ej. añadir recintos)
    // new MutationObserver(indexPacFormFields).observe(pacForm, { childList: true, subtree: true });
  }

  function showFormSearchDropdown() {
    if (formSearchResultsDropdown)
      formSearchResultsDropdown.classList.add("show");
    if (formSearchInput) formSearchInput.setAttribute("aria-expanded", "true");
    if (formSearchHelpText) formSearchHelpText.classList.add("d-none");
  }

  function hideFormSearchDropdown() {
    if (formSearchResultsDropdown)
      formSearchResultsDropdown.classList.remove("show");
    if (formSearchInput) formSearchInput.setAttribute("aria-expanded", "false");
    if (
      formSearchInput &&
      !formSearchInput.value.trim() &&
      aiResponseAreaForm &&
      aiResponseAreaForm.classList.contains("d-none")
    ) {
      if (formSearchHelpText) formSearchHelpText.classList.remove("d-none");
    }
  }

  function typeWriterForForm(text, element, speed = 5, callback) {
    clearTimeout(typingTimeoutForm);
    if (!element) return;
    element.innerHTML = "";
    element.classList.add("typing");
    let i = 0;
    function type() {
      if (i < text.length) {
        if (text.charAt(i) === "\n") {
          element.innerHTML += "<br>";
        } else if (text.charAt(i) === " ") {
          element.innerHTML += "&nbsp;";
        } else {
          element.innerHTML += text.charAt(i);
        }
        i++;
        typingTimeoutForm = setTimeout(type, speed);
      } else {
        element.classList.remove("typing");
        if (callback) callback();
      }
    }
    type();
  }

  function clearAllAiHighlightsFromForm() {
    if (!pacForm) return;
    const highlightedFields = pacForm.querySelectorAll(
      ".highlighted-by-ai-click-form-field"
    );
    highlightedFields.forEach((el) =>
      el.classList.remove("highlighted-by-ai-click-form-field")
    );

    const highlightedLabels = pacForm.querySelectorAll(
      ".highlighted-by-ai-click-form-label"
    );
    highlightedLabels.forEach((el) =>
      el.classList.remove("highlighted-by-ai-click-form-label")
    );
  }

  // Adaptación de la función showSection de pac-edit.html
  function navigateToFormSection(sectionIdToShow) {
    let sectionFound = false;
    formSectionsAll.forEach((section) => {
      if (section.id === "section-" + sectionIdToShow) {
        section.classList.add("active");
        sectionFound = true;
      } else {
        section.classList.remove("active");
      }
    });

    formNavigationLinksSide.forEach((link) => {
      if (link.dataset.section === sectionIdToShow) {
        link.classList.add("active-nav-link"); // Usa la clase de tu app para el link activo
        // Scroll al link en la navegación lateral si está fuera de vista
        link.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } else {
        link.classList.remove("active-nav-link");
      }
    });
    if (sectionFound) {
      const mainFormArea = document.querySelector(
        "div.main-content main.w-full"
      ); // Selector más específico para el panel principal del form
      if (mainFormArea) mainFormArea.scrollTop = 0; // Scroll al inicio del panel del formulario
    }
    return sectionFound;
  }

  function findAndDisplayRelevantFormFields(query) {
    if (!relevantFieldsContainerForm || !relevantFieldsTitleForm) return;
    relevantFieldsContainerForm.innerHTML = "";
    relevantFieldsTitleForm.classList.add("d-none");

    const queryWords = query
      .toLowerCase()
      .split(/\s+/)
      .filter((w) => w.length > 2);
    let foundFieldsCount = 0;
    const MAX_FIELDS_TO_SHOW = 6;
    const displayedFields = new Set();

    allIndexedFormFields.forEach((fieldInfo) => {
      if (foundFieldsCount >= MAX_FIELDS_TO_SHOW || !fieldInfo.id) return; // Solo campos con ID para el target
      if (displayedFields.has(fieldInfo.id)) return;

      const fieldSearchableText =
        `${fieldInfo.labelText} ${fieldInfo.name} ${fieldInfo.id} ${fieldInfo.sectionId}`.toLowerCase();

      let matchScore = 0;
      queryWords.forEach((word) => {
        if (fieldInfo.labelText.toLowerCase().includes(word)) matchScore += 3; // Mayor peso a la etiqueta
        if (fieldInfo.id.toLowerCase().includes(word)) matchScore += 2;
        if (fieldInfo.name && fieldInfo.name.toLowerCase().includes(word))
          matchScore += 1;
        if (
          fieldInfo.sectionId &&
          fieldInfo.sectionId.replace("-", " ").toLowerCase().includes(word)
        )
          matchScore += 1;
      });

      if (matchScore > 0) {
        foundFieldsCount++;
        displayedFields.add(fieldInfo.id);
        const fieldExtractDiv = document.createElement("div");
        fieldExtractDiv.classList.add(
          "relevant-field-extract",
          "p-3",
          "mb-2",
          "rounded",
          "small"
        ); // Aumentado padding
        fieldExtractDiv.setAttribute("data-target-field-id", fieldInfo.id);
        if (fieldInfo.sectionId)
          fieldExtractDiv.setAttribute(
            "data-target-section-id",
            fieldInfo.sectionId
          );

        let displayText = fieldInfo.labelText || fieldInfo.name || fieldInfo.id;
        // Resaltar palabras de la query en el texto del extracto
        queryWords.forEach((word) => {
          const regex = new RegExp(
            "(" +
              word.replace(
                '/[.*+?^<span class="math-inline">{}()|[\\]\\\\]/g',
                "\\\\</span>&"
              ) +
              ")",
            "gi"
          );
          displayText = displayText.replace(regex, "<mark>$1</mark>");
        });

        const sectionName = fieldInfo.sectionId
          ? fieldInfo.sectionId.replace(/-/g, " ")
          : "Formulario Principal";
        const capitalizedSectionName =
          sectionName.charAt(0).toUpperCase() + sectionName.slice(1);

        fieldExtractDiv.innerHTML = `
                    <p class="mb-1 font-medium">${displayText}</p>
                    <small class="text-muted"><i>Sección: ${capitalizedSectionName}</i></small>
                `;

        fieldExtractDiv.addEventListener("click", function () {
          clearAllAiHighlightsFromForm();
          const targetFieldId = this.getAttribute("data-target-field-id");
          const targetSectionId = this.getAttribute("data-target-section-id");
          const targetFieldObject = allIndexedFormFields.find(
            (f) => f.id === targetFieldId
          );

          if (targetFieldObject && targetFieldObject.element) {
            if (targetSectionId) {
              navigateToFormSection(targetSectionId);
            }
            // Pequeña demora para asegurar que la sección es visible, especialmente si se cambió
            setTimeout(
              () => {
                targetFieldObject.element.classList.add(
                  "highlighted-by-ai-click-form-field"
                );
                if (targetFieldObject.labelElement) {
                  targetFieldObject.labelElement.classList.add(
                    "highlighted-by-ai-click-form-label"
                  );
                } else {
                  // Intentar encontrar label de nuevo si no estaba en el index
                  const label = pacForm.querySelector(
                    `label[for="${targetFieldId}"]`
                  );
                  if (label)
                    label.classList.add("highlighted-by-ai-click-form-label");
                }
                targetFieldObject.element.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
                if (
                  typeof targetFieldObject.element.focus === "function" &&
                  !["button", "submit", "reset"].includes(
                    targetFieldObject.element.type
                  )
                ) {
                  // No enfocar botones
                  targetFieldObject.element.focus({ preventScroll: true });
                }
              },
              targetSectionId ? 150 : 50
            ); // Mayor demora si se cambió de sección
          }
        });
        relevantFieldsContainerForm.appendChild(fieldExtractDiv);
      }
    });

    if (foundFieldsCount > 0) {
      relevantFieldsTitleForm.classList.remove("d-none");
    } else {
      relevantFieldsContainerForm.innerHTML =
        '<p class="text-muted small fst-italic px-2">No se encontraron campos que coincidan directamente con tu consulta en el formulario.</p>';
    }
  }

  function handleAiQueryForForm(query) {
    hideFormSearchDropdown();
    if (aiResponseTextElementForm) aiResponseTextElementForm.innerHTML = "";
    if (aiResponseTextElementForm)
      aiResponseTextElementForm.classList.remove("typing");
    if (relevantFieldsContainerForm) relevantFieldsContainerForm.innerHTML = "";
    if (relevantFieldsTitleForm)
      relevantFieldsTitleForm.classList.add("d-none");
    clearAllAiHighlightsFromForm();

    if (aiThinkingIndicatorForm)
      aiThinkingIndicatorForm.classList.remove("d-none");
    if (aiResponseAreaForm) aiResponseAreaForm.classList.remove("d-none");

    aiResponseAreaForm.scrollIntoView({ behavior: "smooth", block: "start" }); // 'start' para que el área de IA quede arriba

    console.log(
      `Simulando consulta a la IA sobre: "${query}" en el formulario PAC.`
    );
    // Simulación de respuesta de IA
    setTimeout(() => {
      if (aiThinkingIndicatorForm)
        aiThinkingIndicatorForm.classList.add("d-none");

      let simulatedResponse = "";
      if (query.toLowerCase().includes("perfil")) {
        simulatedResponse = `Perfil de la Explotación Agraria: FRUTICOLA CASTELNOVO SL\n
1. Resumen Ejecutivo
FRUTICOLA CASTELNOVO SL es una sociedad limitada de gran dimensión, con una actividad económica agraria consolidada y un enfoque productivo mixto que combina la ganadería extensiva (bovino y ovino/caprino de carne) con cultivos herbáceos (avena) y leñosos (almendro). La explotación, gestionada por un gerente con amplia experiencia práctica desde 2018, muestra un claro compromiso con la sostenibilidad medioambiental a través de la solicitud de ecoregímenes como el pastoreo extensivo y las cubiertas vegetales. A pesar de su tamaño y volumen de ingresos, mantiene un enfoque administrativo tradicional, prefiriendo no utilizar herramientas digitales de gestión de la explotación ni la comunicación electrónica con la Administración.\n
2. Identificación y Estructura
- Razón Social: FRUTICOLA CASTELNOVO SL
- CIF: B28209658
- Tipo de Entidad: Persona jurídica (Sociedad Limitada).
- Ubicación de la Gestión: Zona de Badajoz, Extremadura. Las parcelas se distribuyen principalmente en los municipios de Casas de Don Pedro y Navalvillar de Pela.
- Gestión: La explotación es gestionada por Gonzalo Hernando Arcal desde el año 2018, quien cuenta con experiencia práctica agraria y ha realizado cursos de perfeccionamiento recientes.\n
3. Dimensión y Orientación Productiva
La explotación gestiona una superficie total declarada de 512,14 hectáreas, distribuidas de la siguiente manera:
- Cultivos Herbáceos (Secano y Regadío): 117,14 ha
  - Avena: 105,74 ha. Es el cultivo herbáceo principal, destinado a la producción de semilla certificada y procesamiento industrial. Combina parcelas de secano y regadío.
  - Barbecho Tradicional: 11,4 ha. Se localizan principalmente en parcelas de regadío.
- Cultivos Leñosos (Frutos Secos): 40,61 ha
  - Almendro (var. Avijor): 40,61 ha. Se trata de plantaciones establecidas mayoritariamente en 2022, tanto en secano como en regadío, lo que indica una inversión y diversificación reciente.
- Pastos: 354,39 ha
  - Pastos Permanentes (>5 años): 333,51 ha. Base principal para la ganadería extensiva.
  - Pastos Temporales (<5 años): 20,88 ha.
La mayoría de la superficie es en propiedad (437,31 ha), complementada con una parte significativa en arrendamiento (74,83 ha).\n
4. Perfil Económico y Financiero
La empresa presenta una sólida salud financiera con un volumen de ingresos agrarios notable y creciente:
- Ingresos Agrarios 2023: 300.993,39 €
- Ingresos Agrarios 2022: 101.346,40 €
- Ingresos Agrarios 2021: 276.385,50 €
Los costes laborales en 2023 ascendieron a 77.364,00 €, lo que refleja una actividad que requiere una importante mano de obra. La empresa está al corriente de sus obligaciones con la AEAT y la Seguridad Social.\n
5. Estrategia de Ayudas y Prácticas Agrarias (Ecoregímenes PAC 2025)
La estrategia de solicitud de ayudas revela una orientación hacia la sostenibilidad y el aprovechamiento de los recursos naturales:
- Ayudas Básicas y Ganaderas:
  - Solicita la Ayuda Básica a la Renta (ABRS) y la Ayuda Redistributiva, estándar para la mayoría de las explotaciones.
  - Confirma su vocación ganadera solicitando las ayudas para ganaderos extensivos de vacuno de carne y para ganaderos extensivos y semiextensivos de ovino y caprino de carne.
- Ecoregímenes (Prácticas Sostenibles):
  - Pastoreo Extensivo: Solicita la ayuda, coherente con su gran base de pastos y su actividad ganadera declarada.
  - Cubiertas Vegetales en Cultivos Leñosos: Solicita esta ayuda para sus parcelas de almendro, demostrando un enfoque en la conservación del suelo y la biodiversidad.
  - Espacios de Biodiversidad: La solicitud de esta ayuda indica que dedica parte de sus tierras de cultivo y cultivos permanentes a la conservación del entorno.
- Declaraciones Adicionales de Sostenibilidad:
  - Declara realizar venta directa y/o en canal corto.
  - Afirma no utilizar productos fitosanitarios sobre las cubiertas vegetales, reforzando su compromiso con las prácticas sostenibles.
  - Parte de su producción se destina al autoconsumo del ganado de la propia explotación.`;
      } else {
        simulatedResponse = `En relación a tu consulta sobre "${query}" para el formulario PAC, aquí tienes información relevante:`;
      }

      typeWriterForForm(simulatedResponse, aiResponseTextElementForm, 5, () => {
        findAndDisplayRelevantFormFields(query); // Mostrar campos relevantes después de la respuesta
      });
    }, 1200); // Reducido tiempo de simulación
  }

  if (closeAiResponseButtonForm) {
    closeAiResponseButtonForm.addEventListener("click", function () {
      clearTimeout(typingTimeoutForm);
      if (formSearchInput) formSearchInput.value = "";

      if (aiResponseAreaForm) aiResponseAreaForm.classList.add("d-none");
      if (aiResponseTextElementForm) aiResponseTextElementForm.innerHTML = "";
      if (aiResponseTextElementForm)
        aiResponseTextElementForm.classList.remove("typing");
      if (relevantFieldsContainerForm)
        relevantFieldsContainerForm.innerHTML = "";
      if (relevantFieldsTitleForm)
        relevantFieldsTitleForm.classList.add("d-none");

      clearAllAiHighlightsFromForm();
      hideFormSearchDropdown();
      if (formSearchHelpText && pacForm)
        formSearchHelpText.classList.remove("d-none");
      if (formSearchInput) formSearchInput.focus();
    });
  }

  function populateFormSearchDropdown(query) {
    if (
      !formSearchResultsDropdown ||
      !pacForm ||
      (aiResponseAreaForm && !aiResponseAreaForm.classList.contains("d-none"))
    ) {
      hideFormSearchDropdown();
      return;
    }
    formSearchResultsDropdown.innerHTML = "";
    if (!query) {
      hideFormSearchDropdown();
      return;
    }

    let hasResults = false;
    const queryLowerCase = query.toLowerCase();
    const uniqueSuggestions = new Map(); // Usar Map para asociar sugerencia con info del campo
    const MAX_SUGGESTIONS_DROPDOWN = 5;

    allIndexedFormFields.forEach((fieldInfo) => {
      if (uniqueSuggestions.size >= MAX_SUGGESTIONS_DROPDOWN) return;
      let suggestionText = null;
      let match = false;

      if (
        fieldInfo.labelText &&
        fieldInfo.labelText.toLowerCase().includes(queryLowerCase)
      ) {
        suggestionText = fieldInfo.labelText;
        match = true;
      } else if (
        fieldInfo.id &&
        fieldInfo.id.toLowerCase().includes(queryLowerCase)
      ) {
        suggestionText = fieldInfo.labelText || fieldInfo.id;
        match = true;
      } else if (
        fieldInfo.name &&
        fieldInfo.name.toLowerCase().includes(queryLowerCase)
      ) {
        suggestionText = fieldInfo.labelText || fieldInfo.name;
        match = true;
      }

      if (
        match &&
        suggestionText &&
        !uniqueSuggestions.has(suggestionText.toLowerCase())
      ) {
        uniqueSuggestions.set(suggestionText.toLowerCase(), {
          text: suggestionText,
          field: fieldInfo,
        });
      }
    });

    // Palabras clave generales adicionales (no directamente ligadas a un campo, pero pueden iniciar una búsqueda IA)
    const generalKeywords = [
      "Ayuda jóvenes",
      "Ecorregímenes",
      "Datos Fiscales",
      "Representante Legal",
      "Condicionalidad",
      "SIGPAC",
    ];
    generalKeywords.forEach((keyword) => {
      if (uniqueSuggestions.size >= MAX_SUGGESTIONS_DROPDOWN) return;
      if (
        keyword.toLowerCase().includes(queryLowerCase) &&
        !uniqueSuggestions.has(keyword.toLowerCase())
      ) {
        uniqueSuggestions.set(keyword.toLowerCase(), {
          text: keyword,
          field: null,
        }); // field: null para keywords generales
      }
    });

    uniqueSuggestions.forEach((suggestion) => {
      hasResults = true;
      const item = document.createElement("a");
      item.classList.add("dropdown-item");
      item.href = "#";
      item.innerHTML = `<i class="fas fa-search me-2 text-muted"></i> "${suggestion.text.replace(
        new RegExp(
          "(" + query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")",
          "gi"
        ),
        '<strong class="text-primary">$1</strong>'
      )}"`;

      item.addEventListener("click", function (e) {
        e.preventDefault();
        if (formSearchInput) formSearchInput.value = suggestion.text;
        clearAllAiHighlightsFromForm();

        if (suggestion.field && suggestion.field.element) {
          // Si la sugerencia está ligada a un campo específico
          const targetField = suggestion.field;
          if (targetField.sectionId) {
            navigateToFormSection(targetField.sectionId);
          }
          setTimeout(
            () => {
              targetField.element.classList.add(
                "highlighted-by-ai-click-form-field"
              );
              if (targetField.labelElement)
                targetField.labelElement.classList.add(
                  "highlighted-by-ai-click-form-label"
                );
              else {
                const label = pacForm.querySelector(
                  `label[for="${targetField.id}"]`
                );
                if (label)
                  label.classList.add("highlighted-by-ai-click-form-label");
              }

              targetField.element.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
              if (
                typeof targetField.element.focus === "function" &&
                !["button", "submit", "reset"].includes(
                  targetField.element.type
                )
              ) {
                targetField.element.focus({ preventScroll: true });
              }
            },
            targetField.sectionId ? 150 : 50
          );
        } else {
          // Si es una keyword general, podríamos directamente llamar a la IA, o dejar que el usuario pulse enter/botón IA
          // Por ahora, solo rellena el input, el usuario decidirá si pregunta a la IA.
        }
        hideFormSearchDropdown();
      });
      if (formSearchResultsDropdown)
        formSearchResultsDropdown.appendChild(item);
    });

    if (
      formSearchResultsDropdown &&
      formSearchResultsDropdown.children.length > 0
    ) {
      // Solo añadir IA si hay alguna sugerencia
      const divider = document.createElement("hr");
      divider.classList.add("dropdown-divider", "my-1");
      formSearchResultsDropdown.appendChild(divider);

      const aiOption = document.createElement("a");
      aiOption.classList.add("dropdown-item", "fw-bold"); // Más destacado
      aiOption.href = "#";
      aiOption.id = "ai-ask-option-button-form";
      aiOption.innerHTML = `<i class="fas fa-magic me-2 text-info"></i> Preguntar a la IA sobre: "<strong>${query}</strong>"`;
      aiOption.addEventListener("click", function (e) {
        e.preventDefault();
        handleAiQueryForForm(query); // Usar la query actual del input
      });
      formSearchResultsDropdown.appendChild(aiOption);
      showFormSearchDropdown();
    } else if (!hasResults) {
      // Si no hay ninguna sugerencia pero el usuario escribió algo
      const aiOption = document.createElement("a");
      aiOption.classList.add("dropdown-item", "fw-bold");
      aiOption.href = "#";
      aiOption.id = "ai-ask-option-button-form";
      aiOption.innerHTML = `<i class="fas fa-magic me-2 text-info"></i> Preguntar a la IA sobre: "<strong>${query}</strong>"`;
      aiOption.addEventListener("click", function (e) {
        e.preventDefault();
        handleAiQueryForForm(query);
      });
      if (formSearchResultsDropdown) {
        formSearchResultsDropdown.appendChild(aiOption);
        showFormSearchDropdown();
      }
    } else {
      hideFormSearchDropdown();
    }
  }

  if (formSearchInput) {
    formSearchInput.addEventListener("input", function () {
      const query = formSearchInput.value.trim();
      if (query.length > 1) {
        // Empezar a buscar con al menos 2 caracteres
        populateFormSearchDropdown(query);
      } else {
        hideFormSearchDropdown();
        if (
          aiResponseAreaForm &&
          aiResponseAreaForm.classList.contains("d-none")
        ) {
          clearAllAiHighlightsFromForm();
        }
      }
    });

    formSearchInput.addEventListener("focus", function () {
      const query = formSearchInput.value.trim();
      if (
        aiResponseAreaForm &&
        aiResponseAreaForm.classList.contains("d-none")
      ) {
        // Solo mostrar si la IA no está activa
        if (query.length > 1) {
          populateFormSearchDropdown(query);
        } else if (formSearchHelpText && pacForm) {
          formSearchHelpText.classList.remove("d-none");
        }
      }
    });

    formSearchInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault(); // Evitar submit del formulario si la búsqueda está dentro de <form>
        const query = formSearchInput.value.trim();
        if (query) {
          // Si hay un dropdown visible y un item "Preguntar a la IA" podríamos simular su click
          // o directamente llamar a handleAiQueryForForm
          const aiButton = formSearchResultsDropdown.querySelector(
            "#ai-ask-option-button-form"
          );
          if (
            formSearchResultsDropdown.classList.contains("show") &&
            aiButton
          ) {
            aiButton.click();
          } else {
            handleAiQueryForForm(query);
          }
        }
      }
    });
  }

  document.addEventListener("click", function (event) {
    const searchContainer = document.querySelector(".search-bar-container");
    const isClickInsideSearchContainer = searchContainer
      ? searchContainer.contains(event.target)
      : false;
    // No cerramos el panel de IA al hacer clic fuera, solo el dropdown
    if (!isClickInsideSearchContainer) {
      hideFormSearchDropdown();
    }
  });

  // Inicialización de visibilidad del texto de ayuda
  if (!pacForm) {
    if (formSearchHelpText) formSearchHelpText.classList.add("d-none");
    if (formSearchInput) formSearchInput.disabled = true;
  } else {
    if (
      formSearchInput &&
      !formSearchInput.value.trim() &&
      aiResponseAreaForm &&
      aiResponseAreaForm.classList.contains("d-none")
    ) {
      if (formSearchHelpText) formSearchHelpText.classList.remove("d-none");
    } else if (formSearchHelpText) {
      formSearchHelpText.classList.add("d-none");
    }
  }
});

// --- AI PANEL FUNCTIONALITY ---

// AI Panel Management
function toggleAiPanel() {
  const aiPanel = document.getElementById("aiPanel");
  if (aiPanel) aiPanel.classList.toggle("translate-x-full");
}

// AI Function Switching
function switchAiFunction(functionName) {
  // Hide all function contents
  const functionContents = document.querySelectorAll(".ai-function-content");
  functionContents.forEach((content) => content.classList.remove("active"));

  // Remove active class from all buttons
  const functionButtons = document.querySelectorAll(".ai-function-btn");
  functionButtons.forEach((button) => button.classList.remove("active"));

  // Show selected function content
  const selectedContent = document.getElementById(`aiFunction-${functionName}`);
  if (selectedContent) {
    selectedContent.classList.add("active");
  }

  // Add active class to selected button
  const selectedButton = document.querySelector(
    `[data-function="${functionName}"]`
  );
  if (selectedButton) {
    selectedButton.classList.add("active");
  }
}

// Customer data for this PAC form
const customerData = {
  id: "USR001",
  nombreCompleto: "FRUTICOLA CASTELNOVO S.L.",
  nifCif: "B12345678",
  email: "fruticolacastelnovo@example.com",
  telefono: "600123456",
  direccion: "Calle Falsa, 123",
  localidad: "Pueblo Nuevo",
  provincia: "Badajoz",
  codigoPostal: "06001",
  tipoCliente: "Agricultor Individual",
  fechaAlta: "2023-01-15",
  estado: "Activo",
  descripcion:
    "FRUTÍCOLA CASTELNOVO SL es una sociedad limitada de gran dimensión, con una actividad económica agraria consolidada y un enfoque productivo mixto que combina la ganadería extensiva (bovino y ovino/caprino de carne) con cultivos herbáceos (avena) y leñosos (almendro).",
  pacs: [
    {
      idPac: "PAC2025-001",
      campana: "2025",
      fechaCreacion: "2025-01-20",
      estado: "Enviada",
    },
    {
      idPac: "PAC2024-005",
      campana: "2024",
      fechaCreacion: "2024-01-15",
      estado: "Completada",
    },
  ],
  documentos: [
    {
      id: "CLIDOC001",
      nombre: "Escrituras_Castelnovo.pdf",
      tipo: "Identificación",
      fechaSubida: "2023-01-15",
      tamano: "1.2MB",
      url: "#",
    },
    {
      id: "CLIDOC002",
      nombre: "Contrato Arrendamiento Finca_ElRobledal.pdf",
      tipo: "Contrato",
      fechaSubida: "2023-01-20",
      tamano: "800KB",
      url: "#",
    },
    {
      id: "PACDOC001",
      nombre: "Solicitud_PAC2025_FruticolaCastelnovo.pdf",
      tipo: "Solicitud Firmada",
      fechaSubida: "2025-01-20",
      tamano: "2.5MB",
      url: "#",
    },
    {
      id: "PACDOC002",
      nombre: "Anexo_Ayudas_Agroambientales.pdf",
      tipo: "Anexo",
      fechaSubida: "2025-01-20",
      tamano: "1.8MB",
      url: "#",
    },
  ],
  recomendaciones: [
    {
      texto: "Revisar posible nueva ayuda para jóvenes agricultores.",
      icono: "fas fa-info-circle text-info",
    },
    {
      texto:
        "Planificar siembra directa para próxima campaña para mejora de puntuación eco-régimen.",
      icono: "fas fa-leaf text-success",
    },
  ],
  notas: [
    {
      id: "N001",
      fecha: "2025-04-10",
      autor: "Ana G.",
      texto:
        "Cliente contactó para preguntar sobre la nueva normativa de eco-regímenes. Se le envió documentación.",
    },
    {
      id: "N002",
      fecha: "2025-02-15",
      autor: "Carlos M.",
      texto: "Revisión de la PAC 2025. Todo correcto. Pendiente de firma.",
    },
  ],
};

// Mock AI Analysis Results
const mockAiAnalysisResults = {
  "Solicitud_PAC2025_Ejemplo.pdf": {
    detectedFields: [
      {
        fieldId: "sol_nombre_razon",
        label: "Nombre/Razón Social",
        currentValue: "FRUTICOLA CASTELNOVO SL",
        detectedValue: "FRUTICOLA CASTELNOVO SOCIEDAD LIMITADA",
        confidence: 95,
        section: "datos-generales",
      },
      {
        fieldId: "sol_telefono",
        label: "Teléfono",
        currentValue: "924856096",
        detectedValue: "924856097",
        confidence: 88,
        section: "datos-generales",
      },
      {
        fieldId: "not_cp",
        label: "Código Postal",
        currentValue: "06700",
        detectedValue: "06701",
        confidence: 92,
        section: "datos-generales",
      },
      {
        fieldId: "fiscal_ingresos_agrarios_2023",
        label: "Ingresos Agrarios 2023",
        currentValue: "13624150.7",
        detectedValue: "13724150.7",
        confidence: 85,
        section: "datos-generales",
      },
    ],
  },
};

// AI Upload Functionality
function handleAiFileUpload(files) {
  const aiUploadStatus = document.getElementById("aiUploadStatus");
  const aiDetectedFieldsModal = document.getElementById(
    "aiDetectedFieldsModal"
  );
  const newDocumentNotification = document.getElementById(
    "newDocumentNotification"
  );
  const newDocumentName = document.getElementById("newDocumentName");

  if (!files || files.length === 0) return;

  // Add the uploaded document to customer's document list
  const file = files[0];
  const newDocumentId = `NEWDOC${Date.now()}`;
  const newDocument = {
    id: newDocumentId,
    nombre: file.name,
    tipo: "Documento Subido",
    fechaSubida: new Date().toISOString().split("T")[0],
    tamano:
      file.size > 1024 * 1024
        ? (file.size / (1024 * 1024)).toFixed(1) + "MB"
        : (file.size / 1024).toFixed(1) + "KB",
    url: "#",
  };

  // Add to customer data
  customerData.documentos.push(newDocument);

  // Update the existing documents list in the AI panel
  updateExistingDocumentsList();

  // Show new document notification
  if (newDocumentNotification && newDocumentName) {
    newDocumentName.textContent = files[0].name;
    newDocumentNotification.style.display = "block";

    // Hide notification after 5 seconds
    setTimeout(() => {
      newDocumentNotification.style.display = "none";
    }, 5000);
  }

  // Show upload status
  aiUploadStatus.style.display = "block";

  // Simulate upload and analysis
  setTimeout(() => {
    // Hide upload status
    aiUploadStatus.style.display = "none";

    // Get mock results for the first file
    const fileName = files[0].name;
    const mockResults = mockAiAnalysisResults["Solicitud_PAC2025_Ejemplo.pdf"];

    if (mockResults) {
      // Show detected fields in modal
      aiDetectedFieldsModal.innerHTML = "";

      mockResults.detectedFields.forEach((field) => {
        const fieldItem = document.createElement("div");
        fieldItem.className = "ai-field-item";
        fieldItem.innerHTML = `
          <div class="ai-field-info">
            <div class="ai-field-label">${field.label}</div>
            <div class="ai-field-value">
              <span class="text-muted">Actual:</span> ${
                field.currentValue || "Vacío"
              } 
              <span class="text-primary ms-2">→ Detectado:</span> ${
                field.detectedValue
              }
            </div>
          </div>
          <div class="ai-field-confidence">${field.confidence}%</div>
        `;
        aiDetectedFieldsModal.appendChild(fieldItem);
      });

      // Show results modal
      const modal = new bootstrap.Modal(
        document.getElementById("aiUploadResultsModal")
      );
      modal.show();

      // Store results for applying changes
      window.currentAiResults = mockResults;
    }
  }, 3000);
}

// Analyze existing document function
function analyzeExistingDocument(documentId, documentName) {
  const aiUploadStatus = document.getElementById("aiUploadStatus");
  const aiDetectedFieldsModal = document.getElementById(
    "aiDetectedFieldsModal"
  );

  // Show upload status
  aiUploadStatus.style.display = "block";

  // Update status text for existing document
  const statusText = document.querySelector(".ai-status-text");
  if (statusText) {
    statusText.textContent = `Analizando documento: ${documentName}...`;
  }

  // Simulate analysis of existing document
  setTimeout(() => {
    // Hide upload status
    aiUploadStatus.style.display = "none";

    // Reset status text
    if (statusText) {
      statusText.textContent = "Subiendo y analizando documento...";
    }

    // Get mock results based on document type
    let mockResults;
    if (documentId === "PACDOC001") {
      // Results for the main PAC document
      mockResults = mockAiAnalysisResults["Solicitud_PAC2025_Ejemplo.pdf"];
    } else if (documentId === "CLIDOC001") {
      // Results for identification document
      mockResults = {
        detectedFields: [
          {
            fieldId: "sol_nombre_razon",
            label: "Nombre/Razón Social",
            currentValue: "FRUTICOLA CASTELNOVO SL",
            detectedValue: "FRUTICOLA CASTELNOVO S.L.",
            confidence: 98,
            section: "datos-generales",
          },
          {
            fieldId: "sol_cif_nif",
            label: "CIF/NIF",
            currentValue: "B06258511",
            detectedValue: "B06258511",
            confidence: 100,
            section: "datos-generales",
          },
        ],
      };
    } else if (documentId === "CLIDOC002") {
      // Results for contract document
      mockResults = {
        detectedFields: [
          {
            fieldId: "not_nombre_via",
            label: "Nombre Vía",
            currentValue: "NAC 430",
            detectedValue: "Carretera Nacional 430",
            confidence: 95,
            section: "datos-generales",
          },
          {
            fieldId: "not_numero",
            label: "Número",
            currentValue: "115",
            detectedValue: "115",
            confidence: 100,
            section: "datos-generales",
          },
        ],
      };
    } else {
      // Default results for other documents
      mockResults = {
        detectedFields: [
          {
            fieldId: "sol_email",
            label: "Email",
            currentValue: "torrado@tany.es",
            detectedValue: "info@fruticolacastelnovo.es",
            confidence: 92,
            section: "datos-generales",
          },
        ],
      };
    }

    if (mockResults) {
      // Show detected fields in modal
      aiDetectedFieldsModal.innerHTML = "";

      mockResults.detectedFields.forEach((field) => {
        const fieldItem = document.createElement("div");
        fieldItem.className = "ai-field-item";
        fieldItem.innerHTML = `
          <div class="ai-field-info">
            <div class="ai-field-label">${field.label}</div>
            <div class="ai-field-value">
              <span class="text-muted">Actual:</span> ${
                field.currentValue || "Vacío"
              } 
              <span class="text-primary ms-2">→ Detectado:</span> ${
                field.detectedValue
              }
            </div>
          </div>
          <div class="ai-field-confidence">${field.confidence}%</div>
        `;
        aiDetectedFieldsModal.appendChild(fieldItem);
      });

      // Show results modal
      const modal = new bootstrap.Modal(
        document.getElementById("aiUploadResultsModal")
      );
      modal.show();

      // Store results for applying changes
      window.currentAiResults = mockResults;
    }
  }, 2500);
}

// Function to update the existing documents list in the AI panel
function updateExistingDocumentsList() {
  const documentList = document.querySelector(".ai-document-list");
  if (!documentList) {
    console.warn("AI document list container not found");
    return;
  }

  // Clear existing list
  documentList.innerHTML = "";

  console.log(
    "Updating documents list with",
    customerData.documentos.length,
    "documents"
  );

  // Populate with customer documents
  customerData.documentos.forEach((doc) => {
    const documentItem = document.createElement("div");
    documentItem.className = "ai-document-item";
    documentItem.setAttribute("data-document-id", doc.id);

    documentItem.innerHTML = `
      <div class="ai-document-info">
        <div class="ai-document-name">${doc.nombre}</div>
        <div class="ai-document-meta">
          <span class="ai-document-type">${doc.tipo}</span>
          <span class="ai-document-date">${formatDate(doc.fechaSubida)}</span>
          <span class="ai-document-size">${doc.tamano}</span>
        </div>
      </div>
      <button class="ai-document-analyze-btn">
        <i class="fas fa-magic"></i>
        Analizar
      </button>
    `;

    documentList.appendChild(documentItem);
  });

  // Add event listeners to new analyze buttons
  const analyzeButtons = documentList.querySelectorAll(
    ".ai-document-analyze-btn"
  );
  analyzeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const documentItem = this.closest(".ai-document-item");
      const documentId = documentItem.dataset.documentId;
      const documentName =
        documentItem.querySelector(".ai-document-name").textContent;

      analyzeExistingDocument(documentId, documentName);
    });
  });
}

// Helper function to format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

// Apply AI detected changes
function applyAiChanges() {
  if (!window.currentAiResults) return;

  const results = window.currentAiResults;
  let appliedChanges = 0;

  results.detectedFields.forEach((field) => {
    const fieldElement = document.getElementById(field.fieldId);
    if (fieldElement) {
      fieldElement.value = field.detectedValue;
      fieldElement.classList.add("campo-modificado-historial");
      appliedChanges++;
    }
  });

  if (appliedChanges > 0) {
    // Show success message
    const successMsg = document.createElement("div");
    successMsg.className = "alert alert-success alert-dismissible fade show";
    successMsg.innerHTML = `
      <i class="fas fa-check-circle me-2"></i>
      Se han aplicado ${appliedChanges} cambios automáticamente.
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    const form = document.getElementById("pac-form");
    if (form) {
      form.insertBefore(successMsg, form.firstChild);

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        successMsg.classList.remove("show");
        setTimeout(() => successMsg.remove(), 150);
      }, 5000);
    }

    // Close AI panel
    toggleAiPanel();

    // Close modal if it exists
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("aiUploadResultsModal")
    );
    if (modal) {
      modal.hide();
    }

    // Clear highlights after 3 seconds
    setTimeout(() => {
      document.querySelectorAll(".campo-modificado-historial").forEach((el) => {
        el.classList.remove("campo-modificado-historial");
      });
    }, 3000);
  }
}

// Review AI changes (navigate to fields)
function reviewAiChanges() {
  if (!window.currentAiResults) return;

  const results = window.currentAiResults;
  let currentIndex = 0;

  function showNextField() {
    if (currentIndex >= results.detectedFields.length) {
      currentIndex = 0;
    }

    const field = results.detectedFields[currentIndex];
    const fieldElement = document.getElementById(field.fieldId);

    if (fieldElement) {
      // Navigate to section
      showSection(field.section);

      // Highlight and focus field
      fieldElement.classList.add("campo-validacion-aviso");
      fieldElement.scrollIntoView({ behavior: "smooth", block: "center" });
      fieldElement.focus();

      // Clear previous highlights
      setTimeout(() => {
        document.querySelectorAll(".campo-validacion-aviso").forEach((el) => {
          if (el !== fieldElement) {
            el.classList.remove("campo-validacion-aviso");
          }
        });
      }, 100);
    }

    currentIndex++;
  }

  // Start reviewing
  showNextField();

  // Close AI panel
  toggleAiPanel();

  // Close modal if it exists
  const modal = bootstrap.Modal.getInstance(
    document.getElementById("aiUploadResultsModal")
  );
  if (modal) {
    modal.hide();
  }
}

// --- OPTIMIZATION FUNCTIONALITY ---

// Mock optimization results
const mockOptimizationResults = {
  optimization_report: {
    total_improvement: 377.32,
    total_plots_optimized: 2,
    plot_improvements: {
      1: {
        original_grants: [
          "Ayuda Básica Renta Sostenibilidad",
          "Rotación Cultivos Especies Mejorantes",
        ],
        optimized_grants: [
          "Siembra Directa",
          "Rotación Cultivos Especies Mejorantes",
        ],
        original_amount: 99.3,
        optimized_amount: 374.82,
        improvement: 275.52,
      },
      2: {
        original_grants: ["Cubiertas vegetales"],
        optimized_grants: ["Cubiertas vegetales", "Rotación siembra directa"],
        original_amount: 153.2,
        optimized_amount: 255.0,
        improvement: 101.8,
      },
    },
  },
  optimized_form_id: "optimized-form-123",
};

// Optimization functionality
function startOptimization() {
  const optimizeStatus = document.getElementById("aiOptimizeStatus");
  const startButton = document.getElementById("startOptimization");

  if (!optimizeStatus || !startButton) return;

  // Show loading state
  optimizeStatus.style.display = "block";
  startButton.disabled = true;
  startButton.innerHTML =
    '<i class="fas fa-spinner fa-spin me-2"></i>Optimizando...';

  // Simulate optimization process
  setTimeout(() => {
    // Hide loading state
    optimizeStatus.style.display = "none";
    startButton.disabled = false;
    startButton.innerHTML =
      '<i class="fas fa-magic me-2"></i>Iniciar Optimización';

    // Populate results
    populateOptimizationResults(mockOptimizationResults);

    // Show results modal
    const modal = new bootstrap.Modal(
      document.getElementById("aiOptimizeResultsModal")
    );
    modal.show();
  }, 3000);
}

function populateOptimizationResults(results) {
  const totalImprovementModal = document.getElementById(
    "totalImprovementModal"
  );
  const optimizedPlotsCountModal = document.getElementById(
    "optimizedPlotsCountModal"
  );
  const plotImprovementsModal = document.getElementById(
    "plotImprovementsModal"
  );

  if (
    !totalImprovementModal ||
    !optimizedPlotsCountModal ||
    !plotImprovementsModal
  )
    return;

  // Update summary
  totalImprovementModal.textContent = `+${results.optimization_report.total_improvement.toFixed(
    2
  )}€`;
  optimizedPlotsCountModal.textContent = `${results.optimization_report.total_plots_optimized} parcelas optimizadas`;

  // Clear and populate plot improvements
  plotImprovementsModal.innerHTML = "";

  Object.entries(results.optimization_report.plot_improvements).forEach(
    ([plotId, improvement]) => {
      const plotDiv = document.createElement("div");
      plotDiv.className = "border border-gray-200 rounded-lg p-3 mb-3";
      plotDiv.innerHTML = `
      <h6 class="font-medium text-gray-800 mb-2">Parcela ${plotId}</h6>
      <div class="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p class="text-gray-600">Ayudas originales:</p>
          <p class="font-medium">${improvement.original_grants.join(", ")}</p>
          <p class="text-gray-600 mt-1">Importe: ${improvement.original_amount.toFixed(
            2
          )}€</p>
        </div>
        <div>
          <p class="text-gray-600">Ayudas optimizadas:</p>
          <p class="font-medium">${improvement.optimized_grants.join(", ")}</p>
          <p class="text-gray-600 mt-1">Importe: ${improvement.optimized_amount.toFixed(
            2
          )}€</p>
        </div>
      </div>
      <div class="mt-2 text-sm">
        <span class="text-green-600 font-medium">
          Mejora: +${improvement.improvement.toFixed(2)}€
        </span>
      </div>
    `;
      plotImprovementsModal.appendChild(plotDiv);
    }
  );

  // Store results for confirmation
  window.currentOptimizationResults = results;
}

function confirmOptimization() {
  if (!window.currentOptimizationResults) return;

  const confirmButton = document.getElementById("confirmOptimizationModal");
  if (confirmButton) {
    confirmButton.disabled = true;
    confirmButton.innerHTML =
      '<i class="fas fa-spinner fa-spin me-2"></i>Confirmando...';
  }

  // Simulate confirmation process
  setTimeout(() => {
    // Show success message
    const successMsg = document.createElement("div");
    successMsg.className = "alert alert-success alert-dismissible fade show";
    successMsg.innerHTML = `
      <i class="fas fa-check-circle me-2"></i>
      Optimización confirmada. El formulario ha sido actualizado con las mejores ayudas disponibles.
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    const form = document.getElementById("pac-form");
    if (form) {
      form.insertBefore(successMsg, form.firstChild);

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        successMsg.classList.remove("show");
        setTimeout(() => successMsg.remove(), 150);
      }, 5000);
    }

    // Close modal
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("aiOptimizeResultsModal")
    );
    if (modal) {
      modal.hide();
    }

    // Close AI panel
    toggleAiPanel();

    // Reset optimization state
    resetOptimizationState();
  }, 2000);
}

function cancelOptimization() {
  resetOptimizationState();
}

function resetOptimizationState() {
  const confirmButton = document.getElementById("confirmOptimizationModal");

  if (confirmButton) {
    confirmButton.disabled = false;
    confirmButton.innerHTML =
      '<i class="fas fa-check me-2"></i>Confirmar Optimización';
  }

  // Clear stored results
  window.currentOptimizationResults = null;
}
