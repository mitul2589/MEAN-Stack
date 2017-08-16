"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var child_component_1 = require("./../shared/child.component");
var ParentComponent = (function () {
    function ParentComponent() {
        this.state = 'active';
        this.htmlSnippet = '<p>paragraph</p>';
    }
    ParentComponent.prototype.getChildProp = function () {
        this.childComp.getChildProp();
    };
    ParentComponent.prototype.applyAnimation = function () {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    };
    return ParentComponent;
}());
__decorate([
    core_1.ViewChild(child_component_1.ChildComponent),
    __metadata("design:type", child_component_1.ChildComponent)
], ParentComponent.prototype, "childComp", void 0);
ParentComponent = __decorate([
    core_1.Component({
        selector: 'parent-comp',
        template: "\n        <h3>Reference child component properties</h3>\n        <button (click)=\"childComp.getChildProp()\">Access child component properties using ref variable</button>\n        <br/>\n        <button (click)=\"getChildProp()\">Access child component properties using viewchild directive</button>\n        <child-comp #childComp></child-comp>\n        <div my-highlight>Hightlight this div content hightlight directive</div>\n        <div [@applyAnimation]=\"state\" (click)=\"applyAnimation()\">Apply animations</div>\n\n         <input #box (keyup.enter)=\"onEnter(box.value)\">\n\n         <h3>Binding innerHTML</h3>\n        <p>Bound value:</p>\n        <p class=\"e2e-inner-html-interpolated\">{{htmlSnippet}}</p>\n        <p>Result of binding to innerHTML:</p>\n        <p class=\"e2e-inner-html-bound\" [innerHTML]=\"htmlSnippet\"></p>\n\n        {{testobj?.prop1}}\n    ",
        styles: [':host { display: block; border: 1px solid black; }'],
        animations: [
            core_1.trigger('applyAnimation', [
                core_1.state('active', core_1.style({
                    background: 'red'
                })),
                core_1.state('inactive', core_1.style({
                    background: 'blue'
                })),
                core_1.transition('active => inactive', core_1.animate('100ms')),
                core_1.transition('inactive => active', core_1.animate('100ms'))
            ])
        ]
    })
], ParentComponent);
exports.ParentComponent = ParentComponent;
//# sourceMappingURL=parent.component.js.map