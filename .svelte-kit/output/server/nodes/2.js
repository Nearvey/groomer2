

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Cg05CUcw.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.DRCnJuQ5.js","_app/immutable/chunks/paths.AhnRULFr.js"];
export const stylesheets = [];
export const fonts = [];
