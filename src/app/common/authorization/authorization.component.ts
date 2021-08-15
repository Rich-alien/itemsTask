import {Component} from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {Router} from "@angular/router";
import {TokenServiceService} from "../../services/token-service.service";
import {AuthorizationService} from "../../services/authorization.service";

@Component({
  selector: 'b-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.less']
})
export class AuthorizationComponent {

  formAuthorization = new FormGroup({
    email: new FormControl('demo@nekta.tech', [Validators.required,
      Validators.email, Validators.maxLength(255)]),
    password: new FormControl('qwertyqwerty', [Validators.required,
      Validators.maxLength(255), Validators.minLength(8)])
  })

  constructor(
    private tokenServiceService: TokenServiceService,
    private router: Router,
    private authorizationService: AuthorizationService
  ) {
  }

  postData() {
    const bodyAuthorization = {
      "email": this.formAuthorization.value.email,
      "password": this.formAuthorization.value.password,
      "personal_data_access": true
    }
    this.authorizationService.postAuthorizationData(bodyAuthorization).subscribe(
      (body: any) => {
        this.tokenServiceService.setToken(body.data.access_token)
        this.router.navigate(['/list']);
      },
      error => {
        console.log(error);
      }
    )
  }
}
