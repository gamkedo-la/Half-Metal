# HOW TO LOAD SOUNDS
### Step 1: Add your sound to the `sounds` folder
Simply add your file to the folder and be sure to follow the established naming conventions (e.g., `snd_my_sound.wav`). 

Normally, we'll use `.wav` files for our `sounds` folder. 


### Step 2: Add your sound to the `soundList`
In `js/general/SoundLoading.js`, look for the `soundList` array inside `loadSounds()`. 

Add a new entry to this array, containing your sound name and file name.

    { sndName:  "my_sound", theFile:  "snd_my_sound.wav" },


### Step 3: Test your sound in a Game Object
Finally, play your sound in a Game Object (for example, the `EnemyClass` of the `PlayerClass`). 

You can add the following code wherever appropriate:

    playSound(sounds.my_sound);

You can also play a sound basically anywhere in the code base, so long as it's actually called in-game. Game Objects are just the most convenient place to do this.