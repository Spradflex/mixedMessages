
//Quotes to pull from; 10 for each array
let quote = [
    `"The best way to get started is to quit talking and begin doing." – Walt Disney`,
    `"The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty." – Winston Churchill`,
    `"Don’t let yesterday take up too much of today." – Will Rogers`,
    `"You learn more from failure than from success. Don’t let it stop you. Failure builds character." – Unknown`,
    `"If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you." – Steve Jobs`,
    `"Imagine your life is perfect in every respect; what would it look like?" – Brian Tracy`,
    `"We generate fears while we sit. We overcome them by action." – Dr. Henry Link`,
    `"The man who has confidence in himself gains the confidence of others." – Hasidic Proverb`,
    `"Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality." – Brian Tracy`,
    `"Reading is to the mind, as exercise is to the body." – Brian Tracy`
];

let mental = [
    'Do your best to enjoy 15 minutes of sunshine.',
    'Take 30 minutes to go for a walk in nature.',
    'Do something with friends and family.',
    'Feeling stressed? Smile.',
    'Practice forgiveness.',
    'Work some omega-3 fatty acids into your diet.',
    'Spend some time with a furry friend.',
    'Has something been bothering you? Let it all out…on paper.',
    'Take time to laugh.',
    'Feeling anxious?  Take a trip down memory lane and do some coloring.'
];

let wellness = [
    'Get enough sleep',
    'Take care of your gut health with probiotics and fiber',
    'Drink some water, especially before meals',
    'Take vitamin D3 if you don’t get much sun exposure',
    'Make sure to eat enough protein',
    'Minimize your sugar intake',
    'Lift heavy things',
    'Eat eggs, yolk and all',
    'Don’t drink sugar calories'
];

const randomizeMessage = () => {
    let mixedArray = [];
    mixedArray = mixedArray.concat(quote, mental, wellness);
    let message = mixedArray[Math.floor(Math.random() * mixedArray.length)];
    return message;
};
// create  a function to display the message
function displayMessage(){
    window.document.getElementById("message").innerHTML = randomizeMessage();
}

// add event and call the display message function
window.addEventListener('click', displayMessage);