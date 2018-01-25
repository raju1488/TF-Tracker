// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyCsig3-A1mthJEJjc9P9C62yaCO23wjHkg",
    authDomain: "tftracker1.firebaseapp.com",
    databaseURL: "https://tftracker1.firebaseio.com",
    projectId: "tftracker1",
    storageBucket: "tftracker1.appspot.com",
    messagingSenderId: "259256639875"
  }
};
