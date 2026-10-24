export type ProjectStatus = "Proposed" | "In Progress" | "Testing" | "Published" | "Archived";

export type Department = {
  slug: string;
  name: string;
  shortLabel: string;
  code: string;
  number: string;
  color: string;
  summary: string;
  mission: string;
  themes: string[];
  tools: string[];
  researchNote: string;
};

export const departments: Department[] = [
  {
    slug: "aeroace",
    name: "AeroACE",
    shortLabel: "Aerospace",
    code: "AE",
    number: "01",
    color: "#70c9ff",
    summary: "Aerospace, flight, atmospheric science, telemetry, and the engineering behind things that move through air.",
    mission: "Study flight and aerospace systems through careful questions, design work, simulations, and documented experiments.",
    themes: ["Aerodynamics and flight data", "Atmospheric science and balloon mission concepts", "Trajectory and telemetry modelling", "Aerospace engineering and CAD"],
    tools: ["CAD and technical drawing", "CSV flight-data analysis", "Educational trajectory models", "Test planning and engineering notebooks"],
    researchNote: "Models and design notes are educational until validated with suitable measurements and qualified review. Do not interpret a simplified trajectory or pressure model as an operational flight prediction.",
  },
  {
    slug: "aquaace",
    name: "AquaACE",
    shortLabel: "Water science",
    code: "AQ",
    number: "02",
    color: "#5de7e0",
    summary: "Water quality, aquatic environments, pollution monitoring, and affordable water-cleaning research.",
    mission: "Explore water systems and aquatic environments using careful observation, appropriate measurements, and transparent documentation.",
    themes: ["Water-quality measurement and sampling", "Aquatic ecosystem observation", "Pollution and waste pathways", "Low-cost filtration concepts"],
    tools: ["Sampling logs", "Water-quality charting", "Location and context records", "Filtration comparison worksheets"],
    researchNote: "Visual appearance and simple sensor readings do not prove that water is safe to drink. Health or safety claims require appropriate validated laboratory analysis.",
  },
  {
    slug: "landace",
    name: "LandACE",
    shortLabel: "Environment",
    code: "LA",
    number: "03",
    color: "#8be5a8",
    summary: "Environmental restoration, land-use research, waste reduction, and affordable environmental engineering.",
    mission: "Study environmental systems and sustainable approaches while recording methods, observations, uncertainty, and practical trade-offs.",
    themes: ["Environmental restoration", "Soil, plants, and land-use observation", "Waste reduction and circular materials", "Sustainability and low-cost engineering"],
    tools: ["Field survey records", "Environmental data charts", "Map-based research plans", "Impact-report templates"],
    researchNote: "Project impact should be supported by a baseline, documented method, and repeatable observations. Do not report estimated benefits as measured outcomes.",
  },
  {
    slug: "roboace",
    name: "RoboACE",
    shortLabel: "Robotics",
    code: "RB",
    number: "04",
    color: "#ffbd7b",
    summary: "Robotics, mechanical design, electronics, control systems, CAD, and affordable prototypes.",
    mission: "Connect software and physical systems through small, testable prototypes and clear build documentation.",
    themes: ["Robotics and automation", "Mechanical design and CAD", "Sensors and electronics", "Control logic and performance testing"],
    tools: ["CAD preview links", "Build logs and parts lists", "Sensor datasets", "Code-repository links"],
    researchNote: "Build logs should separate planned, assembled, and tested components. Avoid claiming performance until a test method and actual results have been recorded.",
  },
  {
    slug: "astroace",
    name: "AstroACE",
    shortLabel: "Space science",
    code: "AS",
    number: "05",
    color: "#b2a0ff",
    summary: "Astronomy, astrophysics, space science, and analysis of real astronomical datasets.",
    mission: "Turn questions about the universe into reproducible observations, data analysis, and explanations grounded in traceable sources.",
    themes: ["Astronomy and astrophysics", "Astronomical catalogues and light curves", "Orbit and planetary demonstrations", "Reproducible data analysis"],
    tools: ["CSV light-curve viewer", "Educational orbit model", "Data source citations", "Analysis notes and charts"],
    researchNote: "Check catalogue identifiers, data provenance, units, and uncertainty. Label generated or illustrative values as simulated rather than astronomical observations.",
  },
  {
    slug: "ace-canvas",
    name: "ACE Canvas",
    shortLabel: "Creative technology",
    code: "CV",
    number: "06",
    color: "#ff8fc8",
    summary: "Creative technology, graphic design, video, game development, interactive media, and creative coding.",
    mission: "Make technical ideas clearer and more useful through thoughtful visual design, creative tools, interaction, and storytelling.",
    themes: ["Graphic and product design", "Video and media storytelling", "Game development and interactive media", "Creative coding and visualization"],
    tools: ["Project galleries and portfolios", "Design systems and wireframes", "Interactive web prototypes", "Media and source documentation"],
    researchNote: "Clearly label concept art, mock-ups, and generated illustrations. Do not present a visualization as a photograph or a simulated visual as experimental evidence.",
  },
];

