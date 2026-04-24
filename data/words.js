const WORDS = {
  "beginner": [
    {
      "term": "Ephemeral",
      "definition": "Lasting for a very short time.",
      "example": "The ephemeral beauty of cherry blossoms makes them all the more precious.",
      "etymology": "Greek ephemeros — lasting only a day"
    },
    {
      "term": "Melancholy",
      "definition": "A deep, pensive sadness with no obvious cause.",
      "example": "A sense of melancholy settled over him as the last guests left.",
      "etymology": "Greek melankholía — black bile (once thought to cause sadness)"
    },
    {
      "term": "Serendipity",
      "definition": "The occurrence of events by chance in a happy or beneficial way.",
      "example": "Finding that café was pure serendipity — it became their favorite spot.",
      "etymology": "From Serendip, an old name for Sri Lanka, via a Persian fairy tale"
    },
    {
      "term": "Eloquent",
      "definition": "Fluent and persuasive in speaking or writing.",
      "example": "Her eloquent speech moved the entire audience to tears.",
      "etymology": "Latin eloqui — to speak out"
    },
    {
      "term": "Ambiguous",
      "definition": "Open to more than one interpretation; unclear.",
      "example": "His ambiguous reply left everyone guessing at his true intentions.",
      "etymology": "Latin ambiguus — uncertain, from ambigere — to wander"
    },
    {
      "term": "Benevolent",
      "definition": "Well-meaning and kindly toward others.",
      "example": "The benevolent donor funded the entire library renovation anonymously.",
      "etymology": "Latin bene (well) + volens (wishing)"
    },
    {
      "term": "Candid",
      "definition": "Truthful and straightforward; not hiding one's thoughts.",
      "example": "I appreciated her candid assessment of my work, even if it stung.",
      "etymology": "Latin candidus — white, pure, frank"
    },
    {
      "term": "Diligent",
      "definition": "Having or showing care and effort in one's work.",
      "example": "Years of diligent practice made her one of the finest pianists in the city.",
      "etymology": "Latin diligens — attentive, from diligere — to esteem"
    },
    {
      "term": "Eclectic",
      "definition": "Deriving ideas or style from a wide variety of sources.",
      "example": "His eclectic taste in music ranged from jazz to baroque to hip-hop.",
      "etymology": "Greek eklektikos — selective"
    },
    {
      "term": "Frugal",
      "definition": "Economical and sparing; avoiding waste.",
      "example": "Despite her wealth, she remained frugal, always choosing quality over luxury.",
      "etymology": "Latin frugalis — economical, from frux — fruit, value"
    },
    {
      "term": "Gregarious",
      "definition": "Fond of company; sociable.",
      "example": "He was so gregarious that he never met a stranger.",
      "etymology": "Latin gregarius — of a flock, from grex — flock"
    },
    {
      "term": "Hubris",
      "definition": "Excessive pride or self-confidence, often leading to downfall.",
      "example": "His hubris blinded him to the very real risks of the venture.",
      "etymology": "Greek hybris — insolence, outrage"
    },
    {
      "term": "Innocuous",
      "definition": "Not harmful or offensive; harmless.",
      "example": "What seemed like an innocuous comment sparked an unexpected argument.",
      "etymology": "Latin innocuus — harmless, from nocere — to harm"
    },
    {
      "term": "Jovial",
      "definition": "Cheerful and friendly; in good spirits.",
      "example": "The jovial host made sure every guest felt at ease.",
      "etymology": "Latin Iovialis — of Jupiter, considered a lucky, cheerful planet"
    },
    {
      "term": "Kindle",
      "definition": "To light or arouse; to stir up a feeling.",
      "example": "The lecture kindled a genuine curiosity about the ancient world.",
      "etymology": "Old Norse kyndill — candle, torch"
    },
    {
      "term": "Lament",
      "definition": "A passionate expression of grief or sorrow.",
      "example": "The poem was a lament for a way of life that had all but disappeared.",
      "etymology": "Latin lamentum — mourning, wailing"
    },
    {
      "term": "Meticulous",
      "definition": "Showing great attention to detail; very careful.",
      "example": "She kept meticulous records of every transaction over thirty years.",
      "etymology": "Latin meticulosus — fearful, from metus — fear"
    },
    {
      "term": "Nonchalant",
      "definition": "Appearing casually calm and relaxed; not anxious.",
      "example": "He answered the difficult question with a nonchalant shrug.",
      "etymology": "French nonchaloir — to be unconcerned"
    },
    {
      "term": "Pragmatic",
      "definition": "Dealing with things sensibly and practically.",
      "example": "She took a pragmatic approach to the budget cuts, focusing on what truly mattered.",
      "etymology": "Greek pragmatikos — skilled in business, from pragma — deed"
    },
    {
      "term": "Quaint",
      "definition": "Attractively unusual or old-fashioned.",
      "example": "They spent the weekend in a quaint village full of cobblestone streets.",
      "etymology": "Old French cointe — clever, fine, from Latin cognitus — known"
    },
    {
      "term": "Resilient",
      "definition": "Able to recover quickly from difficulties.",
      "example": "Children are often more resilient than adults give them credit for.",
      "etymology": "Latin resilire — to spring back"
    },
    {
      "term": "Serene",
      "definition": "Calm, peaceful, and untroubled.",
      "example": "The lake at dawn was so serene it looked like a painting.",
      "etymology": "Latin serenus — clear, fair (of weather)"
    },
    {
      "term": "Tenacious",
      "definition": "Holding firmly to something; very persistent.",
      "example": "Her tenacious refusal to give up eventually turned the tide.",
      "etymology": "Latin tenax — holding fast, from tenere — to hold"
    },
    {
      "term": "Ubiquitous",
      "definition": "Present, appearing, or found everywhere.",
      "example": "Smartphones have become so ubiquitous that silence is now a luxury.",
      "etymology": "Latin ubique — everywhere"
    },
    {
      "term": "Verbose",
      "definition": "Using more words than needed; wordy.",
      "example": "His verbose emails could always be summarized in a single sentence.",
      "etymology": "Latin verbosus — full of words, from verbum — word"
    },
    {
      "term": "Whimsical",
      "definition": "Playfully quaint or fanciful; imaginative.",
      "example": "The sculptor had a whimsical style — frogs in top hats, rabbits in suits.",
      "etymology": "From whim — a sudden fancy, origin uncertain"
    },
    {
      "term": "Zealous",
      "definition": "Having or showing great energy and enthusiasm.",
      "example": "She was a zealous advocate for environmental reform.",
      "etymology": "Greek zelos — zeal, fervor"
    },
    {
      "term": "Acumen",
      "definition": "The ability to make good judgments and quick decisions.",
      "example": "His business acumen turned a small shop into a national chain.",
      "etymology": "Latin acumen — a point, from acuere — to sharpen"
    },
    {
      "term": "Blithe",
      "definition": "Showing casual, cheerful indifference.",
      "example": "He sailed into the meeting with a blithe disregard for the tension in the room.",
      "etymology": "Old English blíðe — joyful, kind"
    },
    {
      "term": "Cogent",
      "definition": "Clear, logical, and convincing.",
      "example": "She made a cogent argument that was hard to dismiss.",
      "etymology": "Latin cogere — to compel, from co- + agere — to drive"
    },
    {
      "term": "Demure",
      "definition": "Reserved, modest, and shy in manner.",
      "example": "Her demure smile hid a fiercely competitive spirit.",
      "etymology": "Old French demorer — to linger, remain"
    },
    {
      "term": "Enigmatic",
      "definition": "Difficult to interpret or understand; mysterious.",
      "example": "The enigmatic painting has inspired debate for centuries.",
      "etymology": "Greek ainigma — riddle, from ainissesthai — to speak in riddles"
    },
    {
      "term": "Facetious",
      "definition": "Treating serious issues with inappropriate humor.",
      "example": "His facetious remark at the wrong moment didn't go over well.",
      "etymology": "French facétieux, from Latin facetia — wit, jest"
    },
    {
      "term": "Garrulous",
      "definition": "Excessively talkative, especially on trivial matters.",
      "example": "The garrulous barber kept up a steady stream of commentary throughout the haircut.",
      "etymology": "Latin garrulus — chattering, from garrire — to chatter"
    },
    {
      "term": "Hapless",
      "definition": "Unlucky; having no luck.",
      "example": "The hapless traveler missed his flight, lost his luggage, and forgot his passport.",
      "etymology": "Middle English hap — luck + -less"
    },
    {
      "term": "Impeccable",
      "definition": "In accordance with the highest standards; faultless.",
      "example": "Her impeccable timing made every joke land perfectly.",
      "etymology": "Latin impeccabilis — not liable to sin, from peccare — to sin"
    },
    {
      "term": "Jaded",
      "definition": "Tired of or unimpressed by something due to overexposure.",
      "example": "Even the most jaded food critic was surprised by the meal.",
      "etymology": "From jade — a worn-out horse, of uncertain origin"
    },
    {
      "term": "Keen",
      "definition": "Sharp; having a highly developed sense or strong interest.",
      "example": "She had a keen eye for forgeries that baffled her colleagues.",
      "etymology": "Old English cene — brave, sharp"
    },
    {
      "term": "Languid",
      "definition": "Displaying or having little energy; slow and relaxed.",
      "example": "The languid afternoon invited naps and long, aimless conversations.",
      "etymology": "Latin languidus — faint, from languere — to be faint"
    },
    {
      "term": "Mundane",
      "definition": "Lacking interest or excitement; ordinary.",
      "example": "Even mundane tasks felt meaningful when done with care.",
      "etymology": "Latin mundanus — of the world, from mundus — world"
    },
    {
      "term": "Nascent",
      "definition": "Just coming into existence; beginning to develop.",
      "example": "The nascent movement had only a handful of followers at first.",
      "etymology": "Latin nascens — being born, from nasci — to be born"
    },
    {
      "term": "Opulent",
      "definition": "Ostentatiously rich and luxurious.",
      "example": "The opulent ballroom was lined with gold leaf and crystal chandeliers.",
      "etymology": "Latin opulentus — wealthy, from ops — wealth"
    },
    {
      "term": "Pensive",
      "definition": "Engaged in deep, often melancholy thought.",
      "example": "She sat at the window in a pensive mood, watching the rain.",
      "etymology": "French pensif, from penser — to think, from Latin pensare — to weigh"
    },
    {
      "term": "Quell",
      "definition": "To put an end to; suppress or crush.",
      "example": "The manager's calm presence helped quell the rising panic in the room.",
      "etymology": "Old English cwellan — to kill"
    },
    {
      "term": "Raucous",
      "definition": "Making or constituting a disturbingly harsh and loud noise.",
      "example": "The raucous crowd could be heard from two blocks away.",
      "etymology": "Latin raucus — hoarse"
    },
    {
      "term": "Succinct",
      "definition": "Briefly and clearly expressed.",
      "example": "His succinct summary saved the meeting from going another hour.",
      "etymology": "Latin succinctus — tucked up, concise"
    },
    {
      "term": "Temperate",
      "definition": "Showing moderation or self-restraint; mild in climate.",
      "example": "He gave a temperate response to the provocation, choosing words carefully.",
      "etymology": "Latin temperatus — restrained, from temperare — to mix in due proportion"
    },
    {
      "term": "Uncanny",
      "definition": "Strange or mysterious, beyond the ordinary.",
      "example": "She had an uncanny ability to sense when something was wrong.",
      "etymology": "Scottish un- (not) + canny (knowing, safe)"
    },
    {
      "term": "Vivid",
      "definition": "Producing powerful feelings or strong, clear images in the mind.",
      "example": "He had such vivid memories of childhood that they felt more real than the present.",
      "etymology": "Latin vividus — lively, from vivere — to live"
    },
    {
      "term": "Wary",
      "definition": "Feeling or showing caution about possible dangers.",
      "example": "She was wary of promises that sounded too good to be true.",
      "etymology": "Old English wær — aware, cautious"
    },
    {
      "term": "Aloof",
      "definition": "Not friendly or forthcoming; distant.",
      "example": "He came across as aloof, though really he was just shy.",
      "etymology": "Nautical a loof — to windward, keeping distance"
    },
    {
      "term": "Banal",
      "definition": "So lacking in originality as to be obvious and boring.",
      "example": "The speech was full of banal platitudes that no one remembered.",
      "etymology": "French banal — commonplace, from ban — public proclamation"
    },
    {
      "term": "Candor",
      "definition": "The quality of being open, honest, and direct.",
      "example": "I respected his candor, even when the truth was hard to hear.",
      "etymology": "Latin candor — whiteness, purity, openness"
    },
    {
      "term": "Deft",
      "definition": "Neatly skillful and quick in movement or action.",
      "example": "With a few deft strokes, she sketched a perfect likeness.",
      "etymology": "Old English gedæfte — gentle, meek"
    },
    {
      "term": "Ebullient",
      "definition": "Cheerful and full of energy; enthusiastic.",
      "example": "Her ebullient personality made every gathering feel like a celebration.",
      "etymology": "Latin ebullire — to bubble up"
    },
    {
      "term": "Fervent",
      "definition": "Having or displaying passionate intensity.",
      "example": "He was a fervent believer in the power of public libraries.",
      "etymology": "Latin fervens — boiling, glowing, from fervere — to boil"
    },
    {
      "term": "Glib",
      "definition": "Fluent but insincere and shallow.",
      "example": "The politician's glib answers satisfied no one in the room.",
      "etymology": "Low German glibberig — slippery"
    },
    {
      "term": "Haughty",
      "definition": "Arrogantly superior and disdainful.",
      "example": "Her haughty tone made it clear she expected to be obeyed.",
      "etymology": "Old French haut — high, from Latin altus"
    },
    {
      "term": "Impetuous",
      "definition": "Acting without thought or care; impulsive.",
      "example": "His impetuous decision to quit cost him years of progress.",
      "etymology": "Latin impetuosus — violent, from impetus — attack"
    },
    {
      "term": "Judicious",
      "definition": "Having, showing, or done with good judgment.",
      "example": "A judicious use of silence can be more powerful than any argument.",
      "etymology": "Latin judiciosus — from judicium — judgment"
    },
    {
      "term": "Loquacious",
      "definition": "Tending to talk a great deal; talkative.",
      "example": "Even the most loquacious guest fell quiet during the film.",
      "etymology": "Latin loquax — talkative, from loqui — to speak"
    },
    {
      "term": "Magnanimous",
      "definition": "Generous or forgiving, especially toward rivals.",
      "example": "The champion was magnanimous in victory, praising his opponent's performance.",
      "etymology": "Latin magnus (great) + animus (spirit)"
    },
    {
      "term": "Oblivious",
      "definition": "Not aware of or concerned about what is happening around one.",
      "example": "He was so absorbed in his book that he was oblivious to the noise around him.",
      "etymology": "Latin obliviosus — forgetful, from oblivisci — to forget"
    },
    {
      "term": "Placid",
      "definition": "Not easily upset or excited; calm and peaceful.",
      "example": "The placid surface of the water reflected the mountains perfectly.",
      "etymology": "Latin placidus — calm, from placere — to please"
    },
    {
      "term": "Sardonic",
      "definition": "Grimly mocking or cynical.",
      "example": "She gave a sardonic laugh at the idea that anything would change.",
      "etymology": "Greek sardonios — of a Sardinian plant said to cause grimacing"
    },
    {
      "term": "Ardent",
      "definition": "Enthusiastic or passionate.",
      "example": "He was an ardent supporter of the arts long before it was fashionable.",
      "etymology": "Latin ardens — burning, from ardere — to burn"
    },
    {
      "term": "Brusque",
      "definition": "Abrupt or offhand in speech or manner.",
      "example": "Her brusque reply wasn't rude, just efficient.",
      "etymology": "French brusque, from Italian brusco — sharp, tart"
    },
    {
      "term": "Clement",
      "definition": "Mild and merciful; lenient.",
      "example": "The judge was clement, given the circumstances of the case.",
      "etymology": "Latin clemens — mild, merciful"
    },
    {
      "term": "Doleful",
      "definition": "Expressing sorrow; mournful.",
      "example": "The dog's doleful eyes made it impossible to leave without feeling guilty.",
      "etymology": "Old French doel — grief, from Latin dolere — to grieve"
    },
    {
      "term": "Furtive",
      "definition": "Attempting to avoid notice; secretive.",
      "example": "He cast a furtive glance toward the door before speaking.",
      "etymology": "Latin furtivus — stolen, from furtum — theft"
    },
    {
      "term": "Genial",
      "definition": "Friendly and cheerful; pleasantly warm.",
      "example": "The genial innkeeper made every guest feel immediately at home.",
      "etymology": "Latin genialis — festive, from genius — guardian spirit"
    },
    {
      "term": "Harrowing",
      "definition": "Intensely distressing; traumatic.",
      "example": "Survivors gave harrowing accounts of what they had endured.",
      "etymology": "From harrow — an implement that tears up soil"
    },
    {
      "term": "Inquisitive",
      "definition": "Curious or inquiring; eager to know or learn.",
      "example": "Her inquisitive mind made her a natural scientist.",
      "etymology": "Latin inquisitivus — eager to investigate"
    },
    {
      "term": "Jubilant",
      "definition": "Feeling or expressing great happiness and triumph.",
      "example": "The jubilant crowd poured into the streets after the final whistle.",
      "etymology": "Latin jubilare — to shout for joy"
    },
    {
      "term": "Laconic",
      "definition": "Using very few words; brief to the point of seeming rude.",
      "example": "His laconic reply — just 'No' — ended the conversation.",
      "etymology": "Greek Lakonikos — of Laconia (Sparta), famous for brevity"
    },
    {
      "term": "Timorous",
      "definition": "Showing or suffering from nervousness or a lack of confidence.",
      "example": "The timorous student barely raised her hand, but her answer was brilliant.",
      "etymology": "Latin timorosus — full of fear, from timor — fear"
    },
    {
      "term": "Wry",
      "definition": "Using dry, mocking humor.",
      "example": "He had a wry sense of humor that only revealed itself after you knew him well.",
      "etymology": "Old English wrigian — to turn, twist"
    },
    {
      "term": "Affable",
      "definition": "Friendly, good-natured, and easy to talk to.",
      "example": "The new manager was so affable that even critics warmed to him quickly.",
      "etymology": "Latin affabilis — easy to speak to, from affari — to speak to"
    },
    {
      "term": "Banter",
      "definition": "The playful and friendly exchange of teasing remarks.",
      "example": "The banter between the two colleagues made the long shift bearable.",
      "etymology": "Origin unknown; first recorded 17th century"
    },
    {
      "term": "Clamor",
      "definition": "A loud and confused noise; an uproar.",
      "example": "The clamor of the market made it impossible to hear anything clearly.",
      "etymology": "Latin clamor — shout, from clamare — to cry out"
    },
    {
      "term": "Daunting",
      "definition": "Seeming difficult or frightening; intimidating.",
      "example": "The daunting stack of paperwork barely fazed the experienced clerk.",
      "etymology": "Old French danter, from Latin domitare — to tame"
    },
    {
      "term": "Elusive",
      "definition": "Difficult to find, catch, or achieve.",
      "example": "Sleep remained elusive no matter how tired she felt.",
      "etymology": "Latin eludere — to escape, from e- + ludere — to play"
    },
    {
      "term": "Fleeting",
      "definition": "Lasting for a very short time; passing quickly.",
      "example": "The glimpse of joy was fleeting, gone before she could hold onto it.",
      "etymology": "Old English fleotan — to float, move swiftly"
    },
    {
      "term": "Glean",
      "definition": "To gather information or material bit by bit.",
      "example": "From the old letters, she gleaned clues about her grandmother's early life.",
      "etymology": "Old French glener — to gather grain left by reapers"
    },
    {
      "term": "Hasty",
      "definition": "Done with excessive speed or urgency; rash.",
      "example": "A hasty decision made in anger can take years to undo.",
      "etymology": "Old French haste — urgency, from Germanic"
    },
    {
      "term": "Inert",
      "definition": "Lacking the ability to move or act; sluggish.",
      "example": "The inert gas made the environment safe for the delicate experiment.",
      "etymology": "Latin iners — idle, unskilled, from in- + ars — skill"
    },
    {
      "term": "Jarring",
      "definition": "Incongruous in a way that is unsettling or shocking.",
      "example": "The modern sculpture felt jarring against the ancient stone walls.",
      "etymology": "From jar — to make a harsh sound, of imitative origin"
    },
    {
      "term": "Kindle",
      "definition": "To arouse or inspire a feeling or response.",
      "example": "The mentor's enthusiasm kindled a passion for learning that lasted a lifetime.",
      "etymology": "Old Norse kyndill — candle, torch"
    },
    {
      "term": "Lenient",
      "definition": "More merciful or tolerant than expected.",
      "example": "The lenient sentence surprised those who had followed the trial closely.",
      "etymology": "Latin leniens — soothing, from lenire — to soothe"
    },
    {
      "term": "Mirth",
      "definition": "Amusement, especially as expressed in laughter.",
      "example": "The comedian's set filled the room with genuine mirth.",
      "etymology": "Old English myrgð — joy, pleasure"
    },
    {
      "term": "Nimble",
      "definition": "Quick and light in movement; agile.",
      "example": "Her nimble fingers moved across the keyboard at an astonishing pace.",
      "etymology": "Old English næmel — quick to grasp, from niman — to take"
    },
    {
      "term": "Ominous",
      "definition": "Giving the impression that something bad is about to happen.",
      "example": "The ominous clouds on the horizon signaled the storm's arrival.",
      "etymology": "Latin ominosus — full of omens, from omen"
    },
    {
      "term": "Ponder",
      "definition": "To think about something carefully for a long time.",
      "example": "She sat by the fire and pondered the question for hours.",
      "etymology": "Latin ponderare — to weigh, from pondus — weight"
    },
    {
      "term": "Quench",
      "definition": "To satisfy a thirst or desire; to extinguish a fire.",
      "example": "No amount of travel seemed to quench his desire to see more of the world.",
      "etymology": "Old English cwencan — to extinguish"
    },
    {
      "term": "Revere",
      "definition": "To feel deep respect or admiration for.",
      "example": "Students revered the professor long after graduation.",
      "etymology": "Latin revereri — to stand in awe of, from re- + vereri — to fear"
    },
    {
      "term": "Stoic",
      "definition": "Enduring pain or hardship without showing feelings.",
      "example": "She remained stoic through the diagnosis, breaking down only in private.",
      "etymology": "Greek Stoikos — of the Stoa, a school of philosophy"
    },
    {
      "term": "Trite",
      "definition": "Overused and lacking originality; clichéd.",
      "example": "The speech was full of trite phrases that meant nothing.",
      "etymology": "Latin tritus — worn, from terere — to rub, wear"
    },
    {
      "term": "Unwieldy",
      "definition": "Difficult to move or manage because of size or complexity.",
      "example": "The proposal had grown so unwieldy that no one could agree on its scope.",
      "etymology": "Middle English: from un- + wieldy — easy to handle"
    },
    {
      "term": "Vex",
      "definition": "To make someone feel annoyed or frustrated.",
      "example": "The recurring software bug vexed the entire development team.",
      "etymology": "Latin vexare — to shake, disturb"
    },
    {
      "term": "Wane",
      "definition": "To decrease in strength, intensity, or size.",
      "example": "Public interest in the controversy began to wane after the first week.",
      "etymology": "Old English wanian — to lessen"
    }
  ],
  "intermediate": [
    {
      "term": "Abscond",
      "definition": "To leave hurriedly and secretly, typically to escape from custody.",
      "example": "The treasurer absconded with the funds before anyone noticed.",
      "etymology": "Latin abscondere — to hide away"
    },
    {
      "term": "Acerbic",
      "definition": "Sharp and forthright; harsh or critical in tone.",
      "example": "Her acerbic wit made her column the most read — and most feared — in the paper.",
      "etymology": "Latin acerbus — harsh, bitter"
    },
    {
      "term": "Anathema",
      "definition": "Something or someone greatly detested or loathed.",
      "example": "Compromise was anathema to him; he refused any middle ground.",
      "etymology": "Greek anathema — something cursed, devoted to evil"
    },
    {
      "term": "Antipathy",
      "definition": "A deep-seated feeling of dislike; aversion.",
      "example": "There was a long-standing antipathy between the two departments.",
      "etymology": "Greek antipatheia — opposite feeling"
    },
    {
      "term": "Aperture",
      "definition": "An opening or gap, especially one that admits light.",
      "example": "She adjusted the camera's aperture to let in more light.",
      "etymology": "Latin apertura — opening, from aperire — to open"
    },
    {
      "term": "Apostate",
      "definition": "A person who abandons their religious or political beliefs.",
      "example": "The council condemned him as an apostate for his public rejection of doctrine.",
      "etymology": "Greek apostasia — defection, from aphistanai — to stand away from"
    },
    {
      "term": "Approbation",
      "definition": "Approval or praise, especially from an authority.",
      "example": "The proposal finally won the committee's approbation after months of revision.",
      "etymology": "Latin approbatio — approval, from approbare — to approve"
    },
    {
      "term": "Arcane",
      "definition": "Understood by few; mysterious or secret.",
      "example": "He specialized in arcane legal precedents most lawyers had never heard of.",
      "etymology": "Latin arcanus — secret, from arca — chest, box"
    },
    {
      "term": "Arduous",
      "definition": "Involving or requiring strenuous effort; difficult.",
      "example": "The arduous climb took eight hours and tested every member of the group.",
      "etymology": "Latin arduus — steep, difficult"
    },
    {
      "term": "Articulate",
      "definition": "Having or showing the ability to speak fluently and coherently.",
      "example": "The most articulate member of the group was asked to lead the presentation.",
      "etymology": "Latin articulatus — divided into joints, distinct"
    },
    {
      "term": "Assiduous",
      "definition": "Showing great care and effort over a long period.",
      "example": "Her assiduous note-taking gave her an archive others could only envy.",
      "etymology": "Latin assiduus — sitting close, from assidere — to sit by"
    },
    {
      "term": "Austere",
      "definition": "Severe or strict in manner; plain and without luxury.",
      "example": "The monk's cell was austere — a mat, a candle, and nothing else.",
      "etymology": "Greek austeros — harsh, dry, from auein — to dry"
    },
    {
      "term": "Avarice",
      "definition": "Extreme greed for wealth or material gain.",
      "example": "The villain's avarice was his undoing — he lost everything chasing more.",
      "etymology": "Latin avaritia — greed, from avarus — greedy"
    },
    {
      "term": "Bellicose",
      "definition": "Demonstrating aggression; eager to fight.",
      "example": "The senator's bellicose rhetoric alarmed allies and enemies alike.",
      "etymology": "Latin bellicosus — warlike, from bellum — war"
    },
    {
      "term": "Beseech",
      "definition": "To beg someone urgently and fervently.",
      "example": "She beseeched the committee to reconsider its decision.",
      "etymology": "Old English besecan — to seek, implore"
    },
    {
      "term": "Bucolic",
      "definition": "Relating to or typical of the pleasant aspects of the countryside.",
      "example": "They dreamed of a bucolic retirement far from the city's noise.",
      "etymology": "Greek boukolikos — pastoral, from boukolos — herdsman"
    },
    {
      "term": "Cacophony",
      "definition": "A harsh, discordant mixture of sounds.",
      "example": "The construction site produced a daily cacophony that made concentration impossible.",
      "etymology": "Greek kakophonia — ill-sounding, from kakos (bad) + phone (sound)"
    },
    {
      "term": "Callous",
      "definition": "Showing an insensitive and cruel disregard for others.",
      "example": "His callous dismissal of the team's concerns damaged morale for months.",
      "etymology": "Latin callosus — thick-skinned, from callum — hard skin"
    },
    {
      "term": "Capricious",
      "definition": "Given to sudden changes of mood or behavior; unpredictable.",
      "example": "The capricious weather ruined every outdoor plan that week.",
      "etymology": "Italian capriccio — a sudden start, whim, from capro — goat"
    },
    {
      "term": "Caustic",
      "definition": "Sarcastic in a hurtful way; able to burn or corrode.",
      "example": "His caustic reviews made authors dread publication day.",
      "etymology": "Greek kaustikos — burning, from kaiein — to burn"
    },
    {
      "term": "Circumspect",
      "definition": "Wary and unwilling to take risks; careful.",
      "example": "A circumspect investor, she avoided anything she didn't fully understand.",
      "etymology": "Latin circumspectus — looking around, from circum + specere — to look"
    },
    {
      "term": "Clandestine",
      "definition": "Kept secret or done secretively, especially for illicit reasons.",
      "example": "The two factions held clandestine meetings for months before the merger became public.",
      "etymology": "Latin clandestinus — secret, from clam — secretly"
    },
    {
      "term": "Coalesce",
      "definition": "To come together and form one mass or whole.",
      "example": "The three separate movements eventually coalesced into a unified campaign.",
      "etymology": "Latin coalescere — to grow together, from co- + alescere — to grow"
    },
    {
      "term": "Complacent",
      "definition": "Showing smug or uncritical satisfaction with oneself.",
      "example": "Success made them complacent, and they didn't see the competition coming.",
      "etymology": "Latin complacere — to please greatly"
    },
    {
      "term": "Conundrum",
      "definition": "A confusing and difficult problem or question.",
      "example": "The designer faced a conundrum: how to make it both simple and comprehensive.",
      "etymology": "Origin uncertain; possibly a mock-Latin word coined at Oxford"
    },
    {
      "term": "Copious",
      "definition": "Abundant in supply or quantity.",
      "example": "She took copious notes throughout the lecture, filling three notebooks.",
      "etymology": "Latin copiosus — plentiful, from copia — abundance"
    },
    {
      "term": "Culpable",
      "definition": "Deserving blame or censure; at fault.",
      "example": "The investigation found the company culpable for the safety breach.",
      "etymology": "Latin culpabilis — blameworthy, from culpa — fault"
    },
    {
      "term": "Cupidity",
      "definition": "Greed for money or possessions.",
      "example": "His cupidity led him to cut corners in ways that ultimately destroyed the business.",
      "etymology": "Latin cupiditas — desire, from cupidus — eager, from cupere — to desire"
    },
    {
      "term": "Debacle",
      "definition": "A sudden disastrous collapse or failure; a complete fiasco.",
      "example": "The product launch was a debacle that set the company back years.",
      "etymology": "French débâcle — breaking up, from débâcler — to unbar"
    },
    {
      "term": "Deferential",
      "definition": "Showing respect and polite submission to another's wishes.",
      "example": "The junior staff were deferential to a fault, never challenging bad decisions.",
      "etymology": "Latin deferre — to carry away, concede to"
    },
    {
      "term": "Deleterious",
      "definition": "Causing harm or damage.",
      "example": "The deleterious effects of sleep deprivation are well documented.",
      "etymology": "Greek deleterios — noxious, from deleisthai — to harm"
    },
    {
      "term": "Demagogue",
      "definition": "A political leader who gains power by arousing emotions rather than reason.",
      "example": "The historian warned that every demagogue begins with a kernel of legitimate grievance.",
      "etymology": "Greek demagogos — leader of the people, from demos (people) + agogos (leading)"
    },
    {
      "term": "Despondent",
      "definition": "In low spirits from loss of hope or courage.",
      "example": "He grew despondent after months without a response to his applications.",
      "etymology": "Latin despondere — to give up, yield, from de- + spondere — to promise"
    },
    {
      "term": "Didactic",
      "definition": "Intended to teach; excessively instructive in a preachy way.",
      "example": "The film was well-intentioned but too didactic to be genuinely moving.",
      "etymology": "Greek didaktikos — apt at teaching, from didaskein — to teach"
    },
    {
      "term": "Diffidence",
      "definition": "Modest or shy behavior due to a lack of self-confidence.",
      "example": "His diffidence masked an extraordinarily sharp mind.",
      "etymology": "Latin diffidentia — want of confidence, from diffidere — to distrust"
    },
    {
      "term": "Dissonance",
      "definition": "A lack of harmony among musical notes; inconsistency.",
      "example": "The dissonance between her words and actions made her impossible to trust.",
      "etymology": "Latin dissonantia — discord, from dissonare — to be discordant"
    },
    {
      "term": "Equanimity",
      "definition": "Mental calmness and composure, especially in difficult situations.",
      "example": "She met every crisis with a quiet equanimity that steadied everyone around her.",
      "etymology": "Latin aequanimitas — evenness of mind, from aequus (equal) + animus (mind)"
    },
    {
      "term": "Erudite",
      "definition": "Having or showing great knowledge or learning.",
      "example": "His erudite commentary made even obscure topics feel accessible.",
      "etymology": "Latin eruditus — instructed, educated, from e- + rudis — unlearned"
    },
    {
      "term": "Esoteric",
      "definition": "Intended for or likely understood by only a small number with specialized knowledge.",
      "example": "The seminar became increasingly esoteric as the afternoon wore on.",
      "etymology": "Greek esoterikos — inner, from esotero — further within"
    },
    {
      "term": "Euphemism",
      "definition": "A mild or indirect word used in place of one that might be harsh.",
      "example": "'Letting someone go' is a well-worn euphemism for firing.",
      "etymology": "Greek euphemismos — use of a favorable word, from eu (good) + pheme (speech)"
    },
    {
      "term": "Fatuous",
      "definition": "Silly and pointless; complacently foolish.",
      "example": "The executive's fatuous optimism annoyed those doing the actual work.",
      "etymology": "Latin fatuus — foolish, tasteless"
    },
    {
      "term": "Fervent",
      "definition": "Having or displaying a passionate intensity.",
      "example": "She was a fervent advocate for prison reform throughout her career.",
      "etymology": "Latin fervens — boiling, from fervere — to boil"
    },
    {
      "term": "Flagrant",
      "definition": "Conspicuously or obviously offensive; shamelessly bold.",
      "example": "The referee called a flagrant foul and ejected the player immediately.",
      "etymology": "Latin flagrans — burning, blazing, from flagrare — to blaze"
    },
    {
      "term": "Flippant",
      "definition": "Not showing a serious or respectful attitude.",
      "example": "His flippant response to the complaint made the situation far worse.",
      "etymology": "From flip — to toss lightly, of imitative origin"
    },
    {
      "term": "Foreboding",
      "definition": "A feeling that something bad will happen; an omen.",
      "example": "A sense of foreboding settled over the village as the storm approached.",
      "etymology": "Old English fore- (before) + bod — messenger"
    },
    {
      "term": "Fractious",
      "definition": "Easily upset or irritated; difficult to control.",
      "example": "The fractious coalition fell apart within months of taking office.",
      "etymology": "From fraction — a quarrel; related to Latin frangere — to break"
    },
    {
      "term": "Furtive",
      "definition": "Attempting to avoid notice; secretive and evasive.",
      "example": "The furtive glances between them did not go unnoticed.",
      "etymology": "Latin furtivus — stolen, from furtum — theft"
    },
    {
      "term": "Grandiloquent",
      "definition": "Using high-flown or bombastic language.",
      "example": "His grandiloquent introduction was longer than the speech it introduced.",
      "etymology": "Latin grandiloquus — using lofty language, from grandis (grand) + loqui (to speak)"
    },
    {
      "term": "Gratuitous",
      "definition": "Done without justification; unnecessary.",
      "example": "The violence in the film felt gratuitous rather than meaningful.",
      "etymology": "Latin gratuitus — given freely, from gratus — pleasing, free"
    },
    {
      "term": "Hegemony",
      "definition": "Leadership or dominance of one country, group, or idea over others.",
      "example": "The tech firm's hegemony over social media raised serious antitrust concerns.",
      "etymology": "Greek hegemonia — leadership, from hegemon — leader"
    },
    {
      "term": "Idiosyncrasy",
      "definition": "A mode of behavior peculiar to an individual; a quirk.",
      "example": "One of his endearing idiosyncrasies was alphabetizing his spice rack every Sunday.",
      "etymology": "Greek idiosynkrasia — personal temperament, from idios (own) + synkrasis (mixture)"
    },
    {
      "term": "Ignominious",
      "definition": "Deserving or causing public disgrace or shame.",
      "example": "The team suffered an ignominious defeat in the championship final.",
      "etymology": "Latin ignominiosus — disgraceful, from ignominia — dishonor"
    },
    {
      "term": "Impasse",
      "definition": "A situation in which no progress is possible; a deadlock.",
      "example": "Negotiations reached an impasse after neither side would budge on the key issue.",
      "etymology": "French impasse — dead end, from im- (not) + passer — to pass"
    },
    {
      "term": "Imperious",
      "definition": "Assuming power or authority without justification; arrogantly commanding.",
      "example": "Her imperious manner alienated colleagues who might otherwise have supported her.",
      "etymology": "Latin imperiosus — commanding, from imperium — command"
    },
    {
      "term": "Incisive",
      "definition": "Intelligently analytical and clear-thinking; sharp.",
      "example": "His incisive questioning exposed the contradiction at the heart of the argument.",
      "etymology": "Latin incisus — cut into, from incidere — to cut"
    },
    {
      "term": "Indolent",
      "definition": "Wanting to avoid activity or exertion; lazy.",
      "example": "The indolent summer afternoons were perfect for reading and doing nothing else.",
      "etymology": "Latin indolens — feeling no pain, from in- + dolere — to suffer"
    },
    {
      "term": "Inexorable",
      "definition": "Unable to be stopped or prevented; relentless.",
      "example": "The inexorable march of time eventually dulled the pain.",
      "etymology": "Latin inexorabilis — not to be moved by entreaty"
    },
    {
      "term": "Inscrutable",
      "definition": "Impossible to understand or interpret; mysterious.",
      "example": "His inscrutable expression gave nothing away during the negotiation.",
      "etymology": "Latin inscrutabilis — not to be searched out"
    },
    {
      "term": "Insidious",
      "definition": "Proceeding in a gradual, subtle way, but with harmful effects.",
      "example": "The insidious spread of misinformation made it hard to know what to trust.",
      "etymology": "Latin insidiosus — cunning, treacherous, from insidiae — ambush"
    },
    {
      "term": "Intransigent",
      "definition": "Unwilling to change one's views; uncompromising.",
      "example": "Both parties were so intransigent that talks collapsed after a single session.",
      "etymology": "Spanish intransigente — uncompromising, from Latin in- + transigere — to come to an agreement"
    },
    {
      "term": "Irascible",
      "definition": "Having or showing a tendency to be easily angered.",
      "example": "The irascible chef threw out anyone who questioned his recipes.",
      "etymology": "Latin irascibilis — prone to anger, from irasci — to be angry"
    },
    {
      "term": "Lachrymose",
      "definition": "Tearful or given to weeping; inducing tears.",
      "example": "The lachrymose film was more exhausting than moving.",
      "etymology": "Latin lachrymosus — tearful, from lacrima — tear"
    },
    {
      "term": "Lassitude",
      "definition": "Physical or mental weariness; lack of energy.",
      "example": "After the exam season, a deep lassitude settled over the student body.",
      "etymology": "Latin lassitudo — weariness, from lassus — weary"
    },
    {
      "term": "Licentious",
      "definition": "Promiscuous and unprincipled in sexual matters; lacking moral restraint.",
      "example": "The novel's licentious protagonist shocked Victorian readers.",
      "etymology": "Latin licentiosus — unrestrained, from licentia — freedom"
    },
    {
      "term": "Lugubrious",
      "definition": "Looking or sounding sad and dismal.",
      "example": "The basset hound had a permanently lugubrious expression that inspired sympathy.",
      "etymology": "Latin lugubris — mournful, from lugere — to mourn"
    },
    {
      "term": "Machiavellian",
      "definition": "Cunning, scheming, and unscrupulous in the pursuit of power.",
      "example": "His Machiavellian rise through the ranks left a trail of outmaneuvered rivals.",
      "etymology": "From Niccolò Machiavelli, author of The Prince (1513)"
    },
    {
      "term": "Mendacious",
      "definition": "Not telling the truth; lying.",
      "example": "The mendacious report was exposed by a single whistleblower.",
      "etymology": "Latin mendax — lying, from mendum — fault, blemish"
    },
    {
      "term": "Mercurial",
      "definition": "Subject to sudden changes of mood or mind; volatile.",
      "example": "Working for such a mercurial boss kept the entire staff on edge.",
      "etymology": "From Mercury, the swift-moving Roman messenger god"
    },
    {
      "term": "Meretricious",
      "definition": "Apparently attractive but having in reality no value or integrity.",
      "example": "The meretricious packaging concealed a deeply mediocre product.",
      "etymology": "Latin meretricius — of or like a prostitute, from meretrix — prostitute"
    },
    {
      "term": "Morose",
      "definition": "Sullen and ill-tempered; gloomy.",
      "example": "He became morose after losing, rarely speaking to anyone for days.",
      "etymology": "Latin morosus — difficult, from mos (moris) — manner, custom"
    },
    {
      "term": "Nebulous",
      "definition": "Not clear or well-defined; hazy.",
      "example": "The strategy remained nebulous even after three planning meetings.",
      "etymology": "Latin nebulosus — full of mist, from nebula — mist"
    },
    {
      "term": "Nefarious",
      "definition": "Wicked, criminal, or villainous.",
      "example": "The investigation uncovered a network of nefarious financial schemes.",
      "etymology": "Latin nefarius — wicked, from nefas — wrongdoing"
    },
    {
      "term": "Obsequious",
      "definition": "Excessively obedient or attentive; fawning.",
      "example": "The obsequious intern agreed with everything the executive said, no matter how wrong.",
      "etymology": "Latin obsequiosus — compliant, from obsequi — to comply with"
    },
    {
      "term": "Obtuse",
      "definition": "Annoyingly insensitive or slow to understand.",
      "example": "He wasn't stupid — just deliberately obtuse when it suited him.",
      "etymology": "Latin obtusus — blunt, dull, from obtundere — to beat against"
    },
    {
      "term": "Odious",
      "definition": "Extremely unpleasant; repulsive.",
      "example": "He found the task odious but accepted it for the good of the project.",
      "etymology": "Latin odiosus — hateful, from odium — hatred"
    },
    {
      "term": "Officious",
      "definition": "Asserting authority in an annoyingly intrusive way.",
      "example": "The officious clerk insisted on verifying every document twice.",
      "etymology": "Latin officiosus — dutiful, from officium — duty"
    },
    {
      "term": "Opprobrious",
      "definition": "Outrageously disgraceful; severely critical.",
      "example": "The opprobrious editorial called for the minister's immediate resignation.",
      "etymology": "Latin opprobriosus — reproachful, from opprobrium — disgrace"
    },
    {
      "term": "Pariah",
      "definition": "An outcast; a person who is generally despised.",
      "example": "After the scandal, he became a pariah in the industry he had once led.",
      "etymology": "Tamil paraiyar — drummer, hereditary drummer caste"
    },
    {
      "term": "Pedantic",
      "definition": "Excessively concerned with minor details or rules.",
      "example": "His pedantic corrections of grammar made him unpopular at dinner parties.",
      "etymology": "Italian pedante — teacher, pedant"
    },
    {
      "term": "Perfidious",
      "definition": "Deceitful and untrustworthy; treacherous.",
      "example": "The perfidious advisor shared state secrets with the enemy.",
      "etymology": "Latin perfidiosus — faithless, from perfidia — treachery"
    },
    {
      "term": "Perfunctory",
      "definition": "Done as a routine duty with little care or thought.",
      "example": "A perfunctory inspection missed the very defects it was meant to catch.",
      "etymology": "Latin perfunctorius — done carelessly, from perfungi — to get through with"
    },
    {
      "term": "Perspicacious",
      "definition": "Having a ready insight; acutely perceptive.",
      "example": "A perspicacious reader will notice what the text leaves unsaid.",
      "etymology": "Latin perspicax — sharp-sighted, from perspicere — to see through"
    },
    {
      "term": "Petulant",
      "definition": "Childishly sulky or bad-tempered.",
      "example": "His petulant response to criticism revealed a deep insecurity.",
      "etymology": "Latin petulans — forward, insolent, from petere — to seek"
    },
    {
      "term": "Platitude",
      "definition": "A remark or statement that is used too often to be interesting.",
      "example": "The speech was full of platitudes and devoid of any real plan.",
      "etymology": "French platitude — flatness, from plat — flat"
    },
    {
      "term": "Plausible",
      "definition": "Seeming reasonable or probable; credible.",
      "example": "Her alibi was plausible enough that investigators couldn't rule it out.",
      "etymology": "Latin plausibilis — deserving applause, from plaudere — to applaud"
    },
    {
      "term": "Polemic",
      "definition": "A strong verbal or written attack on someone or something.",
      "example": "The pamphlet was a polemic against the city's development policies.",
      "etymology": "Greek polemikos — warlike, from polemos — war"
    },
    {
      "term": "Precipitate",
      "definition": "Done suddenly or without careful consideration; hasty.",
      "example": "A precipitate withdrawal from negotiations set talks back by months.",
      "etymology": "Latin praecipitare — to hurl headlong, from praeceps — headlong"
    },
    {
      "term": "Precocious",
      "definition": "Having developed certain abilities or proclivities earlier than usual.",
      "example": "The precocious child was reading chapter books at age four.",
      "etymology": "Latin praecox — ripening early, from prae- + coquere — to cook"
    },
    {
      "term": "Presumptuous",
      "definition": "Failing to observe the limits of what is permitted or appropriate.",
      "example": "It would be presumptuous to assume the role without being formally appointed.",
      "etymology": "Latin praesumptuosus — arrogant, from praesumere — to assume"
    },
    {
      "term": "Propitious",
      "definition": "Giving or indicating a good chance of success; favorable.",
      "example": "The clear skies and calm seas seemed propitious for the crossing.",
      "etymology": "Latin propitius — favorable, gracious"
    },
    {
      "term": "Prosaic",
      "definition": "Having the style of prose; commonplace; unromantic.",
      "example": "The prosaic truth was far less dramatic than the rumors suggested.",
      "etymology": "Latin prosaicus — in prose, from prosa — prose"
    },
    {
      "term": "Querulous",
      "definition": "Complaining in a petulant or whining manner.",
      "example": "The querulous passengers complained about everything from the delay to the temperature.",
      "etymology": "Latin querulus — complaining, from queri — to complain"
    },
    {
      "term": "Rancor",
      "definition": "Bitterness or resentfulness, especially when long-standing.",
      "example": "Years of professional rivalry had hardened into genuine rancor.",
      "etymology": "Latin rancor — rancidness, old grudge"
    },
    {
      "term": "Recalcitrant",
      "definition": "Having an obstinately uncooperative attitude.",
      "example": "The recalcitrant student refused every offer of help.",
      "etymology": "Latin recalcitrare — to kick back, from re- + calcitrare — to kick"
    },
    {
      "term": "Reprehensible",
      "definition": "Deserving censure or condemnation.",
      "example": "The conduct was described as reprehensible by every member of the panel.",
      "etymology": "Latin reprehensibilis — deserving blame, from reprehendere — to censure"
    },
    {
      "term": "Resolute",
      "definition": "Admirably purposeful, determined, and unwavering.",
      "example": "She was resolute in her refusal to accept anything less than full equality.",
      "etymology": "Latin resolutus — released, loosened; in modern use, from resolve"
    },
    {
      "term": "Rhetoric",
      "definition": "Language designed to persuade or impress; sometimes seen as insincere.",
      "example": "The campaign was heavy on rhetoric and light on policy detail.",
      "etymology": "Greek rhetorike — art of the orator, from rhetor — public speaker"
    },
    {
      "term": "Sanctimonious",
      "definition": "Making a show of being morally superior; self-righteous.",
      "example": "His sanctimonious lecture on diet landed poorly with his audience.",
      "etymology": "Latin sanctimonia — holiness, from sanctus — holy"
    },
    {
      "term": "Sycophant",
      "definition": "A person who acts obsequiously toward someone for personal gain.",
      "example": "The executive was surrounded by sycophants who never challenged a bad idea.",
      "etymology": "Greek sykophantes — informer, slanderer"
    },
    {
      "term": "Tendentious",
      "definition": "Promoting a particular cause or viewpoint; biased.",
      "example": "The report was criticized as tendentious, presenting only the evidence that fit its conclusion.",
      "etymology": "Latin tendere — to stretch, strive; via Medieval Latin tendentia"
    },
    {
      "term": "Truculent",
      "definition": "Eager or quick to argue or fight; aggressively defiant.",
      "example": "The truculent witness had to be cautioned twice by the judge.",
      "etymology": "Latin truculentus — savage, from trux — fierce"
    },
    {
      "term": "Vicarious",
      "definition": "Experienced in the imagination through the feelings of another.",
      "example": "He lived vicariously through his daughter's adventures, never having traveled himself.",
      "etymology": "Latin vicarius — substitute, deputy, from vicis — change, turn"
    },
    {
      "term": "Vindictive",
      "definition": "Having or showing a strong desire for revenge.",
      "example": "The vindictive manager made life difficult for anyone who had crossed her.",
      "etymology": "Latin vindicta — vengeance, revenge"
    },
    {
      "term": "Voluble",
      "definition": "Talking fluently and at length; talkative.",
      "example": "The voluble tour guide covered three centuries of history in forty minutes.",
      "etymology": "Latin volubilis — rolling, fluent, from volvere — to roll"
    },
    {
      "term": "Zealot",
      "definition": "A person who is fanatical about their beliefs.",
      "example": "To call him a health zealot was fair — he ran every day at dawn, rain or shine.",
      "etymology": "Greek zelotes — one who is zealous, from zelos — zeal"
    }
  ],
  "advanced": [
    {
      "term": "Abstruse",
      "definition": "Difficult to understand; obscure.",
      "example": "The philosopher's later work became increasingly abstruse, accessible only to specialists.",
      "etymology": "Latin abstrusus — hidden away, from abstrudere — to conceal"
    },
    {
      "term": "Acedia",
      "definition": "Spiritual or mental sloth; listless indifference.",
      "example": "The monks named acedia 'the noonday demon' — the listlessness that strikes the devoted.",
      "etymology": "Greek akedeia — indifference, from a- (not) + kedos — care"
    },
    {
      "term": "Adumbrate",
      "definition": "To outline or sketch in; to foreshadow.",
      "example": "The preface adumbrated themes that would not become fully clear until the final chapter.",
      "etymology": "Latin adumbrare — to sketch in shadow, from umbra — shadow"
    },
    {
      "term": "Afflatus",
      "definition": "A divine creative impulse; inspiration.",
      "example": "The poem came to her in a single sitting, as though seized by afflatus.",
      "etymology": "Latin afflatus — a blowing, inspiration, from afflare — to breathe on"
    },
    {
      "term": "Agrestic",
      "definition": "Of or pertaining to the fields; rural; unpolished.",
      "example": "The agrestic charm of the village had not been touched by modern development.",
      "etymology": "Latin agrestis — of the fields, from ager — field"
    },
    {
      "term": "Alacrity",
      "definition": "Brisk and cheerful readiness.",
      "example": "She accepted the challenge with an alacrity that surprised everyone in the room.",
      "etymology": "Latin alacritas — liveliness, from alacer — lively"
    },
    {
      "term": "Aleatory",
      "definition": "Depending on chance; used of music or art involving random elements.",
      "example": "The composer embraced aleatory techniques, allowing performers to improvise key passages.",
      "etymology": "Latin aleatorius — pertaining to dice, from alea — die, chance"
    },
    {
      "term": "Anamnesis",
      "definition": "Recollection, especially of a supposed past life; the act of calling to mind.",
      "example": "Plato used anamnesis to argue that learning is really remembering what the soul already knows.",
      "etymology": "Greek anamnesis — recollection, from ana- + mimneskein — to remind"
    },
    {
      "term": "Anachronism",
      "definition": "A thing belonging to a period other than that in which it exists.",
      "example": "The use of a quill in the courtroom felt like a deliberate anachronism.",
      "etymology": "Greek anachronismos — from ana- (against) + chronos (time)"
    },
    {
      "term": "Anchorite",
      "definition": "A religious recluse; one who withdraws from the world for spiritual reasons.",
      "example": "Julian of Norwich was an anchorite who composed one of the great works of English mysticism.",
      "etymology": "Greek anachorein — to retire, from ana- + chorein — to make room"
    },
    {
      "term": "Anodyne",
      "definition": "Soothing; unlikely to cause offense but also unlikely to provoke thought.",
      "example": "The committee issued an anodyne statement that satisfied no one.",
      "etymology": "Greek anodynos — free from pain, from an- + odyne — pain"
    },
    {
      "term": "Apocryphal",
      "definition": "Of doubtful authenticity; well-known but probably not true.",
      "example": "The story of Washington and the cherry tree is almost certainly apocryphal.",
      "etymology": "Greek apokryphos — hidden, from apokryptein — to hide away"
    },
    {
      "term": "Apotheosis",
      "definition": "The highest point of development; the glorification of a subject.",
      "example": "That performance was considered the apotheosis of his forty-year career.",
      "etymology": "Greek apotheoun — to deify, from apo- + theos — god"
    },
    {
      "term": "Apotropaic",
      "definition": "Intended to ward off evil or bad luck.",
      "example": "The carved figure above the door served an apotropaic function in the village's folklore.",
      "etymology": "Greek apotrepein — to turn away, from apo- + trepein — to turn"
    },
    {
      "term": "Arrogate",
      "definition": "To take or claim (something) without justification.",
      "example": "The committee chair began to arrogate decisions that belonged to the full board.",
      "etymology": "Latin arrogare — to claim for oneself, from ad- + rogare — to ask"
    },
    {
      "term": "Asperity",
      "definition": "Harshness of tone or manner; roughness.",
      "example": "He replied with an asperity that made clear the conversation was over.",
      "etymology": "Latin asperitas — roughness, from asper — rough"
    },
    {
      "term": "Atavism",
      "definition": "A tendency to revert to something ancestral; a throwback.",
      "example": "The critic saw the novel's violence as a kind of literary atavism — a return to Victorian melodrama.",
      "etymology": "Latin atavus — great-great-grandfather, remote ancestor"
    },
    {
      "term": "Attrition",
      "definition": "Gradual wearing down by persistent pressure or harassment.",
      "example": "The war of attrition left both sides exhausted and neither side victorious.",
      "etymology": "Latin attritio — rubbing against, from atterere — to wear away"
    },
    {
      "term": "Auspice",
      "definition": "An omen; (plural) protection or patronage.",
      "example": "The festival was held under the auspices of the city's arts council.",
      "etymology": "Latin auspicium — bird-watching for omens, from avis (bird) + specere (to look)"
    },
    {
      "term": "Bathetic",
      "definition": "Producing bathos; an abrupt, jarring descent from the elevated to the mundane.",
      "example": "The speech built to a climax and then ended on a bathetic note about parking fees.",
      "etymology": "Greek bathos — depth; coined by Alexander Pope"
    },
    {
      "term": "Bifurcate",
      "definition": "To divide into two branches or parts.",
      "example": "At the crossroads, the trail bifurcated — one path toward the summit, one toward the valley.",
      "etymology": "Latin bifurcus — two-pronged, from bi- + furca — fork"
    },
    {
      "term": "Bildungsroman",
      "definition": "A novel dealing with a character's moral and psychological growth.",
      "example": "Great Expectations remains the quintessential English bildungsroman.",
      "etymology": "German: Bildung (formation) + Roman (novel)"
    },
    {
      "term": "Blandishment",
      "definition": "Flattery intended to coax or persuade.",
      "example": "She resisted every blandishment the lobbyists offered.",
      "etymology": "Latin blandiri — to flatter, from blandus — smooth, flattering"
    },
    {
      "term": "Casuistry",
      "definition": "The use of clever but unsound reasoning, especially in ethics.",
      "example": "His defense of the policy relied on casuistry that collapsed under scrutiny.",
      "etymology": "Latin casus — case, from cadere — to fall"
    },
    {
      "term": "Catharsis",
      "definition": "The process of releasing strong emotions through an experience.",
      "example": "The final act provided a catharsis that left the audience drained but at peace.",
      "etymology": "Greek katharsis — purification, from kathairein — to purify"
    },
    {
      "term": "Chimerical",
      "definition": "Hoped for but illusory; wildly fanciful.",
      "example": "The plan for a perfect society struck most as chimerical.",
      "etymology": "From Chimaera — the fire-breathing monster of Greek myth"
    },
    {
      "term": "Clerisy",
      "definition": "A distinct class of learned or literary people.",
      "example": "The novel found its audience among the clerisy rather than the general public.",
      "etymology": "German Klerisei — clergy; coined by Coleridge"
    },
    {
      "term": "Compunction",
      "definition": "A feeling of guilt or moral scruple about an action.",
      "example": "She lied without compunction when she felt the cause justified it.",
      "etymology": "Latin compungere — to sting, prick, from pungere — to prick"
    },
    {
      "term": "Confabulate",
      "definition": "To fill gaps in memory with fabrications, often unconsciously; to chat.",
      "example": "Patients with certain brain injuries may confabulate, inventing plausible but false memories.",
      "etymology": "Latin confabulari — to chat together"
    },
    {
      "term": "Contumacious",
      "definition": "Stubbornly or willfully disobedient to authority.",
      "example": "The contumacious witness was held in contempt after refusing to answer three direct questions.",
      "etymology": "Latin contumax — insolent, obstinate, from temnere — to despise"
    },
    {
      "term": "Cosset",
      "definition": "To care for and protect in an overindulgent way.",
      "example": "The youngest child was cosseted to the point of helplessness.",
      "etymology": "From cot-seta — cottage dweller; a lamb raised as a pet"
    },
    {
      "term": "Crepuscular",
      "definition": "Relating to or resembling twilight; active at dusk or dawn.",
      "example": "Deer are crepuscular — most active at the edges of day.",
      "etymology": "Latin crepusculum — twilight, from creper — dark"
    },
    {
      "term": "Debouch",
      "definition": "To emerge from a confined space into a wider area.",
      "example": "The gorge debouched suddenly into an open valley of startling beauty.",
      "etymology": "French déboucher — to emerge, from de- + bouche — mouth"
    },
    {
      "term": "Declension",
      "definition": "A falling off; grammatical inflection of nouns; a decline.",
      "example": "The empire's declension from glory to ruin took less than a century.",
      "etymology": "Latin declinatio — bending aside, from declinare — to bend away"
    },
    {
      "term": "Defenestration",
      "definition": "The act of throwing someone or something out of a window.",
      "example": "The Defenestration of Prague in 1618 helped trigger the Thirty Years' War.",
      "etymology": "Latin de- (from) + fenestra (window)"
    },
    {
      "term": "Deictic",
      "definition": "Pointing or referring directly to something in context; demonstrative.",
      "example": "'This,' 'here,' and 'now' are deictic expressions — they point to the context of utterance.",
      "etymology": "Greek deiktikos — direct, from deiknynai — to show"
    },
    {
      "term": "Desideratum",
      "definition": "Something that is needed or wanted.",
      "example": "Clarity was the chief desideratum — nothing else mattered if the audience couldn't follow.",
      "etymology": "Latin desideratum — something desired, from desiderare — to desire"
    },
    {
      "term": "Diaphanous",
      "definition": "Light, delicate, and translucent.",
      "example": "The diaphanous curtains turned gold in the afternoon light.",
      "etymology": "Greek diaphanes — transparent, from dia- + phainein — to show"
    },
    {
      "term": "Diegesis",
      "definition": "A narrative; the time and space of a story's world.",
      "example": "The film's diegesis — its internal world — is entirely self-consistent.",
      "etymology": "Greek diegesis — narrative, from diegeisthai — to describe"
    },
    {
      "term": "Dilatory",
      "definition": "Slow to act; intended to cause delay.",
      "example": "His dilatory tactics ran the clock down until the motion could no longer be heard.",
      "etymology": "Latin dilatorius — causing delay, from dilator — delayer"
    },
    {
      "term": "Doyen",
      "definition": "The most respected or prominent person in a field.",
      "example": "She was considered the doyen of postcolonial literary criticism.",
      "etymology": "French doyen — dean, from Latin decanus — leader of ten"
    },
    {
      "term": "Dubiety",
      "definition": "The state of being doubtful; uncertainty.",
      "example": "A look of dubiety crossed her face as she read the terms of the contract.",
      "etymology": "Latin dubius — doubtful, from duo — two (wavering between two options)"
    },
    {
      "term": "Ebullition",
      "definition": "The action of bubbling; a sudden outburst of emotion.",
      "example": "His habitual reserve made the ebullition of anger all the more striking.",
      "etymology": "Latin ebullire — to bubble up"
    },
    {
      "term": "Edification",
      "definition": "Instruction intended to improve the mind or morals.",
      "example": "The lecture was intended for edification, not entertainment.",
      "etymology": "Latin aedificatio — building up, from aedificare — to build"
    },
    {
      "term": "Effluvium",
      "definition": "An unpleasant or harmful smell or emanation.",
      "example": "The effluvium from the tannery kept property values low for miles.",
      "etymology": "Latin effluvium — a flowing out, from effluere — to flow out"
    },
    {
      "term": "Elenchus",
      "definition": "A form of argument in which a position is refuted by drawing out its contradictions.",
      "example": "Socratic dialogue proceeds by elenchus — relentless questioning until contradiction is exposed.",
      "etymology": "Greek elenchos — refutation, from elenkhein — to refute"
    },
    {
      "term": "Elide",
      "definition": "To omit a sound or syllable; to merge or join.",
      "example": "The poet elides two syllables to preserve the meter.",
      "etymology": "Latin elidere — to strike out, crush, from e- + laedere — to strike"
    },
    {
      "term": "Empiricism",
      "definition": "The theory that all knowledge is derived from sense experience.",
      "example": "Locke's empiricism held that the mind begins as a blank slate.",
      "etymology": "Greek empeirikos — experienced, from empeiria — experience"
    },
    {
      "term": "Encomium",
      "definition": "A formal expression of high praise; a eulogy.",
      "example": "The retiring chancellor received an encomium from every department head.",
      "etymology": "Greek enkomion — laudatory ode, from en- + komos — revel, festivity"
    },
    {
      "term": "Entelechy",
      "definition": "The realization of potential; in Aristotle, the condition of full actualization.",
      "example": "The symphony felt like the entelechy of everything the composer had been working toward.",
      "etymology": "Greek entelecheia — having one's end within, from en- + telos (end) + echein (to have)"
    },
    {
      "term": "Epigone",
      "definition": "A less distinguished follower or imitator of an important artist or thinker.",
      "example": "The second generation of the movement was composed mostly of epigones who missed the spirit of the original.",
      "etymology": "Greek epigonoi — those born afterward, successors"
    },
    {
      "term": "Equivocate",
      "definition": "To use ambiguous language to conceal the truth or avoid commitment.",
      "example": "The minister equivocated so thoroughly that the press couldn't extract a single clear answer.",
      "etymology": "Latin aequivocus — ambiguous, from aequus (equal) + vox (voice)"
    },
    {
      "term": "Eristic",
      "definition": "Of or characterized by debate or argument; one who argues for victory rather than truth.",
      "example": "The debate had become purely eristic — no one was interested in understanding, only in winning.",
      "etymology": "Greek eristikos — fond of wrangling, from eris — strife"
    },
    {
      "term": "Eschatology",
      "definition": "The branch of theology concerned with death, judgment, and final destiny.",
      "example": "Medieval eschatology shaped how people understood plague, famine, and war.",
      "etymology": "Greek eschatos — last, furthest + logos — study"
    },
    {
      "term": "Etiolate",
      "definition": "To make pale and weak through lack of light or nourishment; to deprive of vigor.",
      "example": "A decade of careful hedging had etiolated the policy until nothing bold remained.",
      "etymology": "French étioler — to become pale, from éteuler — to grow into straw"
    },
    {
      "term": "Eudaimonia",
      "definition": "Human flourishing or wellbeing; Aristotle's concept of the highest human good.",
      "example": "For Aristotle, eudaimonia was not a feeling but an activity — the exercise of virtue.",
      "etymology": "Greek eu (good) + daimon (spirit)"
    },
    {
      "term": "Excoriate",
      "definition": "To censure or criticize severely; literally, to strip off the skin.",
      "example": "The review excoriated the director for squandering the material.",
      "etymology": "Latin excoriare — to strip off skin, from corium — hide, skin"
    },
    {
      "term": "Exegesis",
      "definition": "Critical explanation or interpretation, especially of a text.",
      "example": "The seminar required close exegesis of a single paragraph each week.",
      "etymology": "Greek exegesis — explanation, from exegeisthai — to lead out, interpret"
    },
    {
      "term": "Expatiate",
      "definition": "To speak or write at length or in detail.",
      "example": "Given the opportunity, he would expatiate for hours on the subject of Roman architecture.",
      "etymology": "Latin expatiare — to walk about freely, digress"
    },
    {
      "term": "Expiate",
      "definition": "To make amends or reparation for (guilt or wrongdoing).",
      "example": "He spent years trying to expiate the mistakes of his early career.",
      "etymology": "Latin expiare — to make amends, from pius — devout"
    },
    {
      "term": "Expunge",
      "definition": "To erase or remove completely.",
      "example": "He petitioned the court to expunge the arrest from his record.",
      "etymology": "Latin expungere — to mark for deletion, from e- + pungere — to prick"
    },
    {
      "term": "Exscind",
      "definition": "To cut out or away; to excise.",
      "example": "The editor exscinded an entire chapter that he felt weakened the argument.",
      "etymology": "Latin exscindere — to tear out, from ex- + scindere — to cut"
    },
    {
      "term": "Febrile",
      "definition": "Having or showing the symptoms of a fever; nervously excited.",
      "example": "The febrile atmosphere in the trading room was palpable even from the doorway.",
      "etymology": "Latin febrilis — feverish, from febris — fever"
    },
    {
      "term": "Fecund",
      "definition": "Producing many offspring or new ideas; fertile.",
      "example": "The late period was his most fecund — he published four books in three years.",
      "etymology": "Latin fecundus — fruitful, from fetus — offspring"
    },
    {
      "term": "Filigree",
      "definition": "Delicate ornamental work; intricate, delicate decoration.",
      "example": "The argument was built on such fine filigree that the whole thing collapsed at one touch.",
      "etymology": "French filigrane, from Italian filare (to spin) + grano (grain)"
    },
    {
      "term": "Filibuster",
      "definition": "A prolonged speech obstructing progress in a legislative assembly.",
      "example": "The senator held the floor for fourteen hours in a single filibuster.",
      "etymology": "Dutch vrijbuiter — freebooter, pirate; via Spanish filibustero"
    },
    {
      "term": "Fugacious",
      "definition": "Tending to disappear; fleeting.",
      "example": "Happiness, he wrote, is fugacious by nature — it cannot be held.",
      "etymology": "Latin fugax — fleeting, from fugere — to flee"
    },
    {
      "term": "Galimaufry",
      "definition": "A confused jumble or medley of things.",
      "example": "The exhibition was a galimaufry of styles with no coherent curatorial vision.",
      "etymology": "French galimafrée — a dish of scraps, origin obscure"
    },
    {
      "term": "Genuflect",
      "definition": "To lower one's body briefly by bending one knee; to show deference.",
      "example": "The punditry genuflected to the new power without waiting to see what it stood for.",
      "etymology": "Latin genuflectere — to bend the knee, from genu (knee) + flectere (to bend)"
    },
    {
      "term": "Glabrous",
      "definition": "Free from hair or down; smooth-skinned.",
      "example": "The sculptor preferred glabrous marble surfaces, polished to a near-liquid finish.",
      "etymology": "Latin glaber — smooth, bald"
    },
    {
      "term": "Gravamen",
      "definition": "The essence or most serious part of a complaint or accusation.",
      "example": "The gravamen of the lawsuit was not the money lost but the trust betrayed.",
      "etymology": "Latin gravamen — grievance, from gravare — to burden"
    },
    {
      "term": "Hagiography",
      "definition": "A biography that praises its subject uncritically; the study of saints' lives.",
      "example": "The authorized biography was really hagiography — not a flaw in sight.",
      "etymology": "Greek hagiographia — writing of saints, from hagios (holy) + graphein (to write)"
    },
    {
      "term": "Hamartia",
      "definition": "A fatal flaw leading to the downfall of a tragic hero.",
      "example": "His hamartia was not wickedness but pride — an excess of the very quality that made him great.",
      "etymology": "Greek hamartia — error, missing the mark, from hamartanein — to miss"
    },
    {
      "term": "Hapax Legomenon",
      "definition": "A word that occurs only once in a given body of text or language.",
      "example": "Several of Shakespeare's coinages remain hapax legomena, used once and never again.",
      "etymology": "Greek: hapax (once) + legomenon (said)"
    },
    {
      "term": "Hermeneutics",
      "definition": "The theory and methodology of interpretation, especially of texts.",
      "example": "Her approach to the poem was shaped by hermeneutics — not what it says, but how meaning is made.",
      "etymology": "Greek hermeneutikos — interpretive, from hermeneuein — to interpret"
    },
    {
      "term": "Heterodox",
      "definition": "Not conforming to orthodox standards or established doctrine.",
      "example": "His heterodox views on diet attracted both disciples and fierce critics.",
      "etymology": "Greek heterodoxos — holding a different opinion, from heteros (other) + doxa (opinion)"
    },
    {
      "term": "Hieratic",
      "definition": "Of or concerning priests; having a formal, priestly quality.",
      "example": "The hieratic stillness of the painting conveys a sense of ritual rather than narrative.",
      "etymology": "Greek hieratikos — priestly, from hiereus — priest"
    },
    {
      "term": "Hierophant",
      "definition": "An interpreter of sacred mysteries or esoteric principles.",
      "example": "He became the movement's hierophant — the one voice authorized to explain the doctrine.",
      "etymology": "Greek hierophantes — one who shows sacred things, from hieros (sacred) + phainein (to show)"
    },
    {
      "term": "Homologous",
      "definition": "Having the same relation, relative position, or structure.",
      "example": "The wing of a bat and the arm of a human are homologous structures.",
      "etymology": "Greek homologos — agreeing, from homos (same) + logos (reason)"
    },
    {
      "term": "Hypostasis",
      "definition": "The underlying reality or substance behind something; a distinct person within the Trinity.",
      "example": "The hypostasis behind the performance was grief — raw and barely concealed.",
      "etymology": "Greek hypostasis — foundation, from hypo- + stasis — standing"
    },
    {
      "term": "Iatrogenic",
      "definition": "Relating to illness caused by medical examination or treatment.",
      "example": "The iatrogenic complications from the procedure exceeded the original symptoms.",
      "etymology": "Greek iatros — physician + genesis — origin"
    },
    {
      "term": "Ichor",
      "definition": "The fluid that flows in the veins of the gods; a watery discharge.",
      "example": "In the myth, ichor dripped from the wound — proof of his divine nature.",
      "etymology": "Greek ikhor — the blood of the gods"
    },
    {
      "term": "Iconoclast",
      "definition": "A person who attacks or ignores cherished beliefs or institutions.",
      "example": "Every iconoclast eventually becomes the new orthodoxy for the next generation to rebel against.",
      "etymology": "Greek eikonoklastes — image breaker, from eikon (image) + klan (to break)"
    },
    {
      "term": "Immanent",
      "definition": "Existing or operating within; inherent (distinct from transcendent).",
      "example": "The divine, in pantheism, is immanent — present in all things, not apart from them.",
      "etymology": "Latin immanere — to remain in, from in- + manere — to stay"
    },
    {
      "term": "Impecunious",
      "definition": "Having very little or no money.",
      "example": "The impecunious scholar lived on black coffee and the goodwill of his students.",
      "etymology": "Latin im- (not) + pecuniosus (wealthy), from pecunia — money"
    },
    {
      "term": "Inanition",
      "definition": "Exhaustion caused by lack of nourishment; emptiness of spirit.",
      "example": "The project had reached a state of inanition — nothing new was being added, nothing finished.",
      "etymology": "Latin inanire — to make empty, from inanis — empty"
    },
    {
      "term": "Inchoate",
      "definition": "Just begun and not fully formed; undeveloped.",
      "example": "The theory was still inchoate — interesting but not yet coherent.",
      "etymology": "Latin inchoatus — just begun, from inchoare — to begin"
    },
    {
      "term": "Ineffable",
      "definition": "Too great or extreme to be expressed in words.",
      "example": "The view from the summit produced an ineffable sense of smallness and peace.",
      "etymology": "Latin ineffabilis — unspeakable, from in- + effari — to speak out"
    },
    {
      "term": "Ineluctable",
      "definition": "Unable to be resisted or avoided; inescapable.",
      "example": "The ineluctable logic of the argument left no room for disagreement.",
      "etymology": "Latin ineluctabilis — that cannot be escaped, from in- + eluctari — to struggle out"
    },
    {
      "term": "Lacuna",
      "definition": "A missing portion in a text or series; a gap.",
      "example": "The manuscript had a significant lacuna — three chapters simply missing.",
      "etymology": "Latin lacuna — pit, gap, from lacus — lake"
    },
    {
      "term": "Liminal",
      "definition": "Relating to a threshold or transitional state between two conditions.",
      "example": "Adolescence is the most liminal period of life — neither childhood nor adulthood.",
      "etymology": "Latin limen — threshold"
    },
    {
      "term": "Logomachy",
      "definition": "An argument about words; a dispute over terminology.",
      "example": "What looked like a philosophical debate was really logomachy — a fight over definitions.",
      "etymology": "Greek logomakhia — word battle, from logos (word) + makhia (battle)"
    },
    {
      "term": "Lugubrious",
      "definition": "Looking or sounding sad and dismal in an exaggerated way.",
      "example": "The bloodhound wore a lugubrious expression that seemed to mourn the state of the world.",
      "etymology": "Latin lugubris — mournful, from lugere — to mourn"
    },
    {
      "term": "Lycanthropy",
      "definition": "The mythological ability to transform into a wolf; delusion of being a wolf.",
      "example": "Werewolf legends may have grown from historical cases of lycanthropy.",
      "etymology": "Greek lykanthropos — wolf-man, from lykos (wolf) + anthropos (man)"
    },
    {
      "term": "Malapropism",
      "definition": "The mistaken use of a word in place of a similar-sounding word.",
      "example": "'He's a wolf in cheap clothing' is a classic malapropism.",
      "etymology": "From Mrs. Malaprop in Sheridan's The Rivals (1775)"
    },
    {
      "term": "Manqué",
      "definition": "Having failed to achieve one's potential; unfulfilled.",
      "example": "He was a novelist manqué — full of stories he never quite managed to write.",
      "etymology": "French manquer — to fail, lack"
    },
    {
      "term": "Meliorism",
      "definition": "The belief that the world can be made better through human effort.",
      "example": "Her politics were rooted in meliorism — not utopian, but persistently hopeful.",
      "etymology": "Latin melior — better"
    },
    {
      "term": "Mendicant",
      "definition": "A beggar; a member of a monastic order that relies on charity.",
      "example": "The mendicant friars owned nothing individually and begged for their daily bread.",
      "etymology": "Latin mendicans — begging, from mendicare — to beg"
    },
    {
      "term": "Metonymy",
      "definition": "A figure of speech in which a thing is referred to by something closely associated with it.",
      "example": "'The Crown' as a reference to monarchy is a classic metonymy.",
      "etymology": "Greek metonymia — change of name, from meta- + onuma — name"
    },
    {
      "term": "Moribund",
      "definition": "At the point of death; in terminal decline.",
      "example": "The industry wasn't dead yet, but it was clearly moribund.",
      "etymology": "Latin moribundus — dying, from mori — to die"
    },
    {
      "term": "Numinous",
      "definition": "Having a strong religious or spiritual quality; mysterious and awe-inspiring.",
      "example": "The cathedral at dusk had a numinous quality that made even skeptics fall silent.",
      "etymology": "Latin numen — divine will, nod"
    },
    {
      "term": "Palimpsest",
      "definition": "A manuscript with writing that has been erased and overwritten; anything with multiple layers.",
      "example": "The city is a palimpsest — every wall hiding the history of what stood before.",
      "etymology": "Greek palimpsestos — scraped again, from palin (again) + psaein (to scrape)"
    },
    {
      "term": "Palinode",
      "definition": "A poem in which the author retracts a view expressed in a former poem.",
      "example": "The second essay was essentially a palinode — a graceful withdrawal from everything argued in the first.",
      "etymology": "Greek palinoidia — singing again, retraction"
    },
    {
      "term": "Panopticon",
      "definition": "A circular prison with cells around a central watchtower; any system of pervasive surveillance.",
      "example": "Foucault used the panopticon as a model for disciplinary power in modern society.",
      "etymology": "Greek pan- (all) + optikon (seeing)"
    },
    {
      "term": "Pareidolia",
      "definition": "The tendency to perceive a specific, meaningful image in a random stimulus.",
      "example": "Seeing the Virgin Mary in a piece of toast is a textbook case of pareidolia.",
      "etymology": "Greek para- (beside, alongside) + eidolon (image, form)"
    },
    {
      "term": "Parlous",
      "definition": "Full of danger or uncertainty; perilous.",
      "example": "The firm's financial position was parlous, and everyone knew it.",
      "etymology": "Middle English: alteration of perilous"
    },
    {
      "term": "Peripatetic",
      "definition": "Travelling from place to place; of the school of Aristotle, who taught while walking.",
      "example": "Her peripatetic childhood — seven schools in twelve years — gave her a facility for reinvention.",
      "etymology": "Greek peripatein — to walk up and down, from peri- + patein — to tread"
    },
    {
      "term": "Phantasmagoria",
      "definition": "A sequence of real or imaginary images like those seen in a dream.",
      "example": "The final act was a phantasmagoria of light and sound that resisted any rational explanation.",
      "etymology": "French fantasmagorie — magic lantern show, from Greek phantasma (image)"
    },
    {
      "term": "Philistine",
      "definition": "A person who is hostile or indifferent to culture and the arts.",
      "example": "He called himself a philistine proudly — he preferred football to opera and made no apologies.",
      "etymology": "Hebrew Pelishtim — the Philistines; adopted pejoratively via German student slang"
    },
    {
      "term": "Prolix",
      "definition": "Using more words than necessary; tediously lengthy.",
      "example": "The report was so prolix that the executive summary was longer than most documents.",
      "etymology": "Latin prolixus — extended, from pro- + liqui — to flow"
    },
    {
      "term": "Propinquity",
      "definition": "The state of being close to someone or something; nearness.",
      "example": "It was propinquity as much as affinity that drew them together — they worked side by side for years.",
      "etymology": "Latin propinquitas — nearness, from propinquus — near"
    },
    {
      "term": "Recondite",
      "definition": "Not known by many people; abstruse.",
      "example": "Her knowledge was recondite enough that only specialists could follow the conversation.",
      "etymology": "Latin reconditus — hidden, from recondere — to put back, conceal"
    },
    {
      "term": "Recherché",
      "definition": "Rare and exotic; far-fetched; affectedly refined.",
      "example": "His taste in wine had become so recherché that no restaurant could satisfy it.",
      "etymology": "French recherché — sought out, from rechercher — to search thoroughly"
    },
    {
      "term": "Semiosis",
      "definition": "The process by which something functions as a sign.",
      "example": "Every gesture in the film is loaded with semiosis — nothing is accidental.",
      "etymology": "Greek semeion — sign, signal"
    },
    {
      "term": "Simulacrum",
      "definition": "An image or representation; a copy so different from the original it becomes its own thing.",
      "example": "Baudrillard argued that consumer culture deals only in simulacra — images that have replaced reality.",
      "etymology": "Latin simulacrum — likeness, image, from simulare — to imitate"
    },
    {
      "term": "Sobriquet",
      "definition": "A person's nickname.",
      "example": "'Old Hickory' was the sobriquet Andrew Jackson earned from his troops.",
      "etymology": "French sobriquet — a chuck under the chin; later, a nickname"
    },
    {
      "term": "Solecism",
      "definition": "A grammatical mistake; a blunder in etiquette or behavior.",
      "example": "Using 'literally' to mean 'figuratively' is the defining solecism of the era.",
      "etymology": "Greek soloikismos — speaking incorrectly, from Soloi — a Greek colony known for bad Greek"
    },
    {
      "term": "Stentorian",
      "definition": "Loud and powerful in speech or voice.",
      "example": "His stentorian delivery filled the amphitheater without a microphone.",
      "etymology": "From Stentor — a Greek herald in the Iliad famous for his powerful voice"
    },
    {
      "term": "Tergiversation",
      "definition": "The act of evasively changing one's attitude or deserting a cause.",
      "example": "After years of tergiversation on the issue, voters stopped trusting his position entirely.",
      "etymology": "Latin tergiversari — to turn one's back, from tergum (back) + versare (to turn)"
    },
    {
      "term": "Usufruct",
      "definition": "The right to enjoy the use and advantages of another's property without destroying it.",
      "example": "The settlers were granted usufruct — they could work the land but not sell it.",
      "etymology": "Latin usus (use) + fructus (fruit, enjoyment)"
    },
    {
      "term": "Velleity",
      "definition": "A wish or desire not strong enough to lead to action.",
      "example": "His plans to write a novel were really just velleity — he never sat down to begin.",
      "etymology": "Latin velle — to wish; Medieval Latin velleitas"
    },
    {
      "term": "Verisimilitude",
      "definition": "The appearance of being true or real.",
      "example": "The novel's verisimilitude was so complete that many readers took it for a true account.",
      "etymology": "Latin verisimilitudo — likeness to truth, from verus (true) + similis (like)"
    },
    {
      "term": "Vexillology",
      "definition": "The study of flags.",
      "example": "His hobby of vexillology had made him the go-to expert for every documentary about national symbols.",
      "etymology": "Latin vexillum — flag + Greek logia — study"
    },
    {
      "term": "Weltanschauung",
      "definition": "A comprehensive conception of the world and humanity's relation to it; a worldview.",
      "example": "The novel expresses a Weltanschauung in which suffering is inseparable from growth.",
      "etymology": "German: Welt (world) + Anschauung (view, perception)"
    },
    {
      "term": "Xenophilia",
      "definition": "Attraction to foreign peoples, cultures, or customs.",
      "example": "Her xenophilia drew her to cuisines, languages, and neighborhoods most of her colleagues avoided.",
      "etymology": "Greek xenos (foreign, stranger) + philia (love, fondness)"
    },
    {
      "term": "Zeitgeist",
      "definition": "The defining spirit or mood of a particular period of history.",
      "example": "The film captured the Zeitgeist so precisely that watching it now feels like a time capsule.",
      "etymology": "German: Zeit (time) + Geist (spirit)"
    }
  ]
};