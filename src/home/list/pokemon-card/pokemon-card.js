import template from './card.tpl.html'
export default function() {
    return {
        scope: {
          pokemon : '='
        },
        controller: pokemonCard,
        controllerAs: 'pokemonCtrl',
        bindToController: true,
        template: template
    };
}
class pokemonCard {
    constructor() {
      var pokemonCtrl = this;
    }
}
