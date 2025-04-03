import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { HttpComponent } from './http/http.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { TemplateControlsComponent } from './template-controls/template-controls.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    path: 'directives',
    component: DirectivesComponent,
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
  {
    path: 'http',
    component: HttpComponent,
  },
  {
    path: 'parent-child',
    component: ParentChildComponent,
  },
  {
    path: 'template-controls',
    component: TemplateControlsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicsRoutingModule {}
