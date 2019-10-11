import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MenudataService {
  url: string = "https://22f41d4d.ngrok.io/api/Settings/GetDesignations";
  delUrl: string =
    "https://22f41d4d.ngrok.io/api/Settings/DeleteDesignation?DesignationId=";
  addUrl: string =
    "https://22f41d4d.ngrok.io/api/Settings/InsUpdateDesignation";
  constructor(private _http: HttpClient) {}

  getAlldesignations() {
    return this._http.get(this.url);
  }
  getDeleteData(DesignationId) {
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.delUrl + DesignationId.id, { headers: head });
  }
  adduser(item) {
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.addUrl, body, { headers: head });
  }
  editdesignation(item) {
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.addUrl, body, { headers: head });
  }
}
