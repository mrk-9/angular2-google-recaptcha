/*
 * @author RAJAN G
 */
System.register(['@angular/core', '../directives/googlerecaptcha.directive'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, googlerecaptcha_directive_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (googlerecaptcha_directive_1_1) {
                googlerecaptcha_directive_1 = googlerecaptcha_directive_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.siteKey = "6LdEnxewr23AAAAH-Wa6iKZS3yWBkniZNMdv5X7A-N"; // place your key here
                    this.theme = "light"; //you can give any google themes light or dark
                }
                AppComponent.prototype.setVerified = function (data) {
                    console.log(data);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [googlerecaptcha_directive_1.GoogleRecaptchaDirective],
                        template: "\n        <div  (setVerified) = \"setVerified($event)\" googlerecaptcha [siteKey] = \"siteKey\" [theme] = 'theme' ></div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map