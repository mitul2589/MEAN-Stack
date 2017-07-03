"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
var AdditionCalculateWindow = (function () {
    function AdditionCalculateWindow() {
    }
    return AdditionCalculateWindow;
}());
AdditionCalculateWindow = __decorate([
    core_1.Component({
        selector: 'modal-content',
        styles: ["\n        .custom-modal-container {\n            padding: 15px;\n        }\n\n       .modal-content {\n          width: 50% !important;\n          margin: 0 aut0;\n        }\n\n        .custom-modal-header {\n            background-color: #219161;\n            color: #fff;\n            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n            margin-top: -15px;\n            margin-bottom: 40px;\n        }\n    "],
        //TODO: [ngClass] here on purpose, no real use, just to show how to workaround ng2 issue #4330.
        // Remove when solved.
        /* tslint:disable */ template: "\n        <div class=\"container custom-modal-container\">\n         <form class=\"form-horizontal\">\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-4\" for=\"productname\">Name:</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\" id=\"productname\" name=\"productname\">\n      </div>\n\n      <label class=\"control-label col-sm-4\" for=\"productname\">Code:</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\" id=\"productcode\" name=\"productcode\">\n      </div>\n\n      <label class=\"control-label col-sm-4\" for=\"productdescription\">Description:</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\" id=\"productdescription\" name=\"productdescription\">\n      </div>\n\n      <label class=\"control-label col-sm-4\" for=\"productprice\">Price:</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\" id=\"productprice\" name=\"productprice\">\n      </div>\n\n      <label class=\"control-label col-sm-4\" for=\"productreleasedate\">Release Date:</label>\n      <div class=\"col-sm-8\">\n        <input type=\"date\" class=\"form-control\" id=\"productreleasedate\" name=\"productreleasedate\">\n      </div>\n\n      <label class=\"control-label col-sm-4\" for=\"productstarrating\">Star Rating:</label>\n      <div class=\"col-sm-8\">\n        <input type=\"number\" class=\"form-control\" id=\"productstarrating\" name=\"productstarrating\">\n      </div>\n\n      <label class=\"control-label col-sm-4\" for=\"productimage\">Image:</label>\n      <div class=\"col-sm-8\">\n        <input type=\"file\" class=\"form-control\" id=\"productimage\" name=\"productimage\">\n      </div>\n    </div>\n    \n    <div class=\"form-group\">        \n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <button type=\"submit\" class=\"btn btn-default\">Save</button>\n         <button type=\"submit\" class=\"btn btn-default\">Cancel</button>\n      </div>\n    </div>\n  </form>\n         </div>\n\n  \n    \n      \n      \n      \n    \n \n        "
    })
], AdditionCalculateWindow);
exports.AdditionCalculateWindow = AdditionCalculateWindow;
//# sourceMappingURL=custom-modal.js.map