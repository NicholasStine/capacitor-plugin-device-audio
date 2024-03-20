export interface DeviceAudioPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
