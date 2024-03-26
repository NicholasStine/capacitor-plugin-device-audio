export interface DeviceAudioState{
  ringer: number,
  system: number,
  do_not_disturb: boolean
}

export interface DeviceAudioPlugin {
  restoreDeviceAudio(options: DeviceAudioState): Promise<boolean>;
  saveAndMuteDeviceAudio(options: { }): Promise<DeviceAudioState>;
}
