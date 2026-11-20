const STORAGE_KEY = "jobstrike_app_state_v2";

const STATUSES = [
  "Wishlist",
  "Preparing",
  "Applied",
  "Follow Up",
  "Interview",
  "Offer",
  "Rejected",
  "Closed"
];

const SEEKER_TYPES = [
  "Fresh Graduate",
  "Student / Internship",
  "General Job Seeker",
  "Corporate / Experienced",
  "Remote Job Seeker",
  "International Job Seeker",
  "Freelance / Contract",
  "Career Switcher",
  "Custom / Other"
];

const CUSTOM_FIELD_CSV_SLOTS = 5;

const CSV_BASE_HEADERS = [
  "Company",
  "Role",
  "Seeker Type",
  "Status",
  "Source",
  "Applied Date",
  "Follow-up Date",
  "Interview Date",
  "Location / Mode",
  "Notes"
];

const BUILT_IN_FIELDS = {
  common: [
    {
      key: "employmentType",
      label: "Employment type",
      type: "dropdown",
      options: ["Internship", "Full-time", "Part-time", "Contract", "Temporary", "Freelance"]
    },
    {
      key: "portfolioLink",
      label: "Portfolio / profile link",
      type: "link"
    },
    {
      key: "recruiterContact",
      label: "Recruiter contact",
      type: "text"
    }
  ],
  "Fresh Graduate": [
    { key: "campusPlacement", label: "Campus placement", type: "yesno" },
    { key: "cgpa", label: "CGPA / GPA", type: "text" },
    {
      key: "referralStatus",
      label: "Referral status",
      type: "dropdown",
      options: ["None", "Requested", "Received", "Used"]
    }
  ],
  "Student / Internship": [
    { key: "semester", label: "Semester / year", type: "text" },
    { key: "stipendExpectation", label: "Stipend expectation", type: "text" },
    {
      key: "internshipDuration",
      label: "Internship duration",
      type: "dropdown",
      options: ["1 month", "2 months", "3 months", "6 months", "Flexible"]
    }
  ],
  "General Job Seeker": [
    { key: "noticePeriod", label: "Notice period", type: "text" },
    { key: "salaryExpectation", label: "Salary expectation", type: "text" },
    { key: "assessmentRound", label: "Assessment round", type: "yesno" }
  ],
  "Corporate / Experienced": [
    { key: "yearsRequired", label: "Years required", type: "text" },
    { key: "currentCtc", label: "Current CTC / salary", type: "text" },
    { key: "noticePeriod", label: "Notice period", type: "text" }
  ],
  "Remote Job Seeker": [
    { key: "timezone", label: "Timezone overlap", type: "text" },
    { key: "remoteSetup", label: "Remote setup ready", type: "yesno" },
    {
      key: "communicationTools",
      label: "Tools used",
      type: "dropdown",
      options: ["Slack", "Teams", "Zoom", "Meet", "Discord", "Other"]
    }
  ],
  "International Job Seeker": [
    {
      key: "visaSponsorship",
      label: "Visa sponsorship",
      type: "dropdown",
      options: ["Needed", "Not needed", "Unsure"]
    },
    { key: "relocation", label: "Relocation open", type: "yesno" },
    { key: "countryTarget", label: "Target country", type: "text" }
  ],
  "Freelance / Contract": [
    { key: "rateExpectation", label: "Rate expectation", type: "text" },
    {
      key: "availability",
      label: "Availability",
      type: "dropdown",
      options: ["Immediate", "Within 1 week", "Within 2 weeks", "Custom"]
    },
    {
      key: "projectLength",
      label: "Project length",
      type: "dropdown",
      options: ["Short", "Medium", "Long", "Ongoing"]
    }
  ],
  "Career Switcher": [
    { key: "transferableSkills", label: "Transferable skills", type: "longtext" },
    { key: "trainingDone", label: "Training / course done", type: "yesno" },
    { key: "portfolioReady", label: "Transition portfolio ready", type: "yesno" }
  ],
  "Custom / Other": []
};

