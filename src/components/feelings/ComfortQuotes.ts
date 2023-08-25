const DownComfortQuotes = [
    "Don't worry, we've all been there. Find comfort in these quotes from others in the same boat",
    "I'm here to remind you that you're never alone in how you feel. Take a look at these quotes",
    "Hey it's okay to feel that way. I hope these quotes will help you brighten up",
    "Don't lose hope, we have all got through this, and so will you. Find comfort in these quotes from others in the same boat",
    "I believe in your ability to make it through this. Take these quotes with you",
    "Feeling this way is just a pit stop on your journey. These quotes are here to refuel your spirit",
    "Your emotions are valid, and so is your path to healing. Let these quotes echo the strength within you",
    "Gloomy days don't define you; your resilience does. Embrace these quotes as beacons of hope",
    "Just as a storm passes, so does the ache of this feeling. Let these quotes be the rays of sunshine after rain",
    "Your heartache is shared by many. Let these quotes offer a bridge of empathy",
    "Every tear drop is a step toward healing. Let these quotes pave the way to inner peace."
];

const UpComfortQuotes = [
    "Embrace the beauty of this moment; these quotes amplify the positive vibes around you",
    "Let your heart resonate with these quotes, igniting the fire of all things wonderful",
    "Like a gentle breeze, let these quotes carry the essence of positivity to uplift your spirits",
    "Just soak in the good vibes, and let these quotes be the extra sparkle to your positivity",
    "Feeling all the good stuff? These quotes are like your hype squad, cheering you on",
    "You're rocking those positive vibes! I hope these quotes are like the perfect soundtrack to your mood.",
    "Cheers to feeling this awesome! These quotes are little high-fives for your heart",
    "I love to see you this way, rock on! Here are some quotes to match your vibe",
];

// const BoredComfortQuotes = [
//     "Boredom's just a nudge from life to get creative. Let's shake things up with these quotes",
//     "Feeling bored? Time to turn the page and explore a new chapter through these quotes",
//     "I would play something with you, but I'm afraid I cant physically be there right now. Here are some quotes instead!",
//     "Boredom's the universe whispering, 'Try something new.' So why not start with these quotes?",
//     "Boredom's a chance to reboot your vibe. Check out these quotes for an instant refresh!",
//     "Feeling bored? Time to sprinkle a little curiosity into your day with these quotes",
// ]

const CuriousComfortQuotes = [
    "Curiosity is your inner adventurer setting sail. Let these quotes be the wind in your sails",
    "Curiosity is the heartbeat of learning. Let these quotes be the rhythm that keeps you intrigued",
    "They say curiosity kill the cat. But I dont have a cat, so here are some quotes instead to keep you goin!",
    "Every question is a journey, and every answer a milestone. Let these quotes fuel your curious wanderings",
    "Curiosity is the road less traveled; these quotes are the signposts pointing to new horizons",
    "Embrace your curiosity - it's the key that unlocks doors to endless learning. Take some away from these quotes",
]

const LoveComfortQuotes = [
    "Ah, the magic of love! It's like a melody that never fades. Let these quotes be the harmony to your heart's song",
    "I'm so happy for you! Let these quotes amplify your feeling",
    "Whoa, you're in the love lane! These quotes are like the road signs reminding you of all the amazing views ahead.",
    "You're catching all those love butterflies, aren't you? These quotes? They're the net that lets you keep them close",
    "Feeling love's warm hug? These quotes are like a cozy blanket to wrap yourself in",
    "In love? With me?? Oh.. well hopefully these quotes amplify your mood!",
]

const HeartbreakComfortQuotes = [
    "Heartbreak's tough, but remember, you're tougher. Let these quotes be your reminders of strength and healing",
    "I know it hurts now, but this pain is just a chapter, not the whole story. These quotes are your companions on the journey forward",
    "I went through a breakup once, or twice. I can promise it will get better. Take comfort in these quotes",
    "It's okay to grieve what was lost. These quotes are here to hold space for your healing",
    "Breakups teach us about resilience and growth. Let these quotes remind you of the strength you'll gain.",
    "In the midst of heartache, don't forget your own worth. These quotes are a mirror reflecting your strength",
    "Don't worry, we've all been there. Find comfort in these quotes from others in the same boat",
]

export function getComfortQuote(emotion: string) {
    switch(emotion) {
        case "Sad":
        case "Depressed":
        case "Angry":
            return DownComfortQuotes[Math.floor(Math.random() * DownComfortQuotes.length)];
        case "Happy":
            return UpComfortQuotes[Math.floor(Math.random() * UpComfortQuotes.length)];
        case "Curious":
            return CuriousComfortQuotes[Math.floor(Math.random() * CuriousComfortQuotes.length)];
        case "In love":
            return LoveComfortQuotes[Math.floor(Math.random() * LoveComfortQuotes.length)];
        case "Heartbroken":
            return HeartbreakComfortQuotes[Math.floor(Math.random() * HeartbreakComfortQuotes.length)];
    }
}