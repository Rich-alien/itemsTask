import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'b-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.less']
})
export class ListOfItemsComponent implements OnInit {
  private readonly TOKEN_KEY: string = 'accessToken';
  dataItems: any = []
  url: string = 'https://core.nekta.cloud/api/device/metering_devices'
  body: Object = {
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
  getTime(id: number): Date{
      let time = new Date(this.dataItems[id].last_active);
      return time;
  }
  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.http.post(this.url, this.body, {
        headers: {
          Authorization: 'Bearer ' + this.cookieService.get(this.TOKEN_KEY)
        }
      }
      ).subscribe(
      (body: any) => {
        console.log(body);
        this.dataItems = (body.data.metering_devices.data as Array<Object>);
      },
      error => {
        console.log(error);
      }
    )
  }

}
