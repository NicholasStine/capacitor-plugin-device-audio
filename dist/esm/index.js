import { registerPlugin } from '@capacitor/core';
const DeviceAudio = registerPlugin('DeviceAudio', {
    web: () => import('./web').then(m => new m.DeviceAudioWeb())
});
export * from './definitions';
export { DeviceAudio };
//# sourceMappingURL=index.js.map