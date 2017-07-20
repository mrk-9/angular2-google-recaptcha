Angular2 Google Recaptcha
=========

Please file issues and pull requests against my repo.

### Live Demo
[Live Demo Site](http://www.angular2modules.com/captcha "Live Demo Site For Letter chuch ")
OR
[Live Demo Site](http://www.angular2modules.com "Live Demo Site For Letter chuch ")
## Usage
    npm install angular2-google-recaptcha
### 1. Index.html page include following script 
    
        <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
               async defer>

### 2.component file use like below
   
        import {Component} from 'angular2/core';
        import {GoogleRecaptchaDirective} from '../directives/googlerecaptcha.directive';
        
        @Component({
            selector : 'my-app',
            directives: [GoogleRecaptchaDirective],
            template:  `
                <div  (setVerified) = "setVerified($event)" googlerecaptcha [siteKey] = "siteKey" [theme] = 'theme' ></div>
        `    
        })
        export class AppComponent {
            public verified : any;   
            public siteKey: string = "sitekey";//example: 6LdEnxQTfkdldc-Wa6iKZSelks823exsdcjX7A-N
            public theme: string = "light";//you can give any google themes light or dark
            setVerified(data) {
                console.log(data) // data will return true while successfully verified 
            }
        }
       
