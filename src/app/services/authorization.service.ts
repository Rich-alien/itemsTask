import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserDto} from "../../../libs/models/src/user.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  constructor(private http: HttpClient) {
  }
  postAuthorizationData(bodyAuthorization: Object): Observable<UserDto> {
    return this.http.post('https://core.nekta.cloud/api/auth/login',bodyAuthorization)
  }
}
