/* ==========================================================================
   Delenio · Bandas Salariales Argentina 2026
   Dataset consolidado a partir de informes gratuitos de mercado (ver fuentes
   en el disclaimer del sitio). Todos los valores son sueldos BRUTOS
   mensuales en pesos argentinos (ARS), salvo que se indique lo contrario.
   ========================================================================== */

// ---- Goncy "Salarios IT Argentina 2026" (planilla, 1 valor promedio por celda) ----
// [Rol, Seniority, SueldoPromedioARS, SueldoPromedioUSD]
const GONCY_IT = [
  ["Android Developer", "Junior (1 a 3 años)", 2238600, 800],
  ["Android Developer", "Semi Senior (3 a 5 años)", 3931200, 3053],
  ["Android Developer", "Senior (+5 años)", 3767400, 4653],
  ["Backend Developer", "Iniciante / Trainee (hasta 1 año)", 1698689, 1600],
  ["Backend Developer", "Junior (1 a 3 años)", 2214111, 1501],
  ["Backend Developer", "Semi Senior (3 a 5 años)", 3189899, 2986],
  ["Backend Developer", "Senior (+5 años)", 5288359, 6783],
  ["Blockchain Developer", "Junior (1 a 3 años)", null, 2000],
  ["Blockchain Developer", "Semi Senior (3 a 5 años)", null, 7360],
  ["Blockchain Developer", "Senior (+5 años)", null, 7511],
  ["Business Analyst", "Iniciante / Trainee (hasta 1 año)", 2047500, 1956],
  ["Business Analyst", "Junior (1 a 3 años)", 2186855, 1900],
  ["Business Analyst", "Semi Senior (3 a 5 años)", 2959740, 2100],
  ["Business Analyst", "Senior (+5 años)", 3887988, 3517],
  ["Cybersecurity Engineer", "Iniciante / Trainee (hasta 1 año)", 1504230, 943],
  ["Cybersecurity Engineer", "Junior (1 a 3 años)", 2230794, 2000],
  ["Cybersecurity Engineer", "Semi Senior (3 a 5 años)", 3510593, 3204],
  ["Cybersecurity Engineer", "Senior (+5 años)", 4982250, 8650],
  ["Data Analyst", "Iniciante / Trainee (hasta 1 año)", 1261711, 1359],
  ["Data Analyst", "Junior (1 a 3 años)", 2022745, 2070],
  ["Data Analyst", "Semi Senior (3 a 5 años)", 2866213, 2650],
  ["Data Analyst", "Senior (+5 años)", 4286737, 4275],
  ["Data Engineer", "Iniciante / Trainee (hasta 1 año)", 1383200, 1250],
  ["Data Engineer", "Junior (1 a 3 años)", 2045423, 2163],
  ["Data Engineer", "Semi Senior (3 a 5 años)", 3550921, 3488],
  ["Data Engineer", "Senior (+5 años)", 4754789, 6111],
  ["Data Scientist", "Iniciante / Trainee (hasta 1 año)", 1550640, 1200],
  ["Data Scientist", "Junior (1 a 3 años)", 2630536, 2550],
  ["Data Scientist", "Semi Senior (3 a 5 años)", 4028786, 3660],
  ["Data Scientist", "Senior (+5 años)", 5835960, 6796],
  ["DBA", "Iniciante / Trainee (hasta 1 año)", 873600, null],
  ["DBA", "Junior (1 a 3 años)", 2402400, null],
  ["DBA", "Semi Senior (3 a 5 años)", 3166800, 2300],
  ["DBA", "Senior (+5 años)", 3281460, 6500],
  ["Design Engineer", "Junior (1 a 3 años)", 2702700, null],
  ["Design Engineer", "Semi Senior (3 a 5 años)", null, 4725],
  ["Design Engineer", "Senior (+5 años)", 4586400, 8850],
  ["DevOps Engineer", "Iniciante / Trainee (hasta 1 año)", 1965600, null],
  ["DevOps Engineer", "Junior (1 a 3 años)", 1801800, 2060],
  ["DevOps Engineer", "Semi Senior (3 a 5 años)", 2992584, 3252],
  ["DevOps Engineer", "Senior (+5 años)", 5566773, 5956],
  ["Frontend Developer", "Iniciante / Trainee (hasta 1 año)", 668959, 1000],
  ["Frontend Developer", "Junior (1 a 3 años)", 1881906, 1712],
  ["Frontend Developer", "Semi Senior (3 a 5 años)", 3201957, 2931],
  ["Frontend Developer", "Senior (+5 años)", 4970021, 4516],
  ["Fullstack Developer", "Iniciante / Trainee (hasta 1 año)", 1227481, 1403],
  ["Fullstack Developer", "Junior (1 a 3 años)", 1840098, 1604],
  ["Fullstack Developer", "Semi Senior (3 a 5 años)", 2762774, 2549],
  ["Fullstack Developer", "Senior (+5 años)", 4600785, 5461],
  ["Functional Analyst", "Iniciante / Trainee (hasta 1 año)", 1325819, null],
  ["Functional Analyst", "Junior (1 a 3 años)", 1937610, null],
  ["Functional Analyst", "Semi Senior (3 a 5 años)", 2817487, 2675],
  ["Functional Analyst", "Senior (+5 años)", 3846509, 6154],
  ["iOS Developer", "Junior (1 a 3 años)", 2020200, 1200],
  ["iOS Developer", "Semi Senior (3 a 5 años)", 3731610, 3000],
  ["iOS Developer", "Senior (+5 años)", 8736000, 5640],
  ["Product Designer", "Semi Senior (3 a 5 años)", 3385200, 3385],
  ["Product Designer", "Senior (+5 años)", 3822000, 5389],
  ["Product Engineer", "Junior (1 a 3 años)", 2609880, 1595],
  ["Product Engineer", "Semi Senior (3 a 5 años)", 3795500, 2167],
  ["Product Engineer", "Senior (+5 años)", 5023200, 5637],
  ["Product Manager", "Junior (1 a 3 años)", 1856400, null],
  ["Product Manager", "Semi Senior (3 a 5 años)", 6588400, 2730],
  ["Product Manager", "Senior (+5 años)", 6770400, 6313],
  ["Product Owner", "Junior (1 a 3 años)", 2602600, null],
  ["Product Owner", "Semi Senior (3 a 5 años)", 3809867, 2500],
  ["Product Owner", "Senior (+5 años)", 4131400, 4833],
  ["Project Manager", "Iniciante / Trainee (hasta 1 año)", 3744577, 1400],
  ["Project Manager", "Junior (1 a 3 años)", 2911987, null],
  ["Project Manager", "Semi Senior (3 a 5 años)", 4062586, 3021],
  ["Project Manager", "Senior (+5 años)", 6677788, 4913],
  ["QA Automation Engineer", "Iniciante / Trainee (hasta 1 año)", 1143324, null],
  ["QA Automation Engineer", "Junior (1 a 3 años)", 2231320, 2183],
  ["QA Automation Engineer", "Semi Senior (3 a 5 años)", 3008957, 2000],
  ["QA Automation Engineer", "Senior (+5 años)", 4803243, 4154],
  ["QA Manual Tester", "Iniciante / Trainee (hasta 1 año)", 1212120, null],
  ["QA Manual Tester", "Junior (1 a 3 años)", 1630455, 1150],
  ["QA Manual Tester", "Semi Senior (3 a 5 años)", 1940605, 1820],
  ["QA Manual Tester", "Senior (+5 años)", 3538080, 3310],
  ["Scrum Master", "Junior (1 a 3 años)", 1240056, null],
  ["Scrum Master", "Semi Senior (3 a 5 años)", null, 2400],
  ["Scrum Master", "Senior (+5 años)", 3330600, null],
  ["Solutions Architect", "Iniciante / Trainee (hasta 1 año)", 542290, 3000],
  ["Solutions Architect", "Junior (1 a 3 años)", 3822000, 1900],
  ["Solutions Architect", "Semi Senior (3 a 5 años)", 4368000, 2750],
  ["Solutions Architect", "Senior (+5 años)", 7045108, 8565],
  ["Sysadmin", "Iniciante / Trainee (hasta 1 año)", 1157520, null],
  ["Sysadmin", "Junior (1 a 3 años)", 1201200, 2800],
  ["Sysadmin", "Semi Senior (3 a 5 años)", 2285157, null],
  ["Sysadmin", "Senior (+5 años)", 4277025, 4900],
  ["Technical Support", "Iniciante / Trainee (hasta 1 año)", 1246046, 1000],
  ["Technical Support", "Junior (1 a 3 años)", 1751974, 2167],
  ["Technical Support", "Semi Senior (3 a 5 años)", 1750393, 1740],
  ["Technical Support", "Senior (+5 años)", 2535000, 3667],
  ["UX/UI Designer", "Iniciante / Trainee (hasta 1 año)", 1556100, null],
  ["UX/UI Designer", "Junior (1 a 3 años)", 2065736, 1800],
  ["UX/UI Designer", "Semi Senior (3 a 5 años)", 2730000, 2886],
  ["UX/UI Designer", "Senior (+5 años)", 3221401, 2791],
];

function buildGoncyEntries(roleName) {
  return GONCY_IT.filter((r) => r[0] === roleName).map((r) => ({
    fuente: "Goncy IT 2026",
    segmento: r[1],
    min: r[2],
    max: r[2],
    usd: r[3],
  }));
}

const GONCY_ROLE_NAMES = [...new Set(GONCY_IT.map((r) => r[0]))];

// ---- Helper para bandas "escalera" (MyDNA: por nivel x tamaño de empresa) ----
function ladderRoles(area, ladder) {
  const segLabels = [
    "Empresa pequeña (fact. < USD 30M)",
    "Empresa mediana (fact. USD 30-100M)",
    "Empresa grande (fact. > USD 100M)",
  ];
  return ladder.map(([nivel, porSegmento]) => ({
    name: `${nivel} — nivel general (${area})`,
    entries: porSegmento.map(([min, max], i) => ({
      fuente: "MyDNA 2S 2026",
      segmento: segLabels[i],
      min,
      max,
    })),
  }));
}

