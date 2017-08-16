import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ParentComponent } from './parent.component'
import { SharedModule } from '../shared/shared.module';
import { MyHighLightDirective } from '../shared/highlight.directive'

@NgModule({
    imports: [
       SharedModule,
       RouterModule.forChild([
           { path: 'parent', component: ParentComponent }
       ])
    ],
    declarations: [ ParentComponent, MyHighLightDirective ],
    exports: [ ParentComponent ]
})

export class ParentModule {}