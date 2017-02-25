let payload;
let token = window.localStorage['token'];
payload = JSON.parse(window.atob(token.split('.')[1]));
namespace inventory.Controllers {

    export class HomeController {
      public items;
      public vendors;

      public deleteItem(id) {
        this.itemService.deleteItem(id).then(() => {
          this.$window.location.reload();
        })
      }
      constructor(
        private itemService: inventory.Services.ItemService,
        private vendorService: inventory.Services.VendorService,
        public $window,
        public $state,
        public $location
      )
      {
        this.items = this.itemService.list(payload.id);
        this.vendors = this.vendorService.list();
      }
    }

    export class NewItemController {
      public item;

      public saveItem() {
        this.item.owner_Id = payload.id;
        this.itemService.saveItem(this.item).then(() => {
          this.$state.go('home');
        })
      }

      constructor(
        private itemService: inventory.Services.ItemService,
        public $state,

      )
      {

        console.log(payload);
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

    export class EditVendorController {
      public vendor;
      public id;

      public editVendor() {
        this.vendor._id = this.id;
        this.vendorService.saveVendor(this.vendor).then(() => {
          this.$state.go('home');
        })
      }
      constructor(
        private vendorService: inventory.Services.VendorService,
        public $state,
        public $stateParams
      )
      {
        if($stateParams) {
          this.id = $stateParams['id'];
        }
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
    // export class TestController {
    //   public vendor;
    //
    //   public saveVendor() {
    //     alert("Hit");
    //     this.vendorService.saveVendor(this.vendor).then(() => {
    //       this.$state.go('home');
    //     })
    //   }
    //
    //   constructor(
    //     private vendorService: inventory.Services.VendorService,
    //     public $state
    //   )
    //   {
    //
    //   }
    // }

}
