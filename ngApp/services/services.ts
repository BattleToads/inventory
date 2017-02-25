namespace inventory.Services {
  export class ItemService {
    private ItemResource;


    public list(id) {
      return this.ItemResource.query({id:id});
    }

    public saveItem(item) {
      return this.ItemResource.save({id:item._id}, item).$promise;
    }

    public deleteItem(itemId) {
      return this.ItemResource.remove({id:itemId}).$promise;
    }

    constructor($resource:ng.resource.IResourceService) {
      this.ItemResource = $resource('/api/items/:id');
    }
  }

  angular.module('inventory').service('itemService', ItemService);



    export class UserService {
      public LoginResource
      public SignUpResource

      public registerUser(userObj) {
        return this.SignUpResource.save(userObj).$promise;
      }

      public loginUser(userInfo) {
        return this.LoginResource.save(userInfo).$promise;
      }

      constructor(private $resource:ng.resource.IResourceService) {
        this.LoginResource = this.$resource('/userRoutes/api/Login/Local');
        this.SignUpResource = this.$resource('/userRoutes/api/Register');
      }
    }

    angular.module('inventory').service('userService', UserService);
  }
