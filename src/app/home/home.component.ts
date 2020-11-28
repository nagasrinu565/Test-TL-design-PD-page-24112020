import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
  
  //==================== View Products =================
  DemoData: any = [{
    "productName": "Monika Stationary Sofa Chocolate",
    "attributes": {
      "Material": "Fabric",
      "Color": "Brown",
      "Brand": "Coaster Home Furnishings"
    },
    "image": "https://i.postimg.cc/TP7Q0B9P/image-1.jpg",
    "minOrders": "200",
    "deliveryTime": "1 - 2 weeks",
    "location": "Hyderabad, India",
    "productRating": "4.2",
    "productPrice": "20125"
  },
  {
    "productName": "Oadeer Home Chair Sofas, Yellow",
    "attributes": {
      "Material": "Textile",
      "Color": "Yellow",
      "Brand": "Oadeer Home"
    },
    "image": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "minOrders": "150",
    "deliveryTime": "1 - 2 weeks",
    "location": "Delhi, India",
    "productRating": "4",
    "productPrice": "10125"
  },
  {
    "productName": "LEPOWER Metal Desk Lamp, Adjustable Goose Neck Table Lamp, Eye-Caring Study Desk Lamps for Bedroom, Study Room and Office (White)",
    "attributes": {
      "Item model number": "UT2032",
      "Manufacturer": "LEPOWER",
      "Brand": "LEPOWER"
    },
    "image": "https://i.postimg.cc/26gGRvgR/photo-1505691938895-1758d7feb511.jpg",
    "minOrders": "200",
    "deliveryTime": "1 - 2 weeks",
    "location": "Mumbai, India",
    "productRating": "4"
 
  },
  {
    "productName": "Rivet Revolve Modern Upholstered Sofa Couch, 80'W, Linen",
    "attributes": {
      "Material": "Polyester fabric ",
      "Color": "Linen",
      "Frame Material": "Hardwood"
    },
    "image": "https://i.postimg.cc/59HK79DW/photo-1519710164239-da123dc03ef4.jpg",
    "minOrders": "200",
    "deliveryTime": "1 - 2 weeks",
    "location": "Mumbai, India",
    "productRating": "4",
    "productPrice": "1500"
  },
  {
    "productName": "Ashley Furniture Signature Design - Whitesburg 6-Piece Dining Room Set",
    "attributes": {
      "Product Dimensions": "30 x 35.75 x 60 inches",
      "Manufacturer": "Ashley Furniture",
      "ASIN": "B0753659P3"
    },
    "image": "https://i.postimg.cc/ZqKVrJ6g/photo-1522708323590-d24dbb6b0267.jpg",
    "minOrders": "50",
    "deliveryTime": "1 - 2 weeks",
    "location": "Mumbai, India",
    "productRating": "4.5",
    "productPrice": "50500"
  },
  {
    "productName": "OSP Home Furnishings Papasan Chair with 360-degree Swivel, Black Cushion Frame",
    "attributes": {
      "Material": "Steel",
      "Color": "Brown",
      "Frame Material": "Polypropylene wicker and steel"
    },
    "image": "https://i.postimg.cc/0yCVMzKD/photo-1533044309907-0fa3413da946.jpg",
    "minOrders": "50",
    "deliveryTime": "1 - 2 weeks",
    "location": "Mumbai, India",
    "productRating": "4.5",
    "productPrice": "50500"
  },
  {
    "productName": "Rivet Aiden Mid-Century Modern Tufted Velvet Loveseat Sofa",
    "attributes": {
      "Material": "Velvet",
      "Color": "Hunter Green",
      "Type of product": "Loveseat"
    },
    "image": "https://i.postimg.cc/fy4cgs0M/photo-1547340964-f765a5906c59.jpg",
    "minOrders": "50",
    "deliveryTime": "1 - 2 weeks",
    "location": "Mumbai, India",
    "productRating": "4.5",
    "productPrice": "22500"
  },
  {
    "productName": "Rivet Revolve Modern Upholstered Sofa",
    "attributes": {
      "Material": "Polyester fabric",
      "Color": "Caramel",
      "Frame Material": "Wood"
    },
    "image": "https://i.postimg.cc/261GKTc7/photo-1554995207-c18c203602cb.jpg",
    "minOrders": "50",
    "deliveryTime": "1 - 2 weeks",
    "location": "Mumbai, India",
    "productRating": "4.5",
    "productPrice": "25000"
  },
  {
    "productName": "Frenchi Furniture Wood 3 Pc Vanity Set",
    "attributes": {
      "Material": "Polyester fabric",
      "Color": "Caramel"
    },
    "image": "https://i.postimg.cc/c1V9VyNg/photo-1556020685-ae41abfc9365.jpg",
    "minOrders": "500",
    "deliveryTime": "1 week",
    "location": "Mumbai, India",
    "productRating": "3.5",
    "productPrice": "6073.5"
  },
  {
    "productName": "Uozzi Bedding Queen Thin Duvet Cover Set Blue Gray & Triangles 3 Pieces (1 Comforter Cover 90x90 + 2 Pillow Shams) 800 - TC Luxury Winter Modern Style with 4 Ties Zipper",
    "attributes": {
      "Color": "Dark blue",
      "Size": "Queen (1 duvet cover + 2 pillow shams)"
    },
    "image": "https://i.postimg.cc/261GKTc7/photo-1554995207-c18c203602cb.jpg",
    "minOrders": "20",
    "deliveryTime": "1 - 2 weeks",
    "location": "Kolkatta, India",
    "productRating": "4.5",
    "productPrice": "65000"
  }, 
]

