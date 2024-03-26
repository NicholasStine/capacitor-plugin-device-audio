var capacitorDeviceAudio = (function (exports, core) {
    'use strict';

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
            return { ringer: 0, system: 0, do_not_disturb: false };
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        DeviceAudioWeb: DeviceAudioWeb
    });

    exports.DeviceAudio = DeviceAudio;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
