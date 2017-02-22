var inventory;
(function (inventory) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(itemService, $window, $state, $location) {
                this.itemService = itemService;
                this.$window = $window;
                this.$state = $state;
                this.$location = $location;
                this.items = this.itemService.list();
            }
            HomeController.prototype.deleteItem = function (id) {
                var _this = this;
                this.itemService.deleteItem(id).then(function () {
                    _this.$window.location.reload();
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var NewItemController = (function () {
            function NewItemController(itemService, $state) {
                this.itemService = itemService;
                this.$state = $state;
            }
            NewItemController.prototype.saveItem = function () {
                var _this = this;
                this.itemService.saveItem(this.item).then(function () {
                    _this.$state.go('home');
                });
            };
            return NewItemController;
        }());
        Controllers.NewItemController = NewItemController;
        var EditItemController = (function () {
            function EditItemController(itemService, $state, $stateParams) {
                this.itemService = itemService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                if ($stateParams) {
                    this.id = $stateParams['id'];
                }
            }
            EditItemController.prototype.editItem = function () {
                var _this = this;
                this.item._id = this.id;
                this.itemService.saveItem(this.item).then(function () {
                    _this.$state.go('home');
                });
            };
            return EditItemController;
        }());
        Controllers.EditItemController = EditItemController;
        var NewVendorController = (function () {
            function NewVendorController(vendorService, $state) {
                this.vendorService = vendorService;
                this.$state = $state;
            }
            NewVendorController.prototype.saveVendor = function () {
                var _this = this;
                alert("Hit");
                this.vendorService.saveVendor(this.vendor).then(function () {
                    _this.$state.go('home');
                });
            };
            return NewVendorController;
        }());
        Controllers.NewVendorController = NewVendorController;
        var LoginController = (function () {
            function LoginController(userService, $window, $state) {
                this.userService = userService;
                this.$window = $window;
                this.$state = $state;
            }
            LoginController.prototype.login = function () {
                var _this = this;
                this.userService.loginUser(this.userInfo).then(function (data) {
                    _this.$window.localStorage.setItem("token", JSON.stringify(data.token));
                    _this.$state.go('home');
                });
            };
            return LoginController;
        }());
        Controllers.LoginController = LoginController;
        var RegisterController = (function () {
            function RegisterController(userService) {
                this.userService = userService;
            }
            RegisterController.prototype.signup = function () {
                this.userService.registerUser(this.user).then(function () {
                    alert('signup successful, please login');
                });
            };
            return RegisterController;
        }());
        Controllers.RegisterController = RegisterController;
        var TestController = (function () {
            function TestController(vendorService, $state) {
                this.vendorService = vendorService;
                this.$state = $state;
            }
            TestController.prototype.saveVendor = function () {
                var _this = this;
                alert("Hit");
                this.vendorService.saveVendor(this.vendor).then(function () {
                    _this.$state.go('home');
                });
            };
            return TestController;
        }());
        Controllers.TestController = TestController;
    })(Controllers = inventory.Controllers || (inventory.Controllers = {}));
})(inventory || (inventory = {}));
