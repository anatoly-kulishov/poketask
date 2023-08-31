import axios from 'axios';

export const baseInstance = axios.create({
  baseURL: 'https://pokeapi.co/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
