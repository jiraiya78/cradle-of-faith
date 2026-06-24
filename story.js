window.storyData = {
  // =========================================================================
  // ACT I: THE AWAKENING IN THE DARK
  // =========================================================================
  start: {
    text: "The front door clicks shut with a heavy, hollow thud, instantly locking out the humid night air. The entire house is dead quiet, completely pitched in darkness except for the cold, piercing blue glow of the microwave clock humming from the kitchen counter. It’s 3:14 AM.\n\nInside your head, your ears are ringing with a dull, constant buzz—a stubborn, agonizing hangover from the crushing bass at the party. You drop your keys on the kitchen counter. The sharp, lonely clink cuts through the house like glass shattering, feeling way too loud. Way too real.\n\nYou stumble into the living room and collapse onto the sofa, not even bothering to untie your sneakers. As you crash back into the fabric, staring blankly up at the invisible ceiling, you slowly close your eyes.\n\nThat’s when the silence hits you. It doesn't feel like peace; it feels like a physical weight pressing against your chest, exposing a massive, hollow void that you’ve been running from all night. You start to think: 'Is this actually it? Is this the absolute peak of what we're all fighting, crying, and chasing for every single weekend?'",
    ambient: "chaos",
    choices: [
      {
        text: "[1] Pull out your phone. Reconnect with the noise.",
        nextScene: "act1_scroll",
      },
      {
        text: "[2] Keep your eyes closed. Face the emptiness.",
        nextScene: "act1_silence",
      },
    ],
  },
  act1_scroll: {
    text: "You blindly reach into your pocket, pull out your phone, and unlock it. The screen instantly erupts, blasting your adjusted eyes with a blinding, sterile white glare. You find yourself mindlessly scrolling through social media feeds. Stories flash by in fractions of a second: chaotic loops of strobe lights, distorted bass drops, faces screaming enthusiastically into wide-angle lenses, and heavy layers of beauty filters masking profoundly tired eyes.\n\nHours ago, when you were standing in the middle of that sweating crowd, it felt like high energy. It felt like living. But looking at it now, isolated in the absolute silence of 3:00 AM, the illusion crumbles. It looks tragic. \n\nYour internal voice whispers a cold truth: 'They aren't celebrating because they are happy. They are just making as much noise as humanly possible because they are absolutely terrified of what happens when the music finally stops and they are left alone with their own thoughts.'",
    ambient: "chaos",
    choices: [
      {
        text: "[1] Toss the phone face down. Let the silence take over.",
        nextScene: "act1_silence",
      },
    ],
  },
  act1_silence: {
    text: "You let the phone slide out of your hand and drop face-down onto the carpet. The light dies, and the dark quiet floods your mind again. Your thoughts drift backward, sorting through the blur of the past few hours until a specific memory locks into place.\n\nYou remember standing near the kitchen counter, holding a plastic cup, just watching the crowd dance. For a split second, the noise seemed to completely mute in your head, and you caught the eye of your close friend, Sarah. She didn't see you looking. Her fake smile had dropped completely. In that quiet window, her face looked fractured, entirely broken down by the exhausting act of pretending to have the time of her life.\n\nThen, someone screamed her name from across the room. In an instant, her social defense mechanism snapped back on, her eyes lit up with practiced excitement, and she vanished back into the smoke. \n\nYou realize something terrifying: this hollow feeling in your chest didn't start tonight when the front door closed. It has been sitting there for months, maybe years. You have just been keeping your life incredibly loud so you never had to sit down and listen to it.",
    ambient: "quiet",
    choices: [
      {
        text: "[1] Think about the looming morning, and the endless loop of the future.",
        nextScene: "act2_playground",
      },
    ],
  },

  // =========================================================================
  // ACT II: THE PLAYGROUND OF DISTRACTIONS
  // =========================================================================
  act2_playground: {
    text: "The weeks drag on, and the heavy clarity of that late-night crisis slowly gets buried under the grinding routine of daily life. The modern world restarts its engines, and it is screaming at you from every angle to 'build your brand' and 'secure your future.' \n\nYour teachers pile on assignments, warning you about university applications. Your parents talk about career stability and financial independence. Your phone buzzes every two minutes with notifications reminding you of everything you don't have yet. \n\nIt begins to feel like a massive, high-stakes game. A temporary playground where thousands of teenagers are running around frantically, trampling over each other just to hoard temporary plastic tokens. You stand at a critical crossroads in your final years of school. You have to choose how you are going to play this game to survive.",
    ambient: "quiet",
    choices: [
      {
        text: "[1] Become the Hustler. Focus purely on wealth, grades, and your own kingdom.",
        nextScene: "path_hustler",
      },
      {
        text: "[2] Become the Pleaser. Maximize your clout, social circles, and worldly image.",
        nextScene: "path_pleaser",
      },
    ],
  },
  path_hustler: {
    text: "You lock your door, shut out the world, and turn your heart into a machine. Months bleed into each other as you pull straight A's, obsess over curriculum vitae points, and manage a highly profitable digital side-hustle. Your bank account grows, your resume looks flawless, and your parents use your name to boast to relatives. On paper, you are completely winning the game.\n\nBut inside your house, you have become an absolute ghost. You missed your younger brother's football matches because you 'didn't have time to waste.' You brutally snapped at your mother when she tried to bring a plate of fruit into your room, screaming that she was ruining your deep-work focus. \n\nOne late evening, staring at your pristine laptop screen and your growing balances, the cold 3:00 AM voice returns, sharper than ever: 'If my heart decides to stop beating tonight, what do these digital tokens actually buy me? Who did I actually serve besides my own reflection?'",
    ambient: "quiet",
    choices: [
      {
        text: "[1] Double down. This is what success requires. Ignore the guilt.",
        nextScene: "act3_crisis_hustle",
      },
      {
        text: "[2] Pause. Look around at the casualties of your ambition.",
        nextScene: "act3_crisis_seeker",
      },
    ],
  },
  path_pleaser: {
    text: "You decide that if the world is a playground, you might as well be the center of attention. You manipulate your wardrobe, alter your laugh to match the popular groups, and compromise your personal moral boundaries piece by piece just to ensure you are invited to every single plan. You become the funny one, the reliable one, the life of the group.\n\nYet, the maintenance cost of this lifestyle is eating your soul alive. You spend hours curating your profile, anxious over why a specific person didn't like your post, terrified that a single day of silence will make you irrelevant.\n\nOne Friday night, you find yourself at another packed house party. The bass is vibrating through your skeleton, but your mind is completely detached. You look around a room of fifty people who call you their friend, and you realize with absolute certainty: 'If I fell down and broke tonight, not a single person in this room would stay behind to help me up. I am spending all my life force buying a crowd, while completely losing myself.'",
    ambient: "chaos",
    choices: [
      {
        text: "[1] Drink it down, force a laugh, and jump back into the crowd.",
        nextScene: "act3_crisis_pleaser",
      },
      {
        text: "[2] Quietly step out the back door into the freezing night air alone.",
        nextScene: "act3_crisis_seeker",
      },
    ],
  },

  // =========================================================================
  // ACT III: THE BREAKING OF THE ILLUSION
  // =========================================================================
  act3_crisis_hustle: {
    text: "The meticulously built kingdom crashes down when reality refuses to follow your schedule. Your younger brother gets into severe trouble at school, falling into dangerous habits out of a desperate, screaming need for someone to talk to. \n\nEarlier that evening, he had knocked softly on your bedroom door, asking if you could talk. You didn't even look up from your screen, coldly telling him you were in the middle of a high-value client call and to go away. Hours later, you find his room empty. A frantic text from your father reveals he ran away into the city.\n\nThe academic honors and the money in your account suddenly feel like burning hot coals in your hands. Your internal monologue screams at you: 'You optimized your life for a temporary world, but you completely failed the real, living soul who had a divine right over your time and protection.'",
    ambient: "chaos",
    choices: [
      {
        text: "[1] Drop your work, close the laptop, and sprint out into the dark to find him.",
        nextScene: "act4_cheat_sheet",
      },
    ],
  },
  act3_crisis_pleaser: {
    text: "While standing in the middle of the laughing crowd, your phone vibrates with a direct message. It's from Sarah—the friend whose silent exhaustion you noticed months ago. The text is terrifyingly short: 'I can't do this fake life anymore. No one actually cares. Goodbye.'\n\nYou look around the loud, pulsing living room. People are taking selfies, drinking, and shouting. You realize with sickening clarity that these people wouldn't notice if she vanished. They wouldn't notice if you vanished. They are consumers of hype.\n\nYou have spent your entire youth fulfilling the superficial, vain expectations of a fickle crowd, while completely abandoning the deep, heavy, real human rights of brotherhood, loyalty, and actual empathy.",
    ambient: "chaos",
    choices: [
      {
        text: "[1] Push past the dancing crowd, sprint to your car, and drive to her house.",
        nextScene: "act4_cheat_sheet",
      },
    ],
  },
  act3_crisis_seeker: {
    text: "You stop running from the silence. You walk until your legs ache, eventually sitting down on a cold wooden bench in an empty park, miles away from the parties and the study desks. You tilt your head back and look up at the vast, unblinking night sky.\n\nThe cosmic canopy is breathtakingly grand, operating in a flawless, beautiful, silent mathematical order. The constellations rotate, the trees around you process the air, gravity anchors you perfectly without a single glitch.\n\nYour internal monologue shifts into a profound state of awe: 'How can we, tiny insignificant humans on a floating rock, believe this universe is an accident? And how can we think our lives are meant to be wasted chasing fleeting social metrics and paper wealth? This world isn't a permanent home. It's an arena. A test field.'",
    ambient: "quiet",
    choices: [
      {
        text: "[1] Listen to the sudden, quiet conviction blooming inside your chest.",
        nextScene: "act4_cheat_sheet",
      },
    ],
  },

  // =========================================================================
  // ACT IV: CONNECTING THE DOTS (THE CHEAT SHEET)
  // =========================================================================
  act4_cheat_sheet: {
    text: "Days pass after the traumatic breaking of your illusion. The dust slowly settles, leaving you sitting in the absolute stillness of your room on a Saturday afternoon. Your eyes wander to the top shelf of your bookcase, landing on an old, leather-bound book thick with dust—a copy of the Quran your family kept for traditional blessings but rarely deeply investigated.\n\nYou pull it down, wipe the dust from the cover, and open to a random page. The translated words strike your mind like a bolt of pure lightning:\n\n'Know that the life of this world is but amusement and diversion and adornment and boasting to one another and competition in increase of wealth and children...'\n\nIn an instant, your entire life flashes before your eyes, and the scattered dots violently connect. The ultimate 'cheat sheet' was sitting in your room the whole time. You realize this life is immortal, but you were given a single, brief, mortal window in this lower world (Dunya) to intentionally build your eternal home (Akhirah). The playground wasn't meant to be conquered; it was meant to be used.",
    ambient: "peace",
    choices: [
      {
        text: "[1] Dive deeper into the realization of what life actually demands.",
        nextScene: "act4_devotion",
      },
    ],
  },
  act4_devotion: {
    text: "The internal monologue inside your soul becomes completely clear, deconstructing the grand deception of modern society. The world tricked you into believing that life was about demanding *your* rights, maximizing *your* personal freedom, and hoarding *your* individual happiness.\n\nBut the divine cheat sheet flips the script completely. You realize that Islam has always held the blueprint: True success in this mortal testing ground is about **Responsibility (Amana)** and relentlessly **Fulfilling the rights of others (Huquq al-Ibad)**.\n\nYour parents have a right over your gentleness. Your brother has a right over your guidance. Your friends have a right over your genuine loyalty. The poor have a right over your wealth. It isn't about performing one massive, dramatic heroic act to purchase paradise. It is about the quiet, daily, disciplined grind of fulfilling those individual rights out of absolute submission.",
    ambient: "peace",
    choices: [
      {
        text: "[1] Step into the final station of absolute truth and clarity.",
        nextScene: "act5_tawhid",
      },
    ],
  },

  // =========================================================================
  // ACT V: THE STATION OF TAWHID (THE END PATH)
  // =========================================================================
  act5_tawhid: {
    text: "You take a deep, slow, intentional breath. The frantic ringing of the high school parties, the suffocating anxiety of the social media feeds, the desperate obsession with hoarding money—all of it completely evaporates into a beautiful, radiant stillness.\n\nYou have arrived at the ultimate realization: **Tawhid—the absolute Oneness of God.** \n\nThere is only One Creator who designed this intricate playground. One King who gifted you this single, fragile breath of mortality so you could actively prove your devotion. Every small action you take to help another soul, every single tear dropped in the dark when no one is watching, every moment of patience with your family is a seed planted for an immortal reality.\n\nYou stand up from your sofa and look out the window. The modern world outside is still loud, fast, and full of shiny distractions. But the game has lost its power over you. Your dots are connected. You are finally ready to live—not for the playground, but for the Lord of the Worlds.",
    ambient: "peace",
    choices: [
      {
        text: "─── TAWHID ACHIEVED: RETURN TO THE START ───",
        nextScene: "start",
      },
    ],
  },
};
