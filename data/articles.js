var crimeArticles = [
    {
      title: "Unsolved Mysteries: The Case of Jack the Ripper",
      summary: "Explore the chilling and unsolved mystery of Jack the Ripper's murders.",
      content: "The Jack the Ripper case remains one of the most infamous unsolved mysteries in criminal history. In this article, we delve into the gruesome murders that terrorized 19th-century London, examining the suspects and theories surrounding the identity of the elusive killer. Join us as we journey into the dark and mysterious world of Jack the Ripper.",
      publishedDate: ISODate("2023-11-05T14:30:00Z"),
      lastModifiedDate: ISODate("2023-11-10T18:00:00Z"),
      tags: ["Crime", "Mystery", "Jack the Ripper"],
      hasQCM: false
    },
    {
      title: "Cold Cases: The Disappearance of Amelia Earhart",
      summary: "Uncover the mystery behind the disappearance of the pioneering aviator Amelia Earhart.",
      content: "Amelia Earhart, the first woman to fly solo across the Atlantic, vanished without a trace during her 1937 flight around the world. Decades later, her disappearance remains a perplexing enigma. In this article, we explore the theories and investigations surrounding Earhart's disappearance, shedding light on one of aviation's greatest mysteries.",
      publishedDate: ISODate("2023-11-15T10:45:00Z"),
      lastModifiedDate: ISODate("2023-11-20T16:30:00Z"),
      tags: ["Crime", "Mystery", "Amelia Earhart"],
      hasQCM: false
    },
    {
      title: "The Art of Criminal Profiling: Solving Serial Killings",
      summary: "Dive into the world of criminal profiling and its role in solving serial murder cases.",
      content: "Criminal profiling is a powerful tool in law enforcement, particularly in solving serial murder cases. In this article, we explore the fascinating field of criminal profiling, its history, and its impact on identifying and apprehending serial killers. Join us as we unravel the minds of some of the most notorious criminals in history.",
      publishedDate: ISODate("2023-11-25T12:15:00Z"),
      lastModifiedDate: ISODate("2023-11-30T17:45:00Z"),
      tags: ["Crime", "Criminal Profiling", "Serial Killers"],
      hasQCM: false
    },
    {
      title: "Famous Heists in History: The Great Train Robbery",
      summary: "Relive the daring and notorious Great Train Robbery of 1963.",
      content: "The Great Train Robbery of 1963 is one of the most daring heists in history. In this article, we take you back to that fateful night when a group of criminals intercepted a Royal Mail train in England and made off with a fortune. Learn about the mastermind behind the heist, the meticulous planning, and the eventual capture of the perpetrators.",
      publishedDate: ISODate("2023-12-05T09:30:00Z"),
      lastModifiedDate: ISODate("2023-12-10T14:00:00Z"),
      tags: ["Crime", "Heist", "Great Train Robbery"],
      hasQCM: false
    },
    {
      title: "The Zodiac Killer: A Cryptic Criminal Enigma",
      summary: "Delve into the cryptic and unsolved case of the Zodiac Killer.",
      content: "The Zodiac Killer is one of the most notorious unsolved cases in American criminal history. This enigmatic serial killer taunted law enforcement with cryptic letters and ciphers. In this article, we explore the chilling crimes, the mysterious messages, and the ongoing quest to unmask the identity of the Zodiac Killer.",
      publishedDate: ISODate("2023-12-15T11:45:00Z"),
      lastModifiedDate: ISODate("2023-12-20T16:30:00Z"),
      tags: ["Crime", "Zodiac Killer", "Unsolved"],
      hasQCM: false
    }
];
  
db.articles.insertMany(crimeArticles)


  // Generate 4 sample articles about mysteries in shows and movies
