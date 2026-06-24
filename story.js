window.storyData = {
  // =========================================================================
  // ACT I: THE AWAKENING IN THE DARK
  // =========================================================================
  start: {
    text: "The front door clicks shut, cutting off the humid night air. The house is completely dark, save for the blue ambient glow of the microwave clock in the kitchen. It’s 3:14 AM.\n\nYour ears are ringing with a dull, constant buzz—a stubborn hangover from the heavy bass at the party. You collapse onto the living room sofa, crash back into the cushions, and close your eyes.\n\nThe sudden silence hits you like a physical weight. Is this actually it? Is this what everyone is chasing so desperately?",
    ambient: "chaos",
    choices: [
      {
        text: "[1] Pull out your phone and scroll the social feeds.",
        nextScene: "act1_scroll",
      },
      {
        text: "[2] Close your eyes and lean into the heavy silence.",
        nextScene: "act1_silence",
      },
    ],
  },
  act1_scroll: {
    text: "The screen blasts your eyes with blinding white light. Stories fly past: flashing lights, distorted bass drops, faces yelling over music, filters masking tired eyes.\n\nEveryone looks ecstatic, yet seeing it here in the dark, it looks incredibly hollow. It hits you: they aren't celebrating because they are happy. They are making noise because they are terrified of what happens when the music stops.",
    ambient: "chaos",
    choices: [
      {
        text: "[1] Toss the phone aside. Face the darkness inside.",
        nextScene: "act1_silence",
      },
    ],
  },
  act1_silence: {
    text: "You drop the phone. The quiet floods the room. Your mind drifts to earlier tonight in the kitchen. You caught the eye of your close friend, Sarah. For a split second, her smile dropped. She looked utterly exhausted, broken down by the act of pretending.\n\nThen someone yelled her name, the social mask snapped back on, and she was gone. You realize this void in your chest didn't start tonight. It’s been growing for years, hidden under the noise of teenage life.",
    ambient: "quiet",
    choices: [
      {
        text: "[1] Think about tomorrow: the endless chase for grades, money, and status.",
        nextScene: "act2_playground",
      },
    ],
  },

  // =========================================================================
  // ACT II: THE PLAYGROUND OF DISTRACTIONS
  // =========================================================================
  act2_playground: {
    text: "The next few weeks pass in a blur. The existential crisis of that night fades into daily routine. The world is screaming at you to 'build your future.' Teachers demand grades. Parents demand success. Social media demands clout.\n\nIt feels like a massive game. A playground where everyone is frantically gathering plastic tokens. You find yourself at a crossroads in high school. How do you choose to play?",
    ambient: "quiet",
    choices: [
      {
        text: "[1] Focus entirely on yourself. Build wealth, study 24/7, and protect your own future.",
        nextScene: "path_hustler",
      },
      {
        text: "[2] Focus on fitting in. Go to every party, please every friend, maintain the image.",
        nextScene: "path_pleaser",
      },
    ],
  },
  path_hustler: {
    text: "Months fly by. You become a ghost. You lock yourself away, pull straight A's, secure a lucrative side-hustle, and watch your bank account grow. Your parents are proud. On paper, you are winning.\n\nYet, you have ignored your family. You missed your younger brother's games; you snapped at your mother when she tried to talk to you. One evening, looking at your achievements, the cold question returns: 'If I die tomorrow, what do these tokens actually buy me?'",
    ambient: "quiet",
    choices: [
      {
        text: "[1] Continue pushing forward. Success demands sacrifice.",
        nextScene: "act3_crisis_hustle",
      },
      {
        text: "[2] Pause and look around at the people you've neglected.",
        nextScene: "act3_crisis_seeker",
      },
    ],
  },
  path_pleaser: {
    text: "You become the center of attention. You are at every gathering, cracking jokes, acting as the life of the group. You are terrified of being left out. You alter your clothes, your laugh, your boundaries just to stay relevant.\n\nBut one evening, you find yourself at another house party. The music is loud, but you feel completely invisible. You are surrounded by fifty people, yet you are utterly alone. You're giving everyone your time, but losing your soul in the process.",
    ambient: "chaos",
    choices: [
      {
        text: "[1] Drink it away, ignore the gut feeling, keep laughing.",
        nextScene: "act3_crisis_pleaser",
      },
      {
        text: "[2] Walk out of the house. Step into the cold night air alone.",
        nextScene: "act3_crisis_seeker",
      },
    ],
  },

  // =========================================================================
  // ACT III: THE BREAKING OF THE ILLUSION
  // =========================================================================
  act3_crisis_hustle: {
    text: "The illusion cracks unexpectedly. Your younger brother gets into trouble at school, desperate for someone to talk to. He came to your door earlier, but you told him you were 'too busy working.' Later that night, you find out he ran away.\n\nThe tokens in your hand feel like burning coals. You realized you prioritized a temporary digital score over a living soul who had a right over you.",
    ambient: "chaos",
    choices: [
      {
        text: "[1] Go out into the dark to search for him, leaving everything behind.",
        nextScene: "act4_cheat_sheet",
      },
    ],
  },
  act3_crisis_pleaser: {
    text: "At the party, a text flashes on your phone. It's from Sarah, the tired friend from months ago. It just says: 'I can't do this anymore. No one actually cares.' You look around the loud room. These people won't notice if she's gone. They won't notice if you're gone.\n\nYou have spent all your energy fulfilling the superficial desires of a crowd, while failing to fulfill the actual rights of friendship and human empathy.",
    ambient: "chaos",
    choices: [
      {
        text: "[1] Leave the party immediately and drive over to her house.",
        nextScene: "act4_cheat_sheet",
      },
    ],
  },
  act3_crisis_seeker: {
    text: "You stop running. You sit on a park bench under a dim streetlamp, looking up at the vast, unblinking sky. The universe is incredibly grand, operating in flawless, silent order. Stars rotate, trees breathe, gravity holds.\n\nYet here we are, tiny humans on a rock, tearing ourselves apart over trivialities. You feel a strange conviction: This world isn't an accident. And it isn't the final destination. It's an arena.",
    ambient: "quiet",
    choices: [
      {
        text: "[1] Look inside your heart for the answers you've buried.",
        nextScene: "act4_cheat_sheet",
      },
    ],
  },

  // =========================================================================
  // ACT IV: CONNECTING THE DOTS (THE CHEAT SHEET)
  // =========================================================================
  act4_cheat_sheet: {
    text: "In the aftermath of the storm, you find yourself sitting in a quiet, sunlit room a few days later. An old, dust-specked book sits on the shelf—a copy of the Quran your family kept but rarely deeply examined. You open a page, and the words strike you like a physical force:\n\n'Know that the life of this world is but amusement and diversion and adornment and boasting to one another...'\n\nSuddenly, the dots connect. The 'cheat sheet' was in your house the entire time. You were given one life of mortality—not to hoard plastic tokens on this temporary playground, but to use this lower world to build your eternal home.",
    ambient: "peace",
    choices: [
      {
        text: "[1] Realize the true meaning of devotion.",
        nextScene: "act4_devotion",
      },
    ],
  },
  act4_devotion: {
    text: "You realize the ultimate trick of the temptation: it made you think life was about *your* rights, *your* happiness, *your* wealth. But the cheat sheet shows the opposite.\n\nThis life is about **Responsibility (Amana)** and **Fulfilling the rights of others**. The rights of your parents, your siblings, your friends, the needy, and even the earth itself. It wasn't about one massive heroic deed that earns the reward. It was about the daily, disciplined grind of fulfilling those rights out of pure devotion.",
    ambient: "peace",
    choices: [
      {
        text: "[1] Step into the final station of truth.",
        nextScene: "act5_tawhid",
      },
    ],
  },

  // =========================================================================
  // ACT V: THE STATION OF TAWHID (THE END PATH)
  // =========================================================================
  act5_tawhid: {
    text: "You close your eyes, and the final veil drops. The ringing of the party, the anxiety of the crowd, the fear of the future—all of it dissolves into an absolute, radiant stillness.\n\nThere is only One. One Creator who designed the playground. One who gave you this temporary breath of mortality to earn an immortal inheritance. Every action you take to help another, every moment of patience, every prayer in the dark is a seed planted for eternity.\n\nYou stand up from the sofa. The world outside is still loud, but inside you, there is perfect clarity. You are ready to live, not for the playground, but for the Lord of the Worlds.",
    ambient: "peace",
    choices: [
      { text: "─── TAWHID ACHIEVED: PLAY AGAIN ───", nextScene: "start" },
    ],
  },
};