export type Project = {
  slug: string;
  title: string;
  departmentSlug: string;
  departmentName: string;
  summary: string;
  topic: string;
  status: ProjectStatus;
  isDemo: boolean;
  question: string;
  objectives: string[];
  methodology: string[];
  materials: string[];
  limitations: string[];
  sources: { label: string; url: string }[];
  datasets?: { label: string; url: string }[];
  findings?: string[];
  contributors?: { name: string; role: string; publicDisplayApproved: boolean }[];
  reportUrl?: string;
  repositoryUrl?: string;
  updated: string;
};

export const projects: Project[] = [
  {
    slug: "bayudhara-1-design-study",
    title: "BAYUDHARA-1: Initial aerospace design study",
    departmentSlug: "aeroace",
    departmentName: "AeroACE",
    summary: "A student aerospace design exploration covering CAD, nozzle geometry, airflow concepts, and safe bench-test planning.",
    topic: "Design study",
    status: "In Progress",
    isDemo: false,
    question: "How can a student team document an aerospace concept and evaluate it with controlled, low-energy tests before making performance claims?",
    objectives: ["Keep geometry and design decisions documented", "Separate calculations from measured observations", "Plan safe tests using appropriate rated equipment and supervision"],
    methodology: ["Record the scope and assumptions of each design iteration", "Use CAD and calculations as preliminary models", "Document any future tests separately with equipment, conditions, and observed data"],
    materials: ["CAD files and design notes when available", "Test plans and observation logs"],
    limitations: ["No flight or propulsion performance result is claimed here", "Concept calculations are not a substitute for engineering review or rated test equipment", "Any future results must include methods, measurements, and limitations"],
    sources: [],
    updated: "2026-08-30",
  },
  {
    slug: "water-sampling-workflow",
    title: "Water sampling workflow (example concept)",
    departmentSlug: "aquaace",
    departmentName: "AquaACE",
    summary: "A demonstration planning template for documenting sample context, measurement methods, units, and uncertainty.",
    topic: "Field methods",
    status: "Proposed",
    isDemo: true,
    question: "What information makes a water-quality observation understandable and repeatable?",
    objectives: ["Define a consistent observation sheet", "Record sample context and units", "Explain the limits of simple measurements"],
    methodology: ["Choose indicators appropriate to the question", "Record location context, date, equipment, and units", "Mark unknown or unmeasured fields instead of guessing"],
    materials: ["Demonstration worksheet", "Sample data only when explicitly labelled"],
    limitations: ["This is a planning example, not a report of completed sampling", "No water safety conclusion is provided"],
    sources: [],
    updated: "2026-10-24",
  },
  {
    slug: "environment-field-log",
    title: "Environmental field log (example concept)",
    departmentSlug: "landace",
    departmentName: "LandACE",
    summary: "An example structure for recording environmental observations and keeping proposed actions separate from measured impact.",
    topic: "Environmental monitoring",
    status: "Proposed",
    isDemo: true,
    question: "How should field observations and follow-up measurements be documented so that comparisons are meaningful?",
    objectives: ["Set a baseline record format", "Document methods and observation conditions", "Distinguish proposed impact from measured outcomes"],
    methodology: ["Define site context and repeatable observation fields", "Record units and measurement gaps", "Compare observations only when the method is sufficiently consistent"],
    materials: ["Example field log", "Map or site sketch if available"],
    limitations: ["Demonstration content only; no restoration outcome or impact figure is claimed"],
    sources: [],
    updated: "2026-10-24",
  },
  {
    slug: "sensor-to-action-demo",
    title: "Sensor-to-action workflow (example concept)",
    departmentSlug: "roboace",
    departmentName: "RoboACE",
    summary: "A demonstration project brief for connecting sensor readings, control logic, test cases, and build documentation.",
    topic: "Robotics",
    status: "Proposed",
    isDemo: true,
    question: "How can a small control system be tested against expected, boundary, and invalid sensor readings?",
    objectives: ["Map input-to-output logic", "Define test cases before running hardware", "Record component and code versions"],
    methodology: ["Draw a state or decision diagram", "Choose test cases and expected responses", "Log results only after a test has been executed"],
    materials: ["Example logic diagram", "Parts list template", "Code link when available"],
    limitations: ["This example does not claim a completed robot build or tested performance"],
    sources: [],
    updated: "2026-10-24",
  },
  {
    slug: "light-curve-viewer-demo",
    title: "Astronomy light-curve viewer (simulated demonstration)",
    departmentSlug: "astroace",
    departmentName: "AstroACE",
    summary: "A demonstration brief for plotting brightness observations over time and clearly distinguishing simulated data from real astronomy records.",
    topic: "Astronomy data",
    status: "Proposed",
    isDemo: true,
    question: "How can a light curve be displayed without hiding gaps, units, or data provenance?",
    objectives: ["Plot a time column against a numeric measurement", "Retain units and source references", "Label simulated values clearly"],
    methodology: ["Use the ACE Lab CSV explorer with an appropriately described dataset", "Document source, units, and missing values", "Check data definitions before interpreting patterns"],
    materials: ["CSV data explorer", "Source notes template"],
    limitations: ["No astronomical dataset is bundled as a measured result", "Any simulated series must be labelled as simulated"],
    sources: [{ label: "NASA Open Science", url: "https://science.nasa.gov/open-science/" }],
    updated: "2026-10-24",
  },
  {
    slug: "science-explainer-design",
    title: "Science explainer design (example concept)",
    departmentSlug: "ace-canvas",
    departmentName: "ACE Canvas",
    summary: "An example creative brief for explaining a scientific topic with accurate diagrams, accessible layout, and traceable sources.",
    topic: "Creative technology",
    status: "Proposed",
    isDemo: true,
    question: "How can a visual explanation simplify a technical subject without removing important caveats?",
    objectives: ["Define the target audience and learning goal", "Keep sources linked to visual claims", "Test the reading order and accessibility"],
    methodology: ["Draft a storyboard and visual hierarchy", "Map each factual claim to its source", "Review contrast, text size, and alternative text"],
    materials: ["Brief and storyboard template", "Draft illustrations clearly labelled as concepts"],
    limitations: ["No completed portfolio item is implied by this example record"],
    sources: [],
    updated: "2026-10-24",
  },
];

