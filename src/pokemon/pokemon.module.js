import angular from 'angular';

import { routing } from './pokemon.config.js';

import infoComponent from './info/info-component';

export default angular
    .module('app.pokemon', [])
    .config(routing)
    .directive('infoComponent', infoComponent)
    .name;
