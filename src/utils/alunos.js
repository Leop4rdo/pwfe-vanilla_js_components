"use strict";

const baseURL = "https://testeleonid.herokuapp.com/alunos";

export const getAllAlunos = async () => {
    const res = await fetch(baseURL);
    return await res.json();
};
