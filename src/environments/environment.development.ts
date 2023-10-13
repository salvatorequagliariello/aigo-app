import env from '../../config.json';

export const environment = {
    production: false,
    auth: {
        domain: env.domain,
        clientId: env.clientId,
    },
    openAi: env.openAi,
    replicateAi: env.replicateAi
};
