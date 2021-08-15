import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ItemsService} from "../../services/items.service";

@Component({
  selector: 'b-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.less']
})
export class ListOfItemsComponent implements OnInit {

  dataItems: any = []

  constructor(private http: HttpClient,
              private itemsService: ItemsService) {
  }

  ngOnInit(): void {
    this.itemsService.postItemsData().subscribe(
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
