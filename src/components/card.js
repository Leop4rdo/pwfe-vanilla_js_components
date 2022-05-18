class Card extends HTMLElement {
    props = {
        profileImg: "",
        nome: "",
        turma: "",
        status: "",
    };

    constructor() {
        super();
        this.getProps(this.dataset);
        this.build();
    }

    getProps({ profileImg, nome, turma, status }) {
        this.props.profileImg = profileImg;
        this.props.nome = nome;
        this.props.turma = turma;
        this.props.status = status;
    }

    build() {
        const shadowDOM = this.attachShadow({ mode: "open" });

        shadowDOM.appendChild(this.createStyle());
        shadowDOM.appendChild(this.createStructure());
    }

    createStyle() {
        const style = document.createElement("style");

        const { profileImg, status } = this.props;

        style.textContent = `
            .card {
                height: clamp(150px, 25vw, 250px);
                width: clamp(150px, 25vw, 250px);

                background-color:  ${this.getStatusColor()};
            
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;

                transition: transform 0.25s ease-out;

                border-radius: 20px;
            }

            .card:hover {
                transform: scale(1.1);
            }

            .card-text {
                width: 50%;
                padding: 6px;
                text-align: center;

                font-size: clamp(.75rem, 2vw, 1rem);
                color: white;
                background-color: #575268;
                border-radius: 12px;
                box-shadow: 2px 3px 24px #23193d5b;
            }
            
            .card-image {
                background-color: white;
                width: 50%;
                height: 50%;
                border-radius: 50%;
                background-image: url("${profileImg}");
                background-size: cover;
            
                box-shadow: inset 0px 0px 8px #23193d5b;
            }
        `;

        return style;
    }

    createStructure() {
        const card = document.createElement("div");
        card.classList.add("card");

        const { nome, turma } = this.props;

        card.innerHTML = `
            <div class="card-text">${nome}</div>
            <div class="card-image"></div>
            <div class="card-text">${turma}</div>
        `;

        return card;
    }

    getStatusColor() {
        const { status } = this.props;
        let color;

        if (status === "aprovado") color = "#ABE9B3";
        else if (status === "desistente") color = "#FAE3B0";
        else if (status === "reprovado") color = "#F28FAD";
        else color = "#FFF";

        console.log(status, color);
        return color;
    }
}

customElements.define("card-aluno", Card);
