var inventory;
(function (inventory) {
    var Services;
    (function (Services) {
        var ItemService = (function () {
            function ItemService($resource) {
                this.ItemResource = $resource('/api/items/:id');
            }
            ItemService.prototype.list = function (id) {
                return this.ItemResource.query({ id: id });
            };
            ItemService.prototype.saveItem = function (item) {
                return this.ItemResource.save({ id: item._id }, item).$promise;
            };
            ItemService.prototype.deleteItem = function (itemId) {
                return this.ItemResource.remove({ id: itemId }).$promise;
            };
            return ItemService;
        }());
        Services.ItemService = ItemService;
        angular.module('inventory').service('itemService', ItemService);
        var UserService = (function () {
            function UserService($resource) {
                this.$resource = $resource;
                this.LoginResource = this.$resource('/userRoutes/api/Login/Local');
                this.SignUpResource = this.$resource('/userRoutes/api/Register');
            }
            UserService.prototype.registerUser = function (userObj) {
                return this.SignUpResource.save(userObj).$promise;
            };
            UserService.prototype.loginUser = function (userInfo) {
                return this.LoginResource.save(userInfo).$promise;
            };
            return UserService;
        }());
        Services.UserService = UserService;
        angular.module('inventory').service('userService', UserService);
    })(Services = inventory.Services || (inventory.Services = {}));
})(inventory || (inventory = {}));
