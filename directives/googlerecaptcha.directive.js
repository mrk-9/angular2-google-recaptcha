System.register(['@angular/core', '@angular/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var GoogleRecaptchaDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            GoogleRecaptchaDirective = (function () {
                function GoogleRecaptchaDirective(el, model) {
                    this.model = model;
                    this.theme = '';
                    this.setVerified = new core_1.EventEmitter();
                    this._el = el.nativeElement;
                    this.modelValue = this.model;
                    var input = this._el;
                }
                GoogleRecaptchaDirective.prototype.ngOnInit = function () {
                    var _this = this;
                    setTimeout(function () {
                        grecaptcha.render(_this._el, {
                            'sitekey': _this.siteKey,
                            'callback': function (data) {
                                if (data) {
                                    _this.setVerified.emit(true);
                                }
                            },
                            'theme': _this.theme
                        });
                    }, 1000);
                };
                ;
                GoogleRecaptchaDirective.prototype.onInputChange = function () {
                };
                __decorate([
                    core_1.Input('theme'), 
                    __metadata('design:type', String)
                ], GoogleRecaptchaDirective.prototype, "theme", void 0);
                __decorate([
                    core_1.Input('siteKey'), 
                    __metadata('design:type', String)
                ], GoogleRecaptchaDirective.prototype, "siteKey", void 0);
                __decorate([
                    core_1.Output('setVerified'), 
                    __metadata('design:type', core_1.EventEmitter)
                ], GoogleRecaptchaDirective.prototype, "setVerified", void 0);
                GoogleRecaptchaDirective = __decorate([
                    core_1.Directive({
                        selector: '[googlerecaptcha]',
                        providers: [common_1.NgModel],
                        host: {
                            '(input)': 'onInputChange()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, common_1.NgModel])
                ], GoogleRecaptchaDirective);
                return GoogleRecaptchaDirective;
            }());
            exports_1("GoogleRecaptchaDirective", GoogleRecaptchaDirective);
        }
    }
});
//# sourceMappingURL=googlerecaptcha.directive.js.map