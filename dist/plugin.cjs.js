'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const DeviceAudio = core.registerPlugin('DeviceAudio', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.DeviceAudioWeb())
});

class DeviceAudioWeb extends core.WebPlugin {
    async restoreDeviceAudio(options) {
        console.log("ECHO", options);
        return true;
    }
    async saveAndMuteDeviceAudio(options) {
        console.log('ECHO', options);
        return { ringer: 0, media: 0, do_not_disturb: false };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DeviceAudioWeb: DeviceAudioWeb
});

exports.DeviceAudio = DeviceAudio;
//# sourceMappingURL=plugin.cjs.js.map
