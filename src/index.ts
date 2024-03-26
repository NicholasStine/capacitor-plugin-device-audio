import { registerPlugin } from '@capacitor/core';

import type { DeviceAudioPlugin } from './definitions';

const DeviceAudio = registerPlugin<DeviceAudioPlugin>('DeviceAudio', {
  web: () => import('./web').then(m => new m.DeviceAudioWeb())
});

export * from './definitions';
export { DeviceAudio };
