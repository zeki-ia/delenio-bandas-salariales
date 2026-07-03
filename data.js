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

// ---- Randstad Argentina · Reporte Salarial enero 2026 ----
// Bandas 'Semi Senior' por región e industria. Se resumen dos cortes:
// Buenos Aires (mín-máx entre industrias) y Nacional (mín-máx entre todas las regiones e industrias).
const RANDSTAD_MERGES = [
  // [areaId, nombreRolExistente, baMin, baMax, natMin, natMax]
  ["finanzas", "Gerente de administración y finanzas", 6832549, 12585466, 5636853, 15731833],
  ["finanzas", "Gerente de impuestos", 5905026, 8374664, 4871647, 10468330],
  ["finanzas", "Gerente de control de gestión", 5905125, 9752079, 4871728, 12190098],
  ["finanzas", "Gerente contable", 5910662, 10885014, 4876296, 13606268],
  ["finanzas", "Jefe de control de gestión", 4698616, 6720880, 3876358, 8401100],
  ["finanzas", "Jefe contable", 4217677, 5927024, 3479583, 7408780],
  ["supply", "Gerente de Compras", 7047809, 15023678, 5814442, 18779597],
  ["supply", "Gerente de Supply Chain", 8128790, 15013367, 6706252, 18766708],
  ["supply", "Jefe de Compras", 4030048, 9343658, 3324790, 11679572],
  ["supply", "Gerente de Comex", 6469697, 13459976, 5337500, 16824970],
  ["rrhh", "Gerente de RR.HH. / HR Manager", 6174158, 10068470, 5093680, 12585588],
  ["rrhh", "Jefe de RR.HH.", 3614663, 5827150, 2982097, 7283938],
  ["rrhh", "Analista de RR.HH.", 2177600, 3550188, 1796520, 4437735],
  ["rrhh", "HRBP (HR Business Partner)", 3116950, 5372043, 2571484, 6715054],
  ["supply", "Gerente de Logística", 6046446, 12578480, 4988318, 15723100],
  ["supply", "Jefe de Logística", 3437375, 7542601, 2835834, 9428252],
  ["ingenieria", "Gerente de mantenimiento", 6551290, 14740403, 5404814, 18425503],
  ["ingenieria", "Jefe de mantenimiento", 4094528, 9509937, 3377986, 11887422],
  ["ingenieria", "Jefe de producción", 4015307, 12807552, 3312628, 16009440],
  ["tecnologia", "Gerente de sistemas / TI", 6541585, 11730225, 5756595, 11730225],
  ["tecnologia", "DevOps Engineer", 4541917, 6951720, 3996887, 6951720],
  ["tecnologia", "Scrum Master", 3533796, 5285780, 3109741, 5285780],
  ["tecnologia", "Sysadmin", 3398653, 5843040, 2990815, 5843040],
  ["tecnologia", "Arquitecto de Software / Solutions Architect", 5350502, 8079526, 4708442, 8079526],
  ["tecnologia", "Backend Developer", 3506847, 5383882, 3086026, 5383882],
  ["tecnologia", "Functional Analyst", 2997907, 4966622, 2638158, 4966622],
  ["tecnologia", "QA / Testing", 2964759, 3928957, 2608988, 3928957],
  ["tecnologia", "DBA", 3293761, 6280434, 2898510, 6280434],
  ["tecnologia", "Frontend Developer", 3245231, 6049300, 2855803, 6049300],
  ["tecnologia", "Soporte Técnico / Help Desk", 1862603, 2761639, 1639090, 2761639],
  ["marketing", "Jefe de Marketing", 3863961, 6367854, 3091169, 7959817],
  ["marketing", "Analista de Marketing Digital", 2926059, 4321623, 2340847, 5402029],
  ["ventas", "Jefe de Ventas", 3920100, 6341200, 3136080, 7926499],
  ["ventas", "Key Account Manager", 3136545, 4422121, 2509236, 5527651],
  ["ventas", "Analista Comercial", 2546722, 3649797, 2037377, 4562246],
  ["ventas", "Ejecutivo de Cuentas", 2509204, 3725291, 2007363, 4656613],
];

