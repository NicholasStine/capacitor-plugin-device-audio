import { WebPlugin } from '@capacitor/core';
import type { DeviceAudioPlugin, DeviceAudioState } from './definitions';
export declare class DeviceAudioWeb extends WebPlugin implements DeviceAudioPlugin {
    restoreDeviceAudio(options: DeviceAudioState): Promise<boolean>;
    saveAndMuteDeviceAudio(options: {}): Promise<DeviceAudioState>;
}
