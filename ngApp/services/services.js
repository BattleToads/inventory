var inventory;
(function (inventory) {
    var Services;
    (function (Services) {
        var ItemService = (function () {
            function ItemService($resource) {
                this.ItemResource = $resource('/api/items/:id');
            }
            ItemService.prototype.get = function (id) {
                return this.ItemResource.get({ id: id });
            };
            ItemService.prototype.list = function () {
                return this.ItemResource.query();
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
        var VendorService = (function () {
            function VendorService($resource) {
                this.VendorResource = $resource('/api/vendors/:id');
            }
            VendorService.prototype.get = function (id) {
                return this.VendorResource.get({ id: id });
            };
            VendorService.prototype.list = function () {
                return this.VendorResource.query();
            };
            VendorService.prototype.saveVendor = function (vendor) {
                return this.VendorResource.save({ id: vendor._id }, vendor).$promise;
            };
            VendorService.prototype.deleteVendor = function (vendorId) {
                return this.VendorResource.remove({ id: vendorId }).$promise;
            };
            return VendorService;
        }());
        Services.VendorService = VendorService;
        angular.module('inventory').service('vendorService', VendorService);
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