const DATA = {
  areas: [
    {
      id: "finanzas",
      label: "Finanzas y Administración",
      roles: [
        { name: "Gerente de administración y finanzas", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 8000000, max: 11000000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 11000000, max: 15000000 },
        ]},
        { name: "Gerente contable", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 5800000, max: 8200000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 8000000, max: 12500000 },
        ]},
        { name: "Jefe contable", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 5000000, max: 6500000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 6000000, max: 7500000 },
        ]},
        { name: "Gerente de finanzas y tesorería", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 6200000, max: 9000000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 8500000, max: 13000000 },
        ]},
        { name: "Jefe de finanzas y tesorería", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 5500000, max: 7000000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 6500000, max: 8500000 },
        ]},
        { name: "Gerente de control de gestión", entries: [
          { fuente: "Michael Page 2026", segmento: "Grande", min: 9000000, max: 12500000 },
        ]},
        { name: "Jefe de control de gestión", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 5200000, max: 7000000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 6500000, max: 8200000 },
        ]},
        { name: "Gerente de impuestos", entries: [
          { fuente: "Michael Page 2026", segmento: "Grande", min: 8000000, max: 12500000 },
        ]},
        { name: "Gerente de créditos y cobranzas", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 5500000, max: 7000000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 7000000, max: 9500000 },
        ]},
        ...ladderRoles("Finanzas", [
          ["Analista Senior", [[2303762, 3731766], [2715828, 4617620], [3481311, 5840167]]],
          ["Jefe", [[3710292, 5953297], [4354996, 7498759], [5609534, 9577063]]],
          ["Gerente", [[3744939, 8082347], [5129048, 9786499], [6135103, 12956720]]],
          ["CFO / Director de Finanzas", [[8869459, 17504501], [10647876, 20897288], [11559053, 26715364]]],
        ]),
      ],
    },
    {
      id: "rrhh",
      label: "Recursos Humanos",
      roles: [
        { name: "Gerente de RR.HH. / HR Manager", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 5500000, max: 8200000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 7500000, max: 12500000 },
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 5000000, max: 7500000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 6800000, max: 11300000 },
        ]},
        { name: "Jefe de RR.HH.", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 4400000, max: 6000000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 5500000, max: 7500000 },
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 4000000, max: 5500000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 5000000, max: 7000000 },
        ]},
        { name: "HRBP (HR Business Partner)", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 3800000, max: 5500000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 5000000, max: 7500000 },
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 3500000, max: 5000000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 4600000, max: 6800000 },
        ]},
        { name: "Gerente Talent Acquisition", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 4500000, max: 7000000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 6000000, max: 8500000 },
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 4200000, max: 6000000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 5500000, max: 8000000 },
        ]},
        { name: "Jefe Talent Acquisition", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 3800000, max: 5500000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 5000000, max: 7100000 },
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 3500000, max: 5000000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 4500000, max: 6500000 },
        ]},
        { name: "Gerente de Relaciones Laborales", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 5200000, max: 7400000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 7000000, max: 10000000 },
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 5200000, max: 7400000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 7000000, max: 10000000 },
        ]},
        { name: "Gerente de Compensaciones y Beneficios / Payroll", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 4700000, max: 6600000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 6100000, max: 9200000 },
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 4300000, max: 6000000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 6500000, max: 9000000 },
        ]},
        { name: "Analista de RR.HH.", entries: [
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 2600000, max: 3200000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 3200000, max: 3600000 },
        ]},
        ...ladderRoles("RR.HH.", [
          ["Analista Senior", [[1661418, 2983593], [2059034, 3658307], [2858172, 4637355]]],
          ["Jefe", [[3163807, 4806800], [3578484, 5800280], [4698810, 7721365]]],
          ["Gerente", [[3307076, 6174149], [4104651, 7798902], [4542141, 9834222]]],
          ["CHRO / Director de RR.HH.", [[7391371, 14434878], [8143083, 16500974], [9883729, 21473047]]],
        ]),
      ],
    },
    {
      id: "tecnologia",
      label: "Tecnología / IT",
      roles: [
        { name: "Gerente de sistemas / TI", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 7500000, max: 10000000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 10000000, max: 14000000 },
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 6500000, max: 9000000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 8000000, max: 12500000 },
        ]},
        { name: "Gerente de infraestructura", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 5800000, max: 8000000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 7000000, max: 9500000 },
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 5000000, max: 7000000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 6000000, max: 8500000 },
        ]},
        { name: "Data Manager", entries: [
          { fuente: "Michael Page 2026", segmento: "Grande", min: 8300000, max: 11000000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 7300000, max: 9000000 },
        ]},
        { name: "DevOps Engineer", entries: [
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 5200000, max: 5800000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 5800000, max: 8700000 },
          ...buildGoncyEntries("DevOps Engineer"),
        ]},
        { name: "Arquitecto de Software / Solutions Architect", entries: [
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 4500000, max: 5500000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 5500000, max: 7500000 },
          ...buildGoncyEntries("Solutions Architect"),
        ]},
        { name: "Backend Developer", entries: [
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 3800000, max: 4200000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 4200000, max: 5400000 },
          ...buildGoncyEntries("Backend Developer"),
        ]},
        { name: "QA / Testing", entries: [
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 3000000, max: 3800000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 3500000, max: 4200000 },
          ...buildGoncyEntries("QA Automation Engineer"),
          ...buildGoncyEntries("QA Manual Tester"),
        ]},
        { name: "Soporte Técnico / Help Desk", entries: [
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 1500000, max: 2000000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 1800000, max: 2500000 },
          ...buildGoncyEntries("Technical Support"),
        ]},
        ...GONCY_ROLE_NAMES
          .filter((n) => !["DevOps Engineer", "Solutions Architect", "Backend Developer", "QA Automation Engineer", "QA Manual Tester", "Technical Support"].includes(n))
          .map((n) => ({ name: n, entries: buildGoncyEntries(n) })),
        ...ladderRoles("Tecnología", [
          ["Analista Senior", [[2044362, 3530081], [2589628, 4582226], [3643450, 6093012]]],
          ["Jefe", [[3777720, 5882934], [4428734, 7357191], [5304249, 8425940]]],
          ["Gerente", [[4031025, 7821912], [4873110, 10019518], [6268947, 11811151]]],
          ["CIO / Director de Tecnología", [[8441644, 16874059], [9755920, 19840298], [12971318, 25832555]]],
        ]),
      ],
    },
    {
      id: "ingenieria",
      label: "Ingeniería y Operaciones",
      roles: [
        { name: "Gerente de planta", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 7500000, max: 10000000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 11000000, max: 14000000 },
        ]},
        { name: "Jefe de planta", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 5500000, max: 7000000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 7000000, max: 8000000 },
        ]},
        { name: "Gerente industrial / de operaciones", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 9000000, max: 12000000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 12000000, max: 15000000 },
        ]},
        { name: "Gerente de producción", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 7000000, max: 8700000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 8000000, max: 11000000 },
        ]},
        { name: "Jefe de producción", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 5400000, max: 6500000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 6300000, max: 8000000 },
        ]},
        { name: "Gerente de seguridad, higiene y medio ambiente", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 7000000, max: 9000000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 8700000, max: 12000000 },
        ]},
        { name: "Gerente de mantenimiento", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 7000000, max: 8700000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 8000000, max: 11000000 },
        ]},
        { name: "Jefe de mantenimiento", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 5000000, max: 6700000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 6500000, max: 7600000 },
        ]},
        { name: "Project Manager (ingeniería/industria)", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 5600000, max: 7700000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 8200000, max: 11900000 },
          ...buildGoncyEntries("Project Manager"),
        ]},
        ...ladderRoles("Ingeniería", [
          ["Analista Senior", [[2062407, 3264778], [2281291, 3938747], [3122484, 5035391]]],
          ["Jefe", [[3191409, 5521697], [3796561, 6975113], [4753985, 8743622]]],
          ["Gerente", [[3587226, 7486946], [4671421, 8719058], [4974886, 10844825]]],
          ["COO / Director de Operaciones", [[7810086, 14592682], [8629904, 18073244], [11587097, 25027296]]],
        ]),
      ],
    },
    {
      id: "ventas",
      label: "Ventas / Comercial",
      roles: [
        { name: "Gerente de ventas B2C", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 7500000, max: 10000000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 9000000, max: 14000000 },
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 6500000, max: 8900000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 8000000, max: 12000000 },
        ]},
        { name: "Gerente de ventas B2B", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 8000000, max: 13000000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 11000000, max: 15000000 },
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 6500000, max: 10000000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 9500000, max: 13500000 },
        ]},
        { name: "Gerente de canal B2C", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 6000000, max: 8000000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 6500000, max: 9000000 },
        ]},
        { name: "Key Account Manager", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana (B2C)", min: 4500000, max: 6000000 },
          { fuente: "Michael Page 2026", segmento: "Grande (B2C)", min: 5000000, max: 7000000 },
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 3900000, max: 5000000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 4500000, max: 6000000 },
        ]},
        { name: "Business Developer Manager B2B", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 4500000, max: 5500000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 5000000, max: 6500000 },
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 4200000, max: 5000000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 4800000, max: 6000000 },
        ]},
        { name: "Ingeniero de Ventas B2B", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 3500000, max: 5000000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 4500000, max: 6000000 },
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 3400000, max: 4500000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 4200000, max: 5500000 },
        ]},
        { name: "Jefe de Ventas", entries: [
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 4000000, max: 4500000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 5500000, max: 6300000 },
        ]},
        { name: "Analista Comercial", entries: [
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 2700000, max: 3000000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 3000000, max: 3700000 },
        ]},
        { name: "Ejecutivo de Cuentas", entries: [
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 2400000, max: 2800000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 2800000, max: 3500000 },
        ]},
        ...ladderRoles("Ventas y Marketing", [
          ["Analista Senior", [[1846663, 3168695], [2322281, 3794209], [2783567, 4946377]]],
          ["Jefe", [[3287593, 5257061], [3937494, 6446975], [4677031, 8657285]]],
          ["Gerente", [[3411457, 6657654], [4259934, 8405030], [4893458, 10496371]]],
          ["CMO / Director Comercial", [[7182928, 14382647], [9529321, 18110318], [11781009, 23035747]]],
        ]),
      ],
    },
    {
      id: "marketing",
      label: "Marketing",
      roles: [
        { name: "Gerente de Marketing B2C", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 7400000, max: 9000000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 8500000, max: 12000000 },
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 7000000, max: 8500000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 8000000, max: 11000000 },
        ]},
        { name: "Gerente de Marketing B2B", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 6000000, max: 7600000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 7400000, max: 9000000 },
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 5700000, max: 7200000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 7000000, max: 8500000 },
        ]},
        { name: "Gerente de E-Commerce", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 6400000, max: 7600000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 6900000, max: 8000000 },
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 6000000, max: 7200000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 6500000, max: 7600000 },
        ]},
        { name: "Gerente de Trade Marketing", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 5600000, max: 8000000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 7800000, max: 9000000 },
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 5300000, max: 7600000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 7400000, max: 8500000 },
        ]},
        { name: "Brand Manager B2C", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 5300000, max: 6800000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 6100000, max: 7400000 },
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 5000000, max: 6500000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 5800000, max: 7000000 },
        ]},
        { name: "Gerente de Business Intelligence / Planeamiento Comercial", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 4200000, max: 5300000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 5300000, max: 6800000 },
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 4000000, max: 5000000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 5000000, max: 6500000 },
        ]},
        { name: "Jefe de Marketing", entries: [
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 3900000, max: 4100000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 5400000, max: 6200000 },
        ]},
        { name: "Analista de Marketing Digital", entries: [
          { fuente: "Benchmark 2026", segmento: "PyME (hasta 250 emp.)", min: 2500000, max: 3200000 },
          { fuente: "Benchmark 2026", segmento: "Empresa grande (+250 emp.)", min: 3200000, max: 4100000 },
        ]},
        ...ladderRoles("Ventas y Marketing", [
          ["Analista Senior", [[1846663, 3168695], [2322281, 3794209], [2783567, 4946377]]],
          ["Jefe", [[3287593, 5257061], [3937494, 6446975], [4677031, 8657285]]],
          ["Gerente", [[3411457, 6657654], [4259934, 8405030], [4893458, 10496371]]],
          ["CMO / Director de Marketing", [[7182928, 14382647], [9529321, 18110318], [11781009, 23035747]]],
        ]),
      ],
    },
    {
      id: "supply",
      label: "Supply Chain y Compras",
      roles: [
        { name: "Gerente de Supply Chain", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 7500000, max: 10000000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 11000000, max: 14000000 },
        ]},
        { name: "Gerente de Compras", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 7000000, max: 8700000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 9000000, max: 12500000 },
        ]},
        { name: "Jefe de Compras", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 5000000, max: 6500000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 5700000, max: 7500000 },
        ]},
        { name: "Gerente de Logística", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 7000000, max: 9000000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 9000000, max: 12000000 },
        ]},
        { name: "Jefe de Logística", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 5000000, max: 6000000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 5500000, max: 7000000 },
        ]},
        { name: "Gerente de Comex", entries: [
          { fuente: "Michael Page 2026", segmento: "Pequeña/mediana", min: 6000000, max: 7300000 },
          { fuente: "Michael Page 2026", segmento: "Grande", min: 8200000, max: 11000000 },
        ]},
      ],
    },
    {
      id: "healthcare",
      label: "Healthcare & Life Sciences",
      roles: [
        { name: "Gerente de Acceso", entries: [
          { fuente: "Michael Page 2026", segmento: "Nacional", min: 9000000, max: 12000000 },
          { fuente: "Michael Page 2026", segmento: "Multinacional", min: 10000000, max: 14000000 },
        ]},
        { name: "Director de Unidad de Negocio", entries: [
          { fuente: "Michael Page 2026", segmento: "Nacional", min: 13000000, max: 17000000 },
          { fuente: "Michael Page 2026", segmento: "Multinacional", min: 15000000, max: 20000000 },
        ]},
        { name: "Gerente de Distrito", entries: [
          { fuente: "Michael Page 2026", segmento: "Nacional", min: 10000000, max: 14000000 },
          { fuente: "Michael Page 2026", segmento: "Multinacional", min: 11000000, max: 15000000 },
        ]},
        { name: "KAM (Key Account Manager)", entries: [
          { fuente: "Michael Page 2026", segmento: "Nacional", min: 8000000, max: 11000000 },
          { fuente: "Michael Page 2026", segmento: "Multinacional", min: 9000000, max: 13000000 },
        ]},
        { name: "Gerente de Producto", entries: [
          { fuente: "Michael Page 2026", segmento: "Nacional", min: 8000000, max: 11000000 },
          { fuente: "Michael Page 2026", segmento: "Multinacional", min: 8500000, max: 12000000 },
        ]},
        { name: "Director Médico", entries: [
          { fuente: "Michael Page 2026", segmento: "Nacional", min: 14000000, max: 18000000 },
          { fuente: "Michael Page 2026", segmento: "Multinacional", min: 15000000, max: 20000000 },
        ]},
        { name: "Medical Advisor / MSL", entries: [
          { fuente: "Michael Page 2026", segmento: "Nacional", min: 8000000, max: 12000000 },
          { fuente: "Michael Page 2026", segmento: "Multinacional", min: 9000000, max: 13000000 },
        ]},
        { name: "Gerente de Asuntos Regulatorios", entries: [
          { fuente: "Michael Page 2026", segmento: "Nacional", min: 9000000, max: 11000000 },
          { fuente: "Michael Page 2026", segmento: "Multinacional", min: 10000000, max: 13000000 },
        ]},
        { name: "Business Unit Manager (Medical Devices)", entries: [
          { fuente: "Michael Page 2026", segmento: "Nacional", min: 11000000, max: 15000000 },
          { fuente: "Michael Page 2026", segmento: "Multinacional", min: 13500000, max: 16000000 },
        ]},
        { name: "Gerente de Ventas (Medical Devices)", entries: [
          { fuente: "Michael Page 2026", segmento: "Nacional", min: 9000000, max: 11000000 },
          { fuente: "Michael Page 2026", segmento: "Multinacional", min: 10000000, max: 14000000 },
        ]},
        { name: "Gerente de Producto (Medical Devices)", entries: [
          { fuente: "Michael Page 2026", segmento: "Nacional", min: 6500000, max: 8500000 },
          { fuente: "Michael Page 2026", segmento: "Multinacional", min: 7000000, max: 9000000 },
        ]},
        { name: "KAM (Medical Devices)", entries: [
          { fuente: "Michael Page 2026", segmento: "Nacional", min: 7000000, max: 9000000 },
          { fuente: "Michael Page 2026", segmento: "Multinacional", min: 8000000, max: 11000000 },
        ]},
      ],
    },
  ],
};

