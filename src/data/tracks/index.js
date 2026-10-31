// الفهرس الموحد لجميع مسارات التدريب والهندسة
import { LEVELS, r, stage } from "./helpers.js";
export { TRACK_ICONS, TRACK_NAMES_AR } from "./constants.js";

import { foundTrack } from "./found.js";
import { designTrack } from "./design.js";
import { equipTrack } from "./equip.js";
import { simTrack } from "./sim.js";
import { opsTrack } from "./ops.js";
import { safetyTrack } from "./safety.js";
import { rpgTrack } from "./rpg.js";
import { corrTrack } from "./corr.js";
import { planningTrack } from "./planning.js";
import { envTrack } from "./env.js";
import { sustainabilityTrack } from "./sustainability.js";
import { salesTrack } from "./sales.js";
import { commissioningTrack } from "./commissioning.js";
import { mudTrack } from "./mud.js";
import { qcTrack } from "./qc.js";
import { rndTrack } from "./rnd.js";

export { LEVELS, r, stage };

export const tracks = [
  foundTrack,
  designTrack,
  equipTrack,
  simTrack,
  opsTrack,
  safetyTrack,
  rpgTrack,
  corrTrack,
  planningTrack,
  envTrack,
  sustainabilityTrack,
  salesTrack,
  commissioningTrack,
  mudTrack,
  qcTrack,
  rndTrack,
];

// وصول سريع للمسار عبر معرفه
export const trackMap = Object.fromEntries(tracks.map((t) => [t.id, t]));
