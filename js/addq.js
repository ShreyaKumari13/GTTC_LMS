document.getElementById('add-btn').addEventListener('click', function() {
    addQuestion();
});

document.getElementById('save-btn').addEventListener('click', function() {
    saveQuestions();
});

function addQuestion() {
    const questionContainer = document.getElementById('question-container');
    const qaBlockCount = document.getElementsByClassName('qa-block').length + 1;

    // Create a new QA block
    const qaBlock = document.createElement('div');
    qaBlock.className = 'qa-block';

    // Create the question label and input
    const questionLabel = document.createElement('label');
    questionLabel.textContent = `Question ${qaBlockCount}:`;
    questionLabel.className = 'question-label';

    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'bx bx-trash delete-icon';

    const questionInput = document.createElement('input');
    questionInput.type = 'text';
    questionInput.name = `question${qaBlockCount}`;
    questionInput.placeholder = 'Enter your question';

    // Create the options block
    const optionBlock = document.createElement('div');
    optionBlock.className = 'option-block';

    const optionLabel = document.createElement('label');
    optionLabel.textContent = 'Options:';

    optionBlock.appendChild(optionLabel);

    for (let i = 1; i <= 4; i++) {
        const optionInputRadio = document.createElement('input');
        optionInputRadio.type = 'radio';
        optionInputRadio.name = `correct${qaBlockCount}`;
        optionInputRadio.value = `option${i}`;

        const optionInputText = document.createElement('input');
        optionInputText.type = 'text';
        optionInputText.name = `question${qaBlockCount}_option${i}`;
        optionInputText.placeholder = `Option ${i}`;

        optionBlock.appendChild(optionInputRadio);
        optionBlock.appendChild(optionInputText);
    }

    // Append the elements to the new QA block
    qaBlock.appendChild(questionLabel);
    qaBlock.appendChild(deleteIcon);
    qaBlock.appendChild(questionInput);
    qaBlock.appendChild(optionBlock);

    // Append the new QA block to the question container
    questionContainer.appendChild(qaBlock);

    // Add delete functionality
    deleteIcon.addEventListener('click', function() {
        qaBlock.remove();
        updateQuestionNumbers();
    });
}

function updateQuestionNumbers() {
    const qaBlocks = document.getElementsByClassName('qa-block');
    for (let i = 0; i < qaBlocks.length; i++) {
        const questionLabel = qaBlocks[i].getElementsByClassName('question-label')[0];
        questionLabel.textContent = `Question ${i + 1}:`;
        qaBlocks[i].querySelectorAll('.option-block input[type="radio"]').forEach(radio => {
            radio.name = `correct${i + 1}`;
        });
        qaBlocks[i].querySelectorAll('.option-block input[type="text"]').forEach((text, index) => {
            text.name = `question${i + 1}_option${index + 1}`;
        });
    }
}

// Add delete functionality to existing delete icons
document.querySelectorAll('.delete-icon').forEach(function(deleteIcon) {
    deleteIcon.addEventListener('click', function() {
        deleteIcon.parentElement.remove();
        updateQuestionNumbers();
    });
});

function saveQuestions() {
    const qaBlocks = document.getElementsByClassName('qa-block');
    const questions = [];
    
    for (let i = 0; i < qaBlocks.length; i++) {
        const questionInput = qaBlocks[i].querySelector(`input[name="question${i + 1}"]`);
        const options = [];
        qaBlocks[i].querySelectorAll('.option-block input[type="text"]').forEach((optionInput, index) => {
            const optionValue = optionInput.value;
            const isCorrect = qaBlocks[i].querySelector(`input[name="correct${i + 1}"][value="option${index + 1}"]`).checked;
            options.push({ value: optionValue, correct: isCorrect });
        });
        questions.push({ question: questionInput.value, options });
    }

    // Here you can save questions to your server using AJAX or any other method
    // For demonstration, we are just logging the questions to the console
    console.log(questions);

    // Display popup message
    showPopup();
}

function showPopup() {
    const popup = document.createElement('div');
    popup.className = 'popup';
    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';
    const popupText = document.createElement('p');
    popupText.textContent = 'Test Updated';
    const popupButton = document.createElement('button');
    popupButton.textContent = 'OK';
    popupButton.addEventListener('click', function() {
        window.location.href = './edittest.html';
    });
    
    popupContent.appendChild(popupText);
    popupContent.appendChild(popupButton);
    popup.appendChild(popupContent);
    document.body.appendChild(popup);
}