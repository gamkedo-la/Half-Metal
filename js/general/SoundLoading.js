var sounds = [];
var soundsToLoad;

async function loadSounds() {
  if (location.protocol == "file:") {
    console.log("not using a web server: unable to download sounds. ignoring.");
    return; // no sound if no web server
  }

  startedLoading = true;
  const soundList = [
    { sndName: "shoot", theFile: "snd_shoot.wav" },
    { sndName: "destroy", theFile: "snd_destroy.wav" },
    { sndName: "bump", theFile: "snd_bump.wav" },
    { sndName: "lose", theFile: "snd_lose.wav" },
    { sndName: "no_ammo", theFile: "snd_no_ammo.wav" },
    { sndName: "get_ammo", theFile: "snd_get_ammo.wav" },
    { sndName: "window_break", theFile: "snd_windowbreak.wav" },
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
