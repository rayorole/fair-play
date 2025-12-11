export type Difficulty = "Easy" | "Medium" | "Hard" | "Expert";
export type Category = "Technical" | "Precision & Control" | "Fun & Creative" | "Conditional / Funny";

export interface Challenge {
  slug: string;
  title: string;
  category: Category;
  shortDescription: string;
  fullDescription: string;
  difficulty: Difficulty;
  time: string; // e.g. "10 min"
  players: string; // e.g. "2+"
  setup: string[];
  rules: string[];
  winningCondition: string;
  image: string;
}

export const challenges: Challenge[] = [
  // --- Technical Challenges ---
  {
    slug: "crossbar-challenge",
    title: "Crossbar Challenge",
    category: "Technical",
    shortDescription: "Wie raakt de lat het vaakst vanaf de 16-meterlijn?",
    fullDescription: "De ultieme test voor precisie en traptechniek. De Crossbar Challenge is een klassieker waarbij spelers proberen de lat te raken in plaats van het net. Het vergt de perfecte combinatie van kracht en beheersing.",
    difficulty: "Medium",
    time: "10-15 min",
    players: "2+",
    setup: [
      "Plaats de bal op de 16-meterlijn (of verder voor gevorderden).",
      "Spelers mogen hun eigen aanloop bepalen.",
    ],
    rules: [
      "Schiet om de beurt.",
      "De bal moet de lat (niet de paal!) raken.",
      "Raak = 1 punt. Mis = 0 punten.",
      "Bij gelijke stand volgt een 'sudden death'.",
    ],
    winningCondition: "De speler met de meeste punten na 5 rondes (of wie als enige raakt in sudden death).",
    image: "https://i.ytimg.com/vi/trlAg37jq5w/maxresdefault.jpg",
  },
  {
    slug: "dribbelparcours",
    title: "Dribbelparcours",
    category: "Technical",
    shortDescription: "Wie is het snelst én raakt geen pion?",
    fullDescription: "Snelheid is niets zonder controle. In dit dribbelparcours test je jouw balbeheersing op hoge snelheid. Het doel is om zo snel mogelijk door de pionnen te slalommen zonder ze omver te tikken.",
    difficulty: "Hard",
    time: "10 min",
    players: "1+",
    setup: [
      "Zet 8-10 pionnen op een rij met ongeveer 1 meter afstand ertussen.",
      "Markeer een start- en finishlijn.",
    ],
    rules: [
      "Start de tijd zodra de speler de bal aanraakt.",
      "Slalom door alle pionnen heen.",
      "Voor elke omgevallen pion krijg je +2 seconden straftijd.",
      "De bal moet over de finishlijn om de tijd te stoppen.",
    ],
    winningCondition: "De speler met de snelste tijd (inclusief strafseconden).",
    image: "https://www.fussballtraining.de/wp-content/uploads/2019/05/parcours-im-fussball-1.jpg",
  },
  {
    slug: "free-kick-challenge",
    title: "Free Kick Challenge",
    category: "Technical",
    shortDescription: "Wie scoort de mooiste of meeste vrije trappen?",
    fullDescription: "Laat je innerlijke Beckham of Messi zien! In deze challenge neem je vrije trappen vanuit verschillende posities en hoeken. Het draait om curve, kracht en plaatsing.",
    difficulty: "Expert",
    time: "15 min",
    players: "2+",
    setup: [
      "Kies 5 verschillende posities rond het strafschopgebied.",
      "Indien mogelijk, gebruik een muurtje (of pionnen/vrienden).",
      "Wijs een keeper aan of hang targets in het doel.",
    ],
    rules: [
      "Elke speler neemt 1 schot van elke positie.",
      "Doelpunt = 1 punt.",
      "Doelpunt in de kruising (of via lat/paal erin) = 2 punten.",
      "De keeper mag proberen te redden.",
    ],
    winningCondition: "De speler met de meeste punten na alle 5 posities.",
    image: "https://i.ytimg.com/vi/La8pEcri9ZM/maxresdefault.jpg",
  },
  {
    slug: "jongleerwedstrijd",
    title: "Jongleerwedstrijd",
    category: "Technical",
    shortDescription: "Wie houdt de bal het langst hoog?",
    fullDescription: "Basis techniek puur sang. Wie heeft de beste controle en concentratie? Deze challenge test hoe lang je de bal in de lucht kunt houden zonder de grond te raken.",
    difficulty: "Easy",
    time: "5-10 min",
    players: "2+",
    setup: [
      "Voldoende ruimte voor elke speler zodat ze elkaar niet hinderen.",
    ],
    rules: [
      "Alle spelers beginnen tegelijk of om de beurt.",
      "De bal mag de grond niet raken.",
      "Handen en armen zijn verboden.",
      "Trucjes (rondje om de wereld, etc.) kunnen als bonus dienen (bijv. 'immuniteit' voor 1 keer stuiteren, optioneel).",
    ],
    winningCondition: "De speler die de bal als laatste nog hoog houdt.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNtsTcxqScGOmXRb6xUqzSboeWlrv-uaf4cg&s",
  },

  // --- Precisie & Controle ---
  {
    slug: "target-shooting",
    title: "Target Shooting",
    category: "Precision & Control",
    shortDescription: "Mik op specifieke plekken in het doel.",
    fullDescription: "Schieten op doel is leuk, maar schieten met chirurgische precisie is topsport. Hang objecten in het doel en kijk wie de scherpschutter van de groep is.",
    difficulty: "Medium",
    time: "15 min",
    players: "1+",
    setup: [
      "Hang een oud shirt, bidon of hoepel in de kruisingen van het doel.",
      "Of zet flessen op de doellijn.",
      "Schietpositie op de 16-meterlijn.",
    ],
    rules: [
      "Elke speler krijgt 5 schoten.",
      "Je moet het object raken voor punten.",
      "Kruising/Lastig object = 3 punten. Makkelijk object = 1 punt.",
    ],
    winningCondition: "De speler met de meeste punten na 5 schoten.",
    image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "pass-accuracy-challenge",
    title: "Pass Accuracy Challenge",
    category: "Precision & Control",
    shortDescription: "Wie kan de meeste passes in een vak spelen?",
    fullDescription: "De motor van elk team is de passing. Test je vermogen om de bal precies daar te krijgen waar je wilt, over verschillende afstanden.",
    difficulty: "Medium",
    time: "10 min",
    players: "2+",
    setup: [
      "Leg 3 hoepels of vierkante vakken (pionnen) neer op 10, 20 en 30 meter afstand.",
    ],
    rules: [
      "Speel de bal vanaf de startlijn.",
      "Probeer de bal in een vak te laten rollen/stoppen.",
      "Dichtbij = 1 punt, Midden = 2 punten, Ver = 3 punten.",
      "3 pogingen per afstand.",
    ],
    winningCondition: "Optelsom van punten na alle pogingen.",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "long-pass-challenge",
    title: "Long Pass Challenge",
    category: "Precision & Control",
    shortDescription: "Lange bal precies op de voet.",
    fullDescription: "Een goede lange bal kan een wedstrijd openbreken. In deze challenge moet je een teamgenoot bereiken die diep gaat of op afstand staat.",
    difficulty: "Hard",
    time: "10 min",
    players: "2",
    setup: [
      "Twee spelers staan 40 meter uit elkaar.",
      "Teken een cirkel van 2-3 meter rond de ontvanger.",
    ],
    rules: [
      "Geef een hoge bal naar de andere speler.",
      "De ontvanger moet de bal kunnen aannemen binnen de cirkel zonder dat deze eerst de grond buiten de cirkel raakt.",
      "Succesvolle pass en aanname = 1 punt.",
      "Wissel na 5 trappen van rol.",
    ],
    winningCondition: "Het koppel (of speler) met de meeste succesvolle lange ballen.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop",
  },

  // --- Fun & Creatieve Challenges ---
  {
    slug: "weak-foot-only",
    title: "Weak Foot Only",
    category: "Fun & Creative",
    shortDescription: "Alles met je 'chocoladebeen'.",
    fullDescription: "Tijd om je mindere been te trainen! Alles in deze challenge moet met je verkeerde been. Het ziet er misschien klungelig uit, maar het is de beste manier om tweebenig te worden.",
    difficulty: "Expert",
    time: "15 min",
    players: "2+",
    setup: [
      "Speel een penaltyreeks of een partijtje op een klein veldje.",
    ],
    rules: [
      "Raak je de bal met je goede been? Diskwalificatie of puntverlies!",
      "Verder gelden normale voetbalregels.",
    ],
    winningCondition: "Wie scoort of wint de wedstrijd puur op 'verkeerd' been.",
    image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "cross-and-volley",
    title: "Cross & Volley",
    category: "Fun & Creative",
    shortDescription: "Voorzet en scoren met een volley.",
    fullDescription: "Spectaculaire doelpunten maken is wat iedereen wil. Eén speler geeft de voorzet, de ander probeert hem in één keer uit de lucht te schieten.",
    difficulty: "Hard",
    time: "15 min",
    players: "2",
    setup: [
      "Eén speler op de vleugel met ballen.",
      "Eén speler in de 16-meter.",
      "Een keeper in het doel.",
    ],
    rules: [
      "De bal mag de grond niet raken voor het schot (volley of halve volley).",
      "Wissel na 5 voorzetten.",
      "Doelpunt = 1 punt. Mooie volley = Jury bonuspunt.",
    ],
    winningCondition: "Speler met de meeste goals.",
    image: "https://img.static-rmg.be/a/view/q75/w2000/h1333/4440255/87d35a0e74567e7c96d731cce86fc93a-jpg.jpg",
  },
  {
    slug: "trickshot-battle",
    title: "Trickshot Battle",
    category: "Fun & Creative",
    shortDescription: "De gekste en moeilijkste trickshots.",
    fullDescription: "Creativiteit kent geen grenzen. Gebruik muren, paaltjes, effect of een bijzondere hakbal. Hoe gekker, hoe beter.",
    difficulty: "Expert",
    time: "20 min",
    players: "2+",
    setup: [
      "Vrij spel: gebruik de omgeving.",
    ],
    rules: [
      "Spelers bedenken om de beurt een 'shot'.",
      "Als de bedenker het haalt, moeten de anderen het nadoen (H.O.R.S.E. principe).",
      "Als je faalt om na te doen, krijg je een letter.",
    ],
    winningCondition: "De speler die als laatste overblijft zonder volledig woord (bijv. HORSE).",
    image: "https://i.ytimg.com/vi/qZHycHI3F1Q/maxresdefault.jpg",
  },
  {
    slug: "blind-penalty-challenge",
    title: "Blind Penalty",
    category: "Fun & Creative",
    shortDescription: "Geblinddoekt een penalty nemen.",
    fullDescription: "Vertrouwen en oriëntatie zijn essentieel. Kun jij scoren zonder iets te zien? Je teamgenoot is je ogen.",
    difficulty: "Medium",
    time: "10 min",
    players: "2+",
    setup: [
      "Blinddoek voor de schutter.",
      "Bal op de stip.",
      "Geen keeper (of keeper mag niet duiken, alleen stappen).",
    ],
    rules: [
      "Draai de schutter 3 keer rond voor desoriëntatie.",
      "Teamgenoot roept instructies ('beetje naar links', 'nu!').",
      "Schiet op doel.",
    ],
    winningCondition: "Wie scoort de meeste blind penalties uit 3 pogingen?",
    image: "https://images.unsplash.com/photo-1550881111-7cfde14b8073?q=80&w=1000&auto=format&fit=crop",
  },

  // --- Conditioneel / Grappig ---
  {
    slug: "speed-dribble-finish",
    title: "Speed Dribble to Finish",
    category: "Conditional / Funny",
    shortDescription: "Sprint, dribbel en scoor zo snel mogelijk.",
    fullDescription: "Voetbal is ook conditie. Sprint over het hele veld met de bal en rond af terwijl je buiten adem bent.",
    difficulty: "Hard",
    time: "5-10 min",
    players: "2+",
    setup: [
      "Start op de eigen achterlijn.",
      "Pionnenparcours over de lengte van het veld.",
      "Doel aan de overkant.",
    ],
    rules: [
      "Tijd loopt vanaf de start.",
      "Ren/dribbel het hele parcours.",
      "Je MOET scoren aan het einde. Mis? Bal halen en opnieuw schieten tot hij zit.",
    ],
    winningCondition: "De snelste tijd wint.",
    image: "https://images.unsplash.com/photo-1486286701208-1d58e9338013?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "crossbar-punishment",
    title: "Crossbar Punishment",
    category: "Conditional / Funny",
    shortDescription: "Verlies = opdrukken!",
    fullDescription: "Een variant op de crossbar challenge, maar met consequenties. Het verhoogt de druk enorm als je weet dat je moet rennen als je mist.",
    difficulty: "Medium",
    time: "10-20 min",
    players: "2+",
    setup: [
      "Vanaf 16 meter schieten op de lat.",
    ],
    rules: [
      "Iedereen schiet 1 keer per ronde.",
      "Raak je de lat? Je bent veilig.",
      "Mis je en de rest raakt wel? Dan ben je de pineut.",
      "Straf: 10 push-ups, rondje veld rennen of trakteren.",
    ],
    winningCondition: "Er is geen winnaar, alleen verliezers (en overlevers).",
    image: "https://i.ytimg.com/vi/SacB2TSK-bs/sddefault.jpg",
  },
  {
    slug: "ball-balance-challenge",
    title: "Ball Balance Challenge",
    category: "Conditional / Funny",
    shortDescription: "Balanceer de bal zo lang mogelijk.",
    fullDescription: "Het ziet er makkelijk uit in het circus, maar op het veld? Probeer de bal in je nek, op je hoofd of op je voet te balanceren terwijl je beweegt.",
    difficulty: "Medium",
    time: "5 min",
    players: "2+",
    setup: [
      "Iedereen pakt een bal.",
    ],
    rules: [
      "Op startsignaal legt iedereen de bal in de nek (of op hoofd).",
      "Je moet blijven staan op 1 been, of een parcours lopen (moeilijker).",
      "Als de bal valt, ben je af.",
    ],
    winningCondition: "De laatste die de bal nog heeft balanceren.",
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1000&auto=format&fit=crop",
  },
];
