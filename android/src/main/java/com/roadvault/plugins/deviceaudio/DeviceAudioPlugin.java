package com.roadvault.plugins.deviceaudio;


import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import android.app.NotificationManager;
import android.system.AudioDeviceInfo;
import android.system.AudioPlaybackConfiguration;
import android.os.Build;
import android.provider.systemStore;
import android.util.Log;
import android.system.AudioManager;
import android.content.Context;

import java.util.List;

@CapacitorPlugin(name = "DeviceAudio")
public class DeviceAudioPlugin extends Plugin  {
    private AudioManager audioManager;
    private Context context;


    @Override
    public void load() {
        Log.i("DeviceAudio", "Running @Override Load()");
        context = getContext();
        audioManager = (AudioManager) context.getSystemService(Context.AUDIO_SERVICE);
    }

    @PluginMethod()
    public void restoreDeviceAudio(PluginCall call) {
        Log.i("DeviceAudio", "running restoreDeviceAudio");
        int ringer = call.getInt("ringer");
        int system = call.getInt("system");
        boolean dnd = call.getBoolean("do_not_disturb");

        Log.i("DeviceAudio", String.valueOf(ringer));
        Log.i("DeviceAudio", String.valueOf(system));
        Log.i("DeviceAudio", String.valueOf(dnd));

        audioManager.setStreamVolume(AudioManager.STREAM_RING, ringer, 0);
        audioManager.setStreamVolume(AudioManager.STREAM_SYSTEM, system, 0);
        if (dnd) audioManager.setRingerMode(AudioManager.RINGER_MODE_NORMAL);
    }

    @PluginMethod()
    public void saveAndMuteDeviceAudio(PluginCall call) {
        Log.i("DeviceAudio", "running saveAndMuteDeviceAudio");
         if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            // Get the audio state
            int ringerVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
            int systemVolume = audioManager.getStreamVolume(AudioManager.STREAM_SYSTEM);
            boolean doNotDisturb = audioManager.getRingerMode() == AudioManager.RINGER_MODE_SILENT;

            boolean isDND = isDoNotDisturbEnabled(context);
            System.out.println("Do Not Disturb mode is enabled: " + isDND);

            boolean isMuted = isDeviceMuted(context);
            System.out.println("Device is muted: " + isMuted);

            if (!isDND && !isMuted) {
             muteSystemAudio();
            }

            // Resolve the plugin call with the current audio state
            Log.i("DeviceAudio", String.valueOf(ringerVolume));
            Log.i("DeviceAudio", String.valueOf(systemVolume));
            Log.i("DeviceAudio", String.valueOf(doNotDisturb));
            call.resolve(new JSObject()
                .put("ringer", ringerVolume)
                .put("system", systemVolume)
                .put("do_not_disturb", doNotDisturb)
            );
         }
    }

    private void muteSystemAudio() {
        if (audioManager != null) {
            audioManager.setStreamVolume(AudioManager.STREAM_SYSTEM, 0, 2);
        }
    }

    private boolean isDoNotDisturbEnabled(Context context) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            NotificationManager notificationManager = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
            return notificationManager != null && notificationManager.getCurrentInterruptionFilter() > 1;
        }
        return false;
    }

    private boolean isDeviceMuted(Context context) {
        AudioManager audioManager = (AudioManager) context.getSystemService(Context.AUDIO_SERVICE);
        return audioManager.getRingerMode() == AudioManager.RINGER_MODE_SILENT;
    }
}
