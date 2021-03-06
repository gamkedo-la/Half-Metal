var sounds = [];
var soundsToLoad;

async function loadSounds() {
  if (location.protocol == "file:") {
    console.log("not using a web server: unable to download sounds. ignoring.");
    return; // no sound if no web server
  }

  startedLoading = true;
  const soundList = [
    { sndName: "text", theFile: "snd_text.wav" },

    // MUSIC
    { sndName: "intro_music", theFile: "bg_half_metal_intro.mp3" },
    { sndName: "title_music", theFile: "bg_title.mp3" },
    { sndName: "prison_music", theFile: "bg_prisonloop.mp3" },
    { sndName: "tutorial_music", theFile: "bg_tutorial.mp3" },
    { sndName: "armory_music", theFile: "bg_armory.mp3" },
    { sndName: "processing_music", theFile: "bg_processingloop.mp3" },
    { sndName: "courtyard_music", theFile: "bg_courtyard.mp3" },
    { sndName: "alert_music", theFile: "bg_alertloop.mp3" },
    { sndName: "outro_music", theFile: "bg_outro.mp3" },
    // { sndName: "enemy_credits_music", theFile: "bg_enemy_credits.mp3" },

    // SFX
    { sndName: "shoot", theFile: "snd_shoot.wav" },
    { sndName: "destroy", theFile: "snd_destroy.wav" },
    { sndName: "bump", theFile: "snd_bump.wav" },
    { sndName: "lose", theFile: "snd_lose.wav" },
    { sndName: "no_ammo", theFile: "snd_no_ammo.wav" },
    { sndName: "get_ammo", theFile: "snd_get_ammo.wav" },
    { sndName: "window_break", theFile: "snd_windowbreak.wav" },
    { sndName: "leap", theFile: "snd_leap.wav" },
    { sndName: "stun", theFile: "snd_stun.wav" },
    { sndName: "turn", theFile: "snd_turn.wav" },
    { sndName: "push", theFile: "snd_push.wav" },
    { sndName: "push_alt", theFile: "snd_push_alt.wav" },
    { sndName: "fly_up", theFile: "snd_fly_up.wav" },
    { sndName: "fly_down", theFile: "snd_fly_down.wav" },
    { sndName: "detected", theFile: "snd_detected.wav" },
    { sndName: "hum", theFile: "snd_elecwall_hum.wav" },
    { sndName: "bounce", theFile: "snd_bounce.wav" },
    { sndName: "elec_open", theFile: "snd_elecwall_open.wav" },
    { sndName: "level_transition", theFile: "snd_level_transition.wav" },
    { sndName: "pause", theFile: "snd_pause.wav" },
    { sndName: "hunter", theFile: "hunter.mp3" },
  ];

  soundsToLoad = soundList.length;

  for (let i = 0; i < soundList.length; i++) {
    sounds[soundList[i].sndName] = await beginLoadingSound(
      soundList[i].sndName,
      soundList[i].theFile
    );
    soundsToLoad--;
  }
}

async function beginLoadingSound(sndName, fileName) {
  if (!audioCtx) {
    console.log("ERROR: beginLoadingSound has no audioCtx: " + fileName);
    return;
  }
  src = "sounds/" + fileName;
  const response = await fetch(src);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  return audioBuffer;
}