const RANDSTAD_NEW_ROLES = [
  // [areaId, nombreRolNuevo, baMin, baMax, natMin, natMax]
  ["finanzas", "CFO Director de Administración y Finanzas", 13926297, 21455480, 11489195, 26819349],
  ["finanzas", "Controller", 5386160, 9576143, 4443582, 11970178],
  ["finanzas", "Gerente de Tesorería", 5211560, 7420765, 4299537, 9275956],
  ["finanzas", "Gerente de Cobranzas", 4736379, 8632281, 3907512, 10790351],
  ["finanzas", "Gerente de Auditoría", 5205124, 9743277, 4294227, 12179096],
  ["finanzas", "Gerente de Legales", 5785752, 9280986, 4773246, 11601232],
  ["finanzas", "Jefe de Legales", 4133323, 5809400, 3409992, 7261750],
  ["finanzas", "Jefe de Tesorería", 3837638, 5651720, 3166052, 7064650],
  ["finanzas", "Jefe de Impuestos", 4378942, 6225554, 3612627, 7781943],
  ["finanzas", "Jefe de Cobranzas", 3315031, 6375941, 2734901, 7969926],
  ["finanzas", "Jefe de Auditoría", 3773666, 6099000, 3113275, 7623750],
  ["finanzas", "Jefe de Administración y finanzas", 4139832, 5921484, 3415362, 7401855],
  ["finanzas", "Abogado Corporativo", 2235030, 3584720, 1843900, 4480900],
  ["finanzas", "Analista de Contabilidad", 2073222, 3325346, 1710408, 4156683],
  ["finanzas", "Analista de Auditoría", 2673736, 4243085, 2205832, 5303856],
  ["finanzas", "Analista de Control de Gestión", 2696370, 4014155, 2224505, 5017694],
  ["finanzas", "Analista de Impuestos", 2166433, 3483349, 1787307, 4354186],
  ["finanzas", "Analista de Tesorería", 2260000, 3317470, 1864500, 4146837],
  ["finanzas", "Analista de Cobranzas", 2124481, 3007554, 1752697, 3759443],
  ["finanzas", "Analista de Administración y finanzas", 2021749, 3383850, 1667943, 4229812],
  ["ventas", "Director comercial", 12366157, 19487503, 9892926, 24359379],
  ["ventas", "Director de Expansión y Desarrollo", 11067942, 18533605, 8854354, 23167006],
  ["ventas", "Gerente comercial", 5452731, 10012424, 4362185, 12515530],
  ["marketing", "Director de marketing", 11289300, 18904277, 9031440, 23630347],
  ["marketing", "Gerente de Marketing", 6207352, 9064503, 4965882, 11330628],
  ["marketing", "Jefe de Comunicaciones", 3607852, 6721624, 2886281, 8402030],
  ["marketing", "Gerente de Comunicaciones", 5047076, 8962165, 4037661, 11202706],
  ["marketing", "Analista de Comunicaciones", 2546722, 3649797, 2037377, 4562246],
  ["marketing", "Analista de Marketing", 2925057, 4320623, 2340045, 5400779],
  ["marketing", "Community Manager", 2659076, 3861441, 2127261, 4826801],
  ["marketing", "Business Developer Manager", 3726056, 6225081, 2980845, 7781352],
  ["marketing", "Responsable de E-commerce", 3903844, 5858121, 3123075, 7322652],
  ["ingenieria", "Director de Operaciones", 11399980, 20072111, 9404984, 25090138],
  ["ingenieria", "Ingeniero de mantenimiento", 2958647, 6339958, 2440884, 7924948],
  ["ingenieria", "Gerente de Planta/producción", 6223707, 17329219, 5134558, 21661524],
  ["ingenieria", "Ingeniero de Producción", 2784285, 6762622, 2297035, 8453278],
  ["rrhh", "Director de Recursos Humanos", 10745575, 18919888, 8865099, 23649860],
  ["supply", "Jefe de Comex", 3230208, 7090045, 2664922, 8862556],
  ["supply", "Jefe de Supply Chain", 4407865, 9343656, 3636489, 11679571],
  ["supply", "Analista de Compras", 2436372, 4936397, 2010007, 6170497],
  ["supply", "Jefe de Planificación y Demanda", 4760494, 10088987, 3927408, 12611233],
  ["supply", "Analista de Planificación y Demanda", 2634849, 5329150, 2173751, 6661437],
  ["supply", "Analista de Comex", 2213321, 4844686, 1825990, 6055857],
  ["supply", "Ingeniero de Logística", 2213321, 4844686, 1825990, 6055857],
  ["calidad", "Gerente de Calidad", 6339958, 16378225, 5230465, 20472782],
  ["calidad", "Jefe de Calidad", 3930774, 10482064, 3242889, 13102580],
  ["calidad", "Analista de Calidad", 2784285, 5917294, 2297035, 7396618],
  ["tecnologia", "Responsable de Seguridad Informática", 5388404, 7957664, 4741795, 7957664],
  ["tecnologia", "Project Leader", 4330640, 6050488, 3810964, 6050488],
  ["tecnologia", "Analista BI", 3204395, 4327434, 2819867, 4327434],
  ["tecnologia", "Consultor SAP", 3834768, 6534234, 3374596, 6534234],
  ["tecnologia", "Desarrollador Mobile", 3439542, 6330792, 3026797, 6330792],
  ["tecnologia", "Administrador de Redes", 2965027, 4776830, 2609224, 4776830],
];

const AREA_LABELS_FOR_NEW = {
  calidad: "Calidad",
};

function randstadEntries(baMin, baMax, natMin, natMax) {
  return [
    { fuente: "Randstad Arg. 2026", segmento: "Buenos Aires (Semi Senior)", min: baMin, max: baMax },
    { fuente: "Randstad Arg. 2026", segmento: "Nacional, todas las regiones (Semi Senior)", min: natMin, max: natMax },
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
