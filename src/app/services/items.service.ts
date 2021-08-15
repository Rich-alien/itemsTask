import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {TokenServiceService} from "./token-service.service";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(private http: HttpClient,
              private tokenServiceService: TokenServiceService) {
  }

  private readonly body: Object = {
    "page": 1,
    "last_page": 0,
    "sort_field": "id",
    "sort": "desc",
    "search_string": null,
    "device_state": "all",
    "is_archived": false,
    "paginate": true,
    "append_fields": ["active_polling", "attributes", "tied_point"],
    "per_page": 10
  }
  postItemsData() {
    return this.http.post('https://core.nekta.cloud/api/device/metering_devices', this.body, {
        headers: {
          Authorization: 'Bearer ' + this.tokenServiceService.getToken()
        }
      }
    )
  }
}
