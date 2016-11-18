import { Injectable } from '@angular/core';
import {Ad, Mobile, Car} from "./ad";

@Injectable()
export class PostService {

  posts: Ad[] = [
    new Mobile("Galaxy Note 7", "Samsung", 93999,"Blue Coral, Gold Platinum, Silver Titanium, Black Onyx ", "	2.3 GHZ Quad-Core, 1.6 GHz Quad-Core, Exynos 8890 GPU: Mali-T880 MP12  ","	5.7 inches, 1440 x 2560 pixels (~515 ppi pixel density) Sensors: Accelerometer, Iris scanner, fingerprint, gyro, proximity, compass, barometer, heart rate, SpO2 Display Colour:	Super AMOLED capacitive touchscreen, 16M colors, Multitouch, Corning Gorilla Glass 5  ", "64GB built-in, 4GB RAM, MicroSD Card (support up to 256GB) (dedicated slot) single-SIM model ", "Android OS, v6.0.1 (Marshmallow), upgradable to v7.0 (Nougat)", "images/note7.jpg", `Samsung Galaxy Note 7 - The Next Big Thing of 2016!
Samsung Galaxy Note 7 or Note6 had already indicated the first ideas of the new design language. With same design pattern Samsung Galaxy hot 7 with a completely matched design will be launched in the market. Rear with a rounded glass back and aluminum frame. Still this is able to make us all very excited. Finally with Samsung's Galaxy Note 7, the Korean manufacturer has used high-quality materials in a phablet to enhance the build quality. The flagship previously named Note 6 has some great changes that we were not expecting. There will be details to design which you must pay attention. Unlike Galaxy Note 5We don't see any compromises In the technical department. A strong processor with four gigabytes of RAM is stuffed inside. Some news bloggers went even one step further by speculating on  Samsung Galaxy Note 7's 16-core processor, which is supported with 8 gigabytes of memory but all these rumors are false. The camera is also getting an upgrade. According to rumors, Samsung Note 7 handset's main camera is designed to snap some fabulous photography with its 12 megapixel camera with an addition 5.0 megapixel front camera for selfies. Samsungs Galaxy Note 7 has been very convincing. A beautiful, large screen with best technology of the time, a phenomenal battery and not to forget, the useful stylus input. Along with Samsung Gear 6 smartwatch, Galaxy's Note 7 has a design that was placed next to the good hardware finally. we think that it is an evolution, not revolution. But in camera department we expected a bit more from manufacturer. Samsung Galaxy Note 7 the Next big thing is expected to arrive in Pakistan in September 2016 with a camera similar to that of the S7 and the Edge version Samsung Galaxy Note Seven with a 12 megapixel dual pixel auto focus' camera with a large f / 1.7 aperture for superior performance in all light conditions. The handset is made to provide some really tough time to the Apple iPhone 7  `, 0),
    new Car("Corolla 2017 CVT Automatic SE Special Edition", "Toyota", 2562525,"Red, Blue, Grey",
      "Regular Unleaded I-4, 1.8 L","Compact Cars", "SE Special Edition CVT Automatic (GS)", "Front Wheel Drive",
      5,4,"4dr Car", "images/corolla2017.jpg", `The newest iteration of the Toyota Corolla is a fresh take on the design of a long-time icon. It has stylistic changes inside and out resulting in a car that is edgy, fun, and economical all at once. The front grille and dramatic headlights show off its attitude, complemented smooth aerodynamic lines all the way back to the stylish new taillights in the rear. With 7 models, including the 50th Anniversary Special Edition, there is a Corolla for almost every taste. Toyota has given shoppers 2 peppy 1.8L, 4-Cylinder engine alternatives. The standard engine is rated at 132hp while the engine in the LE Eco has Valvematic technology and 140hp. Depending on the model and trim you select you can get a 6-Speed manual, a 4-speed automatic Transmission with intelligence, or a Continuously Variable Transmission with intelligence and Shift Mode. Fuel efficiencies vary by trim, but the best is the LE Eco CVT with an EPA estimated 30 MPG city and 40 MPG hwy. Passengers up front will be comfortable in adjustable, Whiplash-Injury-Lessening seats. Plus, you will be soothed with Air Conditioning or Automatic climate control, depending on trim level. The base L trim comes nicely equipped with essentials like power windows, locks and outside mirrors, and a steering wheel with audio and Bluetooth hands-free phone controls. In addition, you get Tech Audio with AM FM CD, Auxiliary Jack, USB port, iPod interface, and hands-free calling and music streaming utilizing Bluetooth. The top-level trims offer enticing features like Paddle Shifters for precision driving, Sport Drive mode, 17in alloy wheels, Push Button Start, a Multi-information display, and the amazing Entune Premium Audio System with Navigation and App Suite.`, 1)
  ];
  cart: Ad[] = [];

  getPosts(){
  return this.posts;
  }
  getCart(){
    return this.cart;
  }

  onAddmobile(model, company,price, colors,processor, display, memory, os, img, details, id){
    this.posts.push(new Mobile(model.value, company.value,price.value, colors.value,processor.value, display.value, memory.value, os.value, img.src, details.value, id));
  }
  onAddCar(model, company, price, colors, engine, epaClass, styleName, driveTrain, passengerCapacity, passengerDoors, bodyStyle, img, details, id){
    this.posts.push(new Car(model.value, company.value, price.value, colors.value, engine.value, epaClass.value, styleName.value, driveTrain.value, passengerCapacity.value, passengerDoors.value, bodyStyle.value, img.src, details.value, id));

  }
  onAddToCart(id){
    this.cart.push(this.posts[id]);
  }
  onDeleteFromCart(id){
    this.cart.splice(id, 1);
  }
}