var mysteryArticles = [
    {
      title: "Unraveling the Mystery of 'Lost': Exploring the Island's Secrets",
      summary: "Dive into the intricate mysteries of the TV series 'Lost' and its enigmatic island.",
      content: "The TV series 'Lost' captivated audiences with its complex storyline and mysterious island setting. In this article, we embark on a journey to unravel the mysteries of the show, from the Smoke Monster to the Dharma Initiative. Join us as we explore the mind-bending twists and turns that made 'Lost' a cult classic.",
      publishedDate: ISODate("2024-01-05T09:30:00Z"),
      lastModifiedDate: ISODate("2024-01-10T14:00:00Z"),
      tags: ["Mystery", "TV Shows", "Lost"],
      hasQCM: false
    },
    {
      title: "Sherlock Holmes: The Master of Mystery on the Silver Screen",
      summary: "Discover the cinematic legacy of Sherlock Holmes and his enduring appeal.",
      content: "Sherlock Holmes is one of the most iconic fictional detectives, with numerous adaptations on the silver screen. In this article, we delve into the cinematic world of Sherlock Holmes, exploring different portrayals of the detective and the enduring appeal of mystery-solving. From classic films to modern interpretations, Holmes continues to captivate audiences worldwide.",
      publishedDate: ISODate("2024-02-15T11:45:00Z"),
      lastModifiedDate: ISODate("2024-02-20T16:30:00Z"),
      tags: ["Mystery", "Movies", "Sherlock Holmes"],
      hasQCM: false
    },
    {
      title: "The Enigmatic World of 'Twin Peaks': David Lynch's Surreal Mystery",
      summary: "Delve into the surreal and enigmatic world of the TV series 'Twin Peaks.'",
      content: "David Lynch's 'Twin Peaks' is a masterpiece of surreal mystery and intrigue. In this article, we explore the quirky characters, eerie atmosphere, and perplexing plotlines that define the show. Join us as we venture into the small town of Twin Peaks and try to decipher its enigmatic secrets.",
      publishedDate: ISODate("2024-03-10T13:15:00Z"),
      lastModifiedDate: ISODate("2024-03-15T18:50:00Z"),
      tags: ["Mystery", "TV Shows", "Twin Peaks"],
      hasQCM: false
    },
    {
      title: "Mysteries in Cinema: The Intriguing Films of Alfred Hitchcock",
      summary: "Explore the suspenseful and mysterious films of the legendary director Alfred Hitchcock.",
      content: "Alfred Hitchcock is synonymous with suspense and mystery in cinema. In this article, we take a closer look at some of Hitchcock's most iconic films, such as 'Psycho,' 'Vertigo,' and 'Rear Window.' Discover the masterful storytelling, psychological tension, and enduring influence of the 'Master of Suspense' on the world of cinema.",
      publishedDate: ISODate("2024-04-20T08:30:00Z"),
      lastModifiedDate: ISODate("2024-04-25T14:15:00Z"),
      tags: ["Mystery", "Movies", "Alfred Hitchcock"],
      hasQCM: false
    }
];
  
  // Insert the mystery-related articles into the collection
db.articles.insertMany(mysteryArticles)
  
  // Generate 5 sample articles about famous books adapted into movies