// ---- Randstad Argentina · Reporte Salarial julio 2026 ----
// Bandas 'Semi Senior' por región e industria. Se resumen dos cortes:
// Buenos Aires (mín-máx entre industrias) y Nacional (mín-máx entre todas las regiones e industrias).
const RANDSTAD_MERGES = [
  // [areaId, nombreRolExistente, baMin, baMax, natMin, natMax]
  ["finanzas", "Gerente de administración y finanzas", 7925757, 14599141, 6538750, 18248926],
  ["finanzas", "Gerente de impuestos", 6849830, 9714610, 5651110, 12143263],
  ["finanzas", "Gerente de control de gestión", 6849945, 11312411, 5651205, 14140514],
  ["finanzas", "Gerente contable", 6856368, 12626617, 5656503, 15783271],
  ["finanzas", "Jefe de control de gestión", 5450395, 7796220, 4496576, 9745276],
  ["finanzas", "Jefe contable", 4892505, 6875348, 4036317, 8594185],
  ["supply", "Gerente de Compras", 8175458, 17427466, 6744753, 21784333],
  ["supply", "Gerente de Supply Chain", 9429396, 17415505, 7779252, 21769381],
  ["supply", "Jefe de Compras", 4674856, 10838643, 3856756, 13548304],
  ["supply", "Gerente de Comex", 7504849, 15613573, 6191500, 19516966],
  ["rrhh", "Gerente de RR.HH. / HR Manager", 7162023, 11679425, 5908669, 14599282],
  ["rrhh", "Jefe de RR.HH.", 4193009, 6759494, 3459233, 8449368],
  ["rrhh", "Analista de RR.HH.", 2526016, 4118218, 2083963, 5147773],
  ["rrhh", "HRBP (HR Business Partner)", 3615662, 6231570, 2982921, 7789462],
  ["supply", "Gerente de Logística", 7013877, 14591037, 5786449, 18238796],
  ["supply", "Jefe de Logística", 3987355, 8749417, 3289568, 10936772],
  ["ingenieria", "Gerente de mantenimiento", 7599497, 17098867, 6269585, 21373584],
  ["ingenieria", "Jefe de mantenimiento", 4749653, 11031527, 3918464, 13789409],
  ["ingenieria", "Jefe de producción", 4657756, 14856760, 3842649, 18570950],
  ["tecnologia", "Gerente de sistemas / TI", 7588239, 13607060, 6677650, 13607060],
  ["tecnologia", "DevOps Engineer", 5268624, 8063995, 4636389, 8063995],
  ["tecnologia", "Scrum Master", 4099204, 6131505, 3607299, 6131505],
  ["tecnologia", "Sysadmin", 3942438, 6777927, 3469345, 6777927],
  ["tecnologia", "Arquitecto de Software / Solutions Architect", 6206583, 9372250, 5461793, 9372250],
  ["tecnologia", "Backend Developer", 4067943, 6245303, 3579790, 6245303],
  ["tecnologia", "Functional Analyst", 3477572, 5761281, 3060264, 5761281],
  ["tecnologia", "QA / Testing", 3439121, 4557590, 3026426, 4557590],
  ["tecnologia", "DBA", 3820763, 7285303, 3362272, 7285303],
  ["tecnologia", "Frontend Developer", 3764468, 7017188, 3312732, 7017188],
  ["tecnologia", "Soporte Técnico / Help Desk", 2160619, 3203501, 1901345, 3203501],
  ["marketing", "Jefe de Marketing", 4482194, 7386711, 3585755, 9233388],
  ["marketing", "Analista de Marketing Digital", 3394228, 5013083, 2715383, 6266353],
  ["ventas", "Jefe de Ventas", 4547316, 7355791, 3637853, 9194739],
  ["ventas", "Key Account Manager", 3638393, 5129660, 2910714, 6412075],
  ["ventas", "Analista Comercial", 2954197, 4233764, 2363358, 5292205],
  ["ventas", "Ejecutivo de Cuentas", 2910676, 4321337, 2328541, 5401672],
];

const RANDSTAD_NEW_ROLES = [
  // [areaId, nombreRolNuevo, baMin, baMax, natMin, natMax]
  ["finanzas", "CFO Director de Administración y Finanzas", 16154505, 24888356, 13327466, 31110445],
  ["finanzas", "Controller", 6247945, 11108325, 5154555, 13885407],
  ["finanzas", "Gerente de Tesorería", 6045410, 8608087, 4987463, 10760109],
  ["finanzas", "Gerente de Cobranzas", 5494199, 10013446, 4532714, 12516807],
  ["finanzas", "Gerente de Auditoría", 6037944, 11302201, 4981304, 14127751],
  ["finanzas", "Gerente de Legales", 6711472, 10765943, 5536965, 13457429],
  ["finanzas", "Jefe de Legales", 4794655, 6738904, 3955590, 8423630],
  ["finanzas", "Jefe de Tesorería", 4451661, 6555995, 3672620, 8194994],
  ["finanzas", "Jefe de Impuestos", 5079573, 7221643, 4190647, 9027054],
  ["finanzas", "Jefe de Cobranzas", 3845436, 7396091, 3172485, 9245114],
  ["finanzas", "Jefe de Auditoría", 4377453, 7074840, 3611399, 8843550],
  ["finanzas", "Jefe de Administración y finanzas", 4802205, 6868921, 3961819, 8586151],
  ["finanzas", "Abogado Corporativo", 2592635, 4158275, 2138924, 5197844],
  ["finanzas", "Analista de Contabilidad", 2404938, 3857401, 1984074, 4821752],
  ["finanzas", "Analista de Auditoría", 3101534, 4921979, 2558766, 6152473],
  ["finanzas", "Analista de Control de Gestión", 3127789, 4656420, 2580426, 5820525],
  ["finanzas", "Analista de Impuestos", 2513063, 4040684, 2073277, 5050855],
  ["finanzas", "Analista de Tesorería", 2621600, 3848265, 2162820, 4810331],
  ["finanzas", "Analista de Cobranzas", 2464398, 3488763, 2033128, 4360954],
  ["finanzas", "Analista de Administración y finanzas", 2345228, 3925266, 1934813, 4906582],
  ["ventas", "Director comercial", 14344742, 22605504, 11475794, 28256880],
  ["ventas", "Director de Expansión y Desarrollo", 12838813, 21498982, 10271050, 26873727],
  ["ventas", "Gerente comercial", 6325168, 11614411, 5060134, 14518014],
  ["marketing", "Director de marketing", 13095588, 21928962, 10476471, 27411202],
  ["marketing", "Gerente de Marketing", 7200528, 10514823, 5760423, 13143529],
  ["marketing", "Jefe de Comunicaciones", 4185108, 7797083, 3348086, 9746354],
  ["marketing", "Gerente de Comunicaciones", 5854608, 10396111, 4683686, 12995139],
  ["marketing", "Analista de Comunicaciones", 2954197, 4233764, 2363358, 5292205],
  ["marketing", "Analista de Marketing", 3393066, 5011923, 2714453, 6264903],
  ["marketing", "Community Manager", 3084528, 4479271, 2467623, 5599089],
  ["marketing", "Business Developer Manager", 4322225, 7221094, 3457780, 9026368],
  ["marketing", "Responsable de E-commerce", 4528459, 6795421, 3622767, 8494276],
  ["ingenieria", "Director de Operaciones", 13223977, 23283648, 10909781, 29104561],
  ["ingenieria", "Ingeniero de mantenimiento", 3432031, 7354351, 2831425, 9192939],
  ["ingenieria", "Gerente de Planta/producción", 7219500, 20101894, 5956088, 25127368],
  ["ingenieria", "Ingeniero de Producción", 3229771, 7844642, 2664561, 9805802],
  ["rrhh", "Director de Recursos Humanos", 12464866, 21947070, 10283515, 27433837],
  ["supply", "Jefe de Comex", 3747041, 8224452, 3091309, 10280565],
  ["supply", "Jefe de Supply Chain", 5113123, 10838641, 4218327, 13548302],
  ["supply", "Analista de Compras", 2826192, 5726221, 2331608, 7157776],
  ["supply", "Jefe de Planificación y Demanda", 5522173, 11703225, 4555793, 14629031],
  ["supply", "Analista de Planificación y Demanda", 3056425, 6181814, 2521551, 7727267],
  ["supply", "Analista de Comex", 2567452, 5619835, 2118148, 7024794],
  ["supply", "Ingeniero de Logística", 2567452, 5619835, 2118148, 7024794],
  ["calidad", "Gerente de Calidad", 7354351, 18998741, 6067340, 23748427],
  ["calidad", "Jefe de Calidad", 4559698, 12159194, 3761751, 15198993],
  ["calidad", "Analista de Calidad", 3229771, 6864061, 2664561, 8580077],
  ["tecnologia", "Responsable de Seguridad Informática", 6250548, 9230891, 5500483, 9230891],
  ["tecnologia", "Project Leader", 5023543, 7018566, 4420718, 7018566],
  ["tecnologia", "Analista BI", 3717098, 5019823, 3271046, 5019823],
  ["tecnologia", "Consultor SAP", 4448331, 7579711, 3914531, 7579711],
  ["tecnologia", "Desarrollador Mobile", 3989868, 7343719, 3511084, 7343719],
  ["tecnologia", "Administrador de Redes", 3439431, 5541123, 3026700, 5541123],
];

const AREA_LABELS_FOR_NEW = {
  calidad: "Calidad",
};

