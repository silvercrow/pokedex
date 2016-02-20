import template from './info.tpl.html'
export default function() {
    return {
        scope: {
          id:'=',
        },
        controller: infoComponent,
        controllerAs: 'infoCtrl',
        bindToController: true,
        template: template
    };
}
class infoComponent {
  constructor($stateParams,$http) {
    var infoCtrl = this;
        infoCtrl.id = $stateParams.id;
        infoCtrl.pokemon = {};
    $http.get('http://pokeapi.co/api/v2/pokemon/'+infoCtrl.id+'/').then(function successCallback(response) {
      console.log(response);
      infoCtrl.pokemon = response.data;
    }, function errorCallback(response) {console.log('error getting data',response)});

  }
}
