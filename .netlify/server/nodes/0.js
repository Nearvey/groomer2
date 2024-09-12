

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.XKXthLWD.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.DRCnJuQ5.js","_app/immutable/chunks/paths.Djn6fWS5.js"];
export const stylesheets = ["_app/immutable/assets/0.DBmDAdXv.css"];
export const fonts = [];