// Industrias relevadas por Randstad para cada rol (varía: la mayoría de 10,
// algunos roles operativos tienen menos porque el informe no las releva para ese rol).
const RANDSTAD_INDUSTRIES = [
  ["finanzas", "Gerente de administración y finanzas", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["finanzas", "Gerente de impuestos", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["finanzas", "Gerente de control de gestión", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["finanzas", "Gerente contable", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["finanzas", "Jefe de control de gestión", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["finanzas", "Jefe contable", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["supply", "Gerente de Compras", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["supply", "Gerente de Supply Chain", ["Automotriz", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["supply", "Jefe de Compras", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["supply", "Gerente de Comex", ["Automotriz", "Consumo masivo", "Gas, Petróleo y Minería", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["rrhh", "Gerente de RR.HH. / HR Manager", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["rrhh", "Jefe de RR.HH.", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["rrhh", "Analista de RR.HH.", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["rrhh", "HRBP (HR Business Partner)", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["supply", "Gerente de Logística", ["Automotriz", "Consumo masivo", "Gas, Petróleo y Minería", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["supply", "Jefe de Logística", ["Automotriz", "Consumo masivo", "Gas, Petróleo y Minería", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["ingenieria", "Gerente de mantenimiento", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["ingenieria", "Jefe de mantenimiento", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["ingenieria", "Jefe de producción", ["Automotriz", "Consumo masivo", "Gas, Petróleo y Minería", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["tecnologia", "Gerente de sistemas / TI", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["tecnologia", "DevOps Engineer", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["tecnologia", "Scrum Master", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["tecnologia", "Sysadmin", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["tecnologia", "Arquitecto de Software / Solutions Architect", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["tecnologia", "Backend Developer", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["tecnologia", "Functional Analyst", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["tecnologia", "QA / Testing", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["tecnologia", "DBA", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["tecnologia", "Frontend Developer", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["tecnologia", "Soporte Técnico / Help Desk", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["marketing", "Jefe de Marketing", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["marketing", "Analista de Marketing Digital", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["ventas", "Jefe de Ventas", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["ventas", "Key Account Manager", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["ventas", "Analista Comercial", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["ventas", "Ejecutivo de Cuentas", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["finanzas", "CFO Director de Administración y Finanzas", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["finanzas", "Controller", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["finanzas", "Gerente de Tesorería", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["finanzas", "Gerente de Cobranzas", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["finanzas", "Gerente de Auditoría", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["finanzas", "Gerente de Legales", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["finanzas", "Jefe de Legales", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["finanzas", "Jefe de Tesorería", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["finanzas", "Jefe de Impuestos", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["finanzas", "Jefe de Cobranzas", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["finanzas", "Jefe de Auditoría", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["finanzas", "Jefe de Administración y finanzas", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["finanzas", "Abogado Corporativo", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["finanzas", "Analista de Contabilidad", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["finanzas", "Analista de Auditoría", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["finanzas", "Analista de Control de Gestión", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["finanzas", "Analista de Impuestos", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["finanzas", "Analista de Tesorería", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["finanzas", "Analista de Cobranzas", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["finanzas", "Analista de Administración y finanzas", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["ventas", "Director comercial", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["ventas", "Director de Expansión y Desarrollo", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["ventas", "Gerente comercial", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["marketing", "Director de marketing", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["marketing", "Gerente de Marketing", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["marketing", "Jefe de Comunicaciones", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["marketing", "Gerente de Comunicaciones", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["marketing", "Analista de Comunicaciones", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["marketing", "Analista de Marketing", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["marketing", "Community Manager", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["marketing", "Business Developer Manager", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["marketing", "Responsable de E-commerce", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["ingenieria", "Director de Operaciones", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["ingenieria", "Ingeniero de mantenimiento", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["ingenieria", "Gerente de Planta/producción", ["Automotriz", "Consumo masivo", "Gas, Petróleo y Minería", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["ingenieria", "Ingeniero de Producción", ["Automotriz", "Consumo masivo", "Gas, Petróleo y Minería", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["rrhh", "Director de Recursos Humanos", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["supply", "Jefe de Comex", ["Automotriz", "Consumo masivo", "Gas, Petróleo y Minería", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["supply", "Jefe de Supply Chain", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["supply", "Analista de Compras", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["supply", "Jefe de Planificación y Demanda", ["Automotriz", "Consumo masivo", "Gas, Petróleo y Minería", "Lab & Pharma", "Manufactura", "Retail & Comercio"]],
  ["supply", "Analista de Planificación y Demanda", ["Automotriz", "Consumo masivo", "Gas, Petróleo y Minería", "Lab & Pharma", "Manufactura", "Retail & Comercio"]],
  ["supply", "Analista de Comex", ["Automotriz", "Consumo masivo", "Gas, Petróleo y Minería", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["supply", "Ingeniero de Logística", ["Automotriz", "Consumo masivo", "Gas, Petróleo y Minería", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["calidad", "Gerente de Calidad", ["Automotriz", "Consumo masivo", "Gas, Petróleo y Minería", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios"]],
  ["calidad", "Jefe de Calidad", ["Automotriz", "Consumo masivo", "Gas, Petróleo y Minería", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios"]],
  ["calidad", "Analista de Calidad", ["Automotriz", "Consumo masivo", "Gas, Petróleo y Minería", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["tecnologia", "Responsable de Seguridad Informática", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["tecnologia", "Project Leader", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["tecnologia", "Analista BI", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["tecnologia", "Consultor SAP", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["tecnologia", "Desarrollador Mobile", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
  ["tecnologia", "Administrador de Redes", ["Automotriz", "Banca & Serv Financieros", "Consumo masivo", "Gas, Petróleo y Minería", "IT", "Lab & Pharma", "Manufactura", "Retail & Comercio", "Servicios", "Transporte y logística"]],
];

const INDUSTRY_OPTIONS = [
  { id: "Automotriz", label: "Automotriz" },
  { id: "Banca & Serv Financieros", label: "Banca y Servicios Financieros" },
  { id: "Consumo masivo", label: "Consumo Masivo" },
  { id: "Gas, Petróleo y Minería", label: "Gas, Petróleo y Minería" },
  { id: "IT", label: "Tecnología / IT" },
  { id: "Lab & Pharma", label: "Laboratorios y Farma" },
  { id: "Manufactura", label: "Manufactura" },
  { id: "Retail & Comercio", label: "Retail y Comercio" },
  { id: "Servicios", label: "Servicios" },
  { id: "Transporte y logística", label: "Transporte y Logística" },
];


// Rangos min/max Buenos Aires y Nacional POR INDUSTRIA puntual (Randstad jul. 2026).
// [areaId, roleName, { industria: [baMin, baMax, natMin, natMax], ... }]
const RANDSTAD_BY_INDUSTRY = [
  ["finanzas", "Gerente de administración y finanzas", { "Automotriz": [8759704, 12695316, 7226756, 15869145], "Banca & Serv Financieros": [8342742, 12694820, 6882762, 15868525], "Consumo masivo": [7925778, 12131166, 6538767, 15163957], "Gas, Petróleo y Minería": [11387615, 14599141, 9394783, 18248926], "IT": [8759704, 12694871, 7226756, 15868589], "Lab & Pharma": [8342742, 12060071, 6882762, 15075089], "Manufactura": [8759704, 12694905, 7226756, 15868631], "Retail & Comercio": [7925757, 12131217, 6538750, 15164021], "Servicios": [7925757, 12131217, 6538750, 15164021], "Transporte y logística": [7930660, 12150002, 6542794, 15187502] }],
  ["finanzas", "Gerente de impuestos", { "Automotriz": [6874909, 8469501, 5671800, 10586876], "Banca & Serv Financieros": [7585601, 9714610, 6258121, 12143263], "Consumo masivo": [6874798, 8468580, 5671708, 10585725], "Gas, Petróleo y Minería": [6879728, 8471132, 5675776, 10588915], "IT": [7585526, 9216921, 6258059, 11521152], "Lab & Pharma": [7348708, 8967113, 6062684, 11208891], "Manufactura": [7585526, 9216921, 6258059, 11521152], "Retail & Comercio": [6875552, 8468348, 5672330, 10585435], "Servicios": [6874450, 8469682, 5671421, 10587103], "Transporte y logística": [6849830, 8441370, 5651110, 10551712] }],
  ["finanzas", "Gerente de control de gestión", { "Automotriz": [6882773, 10419349, 5678288, 13024186], "Banca & Serv Financieros": [7571329, 10798208, 6246346, 13497760], "Consumo masivo": [6882802, 10419332, 5678312, 13024165], "Gas, Petróleo y Minería": [6884600, 10419355, 5679795, 13024194], "IT": [7572480, 10798209, 6247296, 13497761], "Lab & Pharma": [7341560, 11014724, 6056787, 13768405], "Manufactura": [7571320, 11312411, 6246339, 14140514], "Retail & Comercio": [6885395, 10422809, 5680451, 13028511], "Servicios": [6882767, 10419346, 5678283, 13024183], "Transporte y logística": [6849945, 10424705, 5651205, 13030882] }],
  ["finanzas", "Gerente contable", { "Automotriz": [6856368, 11543529, 5656503, 14429411], "Banca & Serv Financieros": [7617711, 12052587, 6284612, 15065734], "Consumo masivo": [6856373, 11544719, 5656507, 14430899], "Gas, Petróleo y Minería": [6856373, 11545841, 5656507, 14432301], "IT": [7617711, 12052587, 6284612, 15065734], "Lab & Pharma": [7363692, 12266040, 6075046, 15332550], "Manufactura": [7617711, 12626617, 6284612, 15783271], "Retail & Comercio": [6856373, 11544719, 5656507, 14430899], "Servicios": [6856389, 11546449, 5656521, 14433061], "Transporte y logística": [6856373, 11583001, 5656507, 14478752] }],
  ["finanzas", "Jefe de control de gestión", { "Automotriz": [5753490, 6896169, 4746629, 8620212], "Banca & Serv Financieros": [6359019, 7496006, 5246191, 9370008], "Consumo masivo": [5753484, 6896185, 4746624, 8620232], "Gas, Petróleo y Minería": [5753600, 6896780, 4746720, 8620975], "IT": [6661524, 7796220, 5495757, 9745276], "Lab & Pharma": [6359019, 7496006, 5246191, 9370008], "Manufactura": [6661524, 7796220, 5495757, 9745276], "Retail & Comercio": [5753490, 6896169, 4746629, 8620212], "Servicios": [5450395, 6879612, 4496576, 8599515], "Transporte y logística": [5724506, 6879681, 4722718, 8599601] }],
  ["finanzas", "Jefe contable", { "Automotriz": [5149891, 6111278, 4248660, 7639097], "Banca & Serv Financieros": [5922051, 6875348, 4885692, 8594185], "Consumo masivo": [5149887, 6365752, 4248656, 7957190], "Gas, Petróleo y Minería": [5149887, 6365752, 4248656, 7957190], "IT": [5922051, 6875348, 4885692, 8594185], "Lab & Pharma": [5664664, 6620872, 4673348, 8276090], "Manufactura": [5922051, 6875348, 4885692, 8594185], "Retail & Comercio": [5149891, 6365752, 4248660, 7957190], "Servicios": [4892505, 5856802, 4036317, 7321003], "Transporte y logística": [5136913, 6120296, 4237954, 7650370] }],
  ["supply", "Gerente de Compras", { "Automotriz": [11610341, 17404356, 9578532, 21755445], "Banca & Serv Financieros": [11610329, 17415503, 9578522, 21769379], "Consumo masivo": [8175458, 12577871, 6744753, 15722338], "Gas, Petróleo y Minería": [11610344, 17427466, 9578534, 21784333], "IT": [9147524, 14731055, 7546707, 18413818], "Lab & Pharma": [10062258, 16205281, 8301363, 20256601], "Manufactura": [8575731, 14293035, 7074978, 17866294], "Retail & Comercio": [8175458, 12577871, 6744753, 15722338], "Servicios": [8573328, 13767341, 7072996, 17209176], "Transporte y logística": [8575731, 14293035, 7074978, 17866294] }],
  ["supply", "Gerente de Supply Chain", { "Automotriz": [11610340, 17415503, 9578531, 21769379], "Consumo masivo": [9433460, 15722337, 7782605, 19652921], "Gas, Petróleo y Minería": [11610296, 17415505, 9578494, 21769381], "IT": [10062189, 16204167, 8301306, 20255208], "Lab & Pharma": [10063756, 16203289, 8302598, 20254111], "Manufactura": [9429396, 15725537, 7779252, 19656921], "Retail & Comercio": [9433391, 15722337, 7782548, 19652921], "Servicios": [10062189, 16204167, 8301306, 20255208], "Transporte y logística": [9436037, 15722329, 7784730, 19652911] }],
  ["supply", "Jefe de Compras", { "Automotriz": [7740228, 10836319, 6385688, 13545399], "Banca & Serv Financieros": [7741392, 10838643, 6386649, 13548304], "Consumo masivo": [4674856, 6917829, 3856756, 8647286], "Gas, Petróleo y Minería": [7740228, 10836319, 6385688, 13545399], "IT": [5504200, 8200736, 4540965, 10250920], "Lab & Pharma": [5503303, 8200773, 4540225, 10250966], "Manufactura": [4677175, 6917829, 3858669, 8647286], "Retail & Comercio": [4674856, 6921311, 3856756, 8651639], "Servicios": [5143273, 7664272, 4243200, 9580340], "Transporte y logística": [4820945, 6917829, 3977280, 8647286] }],
  ["supply", "Gerente de Comex", { "Automotriz": [12197192, 15612406, 10062683, 19515507], "Consumo masivo": [7504849, 10018743, 6191500, 12523428], "Gas, Petróleo y Minería": [12197192, 15613573, 10062683, 19516966], "Lab & Pharma": [10164331, 15612414, 8385573, 19515517], "Manufactura": [8441036, 13112766, 6963855, 16390958], "Retail & Comercio": [7980616, 12685082, 6584008, 15856352], "Servicios": [7981785, 12685054, 6584973, 15856318], "Transporte y logística": [10164331, 15612406, 8385573, 19515507] }],
  ["rrhh", "Gerente de RR.HH. / HR Manager", { "Automotriz": [7523618, 10049716, 6206985, 12562144], "Banca & Serv Financieros": [8246996, 10845183, 6803772, 13556479], "Consumo masivo": [7162023, 10320984, 5908669, 12901230], "Gas, Petróleo y Minería": [7758858, 10323478, 6401058, 12904348], "IT": [8246996, 11679425, 6803772, 14599282], "Lab & Pharma": [7596312, 10865082, 6266957, 13581353], "Manufactura": [8246996, 11679344, 6803772, 14599180], "Retail & Comercio": [7758858, 10321152, 6401058, 12901440], "Servicios": [7523618, 10049716, 6206985, 12562144], "Transporte y logística": [7787249, 10299698, 6424480, 12874622] }],
  ["rrhh", "Jefe de RR.HH.", { "Automotriz": [4374940, 5566207, 3609326, 6957759], "Banca & Serv Financieros": [4531312, 6759127, 3738333, 8448909], "Consumo masivo": [4374128, 5566782, 3608656, 6958478], "Gas, Petróleo y Minería": [4376912, 5568580, 3610952, 6960725], "IT": [4531312, 6759127, 3738333, 8448909], "Lab & Pharma": [4376448, 6759494, 3610570, 8449368], "Manufactura": [4531312, 6759227, 3738333, 8449034], "Retail & Comercio": [4374998, 5567356, 3609373, 6959195], "Servicios": [4193009, 5367882, 3459233, 6709853], "Transporte y logística": [4374087, 5596613, 3608622, 6995766] }],
  ["rrhh", "Analista de RR.HH.", { "Automotriz": [2699286, 3726118, 2226911, 4657648], "Banca & Serv Financieros": [2868002, 3921951, 2366102, 4902439], "Consumo masivo": [2530656, 3531214, 2087791, 4414018], "Gas, Petróleo y Minería": [2531700, 3532408, 2088653, 4415510], "IT": [3036676, 4118218, 2505258, 5147773], "Lab & Pharma": [2868002, 3921954, 2366102, 4902443], "Manufactura": [3036676, 4118218, 2505258, 5147773], "Retail & Comercio": [2531758, 3529996, 2088700, 4412495], "Servicios": [2530586, 3529764, 2087734, 4412205], "Transporte y logística": [2526016, 3520890, 2083963, 4401113] }],
  ["rrhh", "HRBP (HR Business Partner)", { "Automotriz": [3616474, 5342380, 2983591, 6677975], "Banca & Serv Financieros": [4304216, 6231570, 3550978, 7789462], "Consumo masivo": [3615662, 5341672, 2982921, 6677091], "Gas, Petróleo y Minería": [3959862, 5564146, 3266886, 6955182], "IT": [4304216, 6231570, 3550978, 7789462], "Lab & Pharma": [4131844, 6009095, 3408772, 7511368], "Manufactura": [5165059, 6231570, 4261174, 7789462], "Retail & Comercio": [3615662, 5341672, 2982921, 6677091], "Servicios": [4132234, 5119195, 3409093, 6398994], "Transporte y logística": [3618623, 5334860, 2985364, 6668575] }],
  ["supply", "Gerente de Logística", { "Automotriz": [11400838, 14445010, 9405692, 18056263], "Consumo masivo": [7013877, 9363311, 5786449, 11704139], "Gas, Petróleo y Minería": [11399245, 14591033, 9404377, 18238792], "Lab & Pharma": [9499375, 14591036, 7836984, 18238795], "Manufactura": [7888819, 12254922, 6508276, 15318652], "Retail & Comercio": [7458520, 11855217, 6153279, 14819021], "Servicios": [7458495, 11855196, 6153258, 14818996], "Transporte y logística": [9499375, 14591037, 7836984, 18238796] }],
  ["supply", "Jefe de Logística", { "Automotriz": [6052876, 8749417, 4993622, 10936772], "Consumo masivo": [4159559, 6024189, 3431636, 7530236], "Gas, Petróleo y Minería": [5450457, 8713559, 4496627, 10891949], "Lab & Pharma": [5657825, 8276088, 4667706, 10345110], "Manufactura": [4475112, 6827414, 3691967, 8534268], "Retail & Comercio": [3987439, 5593890, 3289638, 6992362], "Servicios": [3987355, 5593903, 3289568, 6992379], "Transporte y logística": [4489455, 6440145, 3703801, 8050181] }],
  ["ingenieria", "Gerente de mantenimiento", { "Automotriz": [11171260, 17098867, 9216289, 21373584], "Banca & Serv Financieros": [10487305, 14059069, 8652027, 17573836], "Consumo masivo": [10487305, 11731723, 8652027, 14664653], "Gas, Petróleo y Minería": [12257252, 17098785, 10112233, 21373481], "Lab & Pharma": [11171260, 15388980, 9216289, 19236226], "Manufactura": [9024809, 14404983, 7445467, 18006229], "Retail & Comercio": [7599497, 11165401, 6269585, 13956751], "Servicios": [7599497, 12040463, 6269585, 15050578], "Transporte y logística": [10031335, 11731723, 8275852, 14664653] }],
  ["ingenieria", "Jefe de mantenimiento", { "Automotriz": [8580077, 11031527, 7078563, 13789409], "Banca & Serv Financieros": [4939673, 7979471, 4075230, 9974339], "Consumo masivo": [4902902, 7100780, 4044894, 8875974], "Gas, Petróleo y Minería": [8580077, 11031527, 7078563, 13789409], "Lab & Pharma": [6618916, 9613363, 5460606, 12016704], "Manufactura": [5393191, 7354351, 4449383, 9192939], "Retail & Comercio": [4939521, 6174583, 4075105, 7718229], "Servicios": [4941573, 7100772, 4076797, 8875965], "Transporte y logística": [4749653, 7098478, 3918464, 8873097] }],
  ["ingenieria", "Jefe de producción", { "Automotriz": [7979471, 12159194, 6583064, 15198993], "Consumo masivo": [4657756, 6618916, 3842649, 8273645], "Gas, Petróleo y Minería": [8942891, 14856760, 7377885, 18570950], "Lab & Pharma": [6373771, 8580077, 5258361, 10725096], "Manufactura": [5148046, 7109206, 4247138, 8886508], "Retail & Comercio": [4939677, 6174583, 4075234, 7718229], "Servicios": [7599497, 10867258, 6269585, 13584073], "Transporte y logística": [4749653, 7100780, 3918464, 8875974] }],
  ["tecnologia", "Gerente de sistemas / TI", { "Automotriz": [10234803, 13607060, 9006627, 13607060], "Banca & Serv Financieros": [10234803, 13607060, 9006627, 13607060], "Consumo masivo": [7588239, 12915909, 6677650, 12915909], "Gas, Petróleo y Minería": [9538803, 13607060, 8394147, 13607060], "IT": [8991839, 13607004, 7912818, 13607004], "Lab & Pharma": [10234803, 13606382, 9006627, 13606382], "Manufactura": [7588239, 11922422, 6677650, 11922422], "Retail & Comercio": [7588239, 11922377, 6677650, 11922377], "Servicios": [7588239, 11922670, 6677650, 11922670], "Transporte y logística": [7588239, 11922377, 6677650, 11922377] }],
  ["tecnologia", "DevOps Engineer", { "Automotriz": [6781317, 8063995, 5967559, 8063995], "Banca & Serv Financieros": [6781317, 8063995, 5967559, 8063995], "Consumo masivo": [6196962, 7229789, 5453326, 7229789], "Gas, Petróleo y Minería": [6781317, 7862395, 5967559, 7862395], "IT": [6080962, 7229789, 5351246, 7229789], "Lab & Pharma": [6781317, 8063995, 5967559, 8063995], "Manufactura": [5268624, 7230270, 4636389, 7230270], "Retail & Comercio": [5268624, 7230643, 4636389, 7230643], "Servicios": [5268624, 7229835, 4636389, 7229835], "Transporte y logística": [5268624, 7229792, 4636389, 7229792] }],
  ["tecnologia", "Scrum Master", { "Automotriz": [5331744, 6131505, 4691934, 6131505], "Banca & Serv Financieros": [5331744, 6131505, 4691934, 6131505], "Consumo masivo": [4679109, 5615996, 4117616, 5615996], "Gas, Petróleo y Minería": [4913065, 5896796, 4323497, 5896796], "IT": [4913065, 5896796, 4323497, 5896796], "Lab & Pharma": [5331744, 6131505, 4691934, 6131505], "Manufactura": [4678980, 5616516, 4117503, 5616516], "Retail & Comercio": [4099204, 5616006, 3607299, 5616006], "Servicios": [4099204, 5616516, 3607299, 5616516], "Transporte y logística": [4099204, 5615994, 3607299, 5615994] }],
  ["tecnologia", "Sysadmin", { "Automotriz": [4991231, 6455169, 4392284, 6455169], "Banca & Serv Financieros": [5118994, 6455265, 4504715, 6455265], "Consumo masivo": [4875231, 6455169, 4290204, 6455169], "Gas, Petróleo y Minería": [5118994, 6777927, 4504715, 6777927], "IT": [4991231, 6455169, 4392284, 6455169], "Lab & Pharma": [5118994, 6777927, 4504715, 6777927], "Manufactura": [4406550, 6079801, 3877764, 6079801], "Retail & Comercio": [3942438, 6080003, 3469345, 6080003], "Servicios": [4406550, 6079754, 3877764, 6079754], "Transporte y logística": [3942438, 6079816, 3469345, 6079816] }],
  ["tecnologia", "Arquitecto de Software / Solutions Architect", { "Automotriz": [6935451, 9370938, 6103196, 9370938], "Banca & Serv Financieros": [6935451, 9370938, 6103196, 9370938], "Consumo masivo": [6206583, 7760808, 5461793, 7760808], "Gas, Petróleo y Minería": [6935451, 9371629, 6103196, 9371629], "IT": [6554583, 9370958, 5768033, 9370958], "Lab & Pharma": [6935451, 9372250, 6103196, 9372250], "Manufactura": [6206583, 7760807, 5461793, 7760807], "Retail & Comercio": [6206583, 7760844, 5461793, 7760844], "Servicios": [6206583, 7760857, 5461793, 7760857], "Transporte y logística": [6206583, 7760807, 5461793, 7760807] }],
  ["tecnologia", "Backend Developer", { "Automotriz": [5677549, 6245303, 4996243, 6245303], "Banca & Serv Financieros": [5677549, 6245303, 4996243, 6245303], "Consumo masivo": [4067943, 6018494, 3579790, 6018494], "Gas, Petróleo y Minería": [5677549, 6245303, 4996243, 6245303], "IT": [4409343, 6020482, 3880222, 6020482], "Lab & Pharma": [4067943, 6018370, 3579790, 6018370], "Manufactura": [4067943, 6019116, 3579790, 6019116], "Retail & Comercio": [4067943, 6018308, 3579790, 6018308], "Servicios": [4067943, 6017873, 3579790, 6017873], "Transporte y logística": [4067943, 6019861, 3579790, 6019861] }],
  ["tecnologia", "Functional Analyst", { "Automotriz": [4395695, 5095009, 3868212, 5095009], "Banca & Serv Financieros": [4395695, 5761281, 3868212, 5761281], "Consumo masivo": [4289565, 5095009, 3774817, 5095009], "Gas, Petróleo y Minería": [4395695, 5555520, 3868212, 5555520], "IT": [4424312, 5290971, 3893395, 5290971], "Lab & Pharma": [4395695, 5555520, 3868212, 5555520], "Manufactura": [3477572, 5095373, 3060264, 5095373], "Retail & Comercio": [3477572, 5094627, 3060264, 5094627], "Servicios": [3477572, 5095248, 3060264, 5095248], "Transporte y logística": [3477572, 5095001, 3060264, 5095001] }],
  ["tecnologia", "QA / Testing", { "Automotriz": [4069277, 4557590, 3580963, 4557590], "Banca & Serv Financieros": [4069277, 4557590, 3580963, 4557590], "Consumo masivo": [3439121, 4175687, 3026426, 4175687], "Gas, Petróleo y Minería": [4069277, 4557590, 3580963, 4557590], "IT": [3489277, 4384486, 3070563, 4384486], "Lab & Pharma": [4069277, 4557590, 3580963, 4557590], "Manufactura": [3439121, 4175687, 3026426, 4175687], "Retail & Comercio": [3439121, 4175687, 3026426, 4175687], "Servicios": [3439121, 4175793, 3026426, 4175793], "Transporte y logística": [3439121, 4175109, 3026426, 4175109] }],
  ["tecnologia", "DBA", { "Automotriz": [5097112, 7285303, 4485459, 7285303], "Banca & Serv Financieros": [5096763, 7285303, 4485152, 7285303], "Consumo masivo": [3936763, 6044594, 3464352, 6044594], "Gas, Petróleo y Minería": [5097112, 6539748, 4485459, 6539748], "IT": [4516763, 6539748, 3974752, 6539748], "Lab & Pharma": [5097112, 6539748, 4485459, 6539748], "Manufactura": [3820763, 6045831, 3362272, 6045831], "Retail & Comercio": [3820763, 6044589, 3362272, 6044589], "Servicios": [3820763, 6045210, 3362272, 6045210], "Transporte y logística": [3820763, 6044651, 3362272, 6044651] }],
  ["tecnologia", "Frontend Developer", { "Automotriz": [5209173, 6149717, 4584072, 6149717], "Banca & Serv Financieros": [5209173, 6683036, 4584072, 6683036], "Consumo masivo": [4409343, 6452586, 3880222, 6452586], "Gas, Petróleo y Minería": [5209173, 7017188, 4584072, 7017188], "IT": [4525343, 6683036, 3982302, 6683036], "Lab & Pharma": [5209173, 6369350, 4584072, 6369350], "Manufactura": [3764468, 6150830, 3312732, 6150830], "Retail & Comercio": [3764468, 6150271, 3312732, 6150271], "Servicios": [3764468, 6150830, 3312732, 6150830], "Transporte y logística": [3764468, 6149712, 3312732, 6149712] }],
  ["tecnologia", "Soporte Técnico / Help Desk", { "Automotriz": [2550305, 3203501, 2244269, 3203501], "Banca & Serv Financieros": [2550305, 3006286, 2244269, 3006286], "Consumo masivo": [2276997, 2989935, 2003757, 2989935], "Gas, Petróleo y Minería": [2550305, 3139431, 2244269, 3139431], "IT": [2276997, 2989935, 2003757, 2989935], "Lab & Pharma": [2550305, 3006286, 2244269, 3006286], "Manufactura": [2160992, 2989676, 1901673, 2989676], "Retail & Comercio": [2160718, 2989935, 1901432, 2989935], "Servicios": [2160867, 2989925, 1901563, 2989925], "Transporte y logística": [2160619, 2990608, 1901345, 2990608] }],
  ["marketing", "Jefe de Marketing", { "Automotriz": [4482194, 6917081, 3585755, 8646351], "Banca & Serv Financieros": [4713759, 7146459, 3771007, 8933074], "Consumo masivo": [4711314, 7146513, 3769051, 8933141], "Gas, Petróleo y Minería": [4830088, 7386711, 3864070, 9233388], "IT": [4713753, 7147788, 3771003, 8934736], "Lab & Pharma": [4492207, 6857646, 3593766, 8572058], "Manufactura": [4713753, 7146626, 3771003, 8933283], "Retail & Comercio": [4533297, 6857649, 3626638, 8572061], "Servicios": [4533832, 6858819, 3627066, 8573524], "Transporte y logística": [4533328, 6857654, 3626662, 8572068] }],
  ["marketing", "Analista de Marketing Digital", { "Automotriz": [3591008, 4425330, 2872807, 5531663], "Banca & Serv Financieros": [3628492, 4626390, 2902794, 5782988], "Consumo masivo": [3539369, 5011930, 2831495, 6264912], "Gas, Petróleo y Minería": [3881137, 4452551, 3104909, 5565689], "IT": [3902480, 4425335, 3121984, 5531668], "Lab & Pharma": [3508950, 4413591, 2807160, 5516989], "Manufactura": [3394228, 4425328, 2715383, 5531660], "Retail & Comercio": [3540236, 5013083, 2832189, 6266353], "Servicios": [3541060, 4628233, 2832848, 5785292], "Transporte y logística": [3540527, 4626683, 2832422, 5783354] }],
  ["ventas", "Jefe de Ventas", { "Automotriz": [4676384, 6691349, 3741107, 8364187], "Banca & Serv Financieros": [4676389, 7355790, 3741111, 9194738], "Consumo masivo": [4547316, 6156300, 3637853, 7695376], "Gas, Petróleo y Minería": [4907831, 6691355, 3926265, 8364194], "IT": [4712633, 7355791, 3770106, 9194739], "Lab & Pharma": [4650174, 6691347, 3720139, 8364184], "Manufactura": [4547350, 6473095, 3637880, 8091369], "Retail & Comercio": [4548158, 6659050, 3638527, 8323812], "Servicios": [4548663, 6659046, 3638931, 8323808], "Transporte y logística": [4547316, 5851197, 3637853, 7313996] }],
  ["ventas", "Key Account Manager", { "Automotriz": [3899967, 5129660, 3119973, 6412075], "Banca & Serv Financieros": [3638393, 4846355, 2910714, 6057943], "Consumo masivo": [4366476, 4877927, 3493181, 6097409], "Gas, Petróleo y Minería": [3677933, 4846355, 2942346, 6057943], "IT": [3727915, 4846890, 2982332, 6058613], "Lab & Pharma": [3727467, 4812180, 2981974, 6015224], "Manufactura": [3677957, 4796402, 2942366, 5995502], "Retail & Comercio": [3677767, 4827957, 2942214, 6034947], "Servicios": [3727915, 4812968, 2982332, 6016211], "Transporte y logística": [3677957, 4812180, 2942366, 6015224] }],
  ["ventas", "Analista Comercial", { "Automotriz": [3136116, 4233757, 2508893, 5292196], "Banca & Serv Financieros": [3136121, 4233763, 2508897, 5292204], "Consumo masivo": [3012095, 4066328, 2409676, 5082909], "Gas, Petróleo y Minería": [3095155, 4178460, 2476124, 5223075], "IT": [3136121, 4233764, 2508897, 5292205], "Lab & Pharma": [2954197, 3988166, 2363358, 4985207], "Manufactura": [3017059, 4066328, 2413647, 5082909], "Retail & Comercio": [3012095, 4068658, 2409676, 5085823], "Servicios": [3023265, 4072296, 2418612, 5090371], "Transporte y logística": [3004647, 4058880, 2403718, 5073600] }],
  ["ventas", "Ejecutivo de Cuentas", { "Automotriz": [3309511, 4163573, 2647609, 5204466], "Banca & Serv Financieros": [3308760, 4321337, 2647008, 5401672], "Consumo masivo": [2910676, 4160707, 2328541, 5200883], "Gas, Petróleo y Minería": [3263553, 4159703, 2610842, 5199628], "IT": [3173833, 4163573, 2539066, 5204466], "Lab & Pharma": [2999186, 4159559, 2399348, 5199449], "Manufactura": [3035327, 4163432, 2428261, 5204290], "Retail & Comercio": [3039050, 4163719, 2431240, 5204648], "Servicios": [3041533, 4102186, 2433226, 5127732], "Transporte y logística": [3038177, 4163590, 2430542, 5204487] }],
  ["finanzas", "CFO Director de Administración y Finanzas", { "Automotriz": [18284730, 23082465, 15084903, 28853081], "Banca & Serv Financieros": [19130398, 24888210, 15782579, 31110263], "Consumo masivo": [17004799, 20992434, 14028959, 26240543], "Gas, Petróleo y Minería": [19130398, 24888210, 15782579, 31110263], "IT": [19130398, 24888356, 15782579, 31110445], "Lab & Pharma": [19130398, 24888210, 15782579, 31110263], "Manufactura": [18284730, 23082465, 15084903, 28853081], "Retail & Comercio": [17004742, 20992434, 14028912, 26240543], "Servicios": [17004742, 20992434, 14028912, 26240543], "Transporte y logística": [16154505, 19942813, 13327466, 24928517] }],
  ["finanzas", "Controller", { "Automotriz": [6639135, 11099646, 5477287, 13874557], "Banca & Serv Financieros": [6248639, 11102534, 5155127, 13878168], "Consumo masivo": [7364764, 11099646, 6075931, 13874557], "Gas, Petróleo y Minería": [6249442, 11100052, 5155790, 13875065], "IT": [6248813, 11099750, 5155270, 13874688], "Lab & Pharma": [6248821, 11100504, 5155278, 13875630], "Manufactura": [6695193, 11108325, 5523534, 13885407], "Retail & Comercio": [6247945, 11100504, 5154555, 13875630], "Servicios": [6249442, 11102534, 5155790, 13878168], "Transporte y logística": [6247945, 11100504, 5154555, 13875630] }],
  ["finanzas", "Gerente de Tesorería", { "Automotriz": [6074377, 7927433, 5011361, 9909291], "Banca & Serv Financieros": [6682066, 8608087, 5512704, 10760109], "Consumo masivo": [6074377, 7927396, 5011361, 9909245], "Gas, Petróleo y Minería": [7086773, 7929702, 5846588, 9912128], "IT": [7061210, 8606927, 5825498, 10758659], "Lab & Pharma": [7060178, 8380429, 5824647, 10475537], "Manufactura": [6682066, 8606927, 5512704, 10758659], "Retail & Comercio": [6072600, 7927428, 5009895, 9909286], "Servicios": [6073180, 7927440, 5010374, 9909300], "Transporte y logística": [6045410, 7931521, 4987463, 9914401] }],
  ["finanzas", "Gerente de Cobranzas", { "Automotriz": [5515800, 9410616, 4550535, 11763270], "Banca & Serv Financieros": [6084283, 9594685, 5019533, 11993356], "Consumo masivo": [5514176, 9410570, 4549195, 11763212], "Gas, Petróleo y Minería": [5515452, 9413400, 4550248, 11766750], "IT": [6084283, 10013446, 5019533, 12516807], "Lab & Pharma": [5894276, 9963552, 4862778, 12454440], "Manufactura": [5515645, 9411678, 4550407, 11764598], "Retail & Comercio": [5513811, 9410493, 4548894, 11763116], "Servicios": [5517134, 9408668, 4551636, 11760835], "Transporte y logística": [5494199, 9762709, 4532714, 12203386] }],
  ["finanzas", "Gerente de Auditoría", { "Automotriz": [6038239, 11301161, 4981548, 14126451], "Banca & Serv Financieros": [6642259, 11247414, 5479864, 14059268], "Consumo masivo": [6038239, 11301161, 4981548, 14126451], "Gas, Petróleo y Minería": [6039679, 10359411, 4982735, 12949264], "IT": [6642320, 11247403, 5479914, 14059254], "Lab & Pharma": [6440589, 10951470, 5313486, 13689337], "Manufactura": [6642259, 11247414, 5479864, 14059268], "Retail & Comercio": [6038292, 11301958, 4981591, 14127447], "Servicios": [6037944, 11300133, 4981304, 14125166], "Transporte y logística": [6039679, 11302201, 4982735, 14127751] }],
  ["finanzas", "Gerente de Legales", { "Automotriz": [6719127, 9843087, 5543280, 12303859], "Banca & Serv Financieros": [7216419, 10276150, 5953545, 12845188], "Consumo masivo": [6719288, 9843523, 5543413, 12304403], "Gas, Petróleo y Minería": [6722606, 9843876, 5546150, 12304845], "IT": [7216278, 10275901, 5953430, 12844876], "Lab & Pharma": [7216213, 10457917, 5953375, 13072396], "Manufactura": [7216278, 10765943, 5953430, 13457429], "Retail & Comercio": [6719127, 9842530, 5543280, 12303163], "Servicios": [6721098, 9843029, 5544906, 12303786], "Transporte y logística": [6711472, 9875866, 5536965, 12344833] }],
  ["finanzas", "Jefe de Legales", { "Automotriz": [5046871, 5989046, 4163668, 7486307], "Banca & Serv Financieros": [5551371, 6737837, 4579881, 8422296], "Consumo masivo": [5046000, 6238271, 4162950, 7797839], "Gas, Petróleo y Minería": [5046870, 6238596, 4163668, 7798245], "IT": [5803569, 6738904, 4787945, 8423630], "Lab & Pharma": [5551371, 6488493, 4579881, 8110617], "Manufactura": [5551371, 6737848, 4579881, 8422311], "Retail & Comercio": [5551888, 6488443, 4580307, 8110553], "Servicios": [4794655, 5739668, 3955590, 7174586], "Transporte y logística": [5034115, 5997889, 4153145, 7497362] }],
  ["finanzas", "Jefe de Tesorería", { "Automotriz": [4687328, 5827388, 3867046, 7284235], "Banca & Serv Financieros": [5388502, 6555972, 4445514, 8194965], "Consumo masivo": [4685774, 6070048, 3865763, 7587560], "Gas, Petróleo y Minería": [4684223, 6070919, 3864484, 7588649], "IT": [5388505, 6555969, 4445516, 8194961], "Lab & Pharma": [5154207, 6313375, 4252221, 7891719], "Manufactura": [5388505, 6555995, 4445516, 8194994], "Retail & Comercio": [4685924, 6069700, 3865888, 7587125], "Servicios": [4451661, 5584739, 3672620, 6980924], "Transporte y logística": [4674156, 5835931, 3856179, 7294914] }],
  ["finanzas", "Jefe de Impuestos", { "Automotriz": [5079573, 6388176, 4190647, 7985220], "Banca & Serv Financieros": [5613986, 6942161, 4631539, 8677701], "Consumo masivo": [5347338, 6666210, 4411554, 8332762], "Gas, Petróleo y Minería": [5079573, 6388176, 4190647, 7985220], "IT": [5881113, 7221643, 4851919, 9027054], "Lab & Pharma": [5615584, 6943896, 4632856, 8679870], "Manufactura": [5881113, 7221643, 4851919, 9027054], "Retail & Comercio": [5346619, 6666036, 4410961, 8332545], "Servicios": [5079604, 6388002, 4190673, 7985003], "Transporte y logística": [5372566, 6681656, 4432367, 8352070] }],
  ["finanzas", "Jefe de Cobranzas", { "Automotriz": [4034090, 6258531, 3328124, 7823164], "Banca & Serv Financieros": [4047774, 6826920, 3339414, 8533650], "Consumo masivo": [3845436, 6542726, 3172485, 8178408], "Gas, Petróleo y Minería": [4034177, 6258358, 3328196, 7822947], "IT": [4250338, 7111861, 3506529, 8889827], "Lab & Pharma": [4047774, 6826920, 3339414, 8533650], "Manufactura": [4452528, 7396091, 3673336, 9245114], "Retail & Comercio": [3845558, 6542726, 3172585, 8178408], "Servicios": [4034177, 6258531, 3328196, 7823164], "Transporte y logística": [3847919, 6523375, 3174533, 8154219] }],
  ["finanzas", "Jefe de Auditoría", { "Automotriz": [4600802, 6306221, 3795662, 7882776], "Banca & Serv Financieros": [5253041, 7062490, 4333759, 8828113], "Consumo masivo": [4600802, 6558311, 3795662, 8197889], "Gas, Petróleo y Minería": [4815248, 6558377, 3972579, 8197971], "IT": [5253044, 7062486, 4333761, 8828108], "Lab & Pharma": [5250276, 7074840, 4331478, 8843550], "Manufactura": [5253044, 7062486, 4333761, 8828108], "Retail & Comercio": [4600802, 6306221, 3795662, 7882776], "Servicios": [4377453, 6053468, 3611399, 7566835], "Transporte y logística": [4616029, 6302240, 3808224, 7877800] }],
  ["finanzas", "Jefe de Administración y finanzas", { "Automotriz": [5030983, 6158304, 4150561, 7697881], "Banca & Serv Financieros": [5717390, 6868904, 4716847, 8586130], "Consumo masivo": [5030983, 6394772, 4150561, 7993465], "Gas, Petróleo y Minería": [5717408, 6868921, 4716861, 8586151], "IT": [5717340, 6868904, 4716805, 8586130], "Lab & Pharma": [5488611, 6631846, 4528104, 8289807], "Manufactura": [5717390, 6868921, 4716847, 8586151], "Retail & Comercio": [5030983, 6158218, 4150561, 7697772], "Servicios": [4802205, 5921229, 3961819, 7401536], "Transporte y logística": [5049380, 6184771, 4165739, 7730963] }],
  ["finanzas", "Abogado Corporativo", { "Automotriz": [2808410, 3696243, 2316938, 4620303], "Banca & Serv Financieros": [2791844, 4158086, 2303271, 5197607], "Consumo masivo": [2808836, 3696294, 2317289, 4620367], "Gas, Petróleo y Minería": [2809572, 3696920, 2317897, 4621150], "IT": [2791644, 4158275, 2303107, 5197844], "Lab & Pharma": [2791830, 4158020, 2303260, 5197525], "Manufactura": [3024497, 4158188, 2495210, 5197735], "Retail & Comercio": [2808406, 3696282, 2316935, 4620353], "Servicios": [2592635, 3465100, 2138924, 4331375], "Transporte y logística": [2815894, 3703555, 2323113, 4629444] }],
  ["finanzas", "Analista de Contabilidad", { "Automotriz": [2605045, 3428733, 2149162, 4285916], "Banca & Serv Financieros": [2589772, 3857220, 2136562, 4821525], "Consumo masivo": [2605219, 3428691, 2149306, 4285864], "Gas, Petróleo y Minería": [2605279, 3429540, 2149355, 4286925], "IT": [2590384, 3857238, 2137067, 4821547], "Lab & Pharma": [2589842, 3857401, 2136620, 4821752], "Manufactura": [2805657, 3857000, 2314667, 4821250], "Retail & Comercio": [2605219, 3428837, 2149306, 4286047], "Servicios": [2404938, 3214472, 1984074, 4018090], "Transporte y logística": [2612161, 3435642, 2155033, 4294552] }],
  ["finanzas", "Analista de Auditoría", { "Automotriz": [3101534, 4601468, 2558766, 5751836], "Banca & Serv Financieros": [3515227, 4920709, 2900063, 6150886], "Consumo masivo": [3308546, 4856997, 2729551, 6071246], "Gas, Petróleo y Minería": [3308546, 4856997, 2729551, 6071246], "IT": [3515234, 4921979, 2900068, 6152473], "Lab & Pharma": [3516444, 4920736, 2901066, 6150920], "Manufactura": [3515234, 4920708, 2900068, 6150885], "Retail & Comercio": [3308548, 4856994, 2729552, 6071243], "Servicios": [3101534, 4601468, 2558766, 5751836], "Transporte y logística": [3316253, 4860001, 2735909, 6075001] }],
  ["finanzas", "Analista de Control de Gestión", { "Automotriz": [3130144, 4190461, 2582369, 5238077], "Banca & Serv Financieros": [3351327, 4423545, 2764845, 5529431], "Consumo masivo": [3127789, 4190461, 2580426, 5238077], "Gas, Petróleo y Minería": [3352400, 4423441, 2765730, 5529301], "IT": [3574986, 4656420, 2949364, 5820525], "Lab & Pharma": [3351328, 4423371, 2764846, 5529214], "Manufactura": [3574986, 4656420, 2949364, 5820525], "Retail & Comercio": [3129216, 3958071, 2581603, 4947589], "Servicios": [3127789, 3961516, 2580426, 4951895], "Transporte y logística": [3339873, 4416949, 2755395, 5521187] }],
  ["finanzas", "Analista de Impuestos", { "Automotriz": [2541438, 3636391, 2096686, 4545489], "Banca & Serv Financieros": [2513583, 3838494, 2073706, 4798118], "Consumo masivo": [2540400, 3636304, 2095830, 4545380], "Gas, Petróleo y Minería": [2513063, 3838668, 2073277, 4798335], "IT": [2681237, 4040684, 2212020, 5050855], "Lab & Pharma": [2723062, 3838494, 2246527, 4798118], "Manufactura": [2681237, 4040684, 2212020, 5050855], "Retail & Comercio": [2541502, 3434586, 2096739, 4293233], "Servicios": [2541502, 3434516, 2096739, 4293146], "Transporte y logística": [2713518, 3832767, 2238652, 4790959] }],
  ["finanzas", "Analista de Tesorería", { "Automotriz": [2622054, 3463201, 2163194, 4329002], "Banca & Serv Financieros": [2809492, 3655742, 2317831, 4569678], "Consumo masivo": [2622106, 3463201, 2163237, 4329002], "Gas, Petróleo y Minería": [2809492, 3655739, 2317831, 4569673], "IT": [2996896, 3848213, 2472439, 4810266], "Lab & Pharma": [2809492, 3655742, 2317831, 4569678], "Manufactura": [2766347, 3848265, 2282236, 4810331], "Retail & Comercio": [2622644, 3271548, 2163681, 4089435], "Servicios": [2621600, 3271014, 2162820, 4088768], "Transporte y logística": [2799774, 3650362, 2309813, 4562952] }],
  ["finanzas", "Analista de Cobranzas", { "Automotriz": [2497294, 3077261, 2060268, 3846577], "Banca & Serv Financieros": [2496053, 3488763, 2059244, 4360954], "Consumo masivo": [2494232, 3077270, 2057741, 3846587], "Gas, Petróleo y Minería": [2497461, 3078176, 2060406, 3847720], "IT": [2494812, 3487540, 2058220, 4359425], "Lab & Pharma": [2704423, 3487772, 2231149, 4359715], "Manufactura": [2497642, 3486531, 2060555, 4358164], "Retail & Comercio": [2496674, 3077261, 2059756, 3846577], "Servicios": [2464398, 2872076, 2033128, 3590095], "Transporte y logística": [2507665, 3092090, 2068823, 3865112] }],
  ["finanzas", "Analista de Administración y finanzas", { "Automotriz": [2345370, 3532465, 1934930, 4415582], "Banca & Serv Financieros": [2512987, 3728857, 2073214, 4661072], "Consumo masivo": [2345228, 3532465, 1934813, 4415582], "Gas, Petróleo y Minería": [2681439, 3925249, 2212187, 4906561], "IT": [2680603, 3924674, 2211498, 4905843], "Lab & Pharma": [2512987, 3728857, 2073214, 4661072], "Manufactura": [2680602, 3925266, 2211497, 4906582], "Retail & Comercio": [2345369, 3336437, 1934929, 4170546], "Servicios": [2345369, 3336437, 1934929, 4170546], "Transporte y logística": [2504303, 3723369, 2066050, 4654211] }],
  ["ventas", "Director comercial", { "Automotriz": [15424526, 22013833, 12339621, 27517291], "Banca & Serv Financieros": [16137914, 22605482, 12910331, 28256852], "Consumo masivo": [14344809, 19040369, 11475847, 23800461], "Gas, Petróleo y Minería": [16137942, 22605479, 12910354, 28256849], "IT": [16137899, 22605504, 12910319, 28256880], "Lab & Pharma": [16137911, 22605482, 12910329, 28256852], "Manufactura": [15424526, 22013833, 12339621, 27517291], "Retail & Comercio": [14344813, 19040373, 11475850, 23800466], "Servicios": [14346176, 19040365, 11476940, 23800457], "Transporte y logística": [14344742, 19040378, 11475794, 23800472] }],
  ["ventas", "Director de Expansión y Desarrollo", { "Automotriz": [14531845, 20936049, 11625476, 26170061], "Banca & Serv Financieros": [15203944, 21498933, 12163155, 26873666], "Consumo masivo": [13514616, 16683802, 10811693, 20854753], "Gas, Petróleo y Minería": [15203943, 21498942, 12163154, 26873677], "IT": [15203955, 21498982, 12163164, 26873727], "Lab & Pharma": [15203944, 21498890, 12163155, 26873612], "Manufactura": [14531845, 20936049, 11625476, 26170061], "Retail & Comercio": [13514539, 16683817, 10811631, 20854771], "Servicios": [13514539, 16683817, 10811631, 20854771], "Transporte y logística": [12838813, 15849626, 10271050, 19812033] }],
  ["ventas", "Gerente comercial", { "Automotriz": [7162000, 11614395, 5729600, 14517993], "Banca & Serv Financieros": [6703272, 11261189, 5362617, 14076486], "Consumo masivo": [7155178, 11614406, 5724142, 14518008], "Gas, Petróleo y Minería": [6952399, 11614411, 5561920, 14518014], "IT": [6684557, 11614379, 5347646, 14517973], "Lab & Pharma": [6684546, 10558570, 5347637, 13198213], "Manufactura": [6335694, 10598746, 5068555, 13248432], "Retail & Comercio": [6364342, 9861959, 5091474, 12327448], "Servicios": [6325168, 9977830, 5060134, 12472288], "Transporte y logística": [7093793, 10347376, 5675034, 12934220] }],
  ["marketing", "Director de marketing", { "Automotriz": [14822482, 21354770, 11857986, 26693463], "Banca & Serv Financieros": [15508023, 21928912, 12406419, 27411140], "Consumo masivo": [13784909, 17017478, 11027927, 21271847], "Gas, Petróleo y Minería": [15508024, 21928921, 12406420, 27411151], "IT": [15508023, 21928962, 12406419, 27411202], "Lab & Pharma": [15508023, 21928867, 12406419, 27411084], "Manufactura": [14822482, 21354770, 11857986, 26693463], "Retail & Comercio": [13784831, 17017494, 11027864, 21271867], "Servicios": [13784831, 17017494, 11027864, 21271867], "Transporte y logística": [13095588, 16166619, 10476471, 20208274] }],
  ["marketing", "Gerente de Marketing", { "Automotriz": [7262935, 10514823, 5810348, 13143529], "Banca & Serv Financieros": [7503782, 9527394, 6003026, 11909243], "Consumo masivo": [7503838, 9527373, 6003071, 11909216], "Gas, Petróleo y Minería": [7756046, 9830709, 6204837, 12288386], "IT": [7503957, 10514823, 6003166, 13143529], "Lab & Pharma": [7201694, 10165847, 5761355, 12707308], "Manufactura": [7503957, 9629416, 6003166, 12036770], "Retail & Comercio": [7200531, 9267507, 5760425, 11584384], "Servicios": [7200528, 9048000, 5760423, 11310000], "Transporte y logística": [7200537, 9048010, 5760429, 11310013] }],
  ["marketing", "Jefe de Comunicaciones", { "Automotriz": [4185108, 7543661, 3348086, 9429576], "Banca & Serv Financieros": [4502094, 7158201, 3601675, 8947751], "Consumo masivo": [4503821, 7158630, 3603057, 8948287], "Gas, Petróleo y Minería": [4567008, 7797083, 3653606, 9746354], "IT": [4412029, 7158212, 3529623, 8947765], "Lab & Pharma": [4301108, 6208272, 3440886, 7760340], "Manufactura": [4727198, 7158199, 3781758, 8947749], "Retail & Comercio": [4292988, 6591406, 3434390, 8239257], "Servicios": [4294728, 6298875, 3435782, 7873594], "Transporte y logística": [4299948, 6299495, 3439958, 7874369] }],
  ["marketing", "Gerente de Comunicaciones", { "Automotriz": [5863601, 9270721, 4690881, 11588401], "Banca & Serv Financieros": [5854676, 9268954, 4683741, 11586193], "Consumo masivo": [6179551, 9270719, 4943641, 11588399], "Gas, Petróleo y Minería": [6497570, 10396111, 5198056, 12995139], "IT": [5854686, 9270630, 4683749, 11588287], "Lab & Pharma": [5854608, 7742937, 4683686, 9678671], "Manufactura": [6179539, 9269827, 4943632, 11587284], "Retail & Comercio": [5858205, 7342760, 4686564, 9178450], "Servicios": [6404995, 7416248, 5123996, 9270310], "Transporte y logística": [6394261, 7696426, 5115409, 9620533] }],
  ["marketing", "Analista de Comunicaciones", { "Automotriz": [3136116, 4233757, 2508893, 5292196], "Banca & Serv Financieros": [3136121, 4233763, 2508897, 5292204], "Consumo masivo": [3012095, 4066328, 2409676, 5082909], "Gas, Petróleo y Minería": [3095155, 4178460, 2476124, 5223075], "IT": [3136121, 4233764, 2508897, 5292205], "Lab & Pharma": [2954197, 3988166, 2363358, 4985207], "Manufactura": [3012097, 4066328, 2409677, 5082909], "Retail & Comercio": [3012123, 4064893, 2409699, 5081117], "Servicios": [3013385, 4068106, 2410708, 5085133], "Transporte y logística": [3012102, 4067601, 2409681, 5084502] }],
  ["marketing", "Analista de Marketing", { "Automotriz": [3590890, 4425327, 2872712, 5531658], "Banca & Serv Financieros": [3627331, 4626386, 2901865, 5782982], "Consumo masivo": [3539367, 5011923, 2831494, 6264903], "Gas, Petróleo y Minería": [3880786, 4452545, 3104629, 5565681], "IT": [3902471, 4426487, 3121977, 5533108], "Lab & Pharma": [3506630, 4413585, 2805304, 5516982], "Manufactura": [3393066, 4425327, 2714453, 5531658], "Retail & Comercio": [3539074, 5011923, 2831259, 6264903], "Servicios": [3541052, 4628235, 2832841, 5785293], "Transporte y logística": [3539367, 4626681, 2831494, 5783351] }],
  ["marketing", "Community Manager", { "Automotriz": [3191096, 4478805, 2552877, 5598507], "Banca & Serv Financieros": [3191090, 4478810, 2552872, 5598512], "Consumo masivo": [3085890, 4229986, 2468712, 5287483], "Gas, Petróleo y Minería": [3366425, 4477536, 2693140, 5596920], "IT": [3198104, 4478798, 2558483, 5598498], "Lab & Pharma": [3366425, 4479271, 2693140, 5599089], "Manufactura": [3085896, 4229997, 2468716, 5287496], "Retail & Comercio": [3087684, 4229979, 2470147, 5287474], "Servicios": [3084528, 3980698, 2467623, 4975873], "Transporte y logística": [3087210, 3981171, 2469768, 4976463] }],
  ["marketing", "Business Developer Manager", { "Automotriz": [4559698, 7221094, 3647758, 9026368], "Banca & Serv Financieros": [4560526, 7219532, 3648421, 9024414], "Consumo masivo": [4322225, 6173790, 3457780, 7717237], "Gas, Petróleo y Minería": [4559714, 6174618, 3647771, 7718272], "IT": [4559737, 6175374, 3647790, 7719218], "Lab & Pharma": [4559698, 6177340, 3647758, 7721675], "Manufactura": [4324651, 6174614, 3459720, 7718267], "Retail & Comercio": [4322244, 6175367, 3457795, 7719209], "Servicios": [4323073, 6177781, 3458458, 7722226], "Transporte y logística": [4322252, 6174629, 3457801, 7718286] }],
  ["marketing", "Responsable de E-commerce", { "Automotriz": [4528891, 5990593, 3623113, 7488242], "Banca & Serv Financieros": [4528889, 5990588, 3623112, 7488234], "Consumo masivo": [4528918, 5990579, 3623135, 7488224], "Gas, Petróleo y Minería": [4897583, 5990603, 3918066, 7488254], "IT": [4583076, 6792273, 3666461, 8490341], "Lab & Pharma": [4528961, 6795421, 3623169, 8494276], "Manufactura": [4528915, 5990603, 3623132, 7488254], "Retail & Comercio": [4528956, 5990454, 3623165, 7488067], "Servicios": [4529154, 5988953, 3623324, 7486191], "Transporte y logística": [4528459, 5987288, 3622767, 7484110] }],
  ["ingenieria", "Director de Operaciones", { "Automotriz": [14967801, 22674248, 12348436, 28342810], "Banca & Serv Financieros": [15660063, 23283646, 12919552, 29104557], "Consumo masivo": [13920054, 17194620, 11484045, 21493275], "Gas, Petróleo y Minería": [15660059, 23283645, 12919549, 29104556], "IT": [15660065, 23283646, 12919554, 29104557], "Lab & Pharma": [15660073, 23283648, 12919560, 29104561], "Manufactura": [14967801, 22674248, 12348436, 28342810], "Retail & Comercio": [13919933, 17184286, 11483944, 21480358], "Servicios": [13919943, 17184413, 11483953, 21480516], "Transporte y logística": [13223977, 16325115, 10909781, 20406394] }],
  ["ingenieria", "Ingeniero de mantenimiento", { "Automotriz": [5638336, 7354351, 4651627, 9192939], "Banca & Serv Financieros": [3432031, 4167466, 2831425, 5209332], "Consumo masivo": [3677176, 4179723, 3033670, 5224654], "Gas, Petróleo y Minería": [5638336, 7354351, 4651627, 9192939], "Lab & Pharma": [3922321, 5883481, 3235915, 7354351], "Manufactura": [3677176, 4902901, 3033670, 6128626], "Retail & Comercio": [3609761, 4559698, 2978053, 5699622], "Servicios": [4179723, 5248402, 3448272, 6560503], "Transporte y logística": [3799748, 4939673, 3134792, 6174591] }],
  ["ingenieria", "Gerente de Planta/producción", { "Automotriz": [13299115, 18998741, 10971770, 23748427], "Consumo masivo": [7599497, 11165401, 6269585, 13956751], "Gas, Petróleo y Minería": [15297051, 20101894, 12620067, 25127368], "Lab & Pharma": [9499358, 15198993, 7836970, 18998741], "Manufactura": [9560657, 15689283, 7887542, 19611604], "Retail & Comercio": [7599497, 11165407, 6269585, 13956758], "Servicios": [9558109, 13679094, 7885440, 17098867], "Transporte y logística": [7219500, 11731723, 5956088, 14664653] }],
  ["ingenieria", "Ingeniero de Producción", { "Automotriz": [4559698, 6839547, 3761751, 8549434], "Consumo masivo": [3495768, 4657756, 2884009, 5822195], "Gas, Petróleo y Minería": [5246104, 7844642, 4328036, 9805802], "Lab & Pharma": [3677176, 5638336, 3033670, 7047920], "Manufactura": [3677183, 4902901, 3033676, 6128626], "Retail & Comercio": [3609761, 4559698, 2978053, 5699622], "Servicios": [3432031, 4657756, 2831425, 5822195], "Transporte y logística": [3229771, 4179701, 2664561, 5224627] }],
  ["rrhh", "Director de Recursos Humanos", { "Automotriz": [14108588, 21372653, 11639585, 26715817], "Banca & Serv Financieros": [14761110, 21947070, 12177916, 27433837], "Consumo masivo": [13120986, 16197866, 10824813, 20247333], "Gas, Petróleo y Minería": [14761110, 21947070, 12177916, 27433837], "IT": [14761110, 21947070, 12177916, 27433837], "Lab & Pharma": [14761110, 21947070, 12177916, 27433837], "Manufactura": [14108588, 21372653, 11639585, 26715817], "Retail & Comercio": [13121011, 16197881, 10824834, 20247351], "Servicios": [13120911, 16197881, 10824752, 20247351], "Transporte y logística": [12464866, 15387987, 10283515, 19234983] }],
  ["supply", "Jefe de Comex", { "Automotriz": [5689703, 8224452, 4694005, 10280565], "Consumo masivo": [3909986, 5662738, 3225738, 7078422], "Gas, Petróleo y Minería": [5123429, 8190746, 4226829, 10238432], "Lab & Pharma": [5318356, 7779523, 4387643, 9724404], "Manufactura": [4206605, 6417769, 3470449, 8022212], "Retail & Comercio": [3747041, 5258256, 3091309, 6572821], "Servicios": [3748193, 5255945, 3092259, 6569931], "Transporte y logística": [4220088, 6053736, 3481572, 7567170] }],
  ["supply", "Jefe de Supply Chain", { "Automotriz": [7740228, 10836319, 6385688, 13545399], "Banca & Serv Financieros": [7743715, 10838641, 6388565, 13548302], "Consumo masivo": [5113123, 7210007, 4218327, 9012509], "Gas, Petróleo y Minería": [7740228, 10836319, 6385688, 13545399], "IT": [5507944, 8205420, 4544054, 10256775], "Lab & Pharma": [5503302, 8200773, 4540224, 10250966], "Manufactura": [5113123, 7210007, 4218327, 9012509], "Retail & Comercio": [5115446, 7210128, 4220243, 9012660], "Servicios": [5503302, 8200772, 4540224, 10250964], "Transporte y logística": [5113123, 7210007, 4218327, 9012509] }],
  ["supply", "Analista de Compras", { "Automotriz": [3870110, 5723899, 3192841, 7154873], "Banca & Serv Financieros": [3883318, 5726221, 3203737, 7157776], "Consumo masivo": [2830023, 3584693, 2334769, 4480866], "Gas, Petróleo y Minería": [3870114, 5723899, 3192844, 7154873], "IT": [2826192, 3584693, 2331608, 4480866], "Lab & Pharma": [3827537, 5356237, 3157718, 6695296], "Manufactura": [2943221, 4087808, 2428158, 5109760], "Retail & Comercio": [2830028, 3458915, 2334773, 4323644], "Servicios": [2826192, 3587016, 2331608, 4483770], "Transporte y logística": [2828288, 3584693, 2333337, 4480866] }],
  ["supply", "Jefe de Planificación y Demanda", { "Automotriz": [8359446, 11703225, 6896543, 14629031], "Consumo masivo": [5522173, 7471255, 4555793, 9339069], "Gas, Petróleo y Minería": [8359446, 11702068, 6896543, 14627585], "Lab & Pharma": [5943566, 8856835, 4903442, 11071043], "Manufactura": [5523338, 7471255, 4556754, 9339069], "Retail & Comercio": [5522173, 7474737, 4555793, 9343422] }],
  ["supply", "Analista de Planificación y Demanda", { "Automotriz": [4179719, 6181810, 3448268, 7727263], "Consumo masivo": [3056425, 3871469, 2521551, 4839336], "Gas, Petróleo y Minería": [4179723, 6181814, 3448272, 7727267], "Lab & Pharma": [4133736, 5784737, 3410332, 7230921], "Manufactura": [3178679, 4414833, 2622411, 5518541], "Retail & Comercio": [3056425, 3735629, 2521551, 4669536] }],
  ["supply", "Analista de Comex", { "Automotriz": [3799748, 5619828, 3134792, 7024785], "Consumo masivo": [2653512, 3815320, 2189147, 4769150], "Gas, Petróleo y Minería": [3799754, 5619835, 3134797, 7024794], "Lab & Pharma": [3039799, 4559698, 2507834, 5699622], "Manufactura": [2567452, 4145216, 2118148, 5181520], "Retail & Comercio": [2653574, 3815329, 2189198, 4769161], "Servicios": [2653512, 3815311, 2189147, 4769139], "Transporte y logística": [2682198, 3872693, 2212814, 4840866] }],
  ["supply", "Ingeniero de Logística", { "Automotriz": [3799748, 5619828, 3134792, 7024785], "Consumo masivo": [2653512, 3815320, 2189147, 4769150], "Gas, Petróleo y Minería": [3799748, 5619835, 3134792, 7024794], "Lab & Pharma": [3039799, 4559698, 2507834, 5699622], "Manufactura": [2567452, 4145216, 2118148, 5181520], "Retail & Comercio": [2653563, 3815338, 2189189, 4769173], "Servicios": [2653513, 3815320, 2189148, 4769150], "Transporte y logística": [2682198, 3872693, 2212814, 4840866] }],
  ["calidad", "Gerente de Calidad", { "Automotriz": [11171260, 15388980, 9216289, 19236226], "Consumo masivo": [7354351, 11165407, 6067340, 13956758], "Gas, Petróleo y Minería": [13299119, 18998741, 10971773, 23748427], "Lab & Pharma": [11171260, 15388989, 9216289, 19236236], "Manufactura": [9261886, 15436476, 7641056, 19295595], "Retail & Comercio": [7880871, 11165398, 6501719, 13956748], "Servicios": [10173214, 12784200, 8392901, 15980250] }],
  ["calidad", "Jefe de Calidad", { "Automotriz": [6618916, 9613331, 5460606, 12016663], "Consumo masivo": [5148046, 6373771, 4247138, 7967214], "Gas, Petróleo y Minería": [7979458, 12159194, 6583053, 15198993], "Lab & Pharma": [6618916, 9613331, 5460606, 12016663], "Manufactura": [4939521, 6174583, 4075105, 7718229], "Retail & Comercio": [4559698, 6174474, 3761751, 7718092], "Servicios": [7110800, 10156336, 5866410, 12695420] }],
  ["calidad", "Analista de Calidad", { "Automotriz": [4902901, 6864061, 4044893, 8580077], "Consumo masivo": [3922321, 4902901, 3235915, 6128626], "Gas, Petróleo y Minería": [4902901, 6839547, 4044893, 8549434], "Lab & Pharma": [3922321, 5883481, 3235915, 7354351], "Manufactura": [3677176, 4559721, 3033670, 5699652], "Retail & Comercio": [3609750, 4559698, 2978044, 5699622], "Servicios": [3432031, 4657756, 2831425, 5822195], "Transporte y logística": [3229771, 4179727, 2664561, 5224659] }],
  ["tecnologia", "Responsable de Seguridad Informática", { "Automotriz": [7668740, 9230891, 6748491, 9230891], "Banca & Serv Financieros": [7668740, 9230891, 6748491, 9230891], "Consumo masivo": [6830504, 8391822, 6010843, 8391822], "Gas, Petróleo y Minería": [7668740, 9230891, 6748491, 9230891], "IT": [7361991, 8861655, 6478552, 8861655], "Lab & Pharma": [7668740, 9230891, 6748491, 9230891], "Manufactura": [6250548, 8391822, 5500483, 8391822], "Retail & Comercio": [6830504, 8391721, 6010843, 8391721], "Servicios": [6830504, 8391822, 6010843, 8391822], "Transporte y logística": [6830504, 8391224, 6010843, 8391224] }],
  ["tecnologia", "Project Leader", { "Automotriz": [6266577, 7018566, 5514588, 7018566], "Banca & Serv Financieros": [6266577, 7018566, 5514588, 7018566], "Consumo masivo": [5255329, 6266577, 4624690, 6266577], "Gas, Petróleo y Minería": [6266577, 7018566, 5514588, 7018566], "IT": [5474301, 6285918, 4817385, 6285918], "Lab & Pharma": [6266577, 7018566, 5514588, 7018566], "Manufactura": [5023543, 6266577, 4420718, 6266577], "Retail & Comercio": [5023543, 6268877, 4420718, 6268877], "Servicios": [5023543, 6266516, 4420718, 6266516], "Transporte y logística": [5023543, 6267634, 4420718, 6267634] }],
  ["tecnologia", "Analista BI", { "Automotriz": [4548087, 5002895, 4002316, 5002895], "Banca & Serv Financieros": [4548087, 5002895, 4002316, 5002895], "Consumo masivo": [3717098, 4661180, 3271046, 4661180], "Gas, Petróleo y Minería": [4548087, 5002895, 4002316, 5002895], "IT": [4316087, 5019699, 3798156, 5019699], "Lab & Pharma": [4548087, 5019823, 4002316, 5019823], "Manufactura": [3717098, 4661584, 3271046, 4661584], "Retail & Comercio": [3717098, 4661180, 3271046, 4661180], "Servicios": [3717098, 4661211, 3271046, 4661211], "Transporte y logística": [3717098, 4661174, 3271046, 4661174] }],
  ["tecnologia", "Consultor SAP", { "Automotriz": [5492445, 6423389, 4833352, 6423389], "Banca & Serv Financieros": [5492445, 7579711, 4833352, 7579711], "Consumo masivo": [4448445, 5964576, 3914632, 5964576], "Gas, Petróleo y Minería": [5492445, 6547478, 4833352, 6547478], "IT": [4912445, 6547478, 4322952, 6547478], "Lab & Pharma": [5492445, 6547478, 4833352, 6547478], "Manufactura": [4448331, 5965684, 3914531, 5965684], "Retail & Comercio": [4448331, 5964566, 3914531, 5964566], "Servicios": [4448331, 5964442, 3914531, 5964442], "Transporte y logística": [4448331, 5965125, 3914531, 5965125] }],
  ["tecnologia", "Desarrollador Mobile", { "Automotriz": [5068813, 7343489, 4460556, 7343489], "Banca & Serv Financieros": [5068813, 6506413, 4460556, 6506413], "Consumo masivo": [4589646, 6282053, 4038888, 6282053], "Gas, Petróleo y Minería": [5068813, 6831734, 4460556, 6831734], "IT": [4589646, 6506413, 4038888, 6506413], "Lab & Pharma": [5068813, 6506413, 4460556, 6506413], "Manufactura": [3989868, 6282053, 3511084, 6282053], "Retail & Comercio": [3989868, 7343489, 3511084, 7343489], "Servicios": [3989868, 7343719, 3511084, 7343719], "Transporte y logística": [3989868, 7343594, 3511084, 7343594] }],
  ["tecnologia", "Administrador de Redes", { "Automotriz": [4947431, 5541123, 4353740, 5541123], "Banca & Serv Financieros": [4947431, 5541123, 4353740, 5541123], "Consumo masivo": [3439431, 4390967, 3026700, 4390967], "Gas, Petróleo y Minería": [4947431, 5541123, 4353740, 5541123], "IT": [4252737, 4790192, 3742409, 4790192], "Lab & Pharma": [4947431, 5541123, 4353740, 5541123], "Manufactura": [3788737, 4390947, 3334089, 4390947], "Retail & Comercio": [3788737, 4392563, 3334089, 4392563], "Servicios": [3788737, 4386350, 3334089, 4386350], "Transporte y logística": [3788737, 4390947, 3334089, 4390947] }],
];

function randstadEntries(baMin, baMax, natMin, natMax) {
  return [
    { fuente: "Randstad Arg. jul. 2026", segmento: "Buenos Aires (Semi Senior)", min: baMin, max: baMax },
    { fuente: "Randstad Arg. jul. 2026", segmento: "Nacional, todas las regiones (Semi Senior)", min: natMin, max: natMax },
  ];
}

RANDSTAD_MERGES.forEach(([areaId, roleName, baMin, baMax, natMin, natMax]) => {
  const area = DATA.areas.find((a) => a.id === areaId);
  if (!area) return;
  const role = area.roles.find((r) => r.name === roleName);
  if (!role) return;
  role.entries.push(...randstadEntries(baMin, baMax, natMin, natMax));
});

RANDSTAD_NEW_ROLES.forEach(([areaId, roleName, baMin, baMax, natMin, natMax]) => {
  let area = DATA.areas.find((a) => a.id === areaId);
  if (!area) {
    area = { id: areaId, label: AREA_LABELS_FOR_NEW[areaId] || areaId, roles: [] };
    DATA.areas.push(area);
  }
  area.roles.push({ name: roleName, entries: randstadEntries(baMin, baMax, natMin, natMax) });
});

RANDSTAD_INDUSTRIES.forEach(([areaId, roleName, industries]) => {
  const area = DATA.areas.find((a) => a.id === areaId);
  if (!area) return;
  const role = area.roles.find((r) => r.name === roleName);
  if (!role) return;
  role.industries = industries;
});

RANDSTAD_BY_INDUSTRY.forEach(([areaId, roleName, byIndustry]) => {
  const area = DATA.areas.find((a) => a.id === areaId);
  if (!area) return;
  const role = area.roles.find((r) => r.name === roleName);
  if (!role) return;
  role.randstadByIndustry = byIndustry;
});
