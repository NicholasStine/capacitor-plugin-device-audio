import Foundation

@objc public class DeviceAudio: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
