import { WebPlugin } from '@capacitor/core';

import type { DeviceAudioPlugin } from './definitions';

export class DeviceAudioWeb extends WebPlugin implements DeviceAudioPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
