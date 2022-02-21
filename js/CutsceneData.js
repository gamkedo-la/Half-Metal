const DIALOGUE = [
  // Intro sequence
  [
    "The year is 208X - the rise of the machines is upon us.",
    "Determined to wipe out all organic life, machines known as The Metallics, rose up against humanity.",
    "But humanity fought back. Hard.",
    "And lost even harder.",
    "Only a handful of resistance armies now stand against The Metallics.",
    "Our numbers fall by the day.",
    "The Metallics capture our soldiers, converting them into machines.",
    "And I was next in line.",
    "They implanted me with machine parts - a cybernetic body, a powerful cannon arm.",
    "But, there was a malfunction... ",
    "Even after conversion, I still sided with my comrades.",
    "My body was metallic and cold. But my heart - it was all human.",
    "The machines don't know that I'm still against them.",
    "And thanks to their little “gifts”, I finally stand a chance of breaking out.",
  ],

  // Cell sequence
  [
    "Cyrus? Come in, Cyrus?",
    "Can you hear me?",
    "Wake up!",
    "Today's the day you're getting free, soldier.",
    "Got your attention now? Good.",
    "Look inside your cell. You see that red orb? ",
    "That's what's getting you out.",
    "It's ammo for your new cannon arm.",
    "We reprogrammed a robot on the inside to place it in your cell during the night.",
    "I'm sure that little thing will get turned into scrap once the Metallics find out.",
    "Make sure you don't end up the same.",
    "Alright, no more wasting time.",
    "Just grab that ammo and load up your weapon.",
    "There's more littered around the facility.",
    "Over and out, Cyrus. We'll see you soon. ",
  ],

  // Armory sequence
  [
    "Come in, Cyrus. Come in.",
    "Congrats on making it this far, soldier.",
    "You've got a long way ahead, but help is on the way.",
    "We've sent an extraction team to the prison.",
    "If you can make it to the outside, we'll have the best chance of getting you back home.",
    "As to how many pieces you'll come back as is up to you.",
    "Stay careful out there. Word of your escape has spread and the Metallics are sure to send top security soon.",
    "Intel says that the reprogrammed bot is still on the loose, but it's acting ... strange. Not what our programmers expected.",
    "Approach with caution.",
    "Over and out, Cyrus. Don't do anything stupid.",
  ],

  // Processing sequence
  [
    "Cyrus?! Come in, Cyrus?!?!",
    "You need to get out of there now!",
    "We just got word from our technicians ...",
    "That little robot .. ",
    "It resisted the reprogramming!",
    "It lead us on - it was all a trap ...",
    "You were just the bait to lure the extraction team.",
    "All of them - everyone - was taken down by ... that thing...",
    "We don't know what it is.",
    "Whatever you do: Don't try to fight it. Just don't. ",
    "Run.",
    "Over and out, Cyr - *bzzzzzt*",
  ],

  // Courtyard sequence
  [
    "Cyrus... Come in, Cyrus...",
    "You see it now, don't you?",
    "You see what they've done.",
    "Everything. Turned to cold metal.",
    "They destroy all life they can find — the grass, the trees, the flowers —  all of it.",
    "They're not machines. They're monsters.",
    "They hate us. They want to ruin us. And it's our duty to destroy every last one of them.",
    "And I know we can do it with your help, soldier.",
    "Get out of there. Fast as you can.",
    "Regroup with what's left of us.",
    "When you get back, we're going to study the enhancements The Metallics put in you.",
    "If we can harness your tech, we stand a chance of taking them all down. For good.",
    "Over and out, Cyrus. You're almost home.",
  ],

  // Outro sequence
  [
    "Finally, I escaped the Metallic's prison.",
    "But ... only thanks to that robot.",
    "I recognized it, too. The one we couldn't reprogram.",
    "So ... if we couldn't change it, then why did it help me?",
    "It can't think. It can't feel.",
    "It's just like what Commander Viper said: more monster than machine.",
    "But still ... if it was never reprogrammed, then it chose to help me. It saw me in danger and sacrificed itself for my own sake.",
    "Why? How could a machine ... choose?",
    "And if they can choose, then why do they choose to fight us?",
    "I don't know what happened and I don't know why. ",
    "All I know is I have some serious questions for Commander Viper when I get back to base.",
    "This is Cyrus. Over and out.",
  ],
];

