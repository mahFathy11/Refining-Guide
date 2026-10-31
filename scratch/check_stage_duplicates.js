import { tracks } from '../src/data/tracks/index.js';

console.log('=== 1. DUPLICATE URLS WITHIN THE SAME TRACK ===');
for (const [trackKey, track] of Object.entries(tracks)) {
  if (!track.stages) continue;
  const trackUrls = new Map();
  track.stages.forEach((st, stIdx) => {
    st.resources.forEach((res, rIdx) => {
      (res.links || []).forEach(l => {
        const u = l.url;
        if (!u || u === '#') return;
        if (!trackUrls.has(u)) trackUrls.set(u, []);
        trackUrls.get(u).push({ stage: st.name, rIdx, title: res.title, label: l.label });
      });
    });
  });
  for (const [u, items] of trackUrls.entries()) {
    if (items.length > 1) {
      console.log(`Track: ${trackKey} | URL: ${u}`);
      items.forEach(it => console.log(`  - [${it.stage}] Card ${it.rIdx}: "${it.title}" (btn: "${it.label}")`));
    }
  }
}

console.log('\n=== 2. DUPLICATE URLS ACROSS DIFFERENT TRACKS ===');
const allUrls = new Map();
for (const [trackKey, track] of Object.entries(tracks)) {
  if (!track.stages) continue;
  track.stages.forEach((st, stIdx) => {
    st.resources.forEach((res, rIdx) => {
      (res.links || []).forEach(l => {
        const u = l.url;
        if (!u || u === '#') return;
        // normalize url: strip trailing slashes, lower case youtube id if needed
        let norm = u.trim().replace(/\/$/, '');
        if (!allUrls.has(norm)) allUrls.set(norm, []);
        allUrls.get(norm).push({ track: trackKey, stage: st.name, title: res.title, label: l.label });
      });
    });
  });
}

for (const [u, items] of allUrls.entries()) {
  const distinctTracks = [...new Set(items.map(it => it.track))];
  if (distinctTracks.length > 1) {
    console.log(`\nURL (${items.length} occurrences across tracks: ${distinctTracks.join(', ')}):`);
    console.log(`Link: ${u}`);
    items.forEach(it => console.log(`  - [${it.track}] [${it.stage}] "${it.title}" (btn: "${it.label}")`));
  }
}
