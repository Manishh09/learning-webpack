import getUsers from "./users.js";
import './styles/main.scss'; // configure loaders in webpack and  build 

const userFunc = getUsers();

console.table(userFunc);
