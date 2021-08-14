import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {TokenServiceService} from "../../services/token-service.service";

@Component({
  selector: 'b-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.less']
})
export class ListOfItemsComponent implements OnInit {

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

  getTime(id: number): Date {
    console.log(new Date(this.dataItems[id].last_active))
    return new Date(this.dataItems[id].last_active);
  }

  constructor(private http: HttpClient,
              private cookieService: TokenServiceService) {
  }

  ngOnInit(): void {
    this.http.post(this.url, this.body, {
        headers: {
          Authorization: 'Bearer ' + this.cookieService.getToken()
        }
      }
    ).subscribe(
      (body: any) => {
        this.dataItems = (body.data.metering_devices.data as Array<Object>);
      },
      error => {
        console.log(error);
      }
    )
  }

}
