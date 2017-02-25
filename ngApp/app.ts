namespace inventory {

    angular.module('inventory', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/ngApp/views/home.html',
                controller: inventory.Controllers.HomeController,
                controllerAs: 'vm'
            })
            .state('login', {
                url: '/',
                templateUrl: '/ngApp/views/login.html',
                controller: inventory.Controllers.LoginController,
                controllerAs: 'vm'
            })
            .state('register', {
                url: '/register',
                templateUrl: '/ngApp/views/register.html',
                controller: inventory.Controllers.RegisterController,
                controllerAs: 'vm'
            })
            .state('newItem', {
                url: '/newItem',
                templateUrl: '/ngApp/views/newItem.html',
                controller: inventory.Controllers.NewItemController,
                controllerAs: 'vm'
            })
            .state('editItem', {
                url: '/editItem/:id',
                templateUrl: '/ngApp/views/editItem.html',
                controller: inventory.Controllers.EditItemController,
                controllerAs: 'vm'
              })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
