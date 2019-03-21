const questions = [
    {
        question: "How do you eat a sandwich?",
        answers: [
            {
                text: "Bravely",
                points: {gryfindor: 1}
            },
            {
                text: "Evilly",
                points: {slytherin: 1}
            },
            {
                text: "Smartly",
                points: {ravenclaw: 1}
            },
            {
                text: "Fast",
                points: {hufflepuff: 1}
            }
        ]
    },
    {
        question: "Which position in Quidditch would you want to play?",
        answers: [
            {
                text: "Keeper",
                points: {gryfindor: 1}
            },
            {
                text: "Beater",
                points: {slytherin: 1}
            },
            {
                text: "Seeker",
                points: {ravenclaw: 1}
            },
            {
                text: "Chaser",
                points: {hufflepuff: 1}
            }
        ]
    },
].map(q => {
    // Add noise to answer points
    q.answers.forEach((a, idx) => Object.keys(a.points).forEach(key => q.answers[idx].points[key] += (Math.random() - 0.5) / 100));
    return q;
});

export default questions;
