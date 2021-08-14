import {Injectable} from "@angular/core";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService{
  constructor(private cookieService: CookieService) {
  }
  private readonly TOKEN_KEY: string = 'accessToken';
  setToken(token: string){
    const time = new Date();
    time.setHours(time.getHours() + 1);
    this.cookieService.set(this.TOKEN_KEY, token, time, '/');
  }
  getToken(): string{
    return this.cookieService.get(this.TOKEN_KEY);
  }
}
