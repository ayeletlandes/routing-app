import { Component, OnInit } from "@angular/core";
import { InsertLocalstorageService } from "../insert-localstorage.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  email: string;

  constructor(private insertLocalstorageService: InsertLocalstorageService) {}

  ngOnInit() {}

  public saveEmail(): void {
    this.insertLocalstorageService.saveEmail(this.email);
  }
}
