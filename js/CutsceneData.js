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
      "The year was 208X\n- the world was in peace.",
      "Humanity had settled all\nconflicts.",
      "We lived in complete\nharmony.",
      "No more wars.\nNo more fighting.",
      "All thanks to advanced\ntechnology that ended\nhunger and conflict.",
      "But the technology\nadvanced faster than we\ncould predict.",
      "And soon ...\nthe machines attacked.",
      "Determined to wipe out\nall organic life, ",
      "machines known as\nThe Metallics,\nrose up against humanity.",
      "But humanity fought back.\nHard.",
      "And lost even harder.",
      "Our numbers fell by the\nday.",
      "The Metallics captured\nour soldiers, ",
      "converting them into\nmachines.",
      "And I was next in line.",
      "They implanted me with\nmachine parts.",
      "a cybernetic body ...\na powerful cannon arm... ",
      "But, there was a\nmalfunction... ",
      "Even after conversion,\nI still sided\nwith my comrades.",
      "My body was cold metal.\nBut my heart -\nit was all human.",
      "The machines don't know\nthat I'm still against\nthem.",
      "And thanks to their\nlittle gifts... ",
      "I finally stand a chance\nof breaking out.",
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
      "Today's the day you're\ngetting free, soldier.",
      "Got your attention now?\nGood.",
      "Look inside your cell.\nYou see that red orb? ",
      "That's what's getting\nyou out.",
      "It's ammo for your new\ncannon arm.",
      "We reprogrammed a robot\non the inside to place\nit in your cell.",
      "I'm sure that little\nthing will get turned\ninto scrap",
      "once the Metallics\nfind out.",
      "Make sure you don't\nend up the same.",
      "Alright,\nno more wasting time.",
      "Just grab that ammo\nand load up your weapon.",
      "There's more littered\naround the facility.",
      "Over and out, Cyrus.\nWe'll see you soon.",
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
      "Congrats on making\nit this far, soldier.",
      "You've got a long road,\nbut help is on the way.",
      "We've sent an extraction\nteam to the prison.",
      "If you can make it\nto the outside,",
      "we'll have the best\nchance of getting you\nback home.",
      "As to how many pieces\nyou'll come back as\nis up to you.",
      "Stay careful out there.\nWord of your escape has\nspread",
      "the Metallics are sure\nto send top security.",
      "Intel says that the\nreprogrammed bot is\nstill on the loose, ",
      "but it's acting ...\nstrange.\nNot what as we expected.",
      "Approach with caution.",
      "Over and out, Cyrus.\nDon't do anything stupid.",
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
      "Cyrus?! Come in, Cyrus?!",
      "You need to get out of\nthere now!",
      "We just got word from\nour technicians ...",
      "That little robot .. ",
      "It resisted the\nreprogramming!",
      "It lead us on -\nit was all a trap ...",
      "You were just the bait\nto lure the extraction\nteam.",
      "All of them\n- everyone -\nwas taken down by ... ",
      "that thing...",
      "We don't know\nwhat it is.",
      "Whatever you do:\nDon't try to fight it.\nJust don't. ",
      "Run.",
      "Over and out, Cyr -\n>bzzzzzt<",
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
      "Cyrus...\nCome in, Cyrus...",
      "You see it now,\ndon't you?",
      "You see what they've\ndone.",
      "Everything. Turned to\ncold metal.",
      "They destroy all life\n - the grass, the trees,\nthe flowers - all of it.",
      "They're not machines.\nThey're monsters.",
      "They hate us.\nThey want to ruin us. ",
      "And it's our duty\nto destroy every last\none of them.",
      "I know we can do it\nwith your help, soldier.",
      "Get out of there.\nFast as you can.",
      "Regroup with what's left\nof us.",
      "When you get back,\nwe're going to study",
      "the enhancements\nThe Metallics put in you.",
      "If we can harness it,\nwe stand a chance of\ntaking them all down.",
      "For good.",
      "Over and out, Cyrus.\nYou're almost home.",
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
      "Finally, I escaped\nthe Metallic's prison.",
      "But ... only thanks to\nthat robot.",
      "I recognized it, too.\nThe one we couldn't\nreprogram.",
      "So ...\nif we couldn't change it,\nthen why did it help me?",
      "It can't think.\nIt can't feel.",
      "It's just like what\nCommander Viper said:",
      "more monster\nthan machine.",
      "But still ...\nif it was never\nreprogrammed, ",
      "then it chose to help me.",
      "It saw me in danger\nand sacrificed itself\nfor my own sake.",
      "Why?\nHow could a machine ...\nchoose?",
      "And if they can choose,\nthen why do they choose\nto fight us?",
      "I don't know what\nhappened and\nI don't know why. ",
      "All I know is I have\nserious questions for\nCommander Viper.",
      "This is Cyrus.\nOver and out.",
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
      "Don't be discouraged\nwhen you're out of ammo.",
      "Use your wits\nto survive.",
      "Those machines you saw\nare called Leapers.",
      "They're low-grade bots\ndumb enough to leap\nstraight at you.",
      "When they rush,they'll\nbreak anything in their\nway - including you.",
      "If you don't have any\nammo left to break\nbarriers,",
      "get them to do\nthe dirty work for you.",
      "You'll figure it out\nsoldier.",
      "Trust me.\nYou're much smarter\nthan them.",
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
      "Up ahead are some\nFlyer robots.",
      "You can't hit them\nwhile they're airborne,",
      "But you can get in a\nquick shot when they\nland.",
      "If you're careful enough, ",
      "you can slip right\nunderneath them\nwith no trouble.",
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
      "It will reprogram their patrol routes.",
      "They will turn to face a different direction.",
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
      "And suspend their movement.",
      "Take that time to move while they can't chase you.",
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
