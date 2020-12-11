import { RecoversService } from './../../../../data/services/recovers/recovers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recovers-list',
  templateUrl: './recovers-list.component.html',
  styleUrls: ['./recovers-list.component.scss']
})
export class RecoversListComponent implements OnInit {

  constructor(private recoversService: RecoversService) { }

  ngOnInit() {
    this.recoversService.readClosingReasonsDifferenceAsync().subscribe(
      resp => console.log(resp)
    )
  }

}
