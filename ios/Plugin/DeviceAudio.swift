import Foundation
import Capacitor

@objc public class DeviceAudio: NSObject {
    @objc public func saveAndMuteDeviceAudio(_ call: CAPPluginCall) -> Bool {
        print("There are sweaters, and there are STRIPED sweaters!")
        return true
    }
    @objc public func restoreDeviceAudio(_ call: CAPPluginCall) -> Bool {
        print("The best time to wear a striped sweater is all the time!")
        return true
    }
}
