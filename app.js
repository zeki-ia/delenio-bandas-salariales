(function () {
  const areaFilter = document.getElementById("areaFilter");
  const industryFilter = document.getElementById("industryFilter");
  const sortSelect = document.getElementById("sortSelect");
  const rolesGrid = document.getElementById("rolesGrid");
  const emptyState = document.getElementById("emptyState");
  const resultsMeta = document.getElementById("resultsMeta");
  const areaTabsEl = document.getElementById("areaTabs");

  const arsFmt = new Intl.NumberFormat("es-AR", { maximumFractionDigits: 0 });

  function fmtARS(n) {
    if (n === null || n === undefined) return "s/d";
    return "$" + arsFmt.format(n);
  }

  const industryLabelById = {};
  INDUSTRY_OPTIONS.forEach((ind) => {
    industryLabelById[ind.id] = ind.label;
  });

  // Flatten dataset: one row per role, tagged with its area.
  const allRoles = [];
  DATA.areas.forEach((area) => {
    area.roles.forEach((role) => {
      const valid = role.entries.filter((e) => e.min || e.max);
      if (!valid.length) return;
      const mins = valid.map((e) => e.min ?? e.max);
      const maxs = valid.map((e) => e.max ?? e.min);
      allRoles.push({
        areaId: area.id,
        areaLabel: area.label,
        name: role.name,
        entries: role.entries,
        industries: role.industries || null,
        randstadByIndustry: role.randstadByIndustry || null,
        overallMin: Math.min(...mins),
        overallMax: Math.max(...maxs),
      });
    });
  });

  // Populate area <select>
  DATA.areas.forEach((area) => {
    const opt = document.createElement("option");
    opt.value = area.id;
    opt.textContent = area.label;
    areaFilter.appendChild(opt);
  });

  // Populate industry <select> (dato disponible solo para roles con banda Randstad)
  INDUSTRY_OPTIONS.forEach((ind) => {
    const opt = document.createElement("option");
    opt.value = ind.id;
    opt.textContent = ind.label;
    industryFilter.appendChild(opt);
  });

  // Quick-select area tabs
  function renderTabs(activeId) {
    areaTabsEl.innerHTML = "";
    const allTab = document.createElement("button");
    allTab.className = "area-tab" + (activeId === "all" ? " active" : "");
    allTab.textContent = "Todas";
    allTab.addEventListener("click", () => {
      areaFilter.value = "all";
      update();
    });
    areaTabsEl.appendChild(allTab);

    DATA.areas.forEach((area) => {
      const tab = document.createElement("button");
      tab.className = "area-tab" + (activeId === area.id ? " active" : "");
      tab.textContent = area.label;
      tab.addEventListener("click", () => {
        areaFilter.value = area.id;
        update();
      });
      areaTabsEl.appendChild(tab);
    });
  }

  // Si hay una industria elegida y el rol tiene banda Randstad para esa industria puntual,
  // reemplaza las filas agregadas de Randstad (Buenos Aires / Nacional entre industrias)
  // por el rango específico de esa industria.
  function entriesForDisplay(role, industryId) {
    const byIndustry = industryId !== "all" && role.randstadByIndustry ? role.randstadByIndustry[industryId] : null;
    if (!byIndustry) return role.entries;

    const [baMin, baMax, natMin, natMax] = byIndustry;
    const industryLabel = industryLabelById[industryId] || industryId;
    const swapped = [
      { fuente: "Randstad Arg. jul. 2026", segmento: `Buenos Aires · ${industryLabel} (Semi Senior)`, min: baMin, max: baMax },
      { fuente: "Randstad Arg. jul. 2026", segmento: `Nacional · ${industryLabel} (Semi Senior)`, min: natMin, max: natMax },
    ];
    return role.entries.filter((e) => !e.fuente.startsWith("Randstad")).concat(swapped);
  }

  function renderCard(role, industryId) {
    const card = document.createElement("article");
    card.className = "role-card";

    const entries = entriesForDisplay(role, industryId);
    const mins = entries.map((e) => e.min ?? e.max);
    const maxs = entries.map((e) => e.max ?? e.min);
    const overallMin = Math.min(...mins);
    const overallMax = Math.max(...maxs);

    const head = document.createElement("div");
    head.className = "role-card-head";
    const h = document.createElement("h3");
    h.className = "role-name";
    h.textContent = role.name;
    const chip = document.createElement("span");
    chip.className = "role-area-chip";
    chip.textContent = role.areaLabel;
    head.appendChild(h);
    head.appendChild(chip);
    card.appendChild(head);

    const summary = document.createElement("div");
    summary.className = "range-summary";
    const amt = document.createElement("span");
    amt.className = "amt";
    amt.textContent =
      overallMin === overallMax ? fmtARS(overallMin) : `${fmtARS(overallMin)} – ${fmtARS(overallMax)}`;
    const lbl = document.createElement("span");
    lbl.className = "lbl";
    lbl.textContent =
      industryId === "all"
        ? "rango bruto mensual (ARS) entre fuentes"
        : `rango bruto mensual (ARS) · ${industryLabelById[industryId] || industryId}`;
    summary.appendChild(amt);
    summary.appendChild(lbl);
    card.appendChild(summary);

    const list = document.createElement("div");
    list.className = "entry-list";
    entries.forEach((e) => {
      const row = document.createElement("div");
      row.className = "entry-row";
      const range =
        e.min && e.max && e.min !== e.max
          ? `${fmtARS(e.min)} – ${fmtARS(e.max)}`
          : fmtARS(e.min ?? e.max);
      const usdBit = e.usd ? `<div class="entry-usd">≈ USD ${arsFmt.format(e.usd)}</div>` : "";
      row.innerHTML = `
        <div class="entry-left">
          <div class="entry-fuente">${e.fuente}</div>
          <div class="entry-segmento">${e.segmento}</div>
        </div>
        <div class="entry-right">
          <div class="entry-range">${range}</div>
          ${usdBit}
        </div>
      `;
      list.appendChild(row);
    });
    card.appendChild(list);

    return card;
  }

  function update() {
    const areaId = areaFilter.value;
    const industryId = industryFilter.value;
    const sortBy = sortSelect.value;

    renderTabs(areaId);

    let filtered = allRoles.filter((r) => areaId === "all" || r.areaId === areaId);
    if (industryId !== "all") {
      filtered = filtered.filter((r) => r.industries && r.industries.includes(industryId));
    }

    // Al filtrar por industria, ordenar según el rango específico de esa industria, no el agregado.
    const sortRange =
      industryId === "all"
        ? (r) => [r.overallMin, r.overallMax]
        : (r) => {
            const entries = entriesForDisplay(r, industryId);
            const mins = entries.map((e) => e.min ?? e.max);
            const maxs = entries.map((e) => e.max ?? e.min);
            return [Math.min(...mins), Math.max(...maxs)];
          };

    if (sortBy === "alpha") {
      filtered.sort((a, b) => a.name.localeCompare(b.name, "es"));
    } else if (sortBy === "min-desc") {
      filtered.sort((a, b) => sortRange(b)[0] - sortRange(a)[0]);
    } else if (sortBy === "max-desc") {
      filtered.sort((a, b) => sortRange(b)[1] - sortRange(a)[1]);
    }

    rolesGrid.innerHTML = "";
    if (!filtered.length) {
      emptyState.hidden = false;
      resultsMeta.textContent = "";
      return;
    }
    emptyState.hidden = true;
    const countText = `${filtered.length} rol${filtered.length === 1 ? "" : "es"} encontrado${filtered.length === 1 ? "" : "s"}`;
    resultsMeta.textContent =
      industryId === "all"
        ? countText
        : `${countText} · el corte por industria proviene solo de Randstad`;

    const frag = document.createDocumentFragment();
    filtered.forEach((role) => frag.appendChild(renderCard(role, industryId)));
    rolesGrid.appendChild(frag);
  }

  areaFilter.addEventListener("change", update);
  industryFilter.addEventListener("change", update);
  sortSelect.addEventListener("change", update);

  update();

  // View tabs: Panorama del mercado <-> Bandas salariales
  const viewTabs = document.querySelectorAll(".view-tab");
  const viewPanels = {
    panorama: document.getElementById("panelPanorama"),
    bandas: document.getElementById("panelBandas"),
  };
  viewTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      viewTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      Object.entries(viewPanels).forEach(([key, panel]) => {
        panel.classList.toggle("active", key === tab.dataset.panel);
      });
    });
  });
})();
