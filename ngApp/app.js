var inventory;
(function (inventory) {
    angular.module('inventory', ['ui.router', 'ngResource', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
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
            .state('newVendor', {
            url: '/newVendor',
            templateUrl: '/ngApp/views/newVendor.html',
            controller: inventory.Controllers.NewVendorController,
            controllerAs: 'vm'
        })
            .state('editVendor', {
            url: '/editVendor/:id',
            templateUrl: '/ngApp/views/editVendor.html',
            controller: inventory.Controllers.EditVendorController,
            controllerAs: 'vm'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    });
})(inventory || (inventory = {}));
