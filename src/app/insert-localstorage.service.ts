import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class InsertLocalstorageService {
  constructor() {}

  saveEmail(email): void {
    let emails = localStorage.getItem("emails");
    emails = emails ? emails : "";
    emails = emails.concat("," + email);
    localStorage.setItem("emails", emails);
  }
}
