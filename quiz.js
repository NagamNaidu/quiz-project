let question = [
    {
        id: 1,
        question: "what is the full form of ram?",
        answer: "random access memory",
        options: [
            "random access memory",
            "run accept memory",
            "random allow memory",
            "none of these"
        ]
    },
    {
        id: 2,
        question: "what is the full form of ai?",
        answer: "artificial intelligence",
        options: [
            "random access memory",
            "artificial intelligence",
            "random allow memory",
            "none of these"
        ]
    },
    {
        id: 3,
        question: "what is the full form of rom?",
        answer: "read only memory",
        options: [
            "random access memory",
            "run accept memory",
            "read only memory",
            "none of these"
        ]
    },
    {
        id: 4,
        question: "what is the full form of pl?",
        answer: "python language",
        options: [
            "random access memory",
            "python language",
            "random allow memory",
            "none of these"
        ]
    },
    {
        id: 5,
        question: "what is the full form of bt?",
        answer: "button",
        options: [
            "random access memory",
            "run accept memory",
            "button",
            "none of these"
        ]
    },
    {
        id: 6,
        question: "what is the full form of gb?",
        answer: "giga byte",
        options: [
            "giga byte",
            "run accept memory",
            "random allow memory",
            "none of these"
        ]
    },
    {
        id: 7,
        question: "what is the full form of vs?",
        answer: "visual studio",
        options: [
            "random access memory",
            "run accept memory",
            "visual studio",
            "none of these"
        ]
    },
    {
        id: 8,
        question: "what is the full form of bb?",
        answer: "bush bottom",
        options: [
            "bush bottom",
            "run accept memory",
            "random allow memory",
            "none of these"
        ]
    },
    {
        id: 9,
        question: "what is the full form of ll?",
        answer: "left line",
        options: [
            "random access memory",
            "run accept memory",
            "left line",
            "none of these"
        ]
    },
    {
        id: 10,
        question: "what is the full form of rl?",
        answer: "right line",
        options: [
            "random access memory",
            "right line",
            "random allow memory",
            "none of these"
        ]
    }
];

let question_count = 0;
let points = 0;

window.onload = function() {
    show(question_count);
};

function show(count) {
    let questionElement = document.getElementById("questions");
    let [first, second, third, fourth] = question[count].options;

    questionElement.innerHTML = `<h2>Q${count + 1}. ${question[count].question}</h2>
        <ul class="option_group">
            <li class="option">${first}</li>
            <li class="option">${second}</li>
            <li class="option">${third}</li>
            <li class="option">${fourth}</li>
        </ul>`;

    toggleActive();
}

function toggleActive() {
    let options = document.querySelectorAll("li.option");

    options.forEach(option => {
        option.onclick = function() {
            options.forEach(opt => {
                opt.classList.remove("active");
            });
            option.classList.add("active");
        };
    });
}

function next() {
    // Check if any option is selected
    let activeOption = document.querySelector("li.option.active");
    if (!activeOption) {
        alert("Please select an option before proceeding.");
        return;
    }

    let user_answer = activeOption.innerHTML;

    // Compare with the correct answer
    if (user_answer === question[question_count].answer) {
        points += 10;
        sessionStorage.setItem("points", points);
    }

    // Move to the next question or end the quiz
    if (question_count === question.length - 1) {
        location.href = "final.html";
    } else {
        question_count++;
        show(question_count);
    }
}