var bookToMovieArticles = [
    {
      title: "From Page to Screen: The Magic of 'Harry Potter' Films",
      summary: "Explore the enchanting journey of the 'Harry Potter' books to blockbuster movies.",
      content: "The 'Harry Potter' book series by J.K. Rowling captivated readers worldwide, and its film adaptations brought the wizarding world to life on the big screen. In this article, we dive into the magical journey of how the beloved books became iconic movies. Join us as we revisit Hogwarts, meet beloved characters, and relive the magic of the 'Harry Potter' franchise.",
      publishedDate: ISODate("2024-05-10T09:30:00Z"),
      lastModifiedDate: ISODate("2024-05-15T14:00:00Z"),
      tags: ["Books", "Movies", "Harry Potter"],
      hasQCM: false
    },
    {
      title: "The Epic Tale: 'The Lord of the Rings' from Tolkien's Pen to the Silver Screen",
      summary: "Embark on an epic journey through the creation of 'The Lord of the Rings' movies.",
      content: "J.R.R. Tolkien's masterpiece, 'The Lord of the Rings,' inspired a legendary film trilogy directed by Peter Jackson. In this article, we explore the epic journey of how the epic fantasy novels were adapted into epic films. From Middle-earth lore to the making of the movies, join us on a quest to revisit 'The Lord of the Rings' on screen.",
      publishedDate: ISODate("2024-06-15T11:45:00Z"),
      lastModifiedDate: ISODate("2024-06-20T16:30:00Z"),
      tags: ["Books", "Movies", "The Lord of the Rings"],
      hasQCM: false
    },
    {
      title: "Classic to Cinematic: 'To Kill a Mockingbird' on Film",
      summary: "Discover the enduring impact of Harper Lee's 'To Kill a Mockingbird' in literature and film.",
      content: "Harper Lee's 'To Kill a Mockingbird' is a literary classic that also became a beloved film. In this article, we explore the profound impact of the novel and its cinematic adaptation. Join us in Maycomb, Alabama, as we examine the themes of justice, racism, and morality in both the written and visual forms of this timeless story.",
      publishedDate: ISODate("2024-07-10T13:15:00Z"),
      lastModifiedDate: ISODate("2024-07-15T18:50:00Z"),
      tags: ["Books", "Movies", "To Kill a Mockingbird"],
      hasQCM: false
    },
    {
      title: "From Classic Novel to Screenplay: 'Pride and Prejudice' Reimagined",
      summary: "Explore the adaptations of Jane Austen's 'Pride and Prejudice' in film and television.",
      content: "Jane Austen's 'Pride and Prejudice' has been adapted into numerous films and television series, captivating audiences with its timeless romance. In this article, we delve into the various cinematic interpretations of Elizabeth Bennet and Mr. Darcy's love story. From Colin Firth's iconic portrayal to modern retellings, discover the enduring allure of Austen's masterpiece.",
      publishedDate: ISODate("2024-08-20T08:30:00Z"),
      lastModifiedDate: ISODate("2024-08-25T14:15:00Z"),
      tags: ["Books", "Movies", "Pride and Prejudice"],
      hasQCM: false
    },
    {
      title: "The Chronicles of Narnia: From Wardrobe to Movie Screen",
      summary: "Step into the magical world of 'The Chronicles of Narnia' and its cinematic adaptations.",
      content: "C.S. Lewis's 'The Chronicles of Narnia' transported readers to a fantastical realm, and the film adaptations brought Narnia to life. In this article, we embark on a journey through the wardrobe and explore the enchanting world of Narnia on screen. Join us as we meet talking animals, face epic battles, and uncover the symbolism of this beloved series.",
      publishedDate: ISODate("2024-09-10T10:45:00Z"),
      lastModifiedDate: ISODate("2024-09-15T16:30:00Z"),
      tags: ["Books", "Movies", "Narnia"],
      hasQCM: false
    }
];
  
  // Insert the book-to-movie-related articles into the collection
db.articles.insertMany(bookToMovieArticles)
  