const THEMES = {
  midnight: {
    name: "Midnight Navy",
    preview: "linear-gradient(135deg,#0f172a,#2563eb)",
    vars: {
      "--bg": "#020617",
      "--panel": "linear-gradient(135deg, rgba(15, 23, 42, 0.94), rgba(15, 23, 42, 0.82))",
      "--panel-soft": "linear-gradient(135deg, rgba(30, 41, 59, 0.88), rgba(15, 23, 42, 0.94))",
      "--border": "rgba(96, 165, 250, 0.28)",
      "--accent": "#60a5fa",
      "--accent-soft": "rgba(96, 165, 250, 0.14)",
      "--text": "#f8fafc",
      "--muted": "rgba(226, 232, 240, 0.68)",
      "--glow": "0 0 50px rgba(59, 130, 246, 0.18)",
      "--input-bg": "rgba(15, 23, 42, 0.76)"
    }
  },
  crimsonNoir: {
    name: "Crimson Noir",
    preview: "linear-gradient(135deg,#4c0519,#be123c)",
    vars: {
      "--bg": "#09090b",
      "--panel": "linear-gradient(135deg, rgba(76, 5, 25, 0.80), rgba(24, 24, 27, 0.92))",
      "--panel-soft": "linear-gradient(135deg, rgba(127, 29, 29, 0.48), rgba(24, 24, 27, 0.96))",
      "--border": "rgba(251, 113, 133, 0.34)",
      "--accent": "#fda4af",
      "--accent-soft": "rgba(244, 63, 94, 0.16)",
      "--text": "#fafafa",
      "--muted": "rgba(244, 244, 245, 0.68)",
      "--glow": "0 0 52px rgba(244, 63, 94, 0.18)",
      "--input-bg": "rgba(39, 10, 20, 0.76)"
    }
  },
  crimsonPulse: {
    name: "Crimson Pulse",
    preview: "linear-gradient(135deg,#b91c1c,#ef4444)",
    vars: {
      "--bg": "#09090b",
      "--panel": "linear-gradient(135deg, rgba(185, 28, 28, 0.84), rgba(127, 29, 29, 0.74), rgba(69, 10, 10, 0.94))",
      "--panel-soft": "linear-gradient(135deg, rgba(220, 38, 38, 0.55), rgba(127, 29, 29, 0.48), rgba(69, 10, 10, 0.90))",
      "--border": "rgba(252, 165, 165, 0.38)",
      "--accent": "#fee2e2",
      "--accent-soft": "rgba(239, 68, 68, 0.20)",
      "--text": "#fef2f2",
      "--muted": "rgba(254, 242, 242, 0.74)",
      "--glow": "0 0 62px rgba(239, 68, 68, 0.24)",
      "--input-bg": "rgba(90, 16, 16, 0.72)"
    }
  },
  brightCyan: {
    name: "Bright Cyan",
    preview: "linear-gradient(135deg,#0369a1,#38bdf8)",
    vars: {
      "--bg": "#0f172a",
      "--panel": "linear-gradient(135deg, rgba(3, 105, 161, 0.42), rgba(30, 64, 175, 0.55), rgba(15, 23, 42, 0.96))",
      "--panel-soft": "linear-gradient(135deg, rgba(14, 165, 233, 0.30), rgba(30, 64, 175, 0.38), rgba(30, 41, 59, 0.96))",
      "--border": "rgba(125, 211, 252, 0.32)",
      "--accent": "#bae6fd",
      "--accent-soft": "rgba(56, 189, 248, 0.18)",
      "--text": "#f8fafc",
      "--muted": "rgba(226, 232, 240, 0.72)",
      "--glow": "0 0 48px rgba(59, 130, 246, 0.16)",
      "--input-bg": "rgba(11, 41, 84, 0.68)"
    }
  },
  emerald: {
    name: "Emerald Graphite",
    preview: "linear-gradient(135deg,#064e3b,#10b981)",
    vars: {
      "--bg": "#0a0a0a",
      "--panel": "linear-gradient(135deg, rgba(6, 78, 59, 0.62), rgba(23, 23, 23, 0.95))",
      "--panel-soft": "linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(23, 23, 23, 0.95))",
      "--border": "rgba(52, 211, 153, 0.30)",
      "--accent": "#a7f3d0",
      "--accent-soft": "rgba(16, 185, 129, 0.15)",
      "--text": "#fafafa",
      "--muted": "rgba(245, 245, 245, 0.68)",
      "--glow": "0 0 45px rgba(16, 185, 129, 0.12)",
      "--input-bg": "rgba(10, 51, 36, 0.68)"
    }
  },
  emeraldGlow: {
    name: "Emerald Glow",
    preview: "linear-gradient(135deg,#15803d,#34d399)",
    vars: {
      "--bg": "#0a0a0a",
      "--panel": "linear-gradient(135deg, rgba(21, 128, 61, 0.84), rgba(6, 95, 70, 0.75), rgba(2, 44, 34, 0.94))",
      "--panel-soft": "linear-gradient(135deg, rgba(34, 197, 94, 0.56), rgba(6, 95, 70, 0.48), rgba(2, 44, 34, 0.90))",
      "--border": "rgba(167, 243, 208, 0.38)",
      "--accent": "#ecfdf5",
      "--accent-soft": "rgba(52, 211, 153, 0.18)",
      "--text": "#f0fdf4",
      "--muted": "rgba(240, 253, 244, 0.74)",
      "--glow": "0 0 58px rgba(52, 211, 153, 0.22)",
      "--input-bg": "rgba(10, 70, 44, 0.72)"
    }
  },
  violet: {
    name: "Royal Violet",
    preview: "linear-gradient(135deg,#3b0764,#8b5cf6)",
    vars: {
      "--bg": "#0b0714",
      "--panel": "linear-gradient(135deg, rgba(59, 7, 100, 0.74), rgba(21, 16, 40, 0.96))",
      "--panel-soft": "linear-gradient(135deg, rgba(139, 92, 246, 0.28), rgba(12, 9, 23, 0.98))",
      "--border": "rgba(167, 139, 250, 0.30)",
      "--accent": "#c4b5fd",
      "--accent-soft": "rgba(139, 92, 246, 0.15)",
      "--text": "#faf5ff",
      "--muted": "rgba(250, 245, 255, 0.66)",
      "--glow": "0 0 50px rgba(139, 92, 246, 0.14)",
      "--input-bg": "rgba(36, 14, 64, 0.70)"
    }
  },
  gold: {
    name: "Sandstone Gold",
    preview: "linear-gradient(135deg,#78350f,#f59e0b)",
    vars: {
      "--bg": "#1c1917",
      "--panel": "linear-gradient(135deg, rgba(120, 53, 15, 0.50), rgba(41, 37, 36, 0.96))",
      "--panel-soft": "linear-gradient(135deg, rgba(245, 158, 11, 0.18), rgba(41, 37, 36, 0.98))",
      "--border": "rgba(252, 211, 77, 0.28)",
      "--accent": "#fde68a",
      "--accent-soft": "rgba(245, 158, 11, 0.12)",
      "--text": "#fafaf9",
      "--muted": "rgba(250, 250, 249, 0.68)",
      "--glow": "0 0 45px rgba(251, 191, 36, 0.10)",
      "--input-bg": "rgba(70, 42, 14, 0.66)"
    }
  }
};

const els = {
  sidebar: document.getElementById("sidebar"),
  sidebarTrigger: document.getElementById("sidebarTrigger"),
  menuBtn: document.getElementById("menuBtn"),
  closeSidebarBtn: document.getElementById("closeSidebarBtn"),
  navBtns: document.querySelectorAll(".nav-btn"),
  pageTitle: document.getElementById("pageTitle"),
  pageSubtitle: document.getElementById("pageSubtitle"),
  sections: {
    dashboard: document.getElementById("section-dashboard"),
    add: document.getElementById("section-add"),
    applications: document.getElementById("section-applications"),
    transfer: document.getElementById("section-transfer"),
    settings: document.getElementById("section-settings")
  },
  brandTitle: document.getElementById("brandTitle"),
  sidebarTheme: document.getElementById("sidebarTheme"),
  statsGrid: document.getElementById("statsGrid"),
  recentCards: document.getElementById("recentCards"),
  recentCount: document.getElementById("recentCount"),
  quickAddBtn: document.getElementById("quickAddBtn"),
  quickExportBtn: document.getElementById("quickExportBtn"),
  quickExportCsvBtn: document.getElementById("quickExportCsvBtn"),

  seekerTypeGate: document.getElementById("seekerTypeGate"),
  applicationFormPanel: document.getElementById("applicationFormPanel"),
  applicationForm: document.getElementById("applicationForm"),
  formHeading: document.getElementById("formHeading"),
  submitBtn: document.getElementById("submitBtn"),
  resetFormBtn: document.getElementById("resetFormBtn"),

  entrySeekerType: document.getElementById("entrySeekerType"),
  selectedSeekerTypeName: document.getElementById("selectedSeekerTypeName"),
  changeSeekerTypeBtn: document.getElementById("changeSeekerTypeBtn"),
  status: document.getElementById("status"),
  dynamicFields: document.getElementById("dynamicFields"),
  customFieldsContainer: document.getElementById("customFieldsContainer"),
  addCustomFieldBtn: document.getElementById("addCustomFieldBtn"),

  sidebarModeToggle: document.getElementById("sidebarModeToggle"),
  themeChips: document.getElementById("themeChips"),

  searchInput: document.getElementById("searchInput"),
  filterType: document.getElementById("filterType"),
  filterStatus: document.getElementById("filterStatus"),
  sortBy: document.getElementById("sortBy"),
  cardsContainer: document.getElementById("cardsContainer"),
  resultsCount: document.getElementById("resultsCount"),

  exportJsonBtn: document.getElementById("exportJsonBtn"),
  exportCsvBtn: document.getElementById("exportCsvBtn"),
  downloadBlankBtn: document.getElementById("downloadBlankBtn"),
  downloadSampleBtn: document.getElementById("downloadSampleBtn"),
  importFile: document.getElementById("importFile"),
  importBtn: document.getElementById("importBtn")
};

