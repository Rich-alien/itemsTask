import {Component} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {Router} from "@angular/router";
import {TokenServiceService} from "../../services/token-service.service";

@Component({
  selector: 'b-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.less']
})
export class AuthorizationComponent {



  constructor(private http: HttpClient,
              private cookieService: TokenServiceService,
              private router: Router
  ) {
  }

  formAuthorization = new FormGroup({
    email: new FormControl('demo@nekta.tech', [Validators.required,
      Validators.email, Validators.maxLength(255)]),
    password: new FormControl('qwertyqwerty', [Validators.required,
      Validators.maxLength(255), Validators.minLength(8)])
  })

  postData() {
    let body = {
      "email": this.formAuthorization.value.email,
      "password": this.formAuthorization.value.password,
      "personal_data_access": true
    }

    this.http.post('https://core.nekta.cloud/api/auth/login',
      body).subscribe(
      (body: any) => {
        this.cookieService.setToken(body.data.access_token)
        this.router.navigate(['/list']);
      },
      error => {
        console.log(error);
      }
    )
  }
}
