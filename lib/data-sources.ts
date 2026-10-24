export type ResearchDataSource = {
  id: string;
  name: string;
  kind: string;
  url: string;
  note: string;
  integration: "directory-only" | "configured";
};

/**
 * Trusted provider starting points used to build the directory UI.
 * These are not API integrations. Add an adapter only after checking that
 * provider's official terms, authentication, rate limits, CORS/server needs,
 * and data attribution rules.
 */
export const researchSources: ResearchDataSource[] = [
  { id: "nasa-open-science", name: "NASA Open Science", kind: "Space and Earth science", url: "https://science.nasa.gov/open-science/", note: "Start from the official open-science resource and follow the data product's own documentation.", integration: "directory-only" },
  { id: "nasa-open-apis", name: "NASA Open APIs", kind: "Space and planetary data", url: "https://api.nasa.gov/", note: "API availability and key requirements vary by endpoint. No live NASA API integration is enabled in this build.", integration: "directory-only" },
  { id: "nasa-exoplanet-archive", name: "NASA Exoplanet Archive", kind: "Astronomy datasets", url: "https://exoplanetarchive.ipac.caltech.edu/", note: "Check table definitions, provenance, licensing, and query limits before using records.", integration: "directory-only" },
  { id: "simbad", name: "SIMBAD Astronomical Database", kind: "Astronomical identifiers", url: "https://simbad.u-strasbg.fr/simbad/", note: "Use object identifiers and source notes carefully; do not infer missing measurements.", integration: "directory-only" },
  { id: "noaa-climate", name: "NOAA Climate Data Online", kind: "Weather and climate", url: "https://www.ncei.noaa.gov/cdo-web/", note: "Review dataset coverage, units, terms, and access conditions before analysis.", integration: "directory-only" },
  { id: "openstreetmap", name: "OpenStreetMap", kind: "Mapping reference", url: "https://www.openstreetmap.org/", note: "Follow attribution and usage policies before embedding maps or tiles in a deployed application.", integration: "directory-only" },
];

export function getResearchDataSources() {
  return researchSources;
}
