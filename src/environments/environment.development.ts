import authCred from '../../auth_config.json';

export const environment = {
    production: false,
    auth: {
        domain: authCred.domain,
        clientId: authCred.clientId
    }
};
