import { Component} from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  lat = -33.3300116;
  lng = -60.2171069;
  zoom = 18;
  map;

  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId);   
   }

}
