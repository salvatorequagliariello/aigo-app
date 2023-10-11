import authCred from '../../auth_config.json';

export const environment = {
    production: false,
    auth: {
        domain: authCred.domain,
        clientId: authCred.clientId,
    },
    openAi: "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"
};


