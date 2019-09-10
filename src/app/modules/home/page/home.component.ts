import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/data/services/data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {}

  getData() {
    this.dataService.getData();
  }
}
