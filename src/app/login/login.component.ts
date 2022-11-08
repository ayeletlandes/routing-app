import { Component, OnInit } from "@angular/core";
import { InsertLocalstorageService } from "../insert-localstorage.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  email: string;
  status: string;
  EXSIT_STATUS: string = "This Email Already Exist";
  INSERT_STATUS: string = "Insert Email To File";

  constructor(private insertLocalstorageService: InsertLocalstorageService) {}

  ngOnInit() {}

  public submitEmail(): void {
    let emails = localStorage.getItem("emails");

    if (emails && emails.includes(this.email)) {
      this.status = this.EXSIT_STATUS;
    } else {
      this.insertLocalstorageService.saveEmail(this.email);
      this.status = this.INSERT_STATUS;
    }
  }
}
