import angular from 'angular';

import { routing } from './home.config.js';
import listComponent from './list/list-component';
import pokemonCard from './list/pokemon-card/pokemon-card';

export default angular
    .module('app.home', [])
    .config(routing)
    .directive('listComponent', listComponent)
    .directive('pokemonCard', pokemonCard)
    .name;
