function createQuiz(quizCount) {
    const container = document.querySelector('.quiz-content');
    container.innerHTML = ''; // 기존 내용을 지우고 시작
    for (let i = 1; i <= quizCount; i++) {
        const question = document.createElement('div');
        question.classList.add('quiz-question');
        question.textContent = `Question ${i}: Your question text here.`;
        container.appendChild(question);
    }
}



document.querySelector('.btn-quiz-maker').addEventListener('click', function() {
    createQuiz(20); // 문항을 동적으로 생성
});