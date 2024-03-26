export interface DeviceAudioState{
  ringer: number,
  media: number,
  do_not_disturb: boolean
}

export interface DeviceAudioPlugin {
  restoreDeviceAudio(options: DeviceAudioState): Promise<boolean>;
  saveAndMuteDeviceAudio(options: { }): Promise<DeviceAudioState>;
}