export const projectStatuses: ProjectStatus[] = ["Proposed", "In Progress", "Testing", "Published", "Archived"];

export const researchSources = [
  { name: "NASA Open Science", kind: "Space and Earth science", url: "https://science.nasa.gov/open-science/", note: "Start from the official open-science resource and follow the data product's own documentation." },
  { name: "NASA Open APIs", kind: "Space and planetary data", url: "https://api.nasa.gov/", note: "API availability and key requirements vary by endpoint. No live NASA API integration is enabled in this initial build." },
  { name: "NASA Exoplanet Archive", kind: "Astronomy datasets", url: "https://exoplanetarchive.ipac.caltech.edu/", note: "Check table definitions, provenance, licensing, and query limits before using records." },
  { name: "SIMBAD Astronomical Database", kind: "Astronomical identifiers", url: "https://simbad.u-strasbg.fr/simbad/", note: "Use object identifiers and source notes carefully; do not infer missing measurements." },
  { name: "NOAA Climate Data Online", kind: "Weather and climate", url: "https://www.ncei.noaa.gov/cdo-web/", note: "Review dataset coverage, units, and access terms before analysis." },
  { name: "OpenStreetMap", kind: "Mapping reference", url: "https://www.openstreetmap.org/", note: "Follow attribution and usage policies before embedding maps or tiles in a deployed application." },
];

export const publicAnnouncements: { title: string; date: string; summary: string; href?: string }[] = [];
