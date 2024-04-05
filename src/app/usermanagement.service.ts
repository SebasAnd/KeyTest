import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  public keycloak:Keycloak;

  constructor() { 
    this.keycloak = new Keycloak({
      url: 'http://localhost:8082/',
      realm: 'myrealm',
      clientId: 'myclient'
  });
  
  }

  async TokenInit(){
    return await this.keycloak.init({});
  
  }
  ngOnInit(){

    this.TokenInit();
  
    }

    async userLogin(){
      this.keycloak.login({redirectUri:"http://localhost:4200/profile"});
    
    }
}