const catArticles = [
  {
    title: "The Fascinating World of Feline Behavior",
    summary: "Discover the intriguing behaviors of cats and what they reveal about our furry companions.",
    content: "Cats are known for their mysterious and sometimes quirky behavior. In this article, we delve into the fascinating world of feline behavior, exploring their habits, body language, and what it all means. Gain insights into your cat's mind and deepen your bond with your feline friend.",
    publishedDate: new Date("2023-09-10T08:00:00Z"),
    lastModifiedDate: new Date("2023-09-15T14:30:00Z"),
    tags: ["Cats", "Pets", "Behavior"],
    hasQCM: false,
  },
  {
    title: "Cat Breeds: A Guide to Your Furry Friends",
    summary: "Learn about various cat breeds and discover which one might be the purr-fect fit for you.",
    content: "With hundreds of cat breeds worldwide, it can be overwhelming to choose the right one for your family. This comprehensive guide provides insights into popular cat breeds, their personalities, and care requirements. Whether you're a fan of Persians, Siamese, or Maine Coons, you'll find valuable information here.",
    publishedDate: new Date("2023-09-12T10:15:00Z"),
    lastModifiedDate: new Date("2023-09-17T16:45:00Z"),
    tags: ["Cats", "Pets", "Cat Breeds"],
    hasQCM: false,
  },
  {
    title: "The Art of Cat Communication: Decoding Meows and Purrs",
    summary: "Unravel the mysteries behind your cat's vocalizations and understand what they're trying to tell you.",
    content: "Cats communicate in a variety of ways, from gentle purring to enthusiastic meowing. But what do these sounds really mean? This article explores the art of cat communication, helping you interpret your cat's vocal signals and strengthen your bond. Say goodbye to miscommunication with your feline companion!",
    publishedDate: new Date("2023-09-14T11:30:00Z"),
    lastModifiedDate: new Date("2023-09-19T13:45:00Z"),
    tags: ["Cats", "Pets", "Communication"],
    hasQCM: false,
  },
  {
    title: "Cat Care 101: Tips for a Happy and Healthy Feline Friend",
    summary: "Ensure your cat's well-being with expert tips on nutrition, grooming, and enrichment.",
    content: "Taking care of your beloved cat involves more than just feeding them. This comprehensive guide covers all aspects of cat care, including nutrition, grooming, exercise, and mental stimulation. Keep your feline friend healthy, happy, and content with these essential tips and tricks.",
    publishedDate: new Date("2023-09-16T09:45:00Z"),
    lastModifiedDate: new Date("2023-09-21T15:20:00Z"),
    tags: ["Cats", "Pets", "Cat Care"],
    hasQCM: false,
  },
  {
    title: "Feline Fine Arts: Cats in the World of Creative Expression",
    summary: "Explore the artistic representation of cats in various forms of art and culture.",
    content: "Cats have been a source of inspiration for artists, writers, and creators throughout history. This article celebrates the artistic contributions of cats to literature, painting, sculpture, and more. Discover the timeless allure of feline-themed art and how it continues to captivate our imaginations.",
    publishedDate: new Date("2023-09-18T12:00:00Z"),
    lastModifiedDate: new Date("2023-09-23T17:10:00Z"),
    tags: ["Cats", "Art", "Culture"],
    hasQCM: false,
  },
];

db.articles.insertMany(catArticles)

