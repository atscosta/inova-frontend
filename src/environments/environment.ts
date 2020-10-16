export const environment = {
  production: false,
  origin: 'http://localhost:4200',
  homeUrl: 'http://localhost:4200/rgp-certificado/home',
  publicRoutes: 'http://localhost:4200/public',
};

export const auth = {
  siglaSistema: 'RGP_CERTIF',
  config: {
    issuer: 'https://app-desv.tjpb.jus.br/cas2/oidc',
    customQueryParams: {audience: origin},
    redirectUri: environment.homeUrl,
    silentRefreshRedirectUri: `${origin}/silent-refresh`,
    clientId: 'rgp-cert',
    scope: 'openid profile email',
    clearHashAfterLogin: true,
    showDebugInformation: true,
    strictDiscoveryDocumentValidation: false,
  }
};

export const urls = {
  api: 'http://localhost:8080/rgp-certificado-backend',
  rgpCore: 'https://esb-desv.tjpb.jus.br/rgp-core',
};
