const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const quotes = [
  {
    "game": "God of War (2018)",
    "character": "Kratos",
    "quote": "Boy... you are not ready."
  },
  {
    "game": "God of War: Ragnarok",
    "character": "Kratos",
    "quote": "Don't be sorry. Be better."
  },
  {
    "game": "Red Dead Redemption 2",
    "character": "Arthur Morgan",
    "quote": "I gave you all I had."
  },
  {
    "game": "Red Dead Redemption",
    "character": "John Marston",
    "quote": "We can't change what's done. We can only move on."
  },
  {
    "game": "The Legend of Zelda: Breath of the Wild",
    "character": "Zelda",
    "quote": "Courage need not be remembered, for it is never forgotten."
  },
  {
    "game": "The Legend of Zelda: Ocarina of Time",
    "character": "Sheik (Zelda)",
    "quote": "The flow of time is always cruel..."
  },
  {
    "game": "The Witcher 3: Wild Hunt",
    "character": "Geralt of Rivia",
    "quote": "Evil is evil. Lesser, greater, middling... makes no difference."
  },
  {
    "game": "The Last of Us",
    "character": "Joel",
    "quote": "You have no idea what loss is."
  },
  {
    "game": "The Last of Us Part II",
    "character": "Ellie",
    "quote": "I'm gonna find and I'm gonna kill every last one of them."
  },
  {
    "game": "Cyberpunk 2077",
    "character": "Johnny Silverhand",
    "quote": "Wake the f*** up, Samurai. We have a city to burn."
  },
  {
    "game": "Horizon Zero Dawn",
    "character": "Aloy",
    "quote": "My life... it was built on lies. Lies of the Old Ones."
  },
  {
    "game": "Mass Effect 2",
    "character": "Commander Shepard",
    "quote": "I'm Commander Shepard, and this is my favorite store on the Citadel."
  },
  {
    "game": "Bioshock Infinite",
    "character": "Booker DeWitt",
    "quote": "Bring us the girl, and wipe away the debt."
  },
  {
    "game": "Dark Souls",
    "character": "Oscar, Knight of Astora",
    "quote": "Thou who art Undead, art chosen..."
  },
  {
    "game": "Bloodborne",
    "character": "The Doll",
    "quote": "Welcome home, good hunter. What is it you desire?"
  },
  {
    "game": "Elden Ring",
    "character": "Melina",
    "quote": "I am Melina. I offer you an accord."
  },
  {
    "game": "Elden Ring",
    "character": "Ranni the Witch",
    "quote": "Let us go together, my dear consort. My dear eternal."
  },
  {
    "game": "Assassin's Creed II",
    "character": "Ezio Auditore",
    "quote": "Requiescat in pace."
  },
  {
    "game": "Assassin's Creed IV: Black Flag",
    "character": "Edward Kenway",
    "quote": "I’ve seen the observatory, and I know its power. You'd use that power for evil."
  },
  {
    "game": "Final Fantasy VII",
    "character": "Sephiroth",
    "quote": "What I want, Cloud, is to sail the darkness of the cosmos with this planet as my vessel."
  },
  {
    "game": "Final Fantasy X",
    "character": "Auron",
    "quote": "This is your story. It all begins here."
  },
  {
    "game": "Halo 3",
    "character": "Master Chief",
    "quote": "Wake me... when you need me."
  },
  {
    "game": "Halo: Combat Evolved",
    "character": "Cortana",
    "quote": "Don't make a girl a promise, if you know you can't keep it."
  },
  {
    "game": "Metal Gear Solid 3: Snake Eater",
    "character": "The Boss",
    "quote": "Loyalty to the end. And what a splendid way to end it all."
  },
  {
    "game": "Metal Gear Solid",
    "character": "Solid Snake",
    "quote": "War has changed."
  },
  {
    "game": "Uncharted 4: A Thief's End",
    "character": "Nathan Drake",
    "quote": "Greatness from small beginnings."
  },
  {
    "game": "Uncharted 2: Among Thieves",
    "character": "Nathan Drake",
    "quote": "You’ve got to ask yourself: What’s worth it?"
  },
  {
    "game": "Death Stranding",
    "character": "Sam Porter Bridges",
    "quote": "I'm a delivery man. That's all."
  },
  {
    "game": "Ghost of Tsushima",
    "character": "Jin Sakai",
    "quote": "I am not your son. I am the Ghost."
  },
  {
    "game": "Sekiro: Shadows Die Twice",
    "character": "Wolf",
    "quote": "My lord, I have come for you. This... is your final chance."
  }
];

app.get("/get-quote", (req, res) => {
  let r = parseInt(Math.random() * quotes.length);
  res.json(quotes[r]);
});

app.post("/post-quote", (req, res) => {
  const { game, character, quote } = req.body;
  if (!game || !character || !quote) res.status(400).json({ error: "Missing Fields" });
  console.log(quotes.length);
  quotes.push({ game, character, quote });
  console.log(quotes.length);
  res.json({ message: "Quote added successfully" });
});

app.listen(8000, () => {
  console.log(`Server running at port 8000`)
});