Products = [...this.DemoData];
 pagesArray: any;

constructor(public matDialog: MatDialog) {}

// ==========Pagination & Add Products ==========

@ViewChild('secondDialog', { static: true }) secondDialog: TemplateRef<any>;
addProduct_openModal() {
  // this.dialogConfig.height = "350px";
  // this.dialogConfig.width = "900px";
  this.matDialog.open(this.secondDialog);
}

  activePage:number = 0;  
  
  displayActivePage(activePageNumber:number){  
    this.activePage = activePageNumber  
  }  
  addProductForm = {
    image: "",
    productName:"",
    minOrders: "",
    deliveryTime:"",
    location: "",
    productRating: "",
    productPrice: "",
    attributes:{}
  }

  attribute1: string ="";
  attributevalue1: string ="";
  attribute2: string ="";
  attributevalue2: string ="";
  attribute3: string ="";
  attributevalue4: string ="";
  ngOnInit() {
    let pageSize :number =4
   this._getPagesArray(pageSize);
   this._onPageChange(0)
 
  }

  public _pushNewProduct(obj){
    this.DemoData.push(obj);
    this.Products = [...this.DemoData];
    console.log("New object pushed",this.Products)
  }
 
  _getPagesArray(pgSize){
    let totalPages = Math.ceil((this.DemoData.length) / pgSize ) ;
console.log("totalPages",totalPages);
this.pagesArray = []
  for (let i = 0; i < totalPages; i++) {
    this.pagesArray.push(i+1)
  }

  }

  _onPageChange(currentpage){
if(currentpage >= 1 ){
 
  let currentsize = (currentpage * 4)
  this.Products = this.DemoData.slice( currentsize, (currentsize + 4))

}else if(currentpage < 1){
  this.Products = this.DemoData.slice( 0, (4))
}
}


_addProductCall(Formobject, value1, value2, value3, atttr1, atttr2, atttr3){
  debugger;
  let obj = {
    [atttr1]: value1,
    [atttr2]: value2,
    [atttr3]: value3
  }
  this.addProductForm.attributes = obj;
  this.DemoData.push(this.addProductForm);
  this.Products = [...this.DemoData];
  console.log( this.Products);
  let pageSize :number =4
   this._getPagesArray(pageSize);
   this._onPageChange(0)
   this.matDialog.closeAll();
   
}

// ============  Remove Produts  =================

  removeProductCall(index){
    this.DemoData.splice(index,1);
    this.Products = [...this.DemoData];
    let pageSize :number =4
    this._getPagesArray(pageSize);
    this._onPageChange(0)
  }

  //  just close the modal
  closeModal() {
    this.matDialog.closeAll();
    
  }
}