const weirdLawsArticles = [
  {
    title: "Strange Laws Around the Globe: Unbelievable Legal Oddities",
    summary: "Prepare to be amazed by some of the weirdest and most absurd laws from different countries.",
    content: "Laws are meant to maintain order, but some legal provisions are so bizarre that they defy logic. In this article, we take you on a journey around the world to explore some of the oddest, outdated, and downright peculiar laws ever enacted. From prohibiting the wearing of fake mustaches to regulating the ownership of pet goldfish, you won't believe these legal oddities exist.",
    publishedDate: new Date("2023-09-25T09:30:00Z"),
    lastModifiedDate: new Date("2023-09-30T14:55:00Z"),
    tags: ["Weird Laws", "Legal Oddities", "Bizarre Regulations"],
    hasQCM: false,
  },
  {
    title: "When It's Illegal to Tie Elephants to Parking Meters: Quirky U.S. Laws",
    summary: "Explore some of the strangest and outdated laws that still exist in the United States.",
    content: "The United States is known for its diverse legal landscape, and some states have laws that will leave you scratching your head. From restrictions on tying elephants to parking meters in Alabama to outlawing the possession of skunk scent glands in Tennessee, this article uncovers the quirkiest U.S. laws that are still on the books.",
    publishedDate: new Date("2023-09-27T10:20:00Z"),
    lastModifiedDate: new Date("2023-10-02T16:40:00Z"),
    tags: ["Weird Laws", "United States", "Legal Quirks"],
    hasQCM: false,
  },
  {
    title: "Legal Laughs: The World's Funniest Courtroom Moments",
    summary: "Witness hilarious courtroom antics and amusing legal anecdotes from around the globe.",
    content: "While the courtroom is typically a place of seriousness, it's not without its moments of levity. Join us as we recount some of the most comical and absurd incidents to ever occur in legal proceedings. From witty judges to unforgettable witness testimonies, these humorous courtroom tales will leave you in stitches.",
    publishedDate: new Date("2023-09-29T11:45:00Z"),
    lastModifiedDate: new Date("2023-10-04T13:15:00Z"),
    tags: ["Weird Laws", "Legal Humor", "Courtroom Antics"],
    hasQCM: false,
  },
  {
    title: "Forbidden Foods: Weird Food Laws That Will Leave You Hungry for Answers",
    summary: "Discover strange and unusual food-related laws that have left foodies baffled.",
    content: "Food is a universal pleasure, but sometimes the laws surrounding it can be utterly baffling. In this article, we explore a smorgasbord of weird food laws from around the world. From outlawing the consumption of ice cream on a Sunday to regulating the length of a pickle, these culinary restrictions will amuse and astound you.",
    publishedDate: new Date("2023-10-01T09:15:00Z"),
    lastModifiedDate: new Date("2023-10-06T15:30:00Z"),
    tags: ["Weird Laws", "Food Regulations", "Culinary Oddities"],
    hasQCM: false,
  },
  {
    title: "Laws of the Land: When You Can and Can't Walk Your Giraffe",
    summary: "Delve into the most peculiar pet ownership laws from across the globe.",
    content: "Owning exotic pets can be a tricky endeavor due to the multitude of laws regulating their ownership. This article takes you on a wild ride through the world of exotic pet ownership laws. Find out which countries allow you to walk your giraffe and which ones consider it a legal faux pas. If you've ever considered adopting an unusual pet, this article is a must-read.",
    publishedDate: new Date("2023-10-03T10:00:00Z"),
    lastModifiedDate: new Date("2023-10-08T14:45:00Z"),
    tags: ["Weird Laws", "Exotic Pets", "Pet Ownership"],
    hasQCM: false,
  },
  {
    title: "Offbeat Ordinances: The Wackiest Laws That Make You Go 'Huh?'",
    summary: "Prepare to be bewildered by a collection of the world's most peculiar and obscure laws.",
    content: "Some laws are so peculiar that they defy explanation. Join us as we uncover a treasure trove of offbeat ordinances from various countries. From regulating the volume of a duck's quack to forbidding the wearing of swimsuits in public after 8:00 PM, these laws will leave you wondering, 'What were they thinking?'",
    publishedDate: new Date("2023-10-05T11:30:00Z"),
    lastModifiedDate: new Date("2023-10-10T17:00:00Z"),
    tags: ["Weird Laws", "Obscure Ordinances", "Legal Curiosities"],
    hasQCM: false,
  },
  {
    title: "Weird and Wonderful: The Eccentric World of Strange Laws",
    summary: "Step into the eccentric realm of peculiar laws and discover the stories behind their enactment.",
    content: "Strange laws have a way of making the world a more interesting place. In this article, we embark on a journey through the eccentric world of weird and wonderful laws. From requiring citizens to smile in public in Milan to outlawing the use of red ink in Russia, these laws offer a glimpse into the quirky side of legal systems around the globe.",
    publishedDate: new Date("2023-10-07T10:15:00Z"),
    lastModifiedDate: new Date("2023-10-12T15:20:00Z"),
    tags: ["Weird Laws", "Eccentric Regulations", "Legal Oddities"],
    hasQCM: false,
  },
  {
    title: "Legal Puzzles: Solving the Enigma of Unusual Court Cases",
    summary: "Uncover the most baffling and unconventional legal cases that have perplexed judges and juries.",
    content: "Some legal cases are so peculiar that they seem like they're straight out of a mystery novel. Join us as we unravel the enigma of unusual court cases that have left both legal experts and the public scratching their heads. From disputes over haunted houses to lawsuits involving talking parrots, these legal puzzles will leave you astounded.",
    publishedDate: new Date("2023-10-09T09:45:00Z"),
    lastModifiedDate: new Date("2023-10-14T14:30:00Z"),
    tags: ["Weird Laws", "Legal Enigmas", "Unconventional Cases"],
    hasQCM: false,
  },
  {
    title: "Legal Labyrinth: Navigating the World's Most Confusing Laws",
    summary: "Explore the intricate and convoluted laws that have left citizens perplexed and lawyers puzzled.",
    content: "Not all laws are crystal clear; some are so convoluted that they seem designed to confuse. In this article, we take you on a journey through the legal labyrinth of the world's most confusing laws. From incomprehensible tax codes to paradoxical parking regulations, these laws will leave you wondering if anyone truly understands them.",
    publishedDate: new Date("2023-10-11T10:30:00Z"),
    lastModifiedDate: new Date("2023-10-16T15:45:00Z"),
    tags: ["Weird Laws", "Legal Complexity", "Confusing Regulations"],
    hasQCM: false,
  },
];

