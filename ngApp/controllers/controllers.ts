namespace inventory.Controllers {

    export class HomeController {
      public items;

      public deleteItem(id) {
        this.itemService.deleteItem(id).then(() => {
          this.$window.location.reload();
        })
      }
      constructor(
        private itemService: inventory.Services.ItemService,
        public $window,
        public $state,
        public $location
      )
      {
        this.items = this.itemService.list();
      }
    }

    export class NewItemController {
      public item;

      public saveItem() {
        this.itemService.saveItem(this.item).then(() => {
          this.$state.go('home');
        })
      }

      constructor(
        private itemService: inventory.Services.ItemService,
        public $state
      )
      {

      }
    }

    export class EditItemController {
      public item;
      public id;

      public editItem() {
        this.item._id = this.id;
        this.itemService.saveItem(this.item).then(() => {
          this.$state.go('home');
        })
      }
      constructor(
        private itemService: inventory.Services.ItemService,
        public $state,
        public $stateParams
      )
      {
        if($stateParams) {
          this.id = $stateParams['id'];
        }
      }
    }

    export class NewVendorController {
      public vendor;

      public saveVendor() {
        alert("Hit");
        this.vendorService.saveVendor(this.vendor).then(() => {
          this.$state.go('home');
        })
      }

      constructor(
        private vendorService: inventory.Services.VendorService,
        public $state
      )
      {

      }
    }


    export class LoginController {
        public userInfo

        public login() {
          this.userService.loginUser(this.userInfo).then((data) => {
            this.$window.localStorage.setItem("token", JSON.stringify(data.token));
              this.$state.go('home');


          })
        }

        public constructor(
          private userService,
          public $window,
          public $state
        ) {

        }
    }

    export class RegisterController {
      public user

      public signup() {
        this.userService.registerUser(this.user).then(() => {
          alert('signup successful, please login');
        })
      }

      public constructor(
        private userService
      )
      {

      }
    }
    export class TestController {
      public vendor;

      public saveVendor() {
        alert("Hit");
        this.vendorService.saveVendor(this.vendor).then(() => {
          this.$state.go('home');
        })
      }

      constructor(
        private vendorService: inventory.Services.VendorService,
        public $state
      )
      {

      }
    }

}
