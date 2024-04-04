import { Component } from '@angular/core';
import Keycloak from 'keycloak-js';
import { UserManagementService } from '../usermanagement.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

 
  constructor() {
    
    
  }
  ngOnInit(){
    //console.log("click", this.userManager.keycloak);
  }

  



userLogin(){
  //this.userManager.userLogin();

}

}
