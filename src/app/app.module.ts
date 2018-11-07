import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FirstdivComponent } from "./firstdiv/firstdiv.component";
import { WebdivComponent } from './webdiv/webdiv.component';
import { DesdivComponent } from './desdiv/desdiv.component';
import { AbtdivComponent } from './abtdiv/abtdiv.component';
import { FooterComponent } from './footer/footer.component';
import { AnchorComponent } from './anchor/anchor.component';

@NgModule({
  declarations: [AppComponent, FirstdivComponent, WebdivComponent, DesdivComponent, AbtdivComponent, FooterComponent, AnchorComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
