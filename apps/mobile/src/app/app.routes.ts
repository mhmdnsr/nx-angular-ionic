import {Route} from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadComponent: () =>
      import("./nx-welcome.component").then((m) => m.NxWelcomeComponent),
  },
];
