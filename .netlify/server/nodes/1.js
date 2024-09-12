

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DlvJFqDr.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.DRCnJuQ5.js","_app/immutable/chunks/entry.CqnKYQUj.js","_app/immutable/chunks/paths.Djn6fWS5.js"];
export const stylesheets = [];
export const fonts = [];
