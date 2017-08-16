import { Component, ViewChild, ViewContainerRef, trigger, style, state, transition, animate } from '@angular/core'
import { ChildComponent } from './../shared/child.component'
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { LoginModal } from './login.component'


@Component({
    selector: 'parent-comp',
    template: `
       
        <h3>Reference child component properties</h3>
        <button (click)="childComp.getChildProp()">Access child component properties using ref variable</button>
        <br/>
        <button (click)="getChildProp()">Access child component properties using viewchild directive</button>
        <child-comp #childComp></child-comp>
        <div my-highlight>Hightlight this div content hightlight directive</div>
        <div [@applyAnimation]="state" (click)="applyAnimation()">Apply animations</div>

         <input #box (keyup.enter)="onEnter(box.value)">

         <h3>Binding innerHTML</h3>
        <p>Bound value:</p>
        <p class="e2e-inner-html-interpolated">{{htmlSnippet}}</p>
        <p>Result of binding to innerHTML:</p>
        <p class="e2e-inner-html-bound" [innerHTML]="htmlSnippet"></p>

        {{testobj?.prop1}}

        <button (click)="openPopUP()">Open Pop UP</button>

    `,
    styles: [':host { display: block; border: 1px solid black; }'],
    animations: [
        trigger('applyAnimation', [
           state('active', style({
                background: 'red'
           })),
           state('inactive', style({
                background: 'blue'
           })),
           transition('active => inactive', animate('100ms')),
           transition('inactive => active', animate('100ms'))
        ])

    ]
})

export class ParentComponent {
    state = 'active';
    htmlSnippet = '<p>paragraph</p>';
    @ViewChild(ChildComponent) public childComp: ChildComponent;

    constructor(vcRef: ViewContainerRef, public modal: Modal) {
       modal.overlay.defaultViewContainer = vcRef;
    }

    getChildProp(): void {
        this.childComp.getChildProp();
    }

    applyAnimation() {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    }

    openPopUP() {
       return this.modal.open(LoginModal,  overlayConfigFactory({}, BSModalContext));
    }

}