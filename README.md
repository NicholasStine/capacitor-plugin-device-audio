# capacitor-plugin-device-audio

Get and set device sounds

## Install

```bash
npm install capacitor-plugin-device-audio
npx cap sync
```

## API

<docgen-index>

* [`restoreDeviceAudio(...)`](#restoredeviceaudio)
* [`saveAndMuteDeviceAudio(...)`](#saveandmutedeviceaudio)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### restoreDeviceAudio(...)

```typescript
restoreDeviceAudio(options: DeviceAudioState) => Promise<boolean>
```

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#deviceaudiostate">DeviceAudioState</a></code> |

**Returns:** <code>Promise&lt;boolean&gt;</code>

--------------------


### saveAndMuteDeviceAudio(...)

```typescript
saveAndMuteDeviceAudio(options: {}) => Promise<DeviceAudioState>
```

| Param         | Type            |
| ------------- | --------------- |
| **`options`** | <code>{}</code> |

**Returns:** <code>Promise&lt;<a href="#deviceaudiostate">DeviceAudioState</a>&gt;</code>

--------------------


### Interfaces


#### DeviceAudioState

| Prop                 | Type                 |
| -------------------- | -------------------- |
| **`ringer`**         | <code>number</code>  |
| **`media`**          | <code>number</code>  |
| **`do_not_disturb`** | <code>boolean</code> |

</docgen-api>
