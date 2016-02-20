//Getting our Base styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
//Getting app Style TODO:implement dynamic loading based on combentions
import './app.scss';
import bootstrap from 'bootstrap';
import angular from 'angular';
import uirouter from 'angular-ui-router';

//App Routing
import { routing, routingEventsLogger } from './app.config';

//Modules Importing
import home from './home/home.module';
import pokemon from './pokemon/pokemon.module';

const DEBUG = false;
const app = angular
    .module('app', [uirouter, home, pokemon])
    .config(routing);

if (DEBUG) {
    app
        .run(routingEventsLogger)
    ;
}
