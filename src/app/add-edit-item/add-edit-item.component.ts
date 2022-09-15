import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { ServicesService } from "../shared/services.service";

export class items {
  public product_code: string = "";
  public product_name: string = "";
  public price: string = "";
  public quantity: string = "";
  public description: string = "";
}

@Component({
  selector: 'app-add-edit-item',
  templateUrl: './add-edit-item.component.html',
  styleUrls: ['./add-edit-item.component.scss']
})
export class AddEditItemComponent implements OnInit {

  public reqObjItems = new items(); 
  public itemId: any;
  public createFlag: boolean = false;
  public editFlag: boolean = false;

  constructor(public serv: ServicesService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.itemId = params.id;
    });
    if(this.itemId != undefined){
      this.getItemDetails();
      this.createFlag = false;
      this.editFlag = true;
    }
    else{
      this.createFlag = true;
      this.editFlag = false;
    }
  }

  // Save the Item
  saveItem(){
    this.serv.saveItem(this.reqObjItems).subscribe(data => {
      this.router.navigate(['/']); 
    });
  }



  // Update the Item
  updateItem(){
    this.serv.updateItem(this.itemId, this.reqObjItems).subscribe(data => {
      this.router.navigate(['/']);
    });
  }

  // Get the Item details by Id 
  getItemDetails(){
    this.serv.getItem(this.itemId).subscribe(data => {
      this.reqObjItems = data;
    });
  }

}
