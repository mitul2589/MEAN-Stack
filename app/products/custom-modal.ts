import { Component } from '@angular/core';


/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
@Component({
  selector: 'modal-content',
  styles: [`
        .custom-modal-container {
            padding: 15px;
        }

       .modal-content {
          width: 50% !important;
          margin: 0 aut0;
        }

        .custom-modal-header {
            background-color: #219161;
            color: #fff;
            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            margin-top: -15px;
            margin-bottom: 40px;
        }
    `],
  //TODO: [ngClass] here on purpose, no real use, just to show how to workaround ng2 issue #4330.
  // Remove when solved.
  /* tslint:disable */ template: `
        <div class="container custom-modal-container">
         <form class="form-horizontal">
    <div class="form-group">
      <label class="control-label col-sm-4" for="productname">Name:</label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="productname" name="productname">
      </div>

      <label class="control-label col-sm-4" for="productname">Code:</label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="productcode" name="productcode">
      </div>

      <label class="control-label col-sm-4" for="productdescription">Description:</label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="productdescription" name="productdescription">
      </div>

      <label class="control-label col-sm-4" for="productprice">Price:</label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="productprice" name="productprice">
      </div>

      <label class="control-label col-sm-4" for="productreleasedate">Release Date:</label>
      <div class="col-sm-8">
        <input type="date" class="form-control" id="productreleasedate" name="productreleasedate">
      </div>

      <label class="control-label col-sm-4" for="productstarrating">Star Rating:</label>
      <div class="col-sm-8">
        <input type="number" class="form-control" id="productstarrating" name="productstarrating">
      </div>

      <label class="control-label col-sm-4" for="productimage">Image:</label>
      <div class="col-sm-8">
        <input type="file" class="form-control" id="productimage" name="productimage">
      </div>
    </div>
    
    <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-default">Save</button>
         <button type="submit" class="btn btn-default">Cancel</button>
      </div>
    </div>
  </form>
         </div>

  
    
      
      
      
    
 
        `
})
export class AdditionCalculateWindow {
  //context: AdditionCalculateWindowData;

  /*public wrongAnswer: boolean;

  constructor(public dialog: DialogRef<AdditionCalculateWindowData>) {
    this.context = dialog.context;
    this.wrongAnswer = true;
  }

  onKeyUp(value: any) {
    this.wrongAnswer = value != 5;
    this.dialog.close();
  }


  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    return this.wrongAnswer;
  }*/
}
