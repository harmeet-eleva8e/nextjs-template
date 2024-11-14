const API_PREFIX = "/api";

const { NEXT_PUBLIC_SERVER_URL } = process.env;

export const SERVER_URL = NEXT_PUBLIC_SERVER_URL + API_PREFIX;
