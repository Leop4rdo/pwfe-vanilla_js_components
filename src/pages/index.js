"use strict";

import { getAllAlunos } from "../utils/alunos.js";

const cardContainer = document.getElementById("card-container");

const loadCards = async () => {
    const alunos = await getAllAlunos();

    const cards = alunos.map(({ nome, turma, foto, status }) => {
        return `<card-aluno data-profile-img="${foto}" data-turma="${turma}" data-nome="${nome}" data-status="${status}"></card-aluno>`;
    });

    cardContainer.innerHTML = cards.join("");
};

loadCards();
