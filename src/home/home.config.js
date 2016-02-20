export function routing($stateProvider) {

    $stateProvider
        .state('app.home', {
            url: '/home',
            template: '<div list-component></div>'
        });
}
