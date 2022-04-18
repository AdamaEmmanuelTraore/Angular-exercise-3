import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ServiceCard } from "../service/service";

@Component({
    templateUrl: './staff.component.html',
    styleUrls: ['./staff.component.css']
})

export class StaffComponent {
    staff: any = []
    constructor(private route: ActivatedRoute) {

    }
    ngOnInit() {
        this.staff = this.route.snapshot.data['staff']
    }

}