import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { SelectivePreloadingStrategyService } from './services';
import { Bug624Component } from './bug-624/bug-624.component';

const routes: Routes = [{
    component: HomeComponent,
    path: '',
  }, {
  // TODO: remove when bug fixed
  component: Bug624Component,
  path: 'bug-624',
  }, {
    component: TemplatesComponent,
    path: 'templates',
  }, {
    // preload: true loads the module immediately
    path: '', data: { preload: false, }, loadChildren: './components/docs/docs.module#DocsModule',
  }, {
    // preload: true loads the module immediately
    path: '', data: { preload: false, }, loadChildren: './components/style-guide/style-guide.module#StyleGuideModule',
  }, {
    // preload: true loads the module immediately
    path: '', data: { preload: false, }, loadChildren: './components/layouts/layouts.module#LayoutsModule',
  }, {
    // preload: true loads the module immediately
    path: '', data: { preload: true, }, loadChildren: './components/components/components.module#ComponentsModule',
  }, {
    path: '**', redirectTo: '/',
  },
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, {
  useHash: true,
  preloadingStrategy: SelectivePreloadingStrategyService,
});
