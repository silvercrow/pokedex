import template from './list.tpl.html'
export default function() {
    return {
        scope: {},
        controller: listComponent,
        controllerAs: 'listCtrl',
        bindToController: true,
        template: template
    };
}
class listComponent {
  constructor($http) {
    var listCtrl = this;
    listCtrl.pokemons = [];
    $http.get('http://pokeapi.co/api/v2/pokedex/2/').then(function successCallback(response) {
      listCtrl.pokemons = response.data.pokemon_entries;
    }, function errorCallback(response) {console.log('error getting data',response)});
  }
}
