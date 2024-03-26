import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(DeviceAudioPlugin)
public class DeviceAudioPlugin: CAPPlugin {
    private let implementation = DeviceAudio()

    @objc func saveAndMuteDeviceAudio(_ call: CAPPluginCall) {
        call.resolve([ "value": implementation.saveAndMuteDeviceAudio(CAPPluginCall()) ])
    }

    @objc func restoreDeviceAudio(_ call: CAPPluginCall) {
        call.resolve([ "value": true ])
    }
}
