import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(
  keycloak: KeycloakService
  ) {
    return () =>
      keycloak.init({
        config: {
            url: 'http://localhost:8082',
            realm: 'myrealm',
            clientId: 'myclient'
        },initOptions: {
          onLoad: 'check-sso'
        }
      });
}