let editingId = null;
let activeSectionKey = "dashboard";
let selectedSeekerType = "";

const state = loadState();

init();

function init() {
  fillSelects();
  bindSidebar();
  bindNavigation();
  bindActions();
  renderThemeChips();
  applyTheme(state.settings.themeKey);
  applySidebarMode();
  prepareNewApplicationFlow();
  syncSettingsUI();
  renderAll();
  syncTopbarActions();
}

function defaultState() {
  return {
    applications: [],
    settings: {
      themeKey: "midnight",
      sidebarMode: "hover"
    }
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return {
      applications: Array.isArray(parsed.applications) ? parsed.applications : [],
      settings: {
        themeKey: parsed.settings?.themeKey || "midnight",
        sidebarMode: parsed.settings?.sidebarMode || "hover"
      }
    };
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function fillOptions(select, options, selectedValue) {
  select.innerHTML = options
    .map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`)
    .join("");
  select.value = selectedValue || options[0];
}

function fillOptionsWithPlaceholder(select, options, placeholder, selectedValue = "") {
  select.innerHTML = [
    `<option value="">${escapeHtml(placeholder)}</option>`,
    ...options.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`)
  ].join("");
  select.value = selectedValue;
}

function fillSelects() {
  fillOptionsWithPlaceholder(els.entrySeekerType, SEEKER_TYPES, "Select seeker type", "");
  fillOptions(els.status, STATUSES, "Applied");
  fillOptions(els.filterType, ["All seeker types", ...SEEKER_TYPES], "All seeker types");
  fillOptions(els.filterStatus, ["All statuses", ...STATUSES], "All statuses");
}

function bindSidebar() {
  els.sidebarTrigger.addEventListener("mouseenter", () => {
    if (state.settings.sidebarMode === "hover") {
      openSidebar();
    }
  });

  els.sidebar.addEventListener("mouseleave", () => {
    if (state.settings.sidebarMode === "hover") {
      closeSidebar();
    }
  });

  els.menuBtn.addEventListener("click", () => {
    state.settings.sidebarMode = state.settings.sidebarMode === "hover" ? "pinned" : "hover";
    saveState();
    applySidebarMode();
    syncSettingsUI();
  });

  els.closeSidebarBtn.addEventListener("click", () => {
    if (state.settings.sidebarMode === "hover") {
      closeSidebar();
    } else {
      state.settings.sidebarMode = "hover";
      saveState();
      applySidebarMode();
      syncSettingsUI();
    }
  });
}

function openSidebar() {
  els.sidebar.classList.remove("hidden-sidebar");
}

function closeSidebar() {
  els.sidebar.classList.add("hidden-sidebar");
}

function applySidebarMode() {
  const isPinned = state.settings.sidebarMode === "pinned";
  document.body.classList.toggle("sidebar-pinned", isPinned);

  if (isPinned) {
    els.sidebar.classList.remove("hidden-sidebar");
  } else {
    els.sidebar.classList.add("hidden-sidebar");
  }
}

function bindNavigation() {
  els.navBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.section === "add") {
        prepareNewApplicationFlow();
      }

      activateSection(btn.dataset.section);
      if (state.settings.sidebarMode === "hover") {
        closeSidebar();
      }
    });
  });
}

function activateSection(sectionKey) {
  activeSectionKey = sectionKey;
  els.navBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.section === sectionKey);
  });

  Object.entries(els.sections).forEach(([key, section]) => {
    section.classList.toggle("active", key === sectionKey);
  });

  const titleMap = {
    dashboard: ["Dashboard", "Your job search, but cleaner and more premium."],
    add: ["Add Application", "Create a new job entry with seeker-specific and custom fields."],
    applications: ["Applications", "Search, filter, sort, duplicate, edit, and remove your entries."],
    transfer: ["Import / Export", "Move your data in and out using JSON or CSV."],
    settings: ["Settings", "Theme switching, sidebar behavior, and full-app styling."]
  };

  els.pageTitle.textContent = titleMap[sectionKey][0];
  els.pageSubtitle.textContent = titleMap[sectionKey][1];
  syncTopbarActions();
}

function bindActions() {
  els.quickAddBtn.addEventListener("click", () => {
    prepareNewApplicationFlow();
    activateSection("add");
  });
  els.quickExportBtn.addEventListener("click", exportJSON);
  els.quickExportCsvBtn.addEventListener("click", exportCSV);

  els.sidebarModeToggle.addEventListener("change", () => {
    state.settings.sidebarMode = els.sidebarModeToggle.value;
    saveState();
    applySidebarMode();
  });

  els.entrySeekerType.addEventListener("change", () => {
    if (els.entrySeekerType.value) {
      showApplicationFormForType(els.entrySeekerType.value);
    }
  });
  els.changeSeekerTypeBtn.addEventListener("click", () => showSeekerTypeGate());
  els.addCustomFieldBtn.addEventListener("click", () => addCustomFieldRow());
  els.resetFormBtn.addEventListener("click", resetForm);
  els.applicationForm.addEventListener("submit", handleSubmit);

  els.searchInput.addEventListener("input", renderApplications);
  els.filterType.addEventListener("change", renderApplications);
  els.filterStatus.addEventListener("change", renderApplications);
  els.sortBy.addEventListener("change", renderApplications);

  els.exportJsonBtn.addEventListener("click", exportJSON);
  els.exportCsvBtn.addEventListener("click", exportCSV);
  els.downloadBlankBtn.addEventListener("click", () => downloadCSV(buildBlankTemplateRows(), "jobstrike-blank-template.csv"));
  els.downloadSampleBtn.addEventListener("click", () => downloadCSV(buildSampleTemplateRows(), "jobstrike-sample-template.csv"));
  els.importBtn.addEventListener("click", importData);
}