db.articles.insertMany(weirdLawsArticles)



const travelArticles = [
  {
    title: "Wanderlust Chronicles: Journeying Through Exotic Destinations",
    summary: "Embark on a virtual adventure to some of the most exotic and breathtaking travel destinations.",
    content: "Satisfy your wanderlust as we transport you to the most exotic and captivating travel destinations around the world. From the lush rainforests of Costa Rica to the serene beaches of Bali, these articles provide a virtual escape for the avid traveler. Discover hidden gems, travel tips, and cultural insights to inspire your next adventure.",
    publishedDate: new Date("2023-10-13T09:30:00Z"),
    lastModifiedDate: new Date("2023-10-18T14:55:00Z"),
    tags: ["Travel", "Exotic Destinations", "Wanderlust"],
    hasQCM: false,
  },
  {
    title: "Hidden Treasures: Exploring Lesser-Known Travel Gems",
    summary: "Uncover the charm of off-the-beaten-path travel destinations that are waiting to be discovered.",
    content: "Venture off the tourist trail and explore lesser-known travel destinations that offer a unique and authentic experience. Whether it's the quaint villages of Portugal or the rugged landscapes of Iceland, these articles highlight the hidden treasures that await intrepid travelers seeking adventure and cultural immersion.",
    publishedDate: new Date("2023-10-15T10:20:00Z"),
    lastModifiedDate: new Date("2023-10-20T16:40:00Z"),
    tags: ["Travel", "Hidden Gems", "Off the Beaten Path"],
    hasQCM: false,
  },
  {
    title: "Culinary Journeys: Tasting the World's Most Delectable Dishes",
    summary: "Embark on a gastronomic adventure as we explore the world's diverse and delicious cuisines.",
    content: "Traveling is not only about exploring new landscapes but also about savoring unique culinary delights. Join us on a gastronomic journey as we sample the most delectable dishes from different corners of the globe. From street food in Thailand to Michelin-starred dining in France, these articles will tantalize your taste buds and inspire your next foodie adventure.",
    publishedDate: new Date("2023-10-17T11:45:00Z"),
    lastModifiedDate: new Date("2023-10-22T13:15:00Z"),
    tags: ["Travel", "Cuisine", "Food Adventures"],
    hasQCM: false,
  },
  {
    title: "Solo Traveler's Guide: Embracing the Joys of Independent Exploration",
    summary: "Discover the joys and benefits of solo travel, along with expert tips for a successful journey.",
    content: "Traveling alone can be a transformative experience that allows you to discover the world at your own pace. In these articles, we celebrate the joys of solo travel and offer practical advice for those considering embarking on a solitary adventure. From safety tips to destination recommendations, you'll find everything you need to embrace the freedom of independent exploration.",
    publishedDate: new Date("2023-10-19T09:15:00Z"),
    lastModifiedDate: new Date("2023-10-24T15:30:00Z"),
    tags: ["Travel", "Solo Travel", "Adventure"],
    hasQCM: false,
  },
  {
    title: "Traveling with a Purpose: Exploring Responsible and Sustainable Tourism",
    summary: "Learn how responsible and sustainable tourism can make your travels more meaningful and impactful.",
    content: "Traveling isn't just about seeing the world; it's also about making a positive impact. These articles dive into the realm of responsible and sustainable tourism, offering insights into how you can travel mindfully, support local communities, and preserve the planet's beauty for future generations. Join us in exploring the transformative power of purposeful travel.",
    publishedDate: new Date("2023-10-21T10:00:00Z"),
    lastModifiedDate: new Date("2023-10-26T14:45:00Z"),
    tags: ["Travel", "Responsible Tourism", "Sustainability"],
    hasQCM: false,
  },
];

db.articles.insertMany(travelArticles)