const SCENES = [
  // INTRO SCENE
  {
    id: "intro",
    music: "intro_music",
    lines: [
      "The year was 208X - the world was in peace.",
      "Humanity had settled all conflicts.",
      "We lived in complete harmony.",
      "No more wars. No more fighting.",
      "All thanks to advanced technology that ended hunger and conflict.",
      "But the technology advanced faster than we could predict.",
      "And soon ... the machines attacked.",
      "Determined to wipe out all organic life, ",
      "machines known as The Metallics, rose up against humanity.",
      "But humanity fought back. Hard.",
      "And lost even harder.",
      "Our numbers fall by the day.",
      "The Metallics capture our soldiers, ",
      "converting them into machines.",
      "And I was next in line.",
      "They implanted me with machine parts ",
      "- a cybernetic body, a powerful cannon arm. ",
      "But, there was a malfunction... ",
      "Even after conversion, I still sided with my comrades.",
      "My body was metallic and cold. But my heart - it was all human.",
      "The machines don't know that I'm still against them.",
      "And thanks to their little gifts, ",
      "I finally stand a chance of breaking out.",
    ],
    beats: [
      {
        image: intro_scene,
        timer: 1000,
        index: 0,
      },
      {
        image: metallics_scene,
        timer: 1000,
        index: 6,
      },
      {
        image: player_intro,
        timer: 1000,
        index: 15,
      },
    ],
  },

  // CELL SCENE
  {
    id: "cell",
    song: "prison_music",
    lines: [
      "Cyrus? Come in, Cyrus?",
      "Can you hear me?",
      "Wake up!",
      "Today's the day you're getting free, soldier.",
      "Got your attention now? Good.",
      "Look inside your cell. You see that red orb? ",
      "That's what's getting you out.",
      "It's ammo for your new cannon arm.",
      "We reprogrammed a robot on the inside to place it in your cell during the night.",
      "I'm sure that little thing will get turned into scrap once the Metallics find out.",
      "Make sure you don't end up the same.",
      "Alright, no more wasting time.",
      "Just grab that ammo and load up your weapon.",
      "There's more littered around the facility.",
      "Over and out, Cyrus. We'll see you soon. ",
    ],
    beats: [
      {
        index: 0,
        image: transceiver,
        timer: 0,
      },
    ],
  },

  // ARMORY SCENE
  {
    id: "armory",
    song: "prison_music",
    lines: [
      "Come in, Cyrus. Come in.",
      "Congrats on making it this far, soldier.",
      "You've got a long way ahead, but help is on the way.",
      "We've sent an extraction team to the prison.",
      "If you can make it to the outside, we'll have the best chance of getting you back home.",
      "As to how many pieces you'll come back as is up to you.",
      "Stay careful out there. Word of your escape has spread and the Metallics are sure to send top security soon.",
      "Intel says that the reprogrammed bot is still on the loose, but it's acting ... strange. Not what our programmers expected.",
      "Approach with caution.",
      "Over and out, Cyrus. Don't do anything stupid.",
    ],
    beats: [
      {
        index: 0,
        image: transceiver,
        timer: 0,
      },
    ],
  },

  // PROCESSING SCENE
  {
    id: "processing",
    song: "prison_music",
    lines: [
      "Cyrus?! Come in, Cyrus?!?!",
      "You need to get out of there now!",
      "We just got word from our technicians ...",
      "That little robot .. ",
      "It resisted the reprogramming!",
      "It lead us on - it was all a trap ...",
      "You were just the bait to lure the extraction team.",
      "All of them - everyone - was taken down by ... that thing...",
      "We don't know what it is.",
      "Whatever you do: Don't try to fight it. Just don't. ",
      "Run.",
      "Over and out, Cyr - >bzzzzzt<",
    ],
    beats: [
      {
        index: 0,
        image: transceiver,
        timer: 0,
      },
    ],
  },

  // COURTYARD SCENE
  {
    id: "courtyard",
    song: "prison_music",
    lines: [
      "Cyrus... Come in, Cyrus...",
      "You see it now, don't you?",
      "You see what they've done.",
      "Everything. Turned to cold metal.",
      "They destroy all life they can find — the grass, the trees, the flowers —  all of it.",
      "They're not machines. They're monsters.",
      "They hate us. They want to ruin us. And it's our duty to destroy every last one of them.",
      "And I know we can do it with your help, soldier.",
      "Get out of there. Fast as you can.",
      "Regroup with what's left of us.",
      "When you get back, we're going to study the enhancements The Metallics put in you.",
      "If we can harness your tech, we stand a chance of taking them all down. For good.",
      "Over and out, Cyrus. You're almost home.",
    ],
    beats: [
      {
        index: 0,
        image: transceiver,
        timer: 0,
      },
    ],
  },

  // OUTRO SCENE
  {
    id: "outro",
    song: "prison_music",
    lines: [
      "Finally, I escaped the Metallic's prison.",
      "But ... only thanks to that robot.",
      "I recognized it, too. The one we couldn't reprogram.",
      "So ... if we couldn't change it, then why did it help me?",
      "It can't think. It can't feel.",
      "It's just like what Commander Viper said: more monster than machine.",
      "But still ... if it was never reprogrammed, then it chose to help me. It saw me in danger and sacrificed itself for my own sake.",
      "Why? How could a machine ... choose?",
      "And if they can choose, then why do they choose to fight us?",
      "I don't know what happened and I don't know why. ",
      "All I know is I have some serious questions for Commander Viper when I get back to base.",
      "This is Cyrus. Over and out.",
    ],
    beats: [
      {
        index: 0,
        image: transceiver,
        timer: 0,
      },
    ],
  },

  // TUTORIALS
  {
    id: "baiting_tutorial",
    song: "prison_music",
    lines: [
      "Cyrus,",
      "Don't be discouraged when you're out of ammo.",
      "Use your wits to survive.",
      "Those machines you saw are called Leapers.",
      "They're low-grade machines dumb enough to leap straight at you.",
      "When they rush, they'll break anything in their way - including you.",
      "If you don't have any ammunition left to break barriers, get them to do the dirty work for you.",
      "You'll figure it out soldier.",
      "Trust me. You're much smarter than them.",
    ],
    beats: [
      {
        index: 0,
        image: transceiver,
        timer: 0,
      },
    ],
  },

  {
    id: "flyer_tutorial",
    song: "prison_music",
    lines: [
      "Up ahead are some Flyer robots.",
      "You can't hit them while they're airborne,",
      "But you can in a quick shot when they land.",
      "If you're careful enough, ",
      "you can slip right underneath them with no trouble.",
    ],
    beats: [
      {
        index: 0,
        image: transceiver,
        timer: 0,
      },
    ],
  },

  {
    id: "turn_tutorial",
    song: "prison_music",
    lines: [
      "Cyrus, do you see that green ammunition?",
      "That's a special ammo type that can confuse the metallics.",
      "If you hit them with it,",
      "It will reprogram their patrol route.",
      "You can turn them to face a different direction.",
      "Think carefully about how you can use this to your advantage.",
    ],
    beats: [
      {
        index: 0,
        image: transceiver,
        timer: 0,
      },
    ],
  },

  {
    id: "stun_tutorial",
    song: "prison_music",
    lines: [
      "Cyrus, there's a new ammo type in this next room.",
      "A stun shot - use it to electrify the machines",
      "To suspend their movement.",
      "Use that time to move while they can't chase you.",
    ],
    beats: [
      {
        index: 0,
        image: transceiver,
        timer: 0,
      },
    ],
  },
];
