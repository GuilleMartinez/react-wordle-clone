import { initializeAsIncorrect } from "./utils";

const WORDS = [
  "ALTAR",
  "ARENA",
  "BANCO",
  "BARCO",
  "BESOS",
  "BORDE",
  "BOTAS",
  "CABLE",
  "CASCO",
  "CERDO",
  "CUEVA",
  "ÉTICA",
  "ÉXITO",
  "FAVOR",
  "FRUTA",
  "GATOS",
  "HADAS",
  "HUEVO",
  "LOTEO",
  "LOTES",
  "NARIZ",
  "NIVEL",
  "NOTAS",
  "ONZAS",
  "OPERA",
  "PASTO",
  "PAVOS",
  "PERRO",
  "PILAR",
  "PROSA",
  "RAYOS",
  "REINO",
  "RIFLE",
  "RUNAS",
  "SILLA",
  "SUELA",
  "TEJAS",
  "TEMEN",
  "TIGRE",
  "TONOS",
  "TRONO",
  "VALOR",
  "VASOS",
  "VERDE",
  "VERSO",
  "VETAS",
  "VIDAS",
  "YEGUA",
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
