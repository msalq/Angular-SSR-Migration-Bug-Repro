import { NgModule } from "@angular/core";
import { ServerModule } from "@angular/platform-server";

import { AppComponent } from "./app.component";



@NgModule({
  imports: [
    ServerModule,
  ],
  providers: [
    // Add server-only providers here.
    
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
