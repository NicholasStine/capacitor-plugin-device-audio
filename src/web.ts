import { WebPlugin } from '@capacitor/core';

import type { DeviceAudioPlugin, DeviceAudioState } from './definitions';

export class DeviceAudioWeb extends WebPlugin implements DeviceAudioPlugin {
  async restoreDeviceAudio(options: DeviceAudioState): Promise<boolean> {
    console.log("ECHO", options)
    return true;
  }
  async saveAndMuteDeviceAudio(options: { }): Promise<DeviceAudioState> {
    console.log('ECHO', options);
    return{ringer: 0, media: 0, do_not_disturb: false };
  }
}
