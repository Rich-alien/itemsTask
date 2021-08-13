import {Component} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'b-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.less']
})
export class AuthorizationComponent {

  private readonly TOKEN_KEY: string = 'accessToken';

  constructor(private http: HttpClient,
              private cookieService: CookieService
  ) {
  }

  //Email: demo@nekta.tech
  // Пароль: qwertyqwerty
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
        const time = new Date();
        time.setHours(time.getHours() + 1);
        let token = body.data.access_token;
        this.cookieService.set(this.TOKEN_KEY, token, time, '/')
      },
      error => {
        console.log(error);
      }
    )
  }
}