function renderThemeChips() {
  els.themeChips.innerHTML = Object.entries(THEMES)
    .map(([key, theme]) => {
      return `
        <button class="theme-chip ${key === state.settings.themeKey ? "active" : ""}" data-theme="${key}">
          <div class="theme-preview" style="background:${theme.preview}"></div>
          <div class="theme-name">${escapeHtml(theme.name)}</div>
        </button>
      `;
    })
    .join("");

  els.themeChips.querySelectorAll(".theme-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const key = chip.dataset.theme;
      state.settings.themeKey = key;
      saveState();
      applyTheme(key);
      syncSettingsUI();
    });
  });
}

function applyTheme(themeKey) {
  const theme = THEMES[themeKey] || THEMES.midnight;
  Object.entries(theme.vars).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
  els.sidebarTheme.textContent = theme.name;
  document.querySelectorAll(".theme-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.theme === themeKey);
  });
}

function syncSettingsUI() {
  els.sidebarModeToggle.value = state.settings.sidebarMode;
  els.sidebarTheme.textContent = (THEMES[state.settings.themeKey] || THEMES.midnight).name;
}

function syncTopbarActions() {
  const showQuickExports = activeSectionKey === "dashboard" || activeSectionKey === "applications";
  els.quickExportBtn.classList.toggle("hidden", !showQuickExports);
  els.quickExportCsvBtn.classList.toggle("hidden", !showQuickExports);
}

function prepareNewApplicationFlow() {
  editingId = null;
  selectedSeekerType = "";
  els.formHeading.textContent = "Add Application";
  els.submitBtn.textContent = "Save Application";
  els.applicationForm.reset();
  els.customFieldsContainer.innerHTML = "";
  els.entrySeekerType.value = "";
  els.status.value = "Applied";
  els.dynamicFields.innerHTML = "";
  showSeekerTypeGate();
}

function showSeekerTypeGate() {
  els.seekerTypeGate.classList.remove("hidden");
  els.applicationFormPanel.classList.add("hidden");
}

function showApplicationFormForType(seekerType) {
  selectedSeekerType = seekerType;
  els.entrySeekerType.value = seekerType;
  els.selectedSeekerTypeName.textContent = seekerType;
  els.seekerTypeGate.classList.add("hidden");
  els.applicationFormPanel.classList.remove("hidden");
  els.formHeading.textContent = editingId ? "Edit Application" : "Add Application";
  els.submitBtn.textContent = editingId ? "Update Application" : "Save Application";
  updateDynamicFields();
}

function getFieldsForType(seekerType) {
  return [...BUILT_IN_FIELDS.common, ...(BUILT_IN_FIELDS[seekerType] || [])];
}

function updateDynamicFields() {
  const seekerType = selectedSeekerType || els.entrySeekerType.value;
  if (!seekerType) {
    els.dynamicFields.innerHTML = "";
    return;
  }

  const fields = getFieldsForType(seekerType);

  els.dynamicFields.innerHTML = fields
    .map((field) => renderBuiltInField(field))
    .join("");
}

function renderBuiltInField(field, currentValue = "") {
  const id = `builtin_${field.key}`;
  let inputHtml = "";

  if (field.type === "dropdown") {
    inputHtml = `
      <select id="${id}" data-builtin-key="${field.key}">
        <option value="">Select</option>
        ${(field.options || [])
          .map(
            (option) =>
              `<option value="${escapeHtml(option)}" ${option === currentValue ? "selected" : ""}>${escapeHtml(option)}</option>`
          )
          .join("")}
      </select>
    `;
  } else if (field.type === "yesno") {
    inputHtml = `
      <select id="${id}" data-builtin-key="${field.key}">
        <option value="">Select</option>
        <option value="Yes" ${currentValue === "Yes" ? "selected" : ""}>Yes</option>
        <option value="No" ${currentValue === "No" ? "selected" : ""}>No</option>
      </select>
    `;
  } else if (field.type === "date") {
    inputHtml = `<input id="${id}" data-builtin-key="${field.key}" type="date" value="${escapeHtml(currentValue)}" />`;
  } else if (field.type === "number") {
    inputHtml = `<input id="${id}" data-builtin-key="${field.key}" type="number" value="${escapeHtml(currentValue)}" />`;
  } else if (field.type === "link") {
    inputHtml = `<input id="${id}" data-builtin-key="${field.key}" type="url" value="${escapeHtml(currentValue)}" placeholder="https://example.com" />`;
  } else if (field.type === "longtext") {
    inputHtml = `<textarea id="${id}" data-builtin-key="${field.key}" placeholder="Enter ${escapeHtml(field.label.toLowerCase())}">${escapeHtml(currentValue)}</textarea>`;
  } else {
    inputHtml = `<input id="${id}" data-builtin-key="${field.key}" type="text" value="${escapeHtml(currentValue)}" placeholder="Enter ${escapeHtml(field.label.toLowerCase())}" />`;
  }

  return `
    <div class="field">
      <label for="${id}">${escapeHtml(field.label)}</label>
      ${inputHtml}
    </div>
  `;
}

function addCustomFieldRow(existing = null) {
  const row = document.createElement("div");
  row.className = "custom-field-card";

  const fieldType = existing?.type || "text";
  const optionsText = Array.isArray(existing?.options) ? existing.options.join(" | ") : "";

  row.innerHTML = `
    <div class="field">
      <label>Label</label>
      <input class="cf-label" type="text" placeholder="e.g. Visa required" value="${escapeHtml(existing?.label || "")}" />
    </div>

    <div class="field">
      <label>Field type</label>
      <select class="cf-type">
        ${["text", "number", "date", "yesno", "dropdown", "multi-select", "link", "longtext"]
          .map((type) => `<option value="${type}" ${fieldType === type ? "selected" : ""}>${type}</option>`)
          .join("")}
      </select>
    </div>

    <div class="field cf-options-field">
      <label>Options</label>
      <input class="cf-options" type="text" placeholder="option1 | option2 | option3" value="${escapeHtml(optionsText)}" />
    </div>

    <div class="field cf-value-wrap"></div>

    <button type="button" class="btn danger cf-remove">Remove</button>
  `;

  const typeSelect = row.querySelector(".cf-type");
  const optionsInput = row.querySelector(".cf-options");

  typeSelect.addEventListener("change", () => {
    renderCustomFieldValueControl(row, getCustomFieldCurrentValue(row));
  });

  optionsInput.addEventListener("input", () => {
    const type = typeSelect.value;
    if (type === "dropdown" || type === "multi-select") {
      renderCustomFieldValueControl(row, getCustomFieldCurrentValue(row));
    }
  });

  row.querySelector(".cf-remove").addEventListener("click", () => row.remove());
  els.customFieldsContainer.appendChild(row);
  renderCustomFieldValueControl(row, existing?.value ?? "");
}

