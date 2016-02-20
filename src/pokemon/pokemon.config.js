export function routing($stateProvider) {
    $stateProvider
        .state('app.pokemon', {
            url: '/pokemon/:id',
            controller: pokemonCtrl,
            controllerAs: 'pokemonCtrl',
            bindToController: true,
            template: '<div info-component id="pokemonCtrl.id"></div>'
        });
      class pokemonCtrl{
        constructor(stateParams){
          var pokemonCtrl = this;
             pokemonCtrl.id = $stateParams.id;
        }
      }
}
