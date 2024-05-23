import { Article } from "./types";


export function introduction(): string {
    const introductions = [
        "Voici l'actualité en France:",
        "Bien sûr! Voici les nouvelles.",
        "Voici ce qui se passe.",
    ];


    return introductions[Math.floor(Math.random() * introductions.length)];
}

export function articleSummary(article: Article): string {
    const possibilities = [
        `Selon ${article.source.name}, ${article.description}.`,
        `${article.source.name} écrit ${article.title}.`,
        `${article.author} chez ${article.source.name} a écrit: ${article.title}.`,
        `Le nouvel article de ${article.source.name} dit: ${article.title}.`,
    ];
    
    return possibilities[Math.floor(Math.random() * possibilities.length)];
}