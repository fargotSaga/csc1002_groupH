// Create modal for displaying more info on team member
document.querySelectorAll('.card-img-top').forEach(image => {
    image.addEventListener('click', function () {
        const teamName = this.closest('.card').querySelector('.card-title').textContent;
        const bioText = this.closest('.card').querySelector('.card-text').textContent;
        
        // Show the modal with detailed information
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h3>${teamName}</h3>
                <p>${bioText}</p>
            </div>
        `;
        document.body.appendChild(modal);

        // Close modal
        modal.querySelector('.close-btn').addEventListener('click', () => {
            modal.remove();
        });

        // Close modal on clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    });
});
