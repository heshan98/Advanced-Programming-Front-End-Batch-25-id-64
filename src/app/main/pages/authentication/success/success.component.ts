import { Component, OnInit } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor(    private _fuseConfigService: FuseConfigService,) {  this._fuseConfigService.config = {
    layout: {
        navbar   : {
            hidden: true
        },
        toolbar  : {
            hidden: true
        },
        footer   : {
            hidden: true
        },
        sidepanel: {
            hidden: true
        }
    }
}; }

  ngOnInit() {
  }

}
