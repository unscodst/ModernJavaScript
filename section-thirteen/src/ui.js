class UI {
    constructor() {
        this.post = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.forState = 'add';
    }

    showPosts(posts) {
        let output = '';

        posts.forEach(post => {
            output += `
                <div class="card mb-3">
                    <div class="card-body">
                        <h4 class="card-title">${post.title}</h4>
                        <p class="card-text">${post.body}</p>
                        <a href="#" class="edit card-link" data-id="${post.id}">
                            <i class="fa fa-pencil"></i>
                        </a>
                        <a href="#" class="delete card-link" data-id="${post.id}">
                            <i class="fa fa-remove"></i>
                        </a>
                    </div>
                </div>
            `
        });
        this.post.innerHTML = output;
    }
    // Show alert after 3 seconds
    showAlert(message, className) {
        this.clearAlert();

        // Create Div
        const alertDiv = document.createElement('div');
        // Add Classes
        alertDiv.className = className;
        // Add Message
        alertDiv.appendChild(document.createTextNode(message));
        // Get Parent
        const container = document.querySelector('.postsContainer');
        //Get Posts
        const posts = document.querySelector('#posts');
        // Insert Alert Div
        container.insertBefore(alertDiv, posts);

        // Timeout 
        setTimeout(() => {
            this.clearAlert();
        },3000)
    }

    // Clear Alert Div
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if(currentAlert) {
            currentAlert.remove();
        }
    }

    // Clear input fields
    clearInputs() {
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }

    // Fill form to edit
    fillForm(data) {
        this.titleInput.value = data.title;
        this.bodyInput.value = data.body;
        this.idInput.value = data.id;
        
        // Change State
        this.changeFormState('edit');
    }

    // Clear ID Hidden Value
    clearIdInput() {
        this.idInput.value = '';
    }
    // Change Form State
    changeFormState(state) {
        if(state === 'edit') {
            this.postSubmit.textContent = 'Update Post';
            this.postSubmit.className = 'post-submit btn btn-warning btn-block';

            // Create Cancel Button
            const button = document.createElement('button');
            button.className = 'post-cancel btn btn-light btn-block';
            button.appendChild(document.createTextNode('Cancel Edit'));

            // Get Parent
            const cardForm = document.querySelector('.card-form');
            // Get Element to Insert Before
            const formEnd = document.querySelector('.form-end');
            // Insert Cancel Button
            cardForm.insertBefore(button, formEnd)
        } else {
            this.postSubmit.textContent = 'Post It';
            this.postSubmit.className = 'post-submit btn btn-primary btn-block';

            // Remove Cancel Button if it exists
            if(document.querySelector('.post-cancel')) {
                document.querySelector('.post-cancel').remove();
            }

            // Clear ID from hidden field
            this.clearIdInput();
            // Clear Inputs
            this.clearInputs();
        }
    }
}

export const ui = new UI();