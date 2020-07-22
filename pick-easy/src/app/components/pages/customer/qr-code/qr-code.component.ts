import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

export type QRCodeAchievementData = {
  customerId: string;
  restaurantId: string;
  restaurantAchievementId: string;
};

@Component({
  selector: "app-qr-code",
  templateUrl: "./qr-code.component.html",
  styleUrls: ["./qr-code.component.css"],
})
export class QRCodeComponent {
  qrCodeData: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: QRCodeAchievementData) {
    this.qrCodeData = JSON.stringify(data);
  }
}