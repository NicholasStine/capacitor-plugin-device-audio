import { WebPlugin } from '@capacitor/core';
export class DeviceAudioWeb extends WebPlugin {
    async restoreDeviceAudio(options) {
        console.log("ECHO", options);
        return true;
    }
    async saveAndMuteDeviceAudio(options) {
        console.log('ECHO', options);
        return { ringer: 0, media: 0, do_not_disturb: false };
    }
}
//# sourceMappingURL=web.js.map