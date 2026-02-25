// Plain JavaScript logic for logo generator and contact form

document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('logo-name');
    const preview = document.getElementById('logo-preview');
    const generateBtn = document.getElementById('generate-logo');

    generateBtn.addEventListener('click', function() {
        const name = nameInput.value || 'Your Brand';
        const canvas = document.createElement('canvas');
        canvas.width = 400;
        canvas.height = 200;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#00e5ff';
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.font = 'bold 48px Arial';
        ctx.fillStyle = '#0d0d14';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(name, canvas.width/2, canvas.height/2);
        const url = canvas.toDataURL('image/png');
        preview.innerHTML = `<img src="${url}" style="max-width:100%;" />
            <a href="${url}" download="logo.png" class="cta-btn" style="margin-top:1rem; display:inline-block">Download</a>`;
    });

    // contact form with local feedback storage
    const form = document.getElementById('contact-form');
    const feedbackList = document.getElementById('feedback-items');

    function loadFeedback() {
        const feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
        feedbackList.innerHTML = '';
        feedbacks.forEach(f => {
            const li = document.createElement('li');
            li.textContent = `${f.name} (${f.email}): ${f.message}`;
            feedbackList.appendChild(li);
        });
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const data = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        };
        const feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
        feedbacks.push(data);
        localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
        alert('Thanks for your feedback!');
        form.reset();
        loadFeedback();
    });

    // load existing feedback on page open
    loadFeedback();
});