const Emotions = [
    "Happy",
    "Angry",
    "Curious",
    "Depressed",
    "Heartbroken",
    "In love",
];

export const suggestions = Emotions.map((emotion, index) => (
    { 
        value: index, label: emotion 
    }
))