/**
 * Public entry for curriculum production architecture.
 */

export * from "./types";
export * from "./freshness";
export * from "./mastery-compatibility";
export * from "./hierarchy";
export {
  listProductionSources,
  getProductionSource,
  listFutureReviewFlags,
  FUTURE_REVIEW_FLAGS,
} from "./sources/catalog";
export {
  listExamBlueprints,
  getExamBlueprint,
  CERT_TRACKS_NEEDING_BLUEPRINT,
  CERT_TRACKS_NEEDING_OBJECTIVE_LINES,
  CERT_TRACKS_NEEDING_LIVE_OBJECTIVE_REMAP,
} from "./exam-blueprints";
export {
  listCcnaV11OfficialLines,
  listCcnaV11ParentObjectives,
  listCcnaV11AtomicObjectives,
  CCNA_V11_PDF_URL,
  CCNA_V11_PDF_SHA256,
} from "./objectives/ccna-200-301-v1.1";
export {
  listCcnaV20OfficialLines,
  listCcnaV20ParentObjectives,
  listCcnaV20AtomicObjectives,
  CCNA_V20_PDF_URL,
  CCNA_V20_PDF_SHA256,
} from "./objectives/ccna-200-301-v2.0";
export {
  CCNA_PILOT_TO_V11_MAPPINGS,
  buildCcnaPilotMappingManifest,
  buildCcnaV11CoverageReport,
  resolveOfficialIdsForPilot,
} from "./mappings/ccna-pilot-to-v1.1";
export * from "./ccna-transition";
export {
  buildLiveTopicPrerequisiteGraph,
  buildKnowledgePrerequisiteGraph,
  listTrackPrerequisiteGraphs,
  findGraphCycles,
  validateBrokenPrerequisiteLinks,
} from "./prerequisites/graph";
export {
  PRODUCTION_MISCONCEPTIONS,
  PRODUCTION_REMEDIATIONS,
} from "./misconceptions/catalog";
export { listSimulatorSpecs } from "./simulators/catalog";