function renderCustomFieldValueControl(row, currentValue = "") {
  const type = row.querySelector(".cf-type").value;
  const optionsField = row.querySelector(".cf-options-field");
  const valueWrap = row.querySelector(".cf-value-wrap");
  const options = parseOptionsInput(row.querySelector(".cf-options").value);
  const normalizedValue = normalizeFieldValue(currentValue, type);

  optionsField.classList.toggle("hidden", !(type === "dropdown" || type === "multi-select"));

  if (type === "yesno") {
    valueWrap.innerHTML = `
      <label>Value</label>
      <select class="cf-value">
        <option value="">Select</option>
        <option value="Yes" ${normalizedValue === "Yes" ? "selected" : ""}>Yes</option>
        <option value="No" ${normalizedValue === "No" ? "selected" : ""}>No</option>
      </select>
    `;
    return;
  }

  if (type === "dropdown") {
    const savedValue = typeof normalizedValue === "string" ? normalizedValue : "";
    const safeOptions = options.includes(savedValue) || !savedValue ? options : [savedValue, ...options];
    valueWrap.innerHTML = `
      <label>Value</label>
      <select class="cf-value">
        <option value="">Select</option>
        ${safeOptions
          .map((option) => `<option value="${escapeHtml(option)}" ${option === savedValue ? "selected" : ""}>${escapeHtml(option)}</option>`)
          .join("")}
      </select>
    `;
    return;
  }

  if (type === "multi-select") {
    const selectedValues = Array.isArray(normalizedValue) ? normalizedValue : splitMultiValue(normalizedValue);
    const safeOptions = [...new Set([...selectedValues, ...options].filter(Boolean))];
    valueWrap.innerHTML = `
      <label>Value</label>
      <select class="cf-value" multiple size="${Math.min(Math.max(safeOptions.length, 2), 5)}">
        ${safeOptions
          .map((option) => `<option value="${escapeHtml(option)}" ${selectedValues.includes(option) ? "selected" : ""}>${escapeHtml(option)}</option>`)
          .join("")}
      </select>
      <div class="field-hint">Hold Ctrl / Cmd to select more than one.</div>
    `;
    return;
  }

  if (type === "date") {
    valueWrap.innerHTML = `
      <label>Value</label>
      <input class="cf-value" type="date" value="${escapeHtml(normalizedValue)}" />
    `;
    return;
  }

  if (type === "number") {
    valueWrap.innerHTML = `
      <label>Value</label>
      <input class="cf-value" type="number" value="${escapeHtml(normalizedValue)}" placeholder="Enter value" />
    `;
    return;
  }

  if (type === "link") {
    valueWrap.innerHTML = `
      <label>Value</label>
      <input class="cf-value" type="url" value="${escapeHtml(normalizedValue)}" placeholder="https://example.com" />
    `;
    return;
  }

  if (type === "longtext") {
    valueWrap.innerHTML = `
      <label>Value</label>
      <textarea class="cf-value" placeholder="Enter details">${escapeHtml(normalizedValue)}</textarea>
    `;
    return;
  }

  valueWrap.innerHTML = `
    <label>Value</label>
    <input class="cf-value" type="text" value="${escapeHtml(normalizedValue)}" placeholder="Enter value" />
  `;
}

function getCustomFieldCurrentValue(row) {
  const type = row.querySelector(".cf-type").value;
  const valueEl = row.querySelector(".cf-value");
  if (!valueEl) return "";

  if (type === "multi-select") {
    return Array.from(valueEl.selectedOptions).map((option) => option.value);
  }

  return valueEl.value || "";
}

