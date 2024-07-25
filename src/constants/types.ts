export enum Disciplines {
    TiroAoArco = "Tiro ao Arco",
    Handebol = "Handebol",
    Futebol = "Futebol",
    TiroEsportivo = "Tiro Esportivo",
    Volei = "Vôlei",
    Badminton = "Badminton",
    Basquete = "Basquete",
    TenisDeMesa = "Tênis de Mesa",
    VoleiDePraia = "Vôlei de Praia",
}

export enum Nation {
    Espanha = "Espanha",
    Nigeria = "Nigeria",
    Italia = "Italia",
    Tailandia = "Tailandia",
    França = "França",
    Marrocos = "Marrocos",
}

export type Game = {
    id?: string;
    player?: string;
    discipline: Disciplines;
    stage?: string;
    against?: Nation,
    date: Date;
}

export enum Filters {
    "Hoje" = "hoje",
    "Amanhã" = "amanha",
    "Esta Semana" = "esta-semana",
    "Próxima Semana" = "proxima-semana",
}