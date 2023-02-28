import { initializeAsIncorrect } from "./utils";

const WORDS = [
    "BARCO",
    "CABLE",
    "CASCO",
    "CHILE",
    "FAVOR",
    "JULIO",
    "NARIZ",
    "NOTAS",
    "PASTO",
    "PERRO",
    "PILAR",
    "SILLA",
    "TIGRE",
    "PROSA",
    "VALOR",
    "NIVEL",
    "HADAS",
    "BORDE",
    "PUTAS",
    "BANCO",
    "YEGUA",
    "VERSO",
    "CERDO",
    "GATOS",
    "PERRO",
    "CUEVA",
    "FRUTA",
    "HUEVO",
    "RIFLE",
    "ARENA",
];

const RANDOM = parseInt(Math.random() * WORDS.length);

const MAX_WORD_LENGTH = 5;
const MAX_ATTEMPS = 6;
const ANSWER = WORDS[RANDOM];

const INITIAL_VALUE = " "
    .repeat(MAX_WORD_LENGTH)
    .split("")
    .map(initializeAsIncorrect);

const INITIAL_STATE = new Array(MAX_ATTEMPS).fill(INITIAL_VALUE);

export { ANSWER, INITIAL_STATE, MAX_ATTEMPS, MAX_WORD_LENGTH };