function parseOptionsInput(value) {
  return String(value || "")
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeFieldValue(value, type) {
  if (type === "multi-select") {
    return Array.isArray(value) ? value : splitMultiValue(value);
  }

  if (Array.isArray(value)) return value.join(" | ");
  return String(value ?? "");
}

function splitMultiValue(value) {
  if (Array.isArray(value)) return value;
  return String(value || "")
    .split(/\s*[|,]\s*/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function handleSubmit(event) {
  event.preventDefault();

  const entry = collectFormData();
  if (!entry) return;

  if (editingId) {
    const index = state.applications.findIndex((item) => item.id === editingId);
    if (index !== -1) {
      state.applications[index] = {
        ...state.applications[index],
        ...entry,
        updatedAt: Date.now()
      };
    }
  } else {
    state.applications.unshift({
      id: createId(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      ...entry
    });
  }

  saveState();
  resetForm();
  renderAll();
  activateSection("applications");
}

function collectFormData() {
  const seekerType = (selectedSeekerType || els.entrySeekerType.value).trim();
  const company = document.getElementById("company").value.trim();
  const role = document.getElementById("role").value.trim();
  const status = els.status.value.trim();

  if (!seekerType || !company || !role || !status) {
    alert("Please fill all mandatory fields: seeker type, company, role, and status.");
    return null;
  }

  const builtInFields = {};
  document.querySelectorAll("[data-builtin-key]").forEach((input) => {
    builtInFields[input.dataset.builtinKey] = input.value;
  });

  const customFields = Array.from(els.customFieldsContainer.querySelectorAll(".custom-field-card"))
    .map((row) => {
      const label = row.querySelector(".cf-label").value.trim();
      const type = row.querySelector(".cf-type").value;
      const options = type === "dropdown" || type === "multi-select"
        ? parseOptionsInput(row.querySelector(".cf-options").value)
        : [];
      const value = getCustomFieldCurrentValue(row);

      if (!label) return null;

      return {
        label,
        type,
        options,
        value
      };
    })
    .filter(Boolean);

  return {
    seekerType,
    company,
    role,
    status,
    source: document.getElementById("source").value.trim(),
    appliedDate: document.getElementById("appliedDate").value,
    followUpDate: document.getElementById("followUpDate").value,
    interviewDate: document.getElementById("interviewDate").value,
    locationMode: document.getElementById("locationMode").value.trim(),
    notes: document.getElementById("notes").value.trim(),
    builtInFields,
    customFields
  };
}

function resetForm() {
  prepareNewApplicationFlow();
}

function renderAll() {
  renderStats();
  renderRecentApplications();
  renderApplications();
  syncSettingsUI();
}

function renderStats() {
  const total = state.applications.length;
  const interviews = state.applications.filter((a) => a.status === "Interview").length;
  const offers = state.applications.filter((a) => a.status === "Offer").length;
  const followUps = state.applications.filter((a) => a.status === "Follow Up").length;
  const rejected = state.applications.filter((a) => a.status === "Rejected").length;
  const preparing = state.applications.filter((a) => a.status === "Preparing").length;

  const stats = [
    ["Applications", total],
    ["Interviews", interviews],
    ["Offers", offers],
    ["Follow-ups", followUps],
    ["Rejected", rejected],
    ["Preparing", preparing]
  ];

  els.statsGrid.innerHTML = stats
    .map(
      ([label, value]) => `
        <div class="stat-card">
          <div class="stat-number">${value}</div>
          <div class="stat-label">${label}</div>
        </div>
      `
    )
    .join("");
}

function renderRecentApplications() {
  const items = [...state.applications].sort((a, b) => b.createdAt - a.createdAt).slice(0, 4);
  els.recentCount.textContent = `${items.length} item(s)`;

  if (!items.length) {
    els.recentCards.innerHTML = `
      <div class="card">
        <h4>No applications yet</h4>
        <div class="card-note">Add your first application to start tracking everything here.</div>
      </div>
    `;
    return;
  }

  els.recentCards.innerHTML = items.map(renderCard).join("");
  attachCardActionListeners(els.recentCards);
}

function renderApplications() {
  const search = els.searchInput.value.trim().toLowerCase();
  const filterType = els.filterType.value;
  const filterStatus = els.filterStatus.value;
  const sortBy = els.sortBy.value;

  let items = [...state.applications].filter((item) => {
    const haystack = [
      item.company,
      item.role,
      item.status,
      item.source,
      item.seekerType,
      item.locationMode,
      item.notes,
      ...Object.values(item.builtInFields || {}),
      ...(item.customFields || []).flatMap((field) => [field.label, field.value, ...(field.options || [])])
    ]
      .join(" ")
      .toLowerCase();

    const searchOk = !search || haystack.includes(search);
    const typeOk = filterType === "All seeker types" || item.seekerType === filterType;
    const statusOk = filterStatus === "All statuses" || item.status === filterStatus;

    return searchOk && typeOk && statusOk;
  });

  if (sortBy === "newest") items.sort((a, b) => b.createdAt - a.createdAt);
  if (sortBy === "oldest") items.sort((a, b) => a.createdAt - b.createdAt);
  if (sortBy === "company") items.sort((a, b) => a.company.localeCompare(b.company));
  if (sortBy === "role") items.sort((a, b) => a.role.localeCompare(b.role));

  els.resultsCount.textContent = items.length;

  if (!items.length) {
    els.cardsContainer.innerHTML = `
      <div class="card">
        <h4>No matching applications</h4>
        <div class="card-note">Try changing your filters or add a new application.</div>
      </div>
    `;
    return;
  }

  els.cardsContainer.innerHTML = items.map(renderCard).join("");
  attachCardActionListeners(els.cardsContainer);
}

function renderCard(item) {
  const builtInEntries = Object.entries(item.builtInFields || {})
    .filter(([, value]) => hasDisplayValue(value))
    .slice(0, 4);

  const customEntries = (item.customFields || [])
    .filter((field) => hasDisplayValue(field.value))
    .slice(0, 4);

  const builtInHtml = builtInEntries
    .map(([key, value]) => {
      const fieldDef = findBuiltInField(item.seekerType, key);
      return `
        <div class="meta-item">
          <div class="meta-key">${escapeHtml(fieldDef?.label || key)}</div>
          <div class="meta-value">${formatValueHtml(value, fieldDef?.type)}</div>
        </div>
      `;
    })
    .join("");

  const customHtml = customEntries
    .map((field) => {
      return `
        <div class="meta-item">
          <div class="meta-key">${escapeHtml(field.label)}</div>
          <div class="meta-value">${formatValueHtml(field.value, field.type)}</div>
        </div>
      `;
    })
    .join("");

  const sourceHtml = item.source
    ? `
      <div class="meta-item">
        <div class="meta-key">Source</div>
        <div class="meta-value">${escapeHtml(item.source)}</div>
      </div>
    `
    : "";

  const interviewHtml = item.interviewDate
    ? `
      <div class="meta-item">
        <div class="meta-key">Interview</div>
        <div class="meta-value">${escapeHtml(item.interviewDate)}</div>
      </div>
    `
    : "";

  return `
    <div class="card">
      <div class="card-top">
        <div>
          <h4>${escapeHtml(item.role)}</h4>
          <div class="card-company">
            ${escapeHtml(item.company)}
            ${item.locationMode ? ` · ${escapeHtml(item.locationMode)}` : ""}
            ${item.appliedDate ? ` · Applied ${escapeHtml(item.appliedDate)}` : ""}
          </div>
        </div>
        <span class="badge ${getBadgeClass(item.status)}">${escapeHtml(item.status)}</span>
      </div>

      <div class="meta-grid">
        <div class="meta-item">
          <div class="meta-key">Seeker Type</div>
          <div class="meta-value">${escapeHtml(item.seekerType)}</div>
        </div>
        <div class="meta-item">
          <div class="meta-key">Follow-up</div>
          <div class="meta-value">${escapeHtml(item.followUpDate || "—")}</div>
        </div>
        ${sourceHtml}
        ${interviewHtml}
        ${builtInHtml}
        ${customHtml}
      </div>

      ${item.notes ? `<div class="card-note">${escapeHtml(item.notes)}</div>` : ""}

      <div class="card-actions">
        <button class="btn secondary" data-action="edit" data-id="${item.id}">Edit</button>
        <button class="btn secondary" data-action="duplicate" data-id="${item.id}">Duplicate</button>
        <button class="btn danger" data-action="delete" data-id="${item.id}">Delete</button>
      </div>
    </div>
  `;
}

function hasDisplayValue(value) {
  if (Array.isArray(value)) return value.some((item) => String(item || "").trim());
  return String(value || "").trim().length > 0;
}

function formatValueHtml(value, type) {
  const text = Array.isArray(value) ? value.filter(Boolean).join(", ") : String(value || "");
  if (!text) return "—";

  if (type === "link" && isSafeUrl(text)) {
    const safeUrl = escapeHtml(text);
    return `<a class="text-link" href="${safeUrl}" target="_blank" rel="noopener noreferrer">${safeUrl}</a>`;
  }

  return escapeHtml(text);
}

function isSafeUrl(value) {
  return /^(https?:\/\/|mailto:)/i.test(String(value || ""));
}

function attachCardActionListeners(container) {
  container.querySelectorAll("[data-action]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const action = btn.dataset.action;

      if (action === "edit") editApplication(id);
      if (action === "duplicate") duplicateApplication(id);
      if (action === "delete") deleteApplication(id);
    });
  });
}

function editApplication(id) {
  const item = state.applications.find((application) => application.id === id);
  if (!item) return;

  editingId = id;
  selectedSeekerType = item.seekerType || "General Job Seeker";
  activateSection("add");
  showApplicationFormForType(selectedSeekerType);

  document.getElementById("company").value = item.company || "";
  document.getElementById("role").value = item.role || "";
  els.status.value = item.status || "Applied";
  document.getElementById("source").value = item.source || "";
  document.getElementById("appliedDate").value = item.appliedDate || "";
  document.getElementById("followUpDate").value = item.followUpDate || "";
  document.getElementById("interviewDate").value = item.interviewDate || "";
  document.getElementById("locationMode").value = item.locationMode || "";
  document.getElementById("notes").value = item.notes || "";

  document.querySelectorAll("[data-builtin-key]").forEach((input) => {
    input.value = item.builtInFields?.[input.dataset.builtinKey] || "";
  });

  els.customFieldsContainer.innerHTML = "";
  (item.customFields || []).forEach((field) => addCustomFieldRow(field));
}

function duplicateApplication(id) {
  const item = state.applications.find((application) => application.id === id);
  if (!item) return;

  const copy = JSON.parse(JSON.stringify(item));
  copy.id = createId();
  copy.createdAt = Date.now();
  copy.updatedAt = Date.now();
  copy.status = "Preparing";

  state.applications.unshift(copy);
  saveState();
  renderAll();
}

function deleteApplication(id) {
  const ok = confirm("Delete this application?");
  if (!ok) return;

  state.applications = state.applications.filter((application) => application.id !== id);
  saveState();
  renderAll();
}

function findBuiltInField(seekerType, key) {
  const fields = getFieldsForType(seekerType);
  return fields.find((field) => field.key === key) || null;
}

function findBuiltInLabel(seekerType, key) {
  return findBuiltInField(seekerType, key)?.label || key;
}

function getBadgeClass(status) {
  if (["Applied", "Wishlist", "Preparing"].includes(status)) return "blue";
  if (["Follow Up", "Interview"].includes(status)) return "yellow";
  if (["Offer"].includes(status)) return "green";
  return "red";
}

function exportJSON() {
  downloadText(JSON.stringify(state.applications, null, 2), "jobstrike-data.json", "application/json");
}

function exportCSV() {
  downloadCSV(applicationsToCSVRows(state.applications), "jobstrike-data.csv");
}

function importData() {
  const file = els.importFile.files[0];
  if (!file) {
    alert("Choose a JSON or CSV file first.");
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    try {
      const text = String(reader.result || "");
      let imported = [];

      if (file.name.toLowerCase().endsWith(".json")) {
        const parsed = JSON.parse(text);
        const list = Array.isArray(parsed) ? parsed : parsed.applications;
        if (!Array.isArray(list)) throw new Error("Invalid JSON import");
        imported = list.map(normalizeImportedApplication).filter(Boolean);
      } else {
        imported = parseCSV(text).map(normalizeImportedCsvRow).filter(Boolean);
      }

      state.applications.unshift(...imported);
      saveState();
      renderAll();
      els.importFile.value = "";
      alert(`Imported ${imported.length} item(s).`);
    } catch (error) {
      alert("Import failed. Check the file format and try again.");
    }
  };

  reader.readAsText(file);
}

function normalizeImportedApplication(item) {
  if (!item || typeof item !== "object") return null;

  return {
    id: createId(),
    createdAt: Date.now(),
    updatedAt: Date.now(),
    seekerType: SEEKER_TYPES.includes(item.seekerType) ? item.seekerType : "General Job Seeker",
    company: item.company || "",
    role: item.role || "",
    status: STATUSES.includes(item.status) ? item.status : "Applied",
    source: item.source || "",
    appliedDate: item.appliedDate || "",
    followUpDate: item.followUpDate || "",
    interviewDate: item.interviewDate || "",
    locationMode: item.locationMode || "",
    notes: item.notes || "",
    builtInFields: item.builtInFields && typeof item.builtInFields === "object" ? item.builtInFields : {},
    customFields: Array.isArray(item.customFields) ? item.customFields.map(normalizeCustomField).filter(Boolean) : []
  };
}

function normalizeCustomField(field) {
  if (!field || typeof field !== "object" || !field.label) return null;

  const type = ["text", "number", "date", "yesno", "dropdown", "multi-select", "link", "longtext"].includes(field.type)
    ? field.type
    : "text";

  return {
    label: String(field.label),
    type,
    options: Array.isArray(field.options) ? field.options.map(String).filter(Boolean) : [],
    value: type === "multi-select" ? normalizeFieldValue(field.value, "multi-select") : normalizeFieldValue(field.value, type)
  };
}

function normalizeImportedCsvRow(row) {
  const oldBuiltIn = getCell(row, "builtInFields");
  const oldCustom = getCell(row, "customFields");

  if (oldBuiltIn || oldCustom) {
    return normalizeImportedApplication({
      seekerType: getCell(row, "seekerType", "Seeker Type") || "General Job Seeker",
      company: getCell(row, "company", "Company"),
      role: getCell(row, "role", "Role"),
      status: getCell(row, "status", "Status") || "Applied",
      source: getCell(row, "source", "Source"),
      appliedDate: getCell(row, "appliedDate", "Applied Date"),
      followUpDate: getCell(row, "followUpDate", "Follow-up Date"),
      interviewDate: getCell(row, "interviewDate", "Interview Date"),
      locationMode: getCell(row, "locationMode", "Location / Mode"),
      notes: getCell(row, "notes", "Notes"),
      builtInFields: safeJson(oldBuiltIn, {}),
      customFields: safeJson(oldCustom, [])
    });
  }

  const seekerType = getCell(row, "Seeker Type", "seekerType") || "General Job Seeker";
  const builtInFields = {};

  getAllBuiltInCsvColumns().forEach((field) => {
    const value = getCell(row, field.label, toTitleCase(field.key), field.key);
    if (value) builtInFields[field.key] = value;
  });

  const customFields = [];
  for (let index = 1; index <= CUSTOM_FIELD_CSV_SLOTS; index += 1) {
    const label = getCell(row, `Custom ${index} Label`);
    if (!label) continue;

    const type = getCell(row, `Custom ${index} Type`) || "text";
    const options = parseOptionsInput(getCell(row, `Custom ${index} Options`));
    const rawValue = getCell(row, `Custom ${index} Value`);

    customFields.push(normalizeCustomField({
      label,
      type,
      options,
      value: type === "multi-select" ? splitMultiValue(rawValue) : rawValue
    }));
  }

  return normalizeImportedApplication({
    seekerType,
    company: getCell(row, "Company", "company"),
    role: getCell(row, "Role", "role"),
    status: getCell(row, "Status", "status") || "Applied",
    source: getCell(row, "Source", "source"),
    appliedDate: getCell(row, "Applied Date", "appliedDate"),
    followUpDate: getCell(row, "Follow-up Date", "followUpDate"),
    interviewDate: getCell(row, "Interview Date", "interviewDate"),
    locationMode: getCell(row, "Location / Mode", "locationMode"),
    notes: getCell(row, "Notes", "notes"),
    builtInFields,
    customFields
  });
}

function applicationsToCSVRows(items) {
  const headers = buildCsvHeaders();

  return items.map((item) => {
    const row = emptyCsvRow(headers);

    row["Company"] = item.company || "";
    row["Role"] = item.role || "";
    row["Seeker Type"] = item.seekerType || "";
    row["Status"] = item.status || "";
    row["Source"] = item.source || "";
    row["Applied Date"] = item.appliedDate || "";
    row["Follow-up Date"] = item.followUpDate || "";
    row["Interview Date"] = item.interviewDate || "";
    row["Location / Mode"] = item.locationMode || "";
    row["Notes"] = item.notes || "";

    getAllBuiltInCsvColumns().forEach((field) => {
      row[field.label] = item.builtInFields?.[field.key] || "";
    });

    (item.customFields || []).slice(0, CUSTOM_FIELD_CSV_SLOTS).forEach((field, index) => {
      const slot = index + 1;
      row[`Custom ${slot} Label`] = field.label || "";
      row[`Custom ${slot} Type`] = field.type || "text";
      row[`Custom ${slot} Value`] = valueToCsvText(field.value);
      row[`Custom ${slot} Options`] = Array.isArray(field.options) ? field.options.join(" | ") : "";
    });

    return row;
  });
}

function buildBlankTemplateRows() {
  return [emptyCsvRow(buildCsvHeaders())];
}

function buildSampleTemplateRows() {
  const headers = buildCsvHeaders();
  const row = emptyCsvRow(headers);

  row["Company"] = "Nova Labs";
  row["Role"] = "Product Designer Intern";
  row["Seeker Type"] = "Fresh Graduate";
  row["Status"] = "Interview";
  row["Source"] = "LinkedIn";
  row["Applied Date"] = "2026-03-05";
  row["Follow-up Date"] = "2026-03-11";
  row["Interview Date"] = "2026-03-14";
  row["Location / Mode"] = "Remote";
  row["Notes"] = "Case study pending";
  row["Employment type"] = "Internship";
  row["Portfolio / profile link"] = "https://portfolio.example";
  row["Recruiter contact"] = "Alex";
  row["Campus placement"] = "No";
  row["CGPA / GPA"] = "3.6";
  row["Referral status"] = "Requested";
  row["Custom 1 Label"] = "Visa required";
  row["Custom 1 Type"] = "yesno";
  row["Custom 1 Value"] = "No";
  row["Custom 1 Options"] = "";

  return [row];
}

function buildCsvHeaders() {
  const customHeaders = [];

  for (let index = 1; index <= CUSTOM_FIELD_CSV_SLOTS; index += 1) {
    customHeaders.push(`Custom ${index} Label`, `Custom ${index} Type`, `Custom ${index} Value`, `Custom ${index} Options`);
  }

  return [
    ...CSV_BASE_HEADERS,
    ...getAllBuiltInCsvColumns().map((field) => field.label),
    ...customHeaders
  ];
}

function emptyCsvRow(headers) {
  return headers.reduce((row, header) => {
    row[header] = "";
    return row;
  }, {});
}

function getAllBuiltInCsvColumns() {
  const map = new Map();

  Object.values(BUILT_IN_FIELDS).flat().forEach((field) => {
    if (!map.has(field.label)) {
      map.set(field.label, field);
    }
  });

  return Array.from(map.values());
}

function valueToCsvText(value) {
  if (Array.isArray(value)) return value.join(" | ");
  return String(value ?? "");
}

function getCell(row, ...names) {
  const lookup = Object.entries(row).reduce((acc, [key, value]) => {
    acc[normalizeHeader(key)] = value;
    return acc;
  }, {});

  for (const name of names) {
    const value = lookup[normalizeHeader(name)];
    if (value !== undefined && value !== null && String(value).trim() !== "") {
      return String(value).trim();
    }
  }

  return "";
}

function normalizeHeader(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function toTitleCase(value) {
  return String(value || "")
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (char) => char.toUpperCase())
    .trim();
}

function parseCSV(text) {
  const cleanText = String(text || "").trim();
  if (!cleanText) return [];

  const lines = cleanText.split(/\r?\n/);
  const headers = splitCsvLine(lines[0]).map((header) => header.trim());

  return lines.slice(1).filter((line) => line.trim()).map((line) => {
    const values = splitCsvLine(line);
    const row = {};
    headers.forEach((header, index) => {
      row[header] = values[index] || "";
    });
    return row;
  });
}

function splitCsvLine(line) {
  const output = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      output.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  output.push(current);
  return output;
}

function downloadCSV(rows, filename) {
  const safeRows = rows.length ? rows : buildBlankTemplateRows();
  const headers = buildCsvHeaders();

  const csv = [
    headers.map(csvEscape).join(","),
    ...safeRows.map((row) =>
      headers.map((header) => csvEscape(row[header] ?? "")).join(",")
    )
  ].join("\n");

  downloadText(csv, filename, "text/csv;charset=utf-8;");
}

function csvEscape(value) {
  const text = String(value ?? "");

  if (/[",\n]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }

  return text;
}

function downloadText(text, filename, mime) {
  const blob = new Blob([text], { type: mime });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function safeJson(value, fallback) {
  try {
    return JSON.parse(value || "");
  } catch {
    return fallback;
  }
}

function createId() {
  return `app_${Math.random().toString(36).slice(2, 10)}_${Date.now().toString(36)}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}