!(function (app) {
  "use strict";

  app.constant("CARDS", {
    "A Bad Haircut": "The perfect start to a bad hair day.",
    "A Bull Fight":
      'Also known as "la fiesta brava" (the brave festival).  A whole lot of bull..',
    "A Car Crash": '"Hey, it was an accident!"',
    "A Cheap Motel": "No charge for the cockroaches.",
    "A Crawl Space": "Where you'll find something the cat dragged in.",
    "A Dozen Red Roses": "When eleven just won't do.",
    "A Flat Tire": '"Whaddya mean, there\'s no spare?"',
    "A Full Moon":
      '"When the moon hits your eye like a big pizza pie, that\'s amore!" -Dean Martin',
    "A Haunted House":
      "Maybe if people would STOP building their dream homes on ancient burial grounds ...",
    "A High School Bathroom":
      '"Fools rush in where angels fear to tread" -Alexander Pope',
    "A Honeymoon":
      "America's top honeymoon spots are Hawaii, Niagara Falls, Las Vegas and Florida.  You can get there by air, land, sea ... or shotgun.",
    "A Locker Room":
      "Steamy atmosphere ... bawdy humor ... sweaty bodies ... HEY!  Sounds like Cable TV!",
    "A Morgue": '"Given strange eons, even death may die..." -H.P. Lovecraft',
    "A Nine Iron": "A golf club best used on short shots or large opponents.",
    "A School Bus":
      "The only thing we have to fear is fear itself. -Franklin D. Roosevelt",
    "A School Cafeteria": "Food fight!.",
    "A Sunrise":
      '"But he who kisses the joy as it flies/ Lives in eternity\'s sunrise." -William Blake',
    "A Sunset":
      "The sun never set on the British Empire ... because God didn't trust the English in the dark.",
    "A Tree House": "Your first high-rise apartment.",
    "A Used Car Lot": "One of the most honest places around.  Honest ...",
    "Abraham Lincoln":
      "1809-65, 16th U.S. president, led the Union to victory in the American Civil War and abolished slavery.  Was assassinated for his efforts.",
    "Adam Sandler":
      "1966- , American comedian, film star, and Saturday Night Live alumnus.  Genius or goofball - you make the call.",
    "Adolph Hitler":
      "1889-1945, turned Germany into a militarized dictatorship, caused the slaughter of millions and launched World War II.",
    AIDS: "Acquired Immune Deficiency Syndrome.",
    "Airline Food": "Since when is a bag of peanuts considered a meal?",
    "Al Pacino":
      '1940- , Oscar winning American actor and star of "The Godfather," "Dog Day Afternoon" and "Scent Of A Woman."  One very intense guy.',
    "Albert Einstein":
      "1879-1955, German-born American physicist and Nobel laureate who created theories of relativity.  Nice hair.",
    "Alfred Hitchcock":
      "1899-1980, British-born American director and producer of brilliant psychological thrillers.  Right, mother?  MOTHER!",
    "Alien Abductions": "There was a blinding light -and she was gone!",
    Americans:
      "How many Americans does it take to screw in a light bulb?  THAT'S NOT FUNNY!  WE'RE SUING!",
    Amputations:
      '"A SCRATCH?  Your arm\'s off!" - Monty Python and the Holy Grail.',
    "Angry Hornets": "Who put the bees in their bonnets?.",
    "Andy Warhol":
      "1928-87, American painter and filmmaker, a leader of the pop art movement.  Famous for slightly more than 15 minutes.",
    "Anne Frank":
      "1929-45, German Jewish girl who wrote in her diary about her family hiding from the Nazis.  She died in a concentration camp.",
    Antarctica:
      "Home to the lowest temperature ever recorded on earth, -126.9 F.",
    "Anthony Hopkins":
      "1937- , British actor starred in The Elephant Man, Howard's End, and, of course, The Silence Of The Lambs.  Knighted in 1992.",
    "Apple Pie": "It's as American as ... as ... something ...",
    Apples:
      "More than 40 million metric tons are produced worldwide every year.  How 'bout them apples?",
    "Armed Robbery":
      "You got your Robbery, your Armed Robbery, your Strong Armed Robbery, and, of course, the five finger discount.",
    "Assembly Lines": "Faster.  FASTER!",
    "At My Parent's House":
      "Like never-never land, you're never seen as an adult here.",
    Atlantis: "Mythological city where the folks had that sinking feeling.",
    "Atomic Bombs":
      "The Italian physicist Enrico Fermi succeeded in producing the first nuclear chain reaction in 1942, at the University of Chicago.",
    "Attack On Pearl Harbor":
      '"Yesterday, December 7th, 1941, a date which will live in infamy ..." -Franklin D. Roosevelt',
    "Austin Powers": "Fictional British man of mystery.  Yeah, bay-beee, yeah!",
    "Australian Outback":
      "Beware of dangerous temperatures, strange animals, and didgeridoos.",
    "Babe Ruth":
      "1895-1948, American baseball legend, and one heck of a candy bar!",
    Babies: "Little bundles of joy ... and who needs sleep, anyway?",
    "Baby Showers": "Baby showers may bring flowers ...",
    "Backstreet Boys":
      "The latest American pop boy band.  Which one do you think is the cutest?",
    "Bad Dogs": "Bad dog, bad dog.  What'cha gonna do?",
    Bagpipes:
      "A shrill-toned musical instrument consisting of a leather bag and pipes.  Also available in plaid.",
    "Baked Beans": "Add a little bacon, brown sugar and Beano!",
    "Baked Potatoes":
      "Hot potato, couch potato, potato head, twice baked, half-baked, ... whatever.",
    "Baking Cookies": "An experience only surpassed by eating them.",
    "Bald Eagles":
      "Known for their majestic appearance and powerful flight.  In 1782, the bald eagle was chosen as the emblem of the United States.",
    Ballerinas: "Beautiful, graceful dancers who are always on their toes.",
    Bangkok:
      "Capital of Thailand.  Location: near the Gulf of Siam.  Population: five million.  Reputation: seedy.",
    Bankruptcy: "It'll be the debt of you.",
    "Barbara Walters":
      '1931- , American television journalist and author.  Voted one of the most important women of the century by "Ladies Home Journal."',
    "Barbed Wire":
      "Wire with sharp points, used for fences.  Created havoc on the western frontier.",
    Barfing: "We didn't want to bring that up ...",
    Barney:
      'Purple dinosaur.  "I love you, you love me, blah, blah, blah ... "',
    "Bart Simpson": "Fictional animated character. Don't have a cow, man!\"",
    "Bates Motel":
      "The haunt of Alfred Hitchcock's psycho, Norman Bates ... and mother, of course ...",
    Batman:
      'How does Batman\'s mother call him home?  "Dinner, dinner, dinner, dinner, dinner, dinner, dinner, dinner - BATMAN!"',
    Bats:
      "The little brown bat consumes as many as 600 mosquitoes in an hour.  The vampire bat dines elsewhere ...",
    "Beach Parties": 'Up for some "Beach Blanket Bingo," Annette?',
    "Beanie Babies":
      "Tiny plush collectibles to love and cherish.  Don't take that tag off!",
    "Beauty And The Beast":
      "A tale as old as time ... so Disney didn't have to pay royalties.",
    Beer:
      '"Beer is proof that God loves us and wants us to be happy." - Benjamin Franklin',
    "Beer Bellies": "Just think of them as microbreweries.",
    Beethoven:
      "1770-1827, German composer, considered one of the greatest of the western world.",
    Beets: "Beats Brussels sprout.",
    "Being In Love":
      '"Love\'s like the measles, all the worse when it comes late." -Douglas Jerrold',
    "Bell-Bottoms":
      "Bell-bottoms and pea coats -who would have thought the Navy could be such a trendsetter?",
    "Ben Stiller":
      "1965-, American actor, director, and funny guy of Reality Bites, There's Something About Mary, and Meet The Parents",
    "Berlin - 1945":
      "Adolph Hitler's last stand.  Bunker ... I mean -hunker down, soldier.",
    "Big Bang Theory":
      "A cosmological theory for the origin of the universe.  An explosive idea!",
    "Big Macs":
      "T w o a l l b e e f p a t t i e s s p e c i a l s a u c e l e t t u c e c h e e s e p i c k l e s o n i o n s o n a s e s a m e s e e d b u n .",
    Bigfoot:
      "Legendary North American monster, a.k.a. Sasquatch or the Abominable Snowman.",
    "Bill Clinton":
      "1946- , popular, yet embattled, 42nd president of the United States.",
    "Bill Gates":
      "1955-, chairman and chief software architect of Microsoft Corporation.  A very rich guy.",
    "Bill Murray":
      "1950-, American actor and comedian.  Star of Ghostbusters, Stripes, Groundhog Day, and Lost In Translation.",
    Billboards: "Only 1,254 miles to Wall Drug ...",
    Bingo: '"There was a farmer, had a dog, and Bingo was his name-o ..."',
    "Bird Watching": "A hobby that relies on a wing and a prayer.",
    "Black Holes":
      "The gravitational field of a black hole is so strong that nothing, including light, can escape from its vicinity.",
    "Black Velvet":
      "Smooth, silky and sophisticated ... until you paint an Elvis on it.",
    Blizzard:
      "Extreme cold, strong winds, and a head snowfall.  Also known as Canada.",
    Blood:
      "A healthy human body contains between five and six quarts of blood.  Bloody right they do!",
    "Board Games":
      "Games have been played for thousands of years.  Some games of Monopoly just SEEM that long.",
    "Body Odor":
      "Over $1.6 billion is spent each year on antiperspirants in the United States.  That stinks!",
    "Body Piercing": "YOU STUCK WHAT?  WHERE?",
    "Body Surfing": "When you're too cheap to buy a surfboard.",
    Bonbons: "Sweets for the sweet ...",
    Bongos:
      "Small drums played with the fingers.  Used in Latin American and African music.  The choice of American beat poets.",
    "Bottled Water":
      "How much are you willing to pay for something you can get for free?",
    Boxing: "An ancient and honorable sport - not just for boys anymore ...",
    "Boy Scouts":
      "International organization for boys and young men founded in England in 1908, to foster character, citizenship and outdoor life.",
    Boyfriends:
      "\"My boyfriend's back and you're gonna be in trouble.\" - The Angels",
    "Brad Pitt": "1963- , American actor and heart-throb.",
    "Brain Surgeons":
      "Hey, it ain't brain surgery ... oh ... wait a second ...",
    Brains: "Vital to human existence and mad scientists.",
    "Britney Spears":
      "1981-, American singer.  From mouseketeer to international pop star.",
    Broadway:
      'The New York theater district.  "They say the neon lights shine bright on Broadway." -Barry Mann',
    "Bruce Willis":
      "1955- , Diehard American action movie star who has moonlighted on TV.  He also starred in Pulp Fiction, Armageddon and The Sixth Sense.",
    "Bubble Gum": "Crack it, snap it, pop it, and blow it!",
    Bubbles:
      '"Tiny bubbles, in the wine/ Tiny bubble make me feel fine ..." -Don Ho',
    Bullwinkle:
      'As in the cartoon "The Adventures of Rocky and Bullwinkle" - the moose half of moose and squirrel.',
    "Bumper Stickers": "Your personal billboard!",
    "Bungee Jumping": "Another sport hanging on by a thread.",
    "Buying A House": "If only we had the money, we could get a mortgage.",
    Cabbage: 'From the French word caboche, meaning "big head."',
    Cactus:
      "Require little care and exhibit bizarre forms.  As such, they are often mistaken for Survivalists.",
    California:
      "Sacramento is its capital, Los Angeles its largest city.  Here we come.",
    "Camping Trip": "When you just have to get s'more nature.",
    Canada: "Federated country of North America.  The Great White North - eh?",
    Canadians:
      "How many Canadians does it take to screw in a lightbulb?  Fifteen.  Fourteen to chip it out of the ice, and one to screw it in.",
    "Captain Kirk":
      'Fictional starship captain.  "Beam me up Scotty, there is no intelligent life on this planet!" - bumper sticker, 1980s',
    "Car Bombs": "Not including the Ford Pinto, of course.",
    "Car Horns": "Blow it, buddy!",
    "Carl Sagan":
      "1934-96, American astronomer and pioneer exobiologist.  Touched many lives.  Billions and billions of them.",
    "Carnival Workers": "Step right up ...",
    "Cary Grant":
      "1904-86, British-born American actor known for his debonair manner.  He can be found North by Northwest.",
    Casablanca:
      'The largest city in Morocco, and one heck of a good movie.  "Of all the gin joints in all the towns in all the world..."',
    Casinos: "Slots and slots of fun.",
    Castles:
      "Kings, queens, knights in shining armor, and little square hamburgers.",
    Caves: "Stalactites, stalagmites.  Which go up and which go down?",
    "Celine Dion": "1968-, Canadian singer whose heart will go on, and on ...",
    "Cell Phones": "Get off the phone or get off the road!",
    "Cesar Chavez":
      "1927-93, American labor leader who led the 1965 nationwide boycott of California grapes ... a bunch of sour grapes!",
    "Chain Letters":
      "Send this game to ten of your friends and good luck will follow.  Honest!",
    Chains: "Gold or iron: name your shackles.",
    "Challenger Explosion":
      '"Without a wish, without a will/ I stood upon that silent hill/ and stared into the sky ..." - Ralph Hodgeson',
    Chameleons:
      "The chameleon is a lizard that changes color when frightened -or is that a politician?",
    "Charging Rhinos":
      "How do you stop a rhino from charging?  Take away its credit cards.",
    Cheesecake: "A really tasty dish.",
    Cher: "1946- , American singer and actor, she makes aging look good.",
    Chicago: "Third largest city in the United States.  Our kind of town.",
    "Chicken Pox":
      "Infectious disease usually contracted in childhood.  Just don't scratch 'em!",
    Chickens: "From incubator to rotisserie in 56 days!  Run, chicken, run!",
    Chimpanzees:
      "Sure, they're related to us; but they don't write, and they NEVER call!",
    China:
      "The most populous country in the world.  More than one-fifth of the world's total population lives within its borders.",
    Chinatown: "International travel, just around the corner.",
    "Choir Boys": "They sound angelic, but ...",
    "Chorus Girls": "Long legs and high kicks!",
    "Cigarette Burns": "Another reason to give up smoking.",
    Cigarettes: "Mind if I smoke?",
    "Cinco de Mayo":
      "Marks the victory of the Mexican Army over the French at the Battle of Puebla, in 1862.",
    "Cindy Crawford": "1966- , American Supermodel.  What dreams are made of.",
    "Clark Gable":
      "1901-60, American film actor, noted as a romantic lead.  Frankly, my dear, he didn't give a damn.",
    "Claude Monet":
      "1840-1926, French painter, regarded as one of the leaders on the impressionist movement.",
    "Cleaning The Bathroom": "It's YOUR turn!",
    Cleopatra:
      "c. 69-30 BC, Queen of Egypt, noted for love affairs with Julius Caesar and Mark Antony, which came back to bite her in the asp.",
    "Clint Eastwood":
      "1930-, American film actor and director, past mayor of Carmel, California.  Has earned fistfuls of dollars.",
    Clowns: "They would be really funny if they weren't so darn scary.",
    Cocaine:
      "Alkaloid obtained from leaves of the coca plant and used as a local anesthetic and abused as a drug.",
    Cockroaches:
      "Annoying insects that can survive a nuclear war.  Fortunately, they can't survive the heel of your shoe.",
    Coconuts:
      '"Put the lime in the coconut, and drank them both up." -Harry Nillson',
    "Cold Pizza": "The breakfast of champions.",
    Communists:
      '"From each, according to their ability, to each according to their need."  I need a new Ferrari.',
    Commuting: "The daily grind.  And we're not talking coffee.",
    "Computer Hackers": "We didn't mean to shut down the entire government ...",
    Computers:
      "British mathematician Charles Babbage worked out the principles of the modern digital computer in the late 1800s.",
    Confucius:
      "c. 551-479 BC, K'ung Fu-Tzu, Chinese philosopher and one of the most influential figures in Chinese history.",
    "Conspiracy Theories": "Oh, that was just a coincidence!",
    "Construction Workers": "Hard hats -hard bodies.",
    "Corn On The Cob":
      "A grain native to the Americas, corn was a staple food for many centuries before corn holders were invented.",
    Corvettes:
      "In 1953, Chevrolet introduced the Corverre, the first mass-produced sports car with a fiberglass body.  The perfect cure for a midlife crisis.",
    "Count Dracula": '"I vant to suck your blood!"',
    "Country Music":
      'Encompassing styles such as western swing, honky-tonk, bluegrass and rockabilly.  Should mention a pickup truck and a dog named "Bo."',
    "Cow-Pies":
      'When dried, these "cow chips" are hurled discus-like over great distances.  It\'s true.',
    "Crazy Horse":
      "1849?-77, chief of the Oglala Sioux.  A leader in the Native American resistance to the westward expansion on the United States.",
    "Creamed Corn": "Eat it, it's good for you.",
    "Crystal Balls": "I see a Green Apple card in your future.",
    Cuba:
      "Island republic in the Caribbean, just south of Florida.  Beans and rice never tasted so good.",
    Cults: "They seemed nice ...",
    "Custer's Last Stand": "1866, Little Big Horn.  Very big mistake.",
    Dandruff: "Dry skin on your scalp?  Sounds a bit flaky.",
    "Danielle Steel":
      '1947- , Prolific romance novelist. "Suddenly, Stephanie spotted Lance on the beach ..."',
    "Danny DeVito":
      "1944- , American television, motion-picture actor, and director.  Star of Taxi, Romancing The Stone, Twins, and Get Shorty.",
    "Dark Alleys": "Don't go there!",
    "Darth Vader":
      "\"Luke ... (wheeze) .. I am ... (wheeze) ... your father ... and you don't write, you don't call ... NOTHING.\"",
    Dating: "First stage of the human mating ritual.",
    "David Letterman":
      "1947- , American television entertainer and talk-show host.  And ... the Number One reason to watch him (drum roll, please): TOP TEN LISTS!",
    "Daytime TV":
      "Soap operas, game shows, talk shows and reruns ... is this a great country or what?",
    "Death Valley":
      "Arid, desolate and hellish region of California.  Named by a survivor of an attempted 1849 crossing.",
    "Deer Hunting": "Nooo!  Nooooo!  Not BAMBI'S MOTHER!",
    "Demi Moore":
      "1962-, American actor in St. Elmo's Fire, Ghost and GI Jane.",
    Democrats:
      "Their symbol is the donkey, or ass.  Insert your own joke here.",
    "Denzel Washington":
      "1954- , American actor known for his powerful roles in such movies as Cry Freedom, Malcolm X, and Mississippi Masala.",
    Detroit:
      "The Motor City is the world's foremost automobile manufacturing center, and the tenth largest city in the U.S.",
    Diamonds:
      "The hard fact: they are just highly refractive crystalline allotropes.",
    Discos: 'Where you go to catch "Saturday Night Fever."',
    "Discovering America":
      "1492, Christopher Columbus discovered that America was discovered centuries before he arrived.",
    Disneyland:
      "You've just won the \"Apples to Apples(R) Grand Masters Tournament.\"  Where're you gonna go?",
    Divorce: "It's a trial separation that goes to trial.",
    Doctors:
      'Over twenty years of education and they\'re still "practicing" medicine?',
    "Doing The Dishes": "You wash, I'll watch.",
    "Dolly Parton":
      "1967- , American singer, songwriter, and actor.  Known as much for her personal style as for her successful career.",
    "Dr. Kevorkin":
      "1928- , Controversial advocate of doctor-assisted suicide.",
    "Dr. Seuss":
      '1904-1991, Theodor Suess Geisel , the cat who came up with "The Cat in the Hat."',
    "Driving Off A Cliff": "It was either that or hire someone to do my takes.",
    "Duct Tape": "All-purpose, ... all the time ...",
    "E-Mail": "You've got JUNK mail!",
    "Ear Wax":
      "A waxy, yellowish substance that protects the ear from dust, bacteria, and from hearing things you don't want to hear.",
    Earthquakes:
      "The Richter scale is named after the American seismologist Charles Richter.  Did the earth move for you?",
    Earwigs:
      "Nocturnal insects with abdominal pincers. Nothing to do with ears or wigs.",
    "East Coast":
      "From New England to Florida.  They're not like folks 'round here ...",
    "Eddie Murphy":
      "1961-, American comedian, actor, and producer.  Best known for his work in 48 Hours, Beverly Hills Cop and on Saturday Night Live.",
    "Eleanor Roosevelt":
      "1884-1962, first lady, social activist, author, lecturer, and U.S. representative to the United Nations.",
    "Electric Eels":
      "Slippery and slimy snakelike fishes that emit electrical charges.  The shocking truth!",
    Electricity:
      "The repulsive or attractive force between two stationary bodies.  No problem unless one of those bodies is yours.",
    Elephants:
      "The largest living land mammal, with two species: Indian and African.  Not counting Dumbo, there are no American elephants.",
    "Elizabeth Taylor":
      "1932- , American actor, noted for her lush beauty, emotional performances and multiple husbands.",
    "Elvis Presley":
      "1935-77, American singer and actor and the king of rock-and-roll.  His death left the music world all shook up.",
    "Emily Dickinson":
      "1830-86, American poet, whose lyrics are psychologically astute treatments of love, death, and immortality.  So there.",
    "Ernest Hemingway":
      "1899-1961, American novelist and short-story writer, whose macho style is crisp, laconic and understated.",
    Europe: "The Old Country ... except to people who live there.",
    Exorcism: "To ceremoniously expel an evil spirit.",
    Eyes: "Light-sensitive organ of vision in animals.  See?",
    "Falling Down":
      '"What we call failure is not the falling down, but the staying down." -Mary Pickford',
    "Family Reunions":
      "Just to remind you why you moved away in the first place ...",
    "Family Vacations":
      "Dad?  Dad?  Are we there yet?  Are we there yet?  Are we?  Huh?  Dad?",
    "Family Values": "Often said but seldom understood.",
    "Fast Food": "You want fries with that?",
    Feathers: "Which weighs more, a pound of feathers or a pound of rocks?",
    Feminists:
      "Political and social activists who support selected women's causes.",
    "Festering Wounds": "Quit picking at that!",
    "Fidel Castro":
      "1927-, Cuban revolutionary and Communist dictator since 1976.  He earned a PhD in law in 1950.",
    Firefighters:
      'Emperor Augustus instituted a corps of fire-fighting "watchmen" in 24 B.C.  Nero, on the other hand, fiddled while Rome burned.',
    Firestorms:
      "Some severe wildfires require more than 10,000 firefighters.  And, wouldn't ya know it, some idiot parked in front of the hydrant!",
    Fireworks:
      "Includes firecrackers, Roman candles, and bottle rockets.  It's all fun until someone loses an eye ... and a nose ... and an arm ...",
    "First Man On The Moon":
      'July 20, 1969.  "That\'s one small step for a man, one giant leap for mankind." -Neil A. Armstrong',
    Flipper:
      "American television dolphin of the 1960's ... like Lassie, only wetter.",
    "Fly Fishing": '... if you can"t catch flies any OTHER way ...',
    "Flying Monkeys":
      'The reason why "The Wizard Of Oz" still gives us nightmares.',
    "Forest Fires": '"Only YOU can prevent forest fires."  The heat is on!',
    "Fort Knox":
      "American military post in Kentucky, containing the greater part of the gold reserve of the U.S. government.",
    "Fourth Of July":
      '"Independence Day" in the United States.  "Thank Goodness We Got Rid of Them Day" in Britain.',
    "Frank Lloyd Wright":
      "1867-1959, pioneering American architect.  Considered one of the greatest designers of the 20th century.",
    "Frank Sinatra":
      "1915-98, the greatest American pop singer of his generation, award winning film and television actor.  Do-be do-be do, baby.",
    Freckles:
      "No matter what they tell you, freckles won't grow together to form a great-looking tan.",
    Freedom: "Express yourself!",
    "French Wines": "The perfect complement to an overpriced meal.",
    "Fresh Water Pearls": "String them along ...",
    Friction:
      "Resistance to the motion of a body in contact with another body ... any body will do.",
    "Fund Raising":
      "Hello ... my name is Jonathan, would you like to buy some fruit, magazines, candy bars, wreaths, pizzas ... ?",
    Funerals:
      '"He who dies with the most toys is, nonetheless, still dead." - Anonymous',
    Fur: "The characteristic covering of mammals and people with money.",
    Fuzz: "Lint ... Policemen ... Whatever ...",
    "Gall Bladder":
      "Where excess bile is stored.  Stored for what, we don't know.",
    "Gang Members":
      "\"When you're a Jet, you're a Jet all the way...\" -West Side Story",
    "Garrison Keillor":
      "1942- , American author and radio star.  He shares the Midwest perspective with 2.6 million listeners each week on A Prairie Home Companion.",
    "Garth Brooks":
      "1962- , American country music singer and songwriter.  He's got friends in low places.",
    Geishas:
      "Japanese women training in traditional singing, dancing, and entertaining.  Of course, you would never recognize them without all that make-up.",
    "Gen. George S. Patton":
      "1885-1945, the commander of the American Third Army during World War II. -a.k.a. Olf Blood and Guts",
    "Genetic Engineering":
      "What DO you get when you cross a monkey with a potato?",
    "George W. Bush":
      "1946- , 43rd president of the United States.  The second time ever that the son of a former president was elected to the office.",
    "George Washington":
      "1732-99, First President of the United States.  He chopped down a cherry tree to make false teeth, or something like that ...",
    "Georgia O'Keeffe":
      "1887-1986, American abstract painter known for her still life compositions.  Her skull paintings prove that beauty is more than skin deep.",
    "Getting A Hug": "Hmmmm ... nice.",
    "Ghost Towns": "Population unknown.",
    Ghosts:
      "Nonmaterial embodiments or the essence of organisms (mostly human beings).  Quite spirited",
    "Giant Squid": "Going fishing for giant squid?  Nautilus I have to ...",
    "Gila Monsters":
      "The largest, and only poisonous lizard found in the United States.",
    "Gingko Trees":
      "An Asiatic tree, Gingko biloba, known for its fan shaped leaves.  We can't remember what it's good for.",
    Ginseng:
      "Common name for plants of the ginseng family, source of a stimulant and a supposed aphrodisiac.",
    "Girl Scouts":
      "I'll take six boxes of Thin Mints and three of the ... you know, the kind with the peanut butter.",
    Girlfriends: "Girlfriend - let's talk!",
    "Giving A Hug":
      '"One may give without loving; but none can love without giving." -Anonymous',
    Glaciers: "It'll be a cold day when we see THEM again ...",
    "Glazed Donuts": "If you're going to be late, take a box of donuts.",
    "Global Warming": "Is it hot in here, or is it just me?",
    "Going To Church": "Weddings, funerals, bazaars, and bingo!",
    "Going To Grandma's":
      '"Grandmother, what big teeth you have!" -Little Red Riding Hood',
    "Going To School": "Secondary education?  It's elementary.",
    "Going To The Dentist": "This won't hurt a bit ...",
    "Going To The Gym": "No pain, no gain.",
    "Gold Chains": "The more, the better.",
    Goldfish: "The pet, the carnival prize, or the snack cracker.",
    "Golf-Ball-Sized Hail":
      "... which is almost as impressive as hail-sized golf balls ...",
    "Grace Kelly":
      "1929-82, Princess of Monaco and American film star of Dial M for Murder, Rear Window, and To Catch a Thief.  Always chic, always elegant.",
    Graffiti: 'Art in a can.  We"re drawn to it.',
    "Grass Skirts": "Hula loves you, baby?",
    "Grave Robbers": "Famous for their bodies of work.",
    Gravity:
      "In 1684, the law of gravitation was formulated by English physicist Sir Isaac Newton, who recognized the gravity of the situation.",
    Greenpeace:
      "International organization dedicated to preserving the Earth's natural resources, and its diverse plant and animal life.",
    "Gym Teachers":
      '"I am a Physical Education Teacher.  Call me a gym teacher again and you can drop and give me ten!"',
    "Hair Transplants": "Oh, it looks so natural ...",
    Hairballs: "Cough it up, kitty ...",
    Halloween:
      "October 31, the eve of All Saints' Day, celebrated with costumes, treats, and scary stuff.  Not just for kids any more!",
    "Hand Grenades": "Close only counts in horseshoes and hand grenades!",
    Handcuffs: '"You have the right to remain silent..."',
    Handguns:
      "Source of a never-ending controversy as to how to get them out of the hands of the bad guys and into the hands of the good guys.",
    Hangnails: "We've fingered the cause of the pain.",
    "Having A Baby":
      '"Rock-a-bye baby, on the tree top ..." Who would put a kid on a tree top?',
    "Having An Operation": "What a cutup!  A real stitch.",
    Hawaii:
      "The eight islands that make up America's 50th state entered the Union on August 21, 1959.",
    "Helen Keller":
      "1880-1968, American author and lecturer who overcame deafness and blindness with the help of her companion, Anne Sullivan.",
    Hiccups: 'How do you, hic, get em?  How do you, hic, get rid of "em?',
    "High School Football": "The whole ten yards!",
    "High School Reunions": 'See also: "root canal, as fun as ..."',
    "Hillary Rodham Clinton":
      "1947- , New York Senator, lawyer, and former American First Lady.",
    "Hiroshima - 1945":
      '"I am become death, the destroyer of worlds" - J. Robert Oppenheimer, on the detonation of the first atmoic bomb.',
    HMOs: "Heath Maintenance Organizations.  Here's to your health ...",
    Hockey:
      "Did you hear about the big fight last night?  All of a sudden, a hockey game broke out!",
    Hollywood:
      "Motion picture and television industry center of the world.  Hooray for Hollywood!",
    "Homeless Shelters":
      "In the United States, nearly three-quarters of the help for the homeless comes from the private sector, mostly from church soup kitchens.",
    "Homer Simpson":
      "Fictional cartoon character created by Matt Groening.  D'oh!",
    Homework: "Something to do during comercials.",
    Hooligans: '"Hey!  Kids!  Get outta my yard!"',
    "Horseback Riding": "WHOAAA!!!",
    "Hot Lava": "There's no better way to serve it.",
    "House Guests":
      "How many visitors does it take to drive you crazy?  Go on -take a guest!",
    Hummingbirds:
      "Why do hummingbirds hum?  Because they don't know the words ... ... da-dum, dum!",
    "Humphrey Bogart":
      '1899-1957, American film actor, starred in such classics as The Maltese Falcon and Casablanca.  "Here\'s looking at you kid."',
    Icebergs:
      "May reach 300 to 500 feet above the oceans's surface.  Ask the captain of the Titanic about the 90 percent that's UNDER water.",
    "In A Coma":
      "A deep, prolonged state of unconsciousness ... sometimes you just feel that way.",
    Incense: "Incense is better than no sense at all.",
    India:
      "The world's seventh largest country by area, but the second most populous, with one billion people.",
    "Indiana Jones":
      "Fictional archeologist and action hero.  Proof that a good hat and a whip can take you a long way.",
    "Industrial Revolution":
      'The first Industrial Revolution occurred in Great Britain at the end of the 1700s.  The second came with the invention of the "Clapper."',
    Infomercials:
      "One of these days, one of them may even say something informative.",
    "Inside The Sun":
      "Consisting mostly of hydrogen, the temperature reaches almost 16,000,000 K (about 29,000,000 F).",
    Intellectuals: "They think they're so smart.",
    Ireland:
      "Island of the British Isles, west of Great Britain.  Known for its distinctive traditional dance and music.",
    Israel:
      "Located on the Mediterranean, the state of Israel was reated by a 1948 U.N. mandate.",
    Italy: "European Republic, shaped like a boot - a very fashionable boot.",
    "Jack Nicholson":
      '1937- , American motion-picture actor of "Chinatown," "Terms Of Endearment" and "The Shining."  He\'s as good as it gets!',
    "Jack The Ripper":
      "Accused of murdering six women in 1888, and suspected in other murders.  Still at large.",
    "Jackie Chan":
      '1954-, actor, director, martial artist.  Screen name, Sing Lung, means "Becoming the Dragon."  That\'s "MISTER Becoming the Dragon" to you!',
    "Jacques Cousteau":
      "1910-97, French naval officer, marine explorer, and author.  Best known as a documentary filmmaker.",
    Jamaica:
      "Third largest island of the Greater Antilles, south of Cuba.  Tropical climate, reggae music, and jerk cooking.",
    "James Bond":
      "Fictional British secret agent created by English author Ian Fleming.  Shaken, but never stirred.",
    "James Dean":
      '1931-55, American actor of film, stage, and television.  His role in Rebel Without a Cause helped define "cool."',
    Japan:
      "An Asian constitutional monarchy.  The capital city is Tokyo.  Let's see ... sushi, Godzilla, earthquakes ...",
    Japanese:
      "How many Japanese does it take to screw in a light bulb?  Who needs light bulbs when you've got OUR new technology!",
    "Jelly Beans": "Well, as long as we HAVE to eat our vegetables ...",
    "Jennifer Lopez":
      "1970-, American singer and actor of Selena, Money Train, and Maid In Manhattan.",
    "Jerry Springer":
      "1944- , controversial talk-show host. Don't those people know that millions of us are watching?",
    "Jesse Jackson":
      '1941-, American civil rights leader.  Named to "The Gallup List of Ten Most Respected by Americans" for ten years.',
    "Jesse Ventura":
      "1951-, wrestler, Navy Seal, and former governor of Minnesota.  Author of I Ain't Got Time To Bleed.",
    "Jim Carrey":
      "1962- , Canadian comedian and actor.  Famous for outrageous faces, and dumb and dumber characters.",
    "Jimmy Stewart":
      "1908-97, America's favorite self-image.  Mr. Smith Goes to Washington, Rear Window, Vertigo, and It's a Wonderful Life, ... and it probably was.",
    "Joan Of Arc":
      "1412-31, patron saint of France who decisively turned the tide of the Hundred Years' War, which really burned her up.",
    "Jodie Foster":
      "1962- , American actor began her career on Mayberry, R.F.D. and went on to win Academy Awards for The Accused and Silence Of The Lambs.",
    "John F. Kennedy":
      '1917-63, 35th president of the US. "Ask not what your country can do for you; ask what you can do for your country."',
    "John Glenn":
      "1921- , The first U.S. astronaut to orbit the earth in 1962, and a U.S. Senator.  Never too old to shoot for the moon!",
    "John Philip Sousa":
      '1854-1932, American bandmaster and composer of Stars and Stripes Forever.  Known as "The March King."',
    "John Travolta":
      '1954 - , American actor of "Welcome Back, Kotter," "Grease," "Saturday Night Fever" and "Pulp Fiction."  That man can dance!',
    "Judge Judy":
      'Ms. Sheindlin presides over real-life cases on this TV courtroom show.  "I\'m the boss, applesauce!"',
    "Julia Roberts":
      "1967-, American actor and Pretty Woman.  Also starred in Steel Magnolias, My Best Friend's Wedding, and Erin Brockovich.",
    "Junk Mail":
      "Contests, credit card applications, solicitations and political ads.",
    Jupiter:
      "Story Problem: If one year on Jupiter equals 11.86 Earth years, and one day equals 9.92 Earth hours, how many Earth hours are there in a Jupiter year?",
    "Katherine Hepburn":
      "1909-2003, American actor and winner of four Academy Awards.  She starred in such classics as The African Queen.",
    "Keanu Reeves":
      '1964- , American actor of Bill And Ted\'s Excellent Adventure, The Matrix and Speed.  Keanu means "cool breeze over the mountains."',
    "Killer Whales": "Black and white predatory whales.  Boy, can they sing!",
    Kilts: "If Mel Gibson can wear one, so can you.",
    "King Arthur":
      "Legendary British king best known for Camelot and round tables.",
    "King Henry VIII":
      "1491-1547, King of England, and founder of the Church of England.  Six wives, no waiting.",
    "Knock-Knock Jokes": "Who's there?",
    "Labor Unions":
      "Look for the Union label.  And, while you're at it, look for Jimmy Hoffa ...",
    "Large Mouth Bass": "Oh, please, let it not sing ...",
    "Las Vegas":
      'The first casino opened in Las Vegas in 1946.  Las Vegas ... or it that Lost Wages?"',
    Lawyers: "We'd throw some joke in here, but we're afraid of getting sued.",
    "Leaf Blowers": "Toro, Toro, Toro!",
    Leather: "Animal hide.  Leather you like it or not.",
    Leeches:
      "Any mention of lawyers, agents, or reporters would be FAR too easy ...",
    Lemons:
      "When life gives you lemons, make lemonade ... or, in the case of a car, take it back.  There's a law, you know!",
    "Lenin's Tomb":
      "We'd love to visit Lenin's Tomb, but it's probably just another communist plot.",
    "Leonardo Da Vinci":
      "1452-1519, Florentine artist, sculptor, architect, engineer, scientist, and all-around smartypants.",
    Lightning:
      "Electrical discharge between rain clouds, or between a rain cloud and the earth, or between a rain cloud and an idiot with a kite.",
    "Loan Sharks": 'As dangerous as "Jaws", but without the charisma.',
    Lobster:
      "Crustaceans closely related to freshwater crayfishes.  Market price.",
    "Local Police": "They know who you are and they know where you live.",
    "Log Cabins":
      "Among the many Americans born in log cabins were Preisdents Harrison, Lincoln, and Grant.  Just pass the maple syrup.",
    Lollipops: "Sucker!",
    London:
      "Founded even before the Romans reached England's shores, now the capital of Great Britain.",
    "Looking For A Job": "Will work for fool ...",
    "Los Angeles": "LA LA Land.",
    "Losing Your Job": "They just didn't understand me!",
    "Lucille Ball":
      "1911-89, American actor and comedian.  You love Lucy?  I love Lucy.",
    "Machine Guns":
      "Automatic, rapid-fire, repeating weapons.  The Gatling gun was used as early as the American Civil War.",
    "Mad Cow Disease":
      "Degenerative brain disorder in cattle.  The reason they don't know enough to come in out of the rain?",
    "Madame Curie":
      '1867-1934, French chemist and physicist who won a Nobel Prize for her work on radiation.  Fun fact: A "curie" is a unit of radioactivity.',
    Madonna:
      "1958-, American singer, songwriter, actor, writer, and 1980s pop icon.  Blond Ambition.",
    "Magic Tricks": '"Nothin\' up my sleeve ..." - Bullwinkle',
    "Mahatma Gandhi":
      "1869-1948, Indian leader and philosopher who preached nonviolence.  Was assassinated for his efforts.",
    Manhattan: "I'll take Manhattan!.",
    "Mardi Gras":
      "Fat Tuesday marks the final day before the Christian fast of Lent, a 40-day period of self-denial and abstinence.  SO LET'S PARTY!",
    "Marilyn Monroe":
      "1926-62, American movie star, pinup and sex symbol.  Just ask the Kennedys.",
    "Mark Twain":
      "1835-1910, American writer and humorist, best known for the adventures of Tom Sawyer and Huckleberry Finn.",
    Marriage:
      "If love and marriage go together like a horse and carriage ... who's the horse?",
    Mars: "The fourth planet from the sun.  Where men come from.",
    "Martha Stewart":
      "1941-, television personality, magazine editor, and author.  Domestic arts are her stock-in-trade.",
    "Martin Luther King, Jr.":
      "1929-68, American civil rights leader and advocate of nonviolent resistance.  Was assassinated for his efforts.",
    "Meat Cleavers": "No relation to Ward, June, or the Beaver ...",
    Meatloaf: "Large and intimidating -the dish not the singer!",
    "Meg Ryan":
      "1961- , American actor and girl-next-door star of When Harry Met Sally, Sleepless In Seattle, and You've Got Mail.",
    "Mel Gibson":
      "1956-, Australian actor.  Known for The Road Warrior, Braveheart and :eatha; Weapon I, II, III, IV ...",
    Men: "REAL Men.",
    "Men In Black":
      "We're not here.  You don't see us.  The government did NOT send us.",
    "Meryl Streep":
      "1959-, accomplished American actor, two-time Oscar winner, with over a dozen Academy Award nominations.",
    Mexico:
      "Federal republic in North America.  The capital and largest city is Mexico City.",
    Mice: "\"The best-laid schemes o' mice an' men ...\" -Robert Burns",
    "Michael Jackson":
      "1958-, American popular singer, dancer, and songwriter.  Welcome to Neverland.",
    "Michael Jordon":
      "1963- , American professional basketball legend, led Chicago to six world championships.  No bull.",
    Michelangelo:
      "1475-1564, inspired Italian sculptor, architect, painter, and poet.   A REAL Renaissance man.",
    "Michelle Pfeiffer":
      "1957-, American actor whose career began with Grease 2.  She'd like us to forget that but remember her Oscar nominations.",
    Microsoft:
      "A leading American software company.  We'd say more but we don't want to monopolize your time ...",
    "Midlife Crisis":
      '"Here comes your 19th nervous breakdown ..." -The Rolling Stone',
    "Mike Tyson": "1966- , American heavyweight boxer.  Lend him your ear ...",
    "Miles Davis":
      "1926-91, innovative, influential, and respected American jazz trumpter player and band layer.",
    Milk:
      "Three glasses a day will give you ... the gratitude of the dairy industry.",
    "Milk Duds":
      "Chocolate and caramel candy balls.  Tooth extractions at no extra charge!",
    Mirrors: "And now, a moment for reflection.",
    Mold:
      "Fuzzy growth produced on organic matter by several types of fungi.  Particularly attracted to students' refrigerators",
    Money:
      '"The best things in life are free/ But you can give them to the birds and bees/ Just give me money ..." -Bradford and Gordy',
    Morticians: "Why do you hang around with THOSE stiffs ...?",
    Mosquitoes: "They suck.",
    Motorcycles: "The air in your hair and bugs in your teeth.",
    "Mount Rushmore":
      "Memorial carved into the side of the Black Hills in South Dakota.  Heads above all other monuments.",
    MTV: '"Video killed the radio star." -The Buggles',
    Mud: "Water.  Dirt.  You do the math.",
    Mudslides:
      "Chocolate drink or natural disaster ... both occur frequently in California.",
    "Muhammad Ali":
      '1942- , American heavyweight boxing champion.  "Floats like a butterfly, stings like a bee."',
    Musicals:
      "South Pacific, The King and I, The Sound of Music, A Chorus Line, Cats, Rent ...",
    "My 16th Birthday": "Dad, can I have the keys to the car, please?",
    "My Bank Account":
      "Speaking of theoretical mathematics and unreal numbers ...",
    "My Bathroom":
      '"The bathroom was drenched with their splashings" -Aldous Huxley',
    "My Bedroom":
      '"No one knows what goes on behind closed doors." -Charlie Rich',
    "My Body": "Mine is a temple.  Specifically, the Temple of Doom ...",
    "My Boss": "... is an idiot.  You know it; we know it.",
    "My Dreams": '"What dreams may come ..." -Shakespeare\'s Hamlet',
    "My Family":
      "They'll drive you nuts.  As long as you do the same to them, it's all even.",
    "My First Kiss":
      "Sparks were flying.  Of course, that could have been the braces ...",
    "My Friends": "With friends like there, who needs enemies?",
    "My Future": '"The future\'s so bright, I gotta wear shades ..." -Timbuk-3',
    "My Hair": "Hair today, gone tomorrow ...",
    "My High School Prom":
      "As if adolescence isn't awkward and painful enough ...",
    "My Job": "Love it or leave it.",
    "My Love Life": '"All you need is love ..." -The Beatles',
    "My Mind": "It's a terrible thing to waste.",
    "My Neighborhood": '"Please, won\'t you be my neighbor?" -Fred Rogers',
    "My Past": "What's past is past ... unless you're a politician ...",
    "My Personality":
      '"I\'m good enough, smart enough and, gosh darn it, people like me." -Stewart Smalley played by Al Franken',
    "My Refrigerator": "It's a science experiment!",
    "Napoleon Bonaparte":
      "1769-1821, Emperor of France.  Met his Waterloo at the Battle of Waterloo.  The name should have tipped him off ...",
    NASCAR:
      "Stock car racing began after World War II, breaking records for speed and for the number of advertisements on a single jacket.",
    "Neil Simon":
      "1927-, American producer, playwright, and screenwriter of The Odd Couple, Biloxi Blues, The Sunshine Boys, California Suite, and many more.",
    "New Orleans": "The Big Easy.",
    "New Shoes": "Make you feel like dancing ...",
    "New York City":
      "America's most populous city.  So good, they named it twice.",
    "Niagara Falls":
      "Niagara Falls was formed about 12,000 years ago, when glaciers retreated north, and honeymooners approached from the south.",
    "Nicholas Cage":
      "1964- , American actor known for his edgy characters in Leaving Los Vegas, Raising Arizona, and Moonstruck.",
    Ninjas: "Teenage mutant turtles need not apply.",
    "Nobel Peace Prize":
      "Established by Alfred Nobel. Swedish industrialist and inventor of dynamite.  Led to an explosion of peace efforts.",
    "Noisy Neighbors": "WHAT?  I CAN'T HEAR YOU!",
    "Normal Rockwell":
      "1894-1978, American painter, illustrator and all-around interpreter of small town American life.",
    "Nuclear Power Plants":
      '"You\'ve turned a potential Chernobyl into a mere Three Mile Island." -Montgomery Burns, "The Simpsons"',
    NYPD:
      "The New York Police Department.  They're so good, they have their own TV show.",
    "Oil Spills":
      "The American oil tanker, Exxon Valdez, went aground in Prince William Sound, Alaska, Mar. 24, 1989.  Slick Move.",
    "Olive Oil":
      'Derived from fresh ripe fruit, which contain about 20% oil.  Better than "olive" the other oils.',
    "On-Line Shopping":
      "Enter your credit card number now.  This is a secure site ... Sure it is ...",
    "Oprah Winfrey":
      "1954- , Television talk show host, actor and all-around American success story.",
    "Oral Surgery": "You said a mouthful.",
    Oranges: "Face it ... nothing rhymes with orange.",
    Oxygen:
      "Oxygen was discovered in 1774.  You'd think someone would have noticed it earlier.",
    "Pablo Picasso":
      "1881-1973, Spanish painter and sculptor, one of the greatest artists of the 20th century.  If only he could draw eyes ...",
    Parenting:
      "The process of discovering you are becoming just like YOUR parents.",
    "Paris, France":
      "The governmental, cultural and gastronomic capital of France.  Or the world.  Just ask the French.",
    "Paying Bills": 'Also known as "Debt Restructuring."',
    "Paying Taxes": "Death or Taxes?  Do we have to choose right away?",
    Penguins:
      "Flightless, aquatic birds that reside in the Southern Hemisphere.  All dressed up and no place to go.",
    "Picking Your Nose": "Noses run in our family.",
    Pigeons:
      "Birds with small heads, short necks, stout bodies, and an incredible attraction to statues.",
    Pigs:
      "Domesticated mammal of the swine family.  Thaaa ... thaaa ... that's all, folks!",
    Piranha:
      "Carnivorous fish found in rivers of South America.  When you feel like a bite ...",
    Pirates:
      '"Yo, ho, yo, ho, a pirate\'s life for me ..." - Pirates of the Caribbean',
    "Pit Bulls":
      "Any of several crossbreeds of bulldogs with terriers.  Or, several radio hosts we could mention.",
    "Plane Crashes": "Statistically safer than driving ... unless you crash.",
    Plastic:
      "Giant molecules of organic polymeric materials.  Bags and bags of the stuff.",
    "Playing Chess":
      "Has tantalized many of the world's greatest minds for almost 14 centuries.  It just confuses the rest of us.",
    "Poison Ivy": "Itching for a walk in the woods?",
    Pokemon:
      "Cute cartoon monsters you gotta catch.  What you do with them is up to you ...",
    "Pond Scum":
      "Simple organisms that carry out photosynthesis ... or spammers.",
    Poodles: "The only breed that is better groomed than their owners.",
    Popcorn: "Air poppers are for air heads ... I say bring on the butter!",
    "Porsche Boxster":
      "A two-seat, six cylander roadster - elegant design and superior drivability.",
    "Postal Workers":
      '"Neither snow, nor rain, nor heat, nor gloom of night, stays these couriers from the swift completion of their appointed rounds."',
    "Power Tools":
      '"More power!  More power!  Argh!  Argh!" -Tim, the Tool Man, Taylor, "Home Improvement"',
    "Prince Charming": "The perfect man ... mythical, of course.",
    "Princess Di":
      '1962-97, beloved English Princess who died in an auto crash.  "Good-bye England\'s Rose ..." -Elton John',
    "Pro Wrestling": "They're just faking it.  But then, so are we.",
    Psychiatrists: '"And how do you feel about that?"',
    Psychics:
      "The Psychic Friends Network went bankrupt in 1997.  Perhaps they should have seen it coming ...",
    "Public Radio":
      '"Good morning . . . . . This morning . . . . . . . . . . . .we have Wolfgang . . . Amadeus Mozart . . . for your listening pleasure . . ."',
    "Puff Daddy":
      '1971- , American rap artist.  "I\'ll be Missing You" shot him to stardom; no pun intended.',
    "Pulling Weeds": "It's either this or chemical warfare.",
    "Pumping Iron": "When a great weight needs to be lifted.",
    Pushups: "Exercises, a type of bra, or the ice cream treat.",
    Pyramids:
      "Built by ancient civilizations, found mainly in Egypt, Guatemala, Honduras, Mexico and Peru.  Probably the result of some pyramid scheme.",
    "Quentin Terantino":
      "1963- , Groundbreaking American director and actor.  Nice movies, but not nearly enough blood.",
    Quicksand: "Just don't let it get you down.",
    Ragweed: "A weed of the genus Ambrosia.  Nothing to sneeze at.",
    Rain:
      '"When the rain comes, they run and hide their heads; they might as well be dead." -The Beatles',
    Rainbows:
      '"Someday they\'ll find it/ The Rainbow Connection/ The lovers, the dreamers and me ..." -Kermit the Frog',
    Rappers: "PAENTAL ADVISORY EXPLICIT CONTENT Hasn't seemed to hurt sales...",
    "Reading A Good Book": "So many books, so little time.",
    "Recreational Vehicles":
      "If they're trying to get away from it all, why are they taking it all with them?",
    Recycling:
      "More than one million tons of aluminum are NOT recycled each year.  Where do you throw your cans?",
    "Red Raspberries": "Worth a few scratches.",
    Rednecks: '"You might be a redneck if ..." -Jeff Foxworthy',
    "Redwood Forests":
      '"From the Redwood Forests to the Gulf Stream Waters/ This land was made for you and me." -Woody Guthrie',
    "Reggae Music":
      "This contemporary Caribbean music, originating in Jamaica, remains an influential style of popular music. Ya mon!",
    "Regis Philbin":
      "1934- , American talk and game show host.  Who wants to be a millionaire?  Regis, apparently.",
    "Remote Controls":
      "The world's handiest invention.  That is, if you can find it.",
    Republicans:
      "A U.S. political party symbolized by an elephant ... and don't forget it!",
    "Richard Nixon":
      "1913-94, 37th President of the United States and the only president to have resigned from office.  At least that's what the tapes say ...",
    "Robert DeNiro":
      '1943- , Pre-eminent American actor who earned Academy Awards for The Godfather II and Raging Bull.  "Are you looking at me?"',
    "Road Kill": "Mmmmmm.  Them's good eatin'.",
    "Road Trips": '"Get Your Kicks on Route 66." -Nelson Riddle',
    "Robin Williams":
      "1952- , versatile American comedian and actor.  The furriest man in show business.",
    "Rock And Roll": "It's here to stay!",
    "Rock Concert": "If it's too loud - you're too old.",
    "Rocket Scientists": "Hey!  They're not rocket scie ... oh ... never mind.",
    "Rocky Mountains":
      "These extend 2,000 miles from northeastern British Columbia to central New Mexico, and keep the Californians away from everyone else ...",
    "Rolling The Car": "You'll flip for this one ...",
    "Roman Numerals":
      "There's a <B>I</B> in <B>VII</B> chance you'll know them.",
    "Romeo And Juliet":
      "William Shakespeare's best known play, written in 1595.  Youthful love and hasty temperaments.",
    "Root Beer Floats": "Actually, it's the ice cream that floats!",
    "Rosa Parks":
      "1913-, civil rights icon arrested in 1956 for violating U.S. segregation laws by refusing to give up her bus seat to a white passenger.",
    "Rosie O'Donnell":
      "1962-, American actor and comedian.  She's in a league of her own!",
    "Rubber Gloves": "Just in case ...",
    "Running A Marathon":
      "26 miles, 385 yards: the distance run by a Greek soldier from the town of Marathon to Athens in 490 BC.",
    "Rush Limbaugh":
      "1951- , conservative talk-radio personality.  Claims to host his radio show with half his brain tied behind his back, just to make it fair.",
    Russia:
      "The world's largest country, spanning 11 time zones.  Famous for borscht, ballet, chess and vodka -just don't mix them.",
    Rust: '"Rust never sleeps." -Neil Young',
    "Saddam Hussein": "1937-, dictator of Iraq 1979-2003.",
    Sailors:
      '"In the Navy, you can sail the seven seas ..." -The Village People',
    Salads: "Lettuce not knock the vegetarians.",
    "Salsa Dancing":
      "Popular form of Latin American dance.  A little jazz, a little blues, a touch of rock and lots of heat.",
    "Salvador Dali":
      "1904-89, Spansih artist best known for his dream imagery and surrealism, including the limp watches in The Persistence Of Memory.",
    "Samuel L. Jackson":
      "1948-, powerful American actor of Pulp Fiction, Jackie Brown, and The Negotiator.",
    "Saturday Cartoons":
      "Get your blanket, a bowl of cereal and snuggle in for three hours of commercials.",
    "San Francisco":
      "California's City by the Bay.  Where many hearts are left.",
    Saturn:
      "Sixth planet from the sun, and the second largest in the solar system.  Has a nice ring to it, don't you think?",
    "Scavenger Hunt":
      "OK kids, here's your list: a marshmallow, a safety pin, a red rubber band, and a moon rock.  Go find 'em!",
    "Scene Of The Crime":
      "It was Colonel Mustard, in the library, with the candlestick.",
    "Schindler's List":
      "1993 Steven Spielberg film.  Powerful real-life story of a Catholic businessman who eventually saved over 1000 Jews in Nazi Poland.",
    "Science Fair Projects": "No human subjects, please!",
    "Science Fiction": "In a galaxy far, far away ...",
    Screeching: "Please stop.",
    "Sean Connery":
      "1930- , Accomplished Scottish actor, although best known as the REAL Bond, JAMES Bond ...",
    "Shania Twain":
      '1965- , Canadian country singer and songwriter.  "Shania" means "I\'m on my way" in Ojibwa.',
    Sharks:
      "Many species living today are similar to those from 100 million years ago.  Because change is scary.",
    "Shopping Mall":
      "Three-quarters of the North American population visit a shopping mall at least once a month.",
    Silk:
      "Produced as a cocoon covering by the silk worm, and used in fine fabrics and textiles.",
    "Silly Putty": "It's putty in your hands!",
    Skateboarding:
      "It's just going downhill ... down stairs ... down ramps ...",
    Skiing: 'The Super Giant Slalom: Swiss for "suicide."',
    Skinheads: "Shaved heads, big boots.  Some are Nazis, some are not.",
    Skunks:
      "Black and white striped mammals known for their offensive smelling defensive spray.",
    Skydiving:
      "Parachute canopies are usually made from nylon fabric that lasts for thousands of jumps - whether the skydiver does or not.",
    "Sleeping Pills":
      "I remember taking them ... I just ... don't rememmer ... how mamy.",
    Slivers:
      "Also known as splinters.  The worst ones are under your fingernails.",
    "Sloppy Joes": "My favorite recipe -open the can.",
    "Smithsonian Institution":
      "Located in Washington, D.C., the largest museum complex in the world.  Wouldn't that be a great garage sale?",
    Snakes:
      "Surprising, snakes move rapidly without legs.  Also surprising, they find OTHER snakes attractive.",
    Snow:
      "Transparent ice crystals which form around dust and other small particles.  Get my drift?",
    "Social Security":
      "American program designed to provide income and services in the event of retirement, sickness, disability, death or unemployment.",
    Socks:
      '"Black socks, they never get dirty, the longer you wear them the stronger they get." -Bill Harley',
    "South Africa":
      "Two oceans, rugged mountains, traditional villages, game sanctuaries, wineries...forget the past and bring on the tourists.",
    "South Park":
      'Highly-rated, highly offensive animated cartoon series.  "Oh my God!  We killed Kenny!"',
    "Soy Sauce": "A brewed seasoning made from soybeans, wheat, and salt.",
    Spam: "Mystery meat, or mystery E-mails ...",
    "Speeding Tickets":
      '"No, officer, I don\'t have any idea how fast I was going."',
    Spiders:
      "There are more than 34,000 species of spiders.  Try not to think about THAT right before bedtime.",
    "Spike Lee":
      "1957-, American film maker and Knicks fan.  Best known for Do the Right Thing, Malcolm X, and 4 Little Girls.",
    "Spilled Milk": "Got milk?  WHOOPS!  Apparently not ...",
    Spit: "Ladies and gentlemen, straight from the Salivary Glands ...",
    "Spontaneous Combustion":
      'The ignition of substances without application of an external heat source.  A good plot for "The X-Files."',
    "Sport Utility Vehicles": "Need new tires?",
    "Sports Channels": "Any team, any time.",
    "Star Fruit": "Looks like plastic, tastes like lemons.",
    "Starry Night":
      "A sky bright with stars, a classic Van Gogh painting, and a Don McLean song.  Three cards in one!",
    "State Fair": "Aw, gee whiz, a blue ribbon for Bessie!",
    "Steak And Potatoes": "Hot off the grill!",
    "Stephen King":
      "1947- , American author of horror novels, who's sold more than 100 million copies of his books.  Talk about frightening ...",
    "Steve Martin":
      '1945- , American comedian, actor, writer, and "wild and crazy guy."',
    "Steven Spielberg":
      "1947-, American movie director and producer, and overachiever.  From E.T. to Schindler's List... too many to list.",
    Stonehenge:
      "Prehistoric stone monument located north of Salisbury, England.",
    "Strawberry Shortcake": "Summertime and the eating is easy ...",
    "Stubbed Toes": "It'll feel better when it quits hurting.",
    "Stunt People": "When you need someone to take the fall.",
    "Summer Camp": "If the bugs don't get you, the poison ivy will!",
    "Sunday Drivers": "Now available ANY day of the week!",
    Superman:
      "Fictional comic book superhero loved by Lois Lane and Jerry Seinfeld.",
    Supermodels: "Long legs = big bucks.",
    "Surfing The Net": "www.otb-games.com",
    Sushi: "Who would ever have guessed that raw fish could be so fashionable?",
    "Swiss Bank Accounts": "Do you think everyone in Switzerland has one?",
    "Swiss Chocolate":
      '"What use are cartridges in battle?  I always carry chocolate instead." -George Bernard Shaw',
    "Swiss Cheese": "Guess it comes from holey cows ...",
    "Taking A Bath":
      "Bathing facilities have been found in excavations in India from before 2000 BC.  Soap-on-a-Rope hasn't.",
    "Talk Radio": "Talk about air pollution.",
    Teachers: "If you can play this game, thank a teacher.",
    Telemarketers:
      '"No, thank you ... No, I\'m not interested ... No, I have to go now ..."',
    Televangelists: "Not to be confused with Teletubbies.",
    Television:
      "One-hundred and sixty-four channels, and nothing worth watching.",
    "Telling The Truth":
      '"There are two kinds of truth.  There are real truths and there are made-up truths." -Marion Barry, ex-mayor of Washington, D.C.',
    "Terrorist Attack": "We will never negotiate with terrorists.",
    "Thanksgiving Day":
      "The fourth Thursday of November in the U.S.; the second Monday in October in Canada.",
    "The 1920s":
      "Pros: the Jazz Age.  Cons: Presidents who look like librarians.",
    "The 1950s":
      "Pros: Barbies, barbecues, and bikinis.  Cons: McCarthy, the Korean War, television.",
    "The 1960s":
      "Pros: the Moon Lsnding, the music.  Cons: hippies who refuse to believe they're over.",
    "The 1970s": "Pros ... uh ... pros ... uh ... GIVE US A MINUTE, OKAY?",
    "The 1980s": "Pros: meant the end of the 1970s.  Cons: '80s nostalgia.",
    "The 21st Century": "The future is NOW!",
    "The Academy Awards":
      'The statue known as "Oscar" weighs only eight and a half pounds. So why does it carry so much weight?',
    "The Beach": "A day at the beach is no day at the beach, ya know?",
    "The Beatles":
      "1960s British band.  Only the most revolutionary, influential and universally acclaimed group of the 20th century.  That's all.",
    "The CIA":
      "The Central Intelligence Agency is responsible for keeping the U.S. government informed of foreign actions affecting the nation's interest.",
    "The Cold War":
      "The post-World War II struggle between the US and its allies, and the former USSR and its allies.  Things could have gotten hot.",
    "The Common Loon":
      "A spotted, red-eyed diving bird -or various friends or family.",
    "The Dallas Cowboys":
      "National Football League team known for their cheerleaders and their performance, both on and off the field.",
    "The Dump": "Just remember to recycle.",
    "The Eiffel Tower":
      "Designed and built by French engineer Alexandre Gustave Eiffel for the Paris World's Fair of 1889.",
    "The Electric Chair":
      "In U.S. prisons, an alternating current of about 2000 volts is used for electrocution.",
    "The End Of The World":
      '"It\'s the end of the world as we know it, and I feel fine ..." -REM',
    "The Everglades":
      "A vast marsh covering much of southern Florida.  Watch out for alligators!",
    "The Far Left": "They get high Marx from some.",
    "The Far Right": "Far right for some and far wrong for others.",
    "The FBI":
      "The Federal Bureau of Investigation: the investigative agency for the U.S. Department of Justice.  They're listening ...",
    "The First Day Of School": '"Fear has many eyes." -Cervantes',
    "The French Riviera":
      "Holiday home of the rich, the famous, and the half-naked.",
    "The Godfather":
      "The 1972 critically acclaimed Mafia movie that made us as offer we couldn't refuse.",
    "The Grand Canyon":
      "217 miles long, 4 to 18 miles wide, and more than 1 mile deep.  Now THAT'S grand.",
    "The Grateful Dead":
      'American rock band, founded in 1965 and best known for their "Dead Head" fans.',
    "The Great Chicago Fire":
      "The noteworthy fire of 1871 ... a hot time in the old town ...",
    "The Great Depression": "Prozac was invented six decades too late.",
    "The Green Bay Packers":
      'Twelve time National Football League world champions, beloved by "Cheeseheads" everywhere.  Are those brats done yet?',
    "The Gulf War":
      'January - February, 1991.  This six week conflict with Iraq was also known as "Desert Storm."',
    "The Indy 500":
      "Contestants must drive the full 500 miles.  Bathroom breaks ARE allowed.",
    "The Internet":
      "Computer-based worldwide information network, and global shopping market.",
    "The IRS":
      "The Internal Revenue Service: agency of the U.S. Department of the Treasury responsible for collecting taxes.  A human audity.",
    "The JFK Assassination":
      "November 22, 1963.  The funeral of President Kennedy was watched on television by millions around the world.",
    "The KKK":
      'If they\'re supposed to be the master race, why do they keep misspelling "Clan"?',
    "The Land Of Oz":
      '"I\'ve a feeling we\'re not in Kansas anymore, Toto." -Dorothy, "The Wizard Of Oz"',
    "The Little Mermaid":
      "The 1837 story by Hans Christian Anderson or the 1989 animated film by Disney.  Guess which made more money?",
    "The Mafia":
      "A loose association of criminal groups, bound by a blood oath and sworn to secrecy.  Of course, now we have to kill you.",
    "The Marx Brothers":
      "Chico, Groucho, Harpo, amd sometimes Zeppo.  Their 1930s films include Duck Soup and Animal Crackers.",
    "The Metric System": "No, thank you.  We like our inches and feet!",
    "The Midwest":
      "America's central plains states.  They're not like folks 'round here ...",
    "The Milky Way":
      "The galaxy that includes the sun, its solar system, and a chewy layer of caramel.",
    "The Mississippi River":
      'The Algonquin words "Misi sipi" mean "big river."  What\'s Algonquin for "muddy"?',
    "The National Enquirer":
      "American tabloid newspaper.  Inquiring minds want to know ... Why the heck does this thing sell?",
    "The New York Yankees":
      "Legendary American baseball team.  With so much success, it's obvious why they're reviled.",
    "The NRA": "National Rifle Association.  They're gunning for your vote.",
    "The Ocean":
      "How deep is the ocean?  12,000 feet.  If they'd known that, maybe they wouldn't have written that stupid song.",
    "The Old Man And The Sea":
      "Ernest Hemingway's classic novel - fishing, hunger, fishing, torment, fishing, personal loss ... fishing ...",
    "The Olympics":
      "An international athletic competition held every four years.  The thrill of victors and the agony of defeat.",
    "The Opera":
      "It ain't over 'til the fat lady sings.  Unfortunately, sometimes, not even then.",
    "The Ozone Layer":
      "Short for ozonosphere.  Theories about the ozone layer are full of holes.",
    "The Pentagon": "The five-sided home of the U.S. Department of Defense.",
    "The Pyramids":
      "The Egyptian pyramids were built from about 2700 BC to about 1000 BC.  Tut, tut, tut ...",
    "The Renaissance":
      "Beginning in the 1300s, started in Italy and spread across Europe.  Kind of like Espresso bars ...",
    "The Rolling Stones":
      'British "bad boy" rock band formed in 1962.  Still touring?',
    "The San Andreas Fault":
      "Geological feature in California stretching 600 miles.  Like the state doesn't have enough faults already.",
    "The South":
      "Dixie: South of the Mason-Dixon line, that is.  They're not like folks 'round here ...",
    "The Statue Of Liberty":
      '"Give me your tired, your poor/ Your huddled masses yearning to breathe free ..." -Emma Lazarus',
    "The Super Bowl": "Who needs another national holiday?",
    "The Supreme Court":
      "The highest court in the United States.  Robes, but no wigs.",
    "The Three Tenors":
      "Opera stars Placido Domingo, Jose Carreras, and Luciano Pavarotti began recording as The Three Tenors in 1990.",
    "The Titanic": "It sank in 1912.  Get over it!",
    "The Universe": 'Everything.  The big "It."  Huge.  Massive.  THAT big.',
    "The Vatican":
      "The Papal State in the middle of Rome.  Home of the Pope, Swiss Guards, and lots of pigeons.",
    "The Vietnam Memorial":
      '"The Wall," built in 1982, was designed by 21-year-old architecture student, Maya Lin.',
    "The Williams Sisters":
      "Venus, 1980-, and Serena, 1981-, Williams, American tennis champs.  One heck of a sister act.",
    "The Wright Brothers":
      "In 1903, Wilbur and Orville made the first powered airplane flights in history.  Although there were delays at the airport.",
    "The YMCA":
      "The Young Men's Christian Association has 30 million members in 110 countries.  \"It's fun to stay at the Y-M-C-A.\" -The Village People",
    "Thomas Edison":
      "1847-1931, American inventor, developed a light bulb, generator, sound-recorder, and motion picture projector.  Show off.",
    Thunder: '"Here it comes again, Thunder and Lightning..." -ELO.',
    Tibet:
      "Mountainous region of China and religious enclave for a form of Buddhism called Lamaism.  Known as the roof of the world.",
    Ticks:
      "All ticks are bloodsucking parasites, but not all bloodsucking parasites are ticks.",
    "Tidal Waves":
      "The gigantic ocean waves that strike with tremendous force, and cause considerable damage to life and property.  Kind of like Spring Break.",
    "Tiger Woods":
      "1975- , American star of the golf circuit.  Known for his athletic skill, and youthful, classic style.",
    "Toasted Marshmallows": "How do you like yours - golden brown or flaming?",
    Toasters: "Wait -don't stick that fork in there!",
    "Tobacco Companies":
      "Who says tobacco's not addictive?  THEY can't give it up ...",
    Toes: '"This little piggy went to market ..."',
    "Tom Cruise":
      "1962-, American actor.  It looked like Ricky Business early on, but by 1986 he was Top Gun.  No Mission Impossible for him.",
    "Tom Hanks":
      "1956-, American actor and star of such varied films as Big, Philadelphia, Forrest Gump, Saving Private Ryan and Castaway.",
    "Top Of A Rollercoaster": "Just remember: what goes UP ...",
    Tornadoes:
      'Funnel-shaped cloud whirling destructively at speeds up to 300 mph.  "Honey, do you hear a freight train ... Honey?"',
    Toys: "They're not just for kids, anymore ...",
    "Trailer Parks": "Also known as tornado magnets.",
    Trampolines:
      "Trampolines have been used in circuses wince the 18th century.  Despite slumps in popularity, they always seem to bounce back!",
    "Tree Huggers": '"Environmentalists" to the left.  "Wackos" to the right.',
    "Truck Stops": "Breakfast 24 hours a day and you're on your way.",
    "Tyrannosaurus Rex":
      "Large carnivorous dinosaur of the latter part of the Mesozoic era.  My, what big teeth you have!",
    Underwear: '"Let\'s keep this brief."',
    "United Nations":
      "The U.N. was founded in 1945, after World War II ended.  Its mission is to maintain world peace.  If we ever achieve it, that is ...",
    Vacations:
      '"Vacation, all I ever wanted, Vacation, had to get away ..." -Go-Go\'s',
    Vampires: "Legendary bloodsucking monsters.",
    "Victorian England":
      "An era characterized by moral severity and pompous conservatism.",
    "Video Games": 'Just how DO you get to the thirteenth level of "Doom"?',
    "Vietnam, 1968":
      "More than 30,000 Americans had been killed in the Vietnam War by the end of 1968.",
    "Vincent Van Gogh":
      "1853-90, Dutch post-impressionist painter known for dramatic sunflowers and self-portraits.  Only one of his paintings sold during his lifetime.",
    Violins: "It's a pain in the neck, but keep practicing.",
    "VW Beetles":
      "The prototype for the original VW Beetle was developed in 1934, and production begin in 1945.  Functional, yet so fashionable.",
    "Waco, Texas":
      "Texas city near where a 51-day standoff between law-enforcement officials and members of the Branch Davidians occurred in 1993.",
    "Wall Street":
      "The financial center of the United States.  See also: roller coaster.",
    "Walt Disney": "1901-1966, the head of some Mickey Mouse company.",
    Warts:
      "Small, benign, circumscribed tumors of the outer layer  of the skin.  Warts and all!",
    "Watching Football":
      "Sheer athletic prowess by players in peak physical condition is a glorious thing to behold.  Pass the chips and beer.",
    "Water Parks":
      "You can go down Dead Man's Drop and I'll take the Lazy River.",
    Waterbeds: "Could serve as a safety precaution for those who smoke in bed.",
    Waterfalls: '"Don\'t go chasing waterfalls..." -TLC',
    Watermelons:
      "Pardeeville, WI - home of the Watermelon Seed-Spitting & Speed-Eating Championship.  The record is 2.5 lbs. of melon eaten in 3.5 seconds.",
    "Weapons Dealers":
      "OK, what kind you need?  Assault, Automatic, Atomic ...?",
    Weddings: '"Ding, dong, the bells are gonna chime ..." -My Fair Lady',
    Wheat:
      "Mainly used in flour.  World output of wheat is more than 600 million metric tons a year ... so someone's making a lot of dough.",
    "Wheel Of Fortune": "American TV game show, BIG MONEY!  BIG MONEY!.",
    "Whipped Cream":
      "Great on strawberry shortcake, banana splits,  chocolate pudding ...",
    Whips: '"Crack that whip ... whip it, whip it good." -Devo',
    "Whoopie Goldberg":
      "1950-, American actor and comedian.  Starred in such movies as Ghost, which earned her an Academy Award.  Whoopee!",
    "Will Smith":
      "1968- , Successful American rap star, TV star and wildly successful motion picture star.  He's got it all.  We hate him.",
    "William Shakespeare":
      "1564-1616, The English poet and playwright.  And all the world IS a stage ...",
    Wimbledon: "Strawberries ... cream ... temper tantrums ...",
    Windsurfing: "Really just surfing for lazy people.",
    "Wine Tasting": "Spit or swallow?",
    "Winning The Lottery": "The more you play, the more THEY win.",
    "Witch Hunts":
      "Popular locations: Salem, Massachusetts and Washington, D.C.",
    Women: "REAL Women.",
    "Women's Soccer":
      "The 1999 World Cup finals was the most-watched women's sporting event in history.",
    "Wood Chippers":
      '"I guess that was your accomplice in the wood chipper." -Marge Gunderson, Fargo',
    Woodstock:
      "The 1969 love, music and mud festival attended by 400,000.  Or, the little yellow bird.",
    "Woody Allen":
      "1935- , American comedian, actor and director, of Bananas, Annie Hall, Hannah and Her Sisters, and lots of New York Stories.",
    Worms:
      '"A man may fish with the worm that hath eat of a king, and eat of the fish that has fed of that worm." -"Hamlet" Shakespeare',
    "X-Ray Vision": "Available to Superman -for emergency use only.",
    "X-Rays":
      "X-Rays were discovered in 1895 by the German physicist Wilhelm Conrad Roentgen.  Now if they could just get those X-ray glasses down.",
    "Yellowstone Park":
      "Home to 3000 geysers and hot springs.  More gas and hot air than Washington, D.C.",
    Zen:
      "Japanese form of Buddhism, originated in China.  Zen again, maybe not.",
    Zucchini: "A squashed vegetable.",
    Absurd: "ridiculous, senseless, foolish",
    Addictive: "obsessive, consuming, captivating",
    Adorable: "lovable, charming, delightful",
    Aged: "old, ancient, mature",
    American: "U.S. Citizen, Yankee, Apple Pie",
    Ancient: "elderly, old, antique",
    Animated: "lively, exuberant, spirited",
    Annoying: "irritating, bothersome, teasing",
    Appetizing: "appealing, tasty, flavorful",
    Arrogant: "egotistical, overconfident, conceited",
    Awesome: "amazing, remarkable, majestic",
    Awkward: "clumsy, bumbling, uncoordinated",
    Believable: "trustworthy, credible, convincing",
    Bogus: "fraudulent, phony, insincere",
    Boisterous: "loud, rambunctious, rowdy",
    Bold: "daring, brave, courageous",
    Boring: "dull, tedious, monotonous",
    Bright: "brilliant, radiant, shiny",
    Brilliant: "dazzling, gleaming, intelligent",
    Busy: "occupied, meddlesome, engrossed",
    Calm: "peaceful, tranquil, placid",
    Casual: "easygoing, blase, nonchalant",
    Charismatic: "alluring, magnetic, charming",
    Charming: "captivating, enchanting, fascinating",
    Cheesy: "trashy, tawdry, far-fetched",
    Chewy: "gummy, rubbery, stringy",
    Chunky: "lumpy, chubby, bumpy",
    Classic: "timeless, definitive, vintage",
    Clean: "washed, pure, tidy",
    Clueless: "unaware, oblivious, ignorant",
    Cold: "chilly, icy, aloof",
    Colorful: "vivid, brilliant, kaleidoscopic",
    Comfortable: "cozy, snug, restful",
    Comical: "funny, hilarious, amusing",
    Complicated: "difficult, complex, involved",
    Confused: "muddled, bewildered, perplexed",
    Cool: "chilly, hip, cold-blooded",
    Corrupt: "dishonest, underhanded, shady",
    Cosmic: "limitless, planetary, far out",
    Cosmopolitan: "sophisticated, urbane, well-informed",
    Courageous: "brave, gallant, dauntless",
    Cowardly: "fearful, afraid, spineless",
    Cranky: "crabby, cantankerous, grouchy",
    Crazed: "insane, wild, deranged",
    Crazy: "insane, bizarre, wacky",
    Creative: "imaginative, artistic, original",
    Creepy: "frightening, slithering, scary",
    Cruel: "mean, harsh, merciless",
    Cuddly: "loving, tender, huggable",
    Cute: "pretty, perky, delightful",
    Dainty: "delicate, fragile, thin",
    Dangerous: "risky, chancy, hazardous",
    Dead: "deceased, expired, unresponsive",
    Deadly: "fatal, lethal, murderous",
    Delicate: "dainty, tender, elegant",
    Delicious: "tasty, pleasing, appetizing",
    Delightful: "pleasing, enjoyable, charming",
    Demanding: "difficult, exacting, bothersome",
    Depressing: "dismal, gloomy, sad",
    Desperate: "frantic, headlong, reckless",
    Dignified: "stately, honorable, distinguished",
    Dirty: "unclean, soiled, impure",
    Distinguished: "dignified, extraordinary, acclaimed",
    Disturbing: "unsettling, troubling, worrisome",
    Dramatic: "exciting, sensational, theatrical",
    Dreamy: "fanciful, whimsical, heavenly",
    Dull: "boring, stupid, blunt",
    Dysfunctional: "impaired, damaged, maladjusted",
    Earthy: "unrefined, natural, crude",
    Easy: "effortless, gentle, promiscuous",
    Eccentric: "peculiar, odd, bizarre",
    Elitist: "snobbish, arrogant, smug",
    Emotional: "passionate, moving, volatile",
    Eternal: "timeless, immortal, perpetual",
    European: "of Europe, from Europe, about Europe",
    Exciting: "thrilling, breathtaking, arousing",
    Exhausting: "weakening, tiring, draining",
    Expensive: "costly, valuable, exorbitant",
    Explosive: "bursting, blasting, dangerous",
    Exquisite: "excellent, refined, flawless",
    Extreme: "exceptional, superlative, radical",
    Fabulous: "marvelous, wonderful, incredible",
    Fake: "unreal, counterfeit, deceptive",
    Fancy: "showy, ornate, decorated",
    Fantastic: "awesome, outrageous, imaginary",
    Feminine: "womanly, ladylike, unmanly",
    Filthy: "dirty, foul, unclean",
    Flirtatious: "brazen, saucy, forward",
    Foreign: "alien, unfamiliar, exotic",
    Fragrant: "aromatic, odorous, perfumed",
    Frazzled: "exhausted, frayed, worn",
    Fresh: "new, original, good",
    Friendly: "affectionate, comforting, welcoming",
    Frightening: "scary, horrifying, awesome",
    Frivolous: "trivial, silly, shallow",
    Funky: "groovy, psychedelic, hip",
    Funny: "amusing, comic, odd",
    Furious: "angry, raging, wild",
    Fuzzy: "downy, unclear, furry",
    Glamorous: "beautiful, dazzling, stylish",
    Glitzy: "flashy, showy, gaudy",
    Global: "world-wide, spherical, universal",
    Glorious: "magnificent, delightful, splendid",
    "Goody-Goody": "sweet, well-behaved, virtuous",
    Graceful: "elegant, supple, limber",
    Handsome: "attractive, elegant, fine",
    Hardworking: "industrious, diligent, busy",
    Harmful: "hurtful, unhealthy, damaging",
    Haunting: "unforgettable, bewitching, unearthly",
    Healthy: "hearty, robust, wholesome",
    Heartless: "insensitive, cruel, uncaring",
    Hilarious: "funny, witty, amusing",
    Honorable: "honest, just, virtuous",
    Hopeless: "pessimistic, desperate, downhearted",
    Horrifying: "offensive, abominable, disgusting",
    Hostile: "antagonistic, aggressive, warlike",
    Hot: "blazing, heated, spicy",
    Idiotic: "foolish, dumb, moronic",
    Important: "significant, substantial, momentous",
    Industrious: "diligent, busy, hard-working",
    Influential: "powerful, prominent, important",
    Innocent: "guiltless, pure, naive",
    Insane: "psychotic, deranged, mad",
    Inspirational: "exhilarating, inspiring, stimulating",
    Insulting: "offending, discourteous, rude",
    Intelligent: "bright, smart, brainy",
    Intense: "extreme, passionate, strained",
    Irresistible: "overpowering, overwhelming, compelling",
    Irritating: "annoying, troublesome, provoking",
    Juicy: "drippy, luscious, tantalizing",
    Lazy: "lifeless, apathetic, weary",
    Legendary: "famous, distinctive, prominent",
    Loud: "noisy, boisterous, deafening",
    Lovable: "adorable, endearing, cuddly",
    Lucky: "fortunate, serendipitous, favored",
    Luscious: "delicious, savory, juicy",
    Luxurious: "opulent, lavish, sumptuous",
    Magical: "enchanting, miraculous, marvelous",
    Manly: "masculine, virile, strong",
    Masculine: "male, manly, virile",
    Meek: "shy, mild, timid",
    Melodramatic: "theatrical, sensational, showy",
    Mischievous: "naughty, prankish, sly",
    Miserable: "wretched, pitiful, forlorn",
    Misunderstood: "not grasped, not learned, not absorbed",
    Mysterious: "secretive, puzzling, strange",
    Mystical: "spiritual, secretive, esoteric",
    Naive: "unsophisticated, childlike, simple",
    Nasty: "mean, inclement, offensive",
    Natural: "pure, simple, unadorned",
    Neat: "tidy, orderly, cool",
    Neglected: "ignored, disregarded, rejected",
    Nerdy: "unhip, uncool, dorky",
    Normal: "usual, common, ordinary",
    Obnoxious: "offensive, repulsive, annoying",
    Odd: "different, eccentric, bizarre",
    Offensive: "insulting, vulgar, attacking",
    Ordinary: "usual, common, plain",
    Organic: "natural, clean, biological",
    Outrageous: "shocking, scandalous, disgraceful",
    Overwhelming: "exhaustive, breathtaking, monumental",
    Painful: "hurtful, agonizing, unbearable",
    Pathetic: "pitiful, distressing, heart-rending",
    Patriotic: "nationalistic, loyal, public-spirited",
    Peaceful: "serene, restful, calm",
    Perfect: "faultless, consummate, exact",
    Philosophical: "thoughtful, contemplative, wise",
    Phony: "false, artificial, imitation",
    Playful: "fun, frisky, entertaining",
    Popular: "well-liked, accepted, preferred",
    Powerful: "strong, forceful, robust",
    Primitive: "prehistoric, primal, uncivilized",
    Principled: "conscientious, ethical, scrupulous",
    Profound: "deep, wise, thoughtful",
    Puffy: "swollen, billowy, bloated",
    Pure: "innocent, unadulterated, chaste",
    Quiet: "peaceful, silent, calm",
    Radiant: "shining, glowing, sparkling",
    Radical: "unconventional, revolutionary, extreme",
    Rare: "scarce, unusual, half-cooked",
    Realistic: "authentic, lifelike, reasonable",
    Refined: "well-bred, purified, cultivated",
    Refreshing: "brisk, invigorating, rejuvenating",
    Relaxing: "restful, calming, peaceful",
    Repulsive: "disgusting, offensive, foul",
    Responsible: "accountable, obligated, mature",
    Revolutionary: "innovative, rebellious, radical",
    Rich: "wealthy, affluent, moneyed",
    Ridiculous: "preposterous, absurd, ludicrous",
    Risky: "hazardous, daring, speculative",
    Rough: "scratchy, uneven, jagged",
    Saintly: "virtuous, angelic, divine",
    Sappy: "gooey, mushy, romantic",
    Scary: "frightening, absurd, ugly",
    Scenic: "picturesque, dramatic, panoramic",
    Selfish: "stingy, greedy, miserly",
    Senseless: "meaningless, absurd, foolish",
    Sensitive: "susceptible, sympathetic, tender",
    Sensual: "tactile, pleasing, sexual",
    Sexy: "arousing, appealing, seductive",
    Shallow: "superficial, trivial, not deep",
    Sharp: "pointed, keen, acute",
    Shiny: "reflective, gleaming, polished",
    Shocking: "frightening, electrifying, startling",
    Shy: "bashful, timid, cautious",
    Silly: "goofy, absurd, nonsensical",
    Smart: "intelligent, stylish, witty",
    Smelly: "stinky, odorous, rank",
    Smooth: "even, level, flat",
    Snappy: "stylish, trendy, fast",
    Soft: "malleable, pliable, mushy",
    Speedy: "quick, rapid, fast",
    Spicy: "flavorable, tangy, hot",
    Spiritual: "religious, inspired, supernatural",
    Spooky: "scary, weird, ghostly",
    Spunky: "perky, lively, spirited",
    "Squeaky Clean": "pure, immaculate, unapproachable",
    Stereotyped: "pigeonholed, caricatured, characterized",
    Stunning: "astonishing, staggering, astounding",
    Sultry: "sweltering, humid, sensual",
    Sweet: "sugary, caring, good",
    Swift: "quick, speedy, expeditious",
    Talented: "gifted, clever, skillful",
    Tame: "subdued, gentle, trained",
    Technological: "scientific, futuristic, mechanical",
    Temperamental: "moody, irritable, short-tempered",
    Timeless: "classic, ageless, well-established",
    "Touchy-Feely": "affectionate, tactile, huggy",
    Tough: "strong, firm, difficult",
    Trustworthy: "honest, reliable, unfailing",
    Twisted: "distorted, warped, perverted",
    Unbelievable: "incredible, far-fetched, impossible",
    Unforgettable: "notable, impressive, remarkable",
    Unhealthy: "risky, sickly, dangerous",
    Unnatural: "abnormal, artificial, bizarre",
    Unreal: "imaginary, illusionary, unbelievable",
    Unscrupulous: "unethical, corrupt, unprincipled",
    Unusual: "rare, odd, uncommon",
    Useless: "worthless, ineffective, unneeded",
    Violent: "furious, vicious, destructive",
    Virtuous: "worthy, righteous, chaste",
    Visionary: "idealistic, prophetic, far-seeing",
    Weird: "abnormal, peculiar, odd",
    Wicked: "evil, corrupt, depraved",
    Wild: "untamed, savage, ferocious",
    Witty: "clever, humorous, cunning",
    Woebegone: "dismal, sorrowful, bummed out",
    Worldly: "experienced, sophisticated, materialistic",
    Zany: "crazy, funny, wacky",
  });
})(window.app);
