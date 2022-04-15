import { Component } from "@angular/core";
import { ServiceCard } from "../service/service";

@Component({
    templateUrl: './staff.component.html',
    styleUrls: ['./staff.component.css']
})

export class StaffComponent {
    staff: any = []
    constructor(private service: ServiceCard) {

    }
    ngOnInit() {
        this.staff = this.service.getStaff()
    }

}