// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBSnyzvRxIIcYeaQB4TfhHctB43a0pF9E0",
    authDomain: "mypwaapp-marce.firebaseapp.com",
    databaseURL: "https://mypwaapp-marce.firebaseio.com",
    projectId: "mypwaapp-marce",
    storageBucket: "mypwaapp-marce.appspot.com",
    messagingSenderId: "885914623780"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
