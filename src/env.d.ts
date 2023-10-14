interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  /**
   * Built-in environment variable.
   * @see Docs https://github.com/chihab/ngx-env#ng_app_env.
   */
  readonly NG_APP_ENV: string;
  readonly NG_APP_AUTH_DOMAIN: string;
  readonly NG_APP_AUTH_CLIENT_ID: string;
  readonly NG_APP_OPEN_AI_KEY: string;

  readonly NG_APP_FIREBASE_PROJECT_ID: string;
  readonly NG_APP_FIREBASE_APP_ID: string;
  readonly NG_APP_FIREBASE_STORAGE_BUCKET: string;
  readonly NG_APP_FIREBASE_API_KEY: string;
  readonly NG_APP_FIREBASE_AUTH_DOMAIN: string;
  readonly NG_APP_FIREBASE_MESSAGING_SENDER_ID: string;
  // Add your environment variables below
  // readonly NG_APP_API_URL: string;
  [key: string]: any;
}

/*
 * Remove all the deprecated code below if you're using import.meta.env (recommended)
 */

/****************************** DEPREACTED **************************/
/**
 * @deprecated process.env usage
 * prefer using import.meta.env
 * */
declare var process: {
  env: {
    NG_APP_ENV: string;
    NG_APP_AUTH_DOMAIN : string;
    NG_APP_AUTH_CLIENT_ID: string;
    NG_APP_OPEN_AI_KEY: string;

    NG_APP_FIREBASE_PROJECT_ID: string;
    NG_APP_FIREBASE_APP_ID: string;
    NG_APP_FIREBASE_STORAGE_BUCKET: string;
    NG_APP_FIREBASE_API_KEY: string;
    NG_APP_FIREBASE_AUTH_DOMAIN: string;
    NG_APP_FIREBASE_MESSAGING_SENDER_ID: string;
    [key: string]: any;
  };
};

// If your project references @types/node directly (in you) or indirectly (as in RxJS < 7.6.0),
// you might need to use the following declaration merging.
// declare namespace NodeJS {
//   export interface ProcessEnv {
//     readonly NG_APP_ENV: string;
//     // Add your environment variables below
//   }
// }

// If you're using Angular Universal and process.env notation, you'll need to add the following to your tsconfig.server.json:
/* In your tsconfig.server.json */
// {
//   "extends": "./tsconfig.app.json",
//   ...
//   "exclude": [
//     "src/env.d.ts"
//   ]
// }

/*********************************************************************/
