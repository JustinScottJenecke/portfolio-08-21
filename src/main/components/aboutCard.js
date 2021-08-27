const template = document.createElement('template');
template.innerHTML = `
    <style>
        .card {
            position: relative;
            width: 300px;
            height: 300px;
        }

        .content {
            height: 100%;
            width: 100%;
            background-color: red;
        }
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: rgb(0, 0, 0);
            color: white;
        }

        .card:hover > .overlay {
            display: none
        }
    </style>

    <div class="card">
        <div class="content">
            <h1 id='title'></h1>
            <p id='body'></p>
        </div>
        <div class="overlay">
            <h1 id='name'></h1>
        </div>
    </div>
`;

class AboutCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));       
        this.shadowRoot.querySelector('#name').innerHTML = this.getAttribute('name');
        this.shadowRoot.querySelector('#title').innerHTML = this.getAttribute('title');
        this.shadowRoot.querySelector('#body').innerHTML = this.getAttribute('body');        
    }
}

window.customElements.define('card-about', AboutCard);