import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  constructor(private http: HttpClient) {
  }
  postAuthorizationData(bodyAuthorization: Object) {
    return this.http.post('https://core.nekta.cloud/api/auth/login',bodyAuthorization)
  }
}
