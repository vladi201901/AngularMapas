import { Injectable } from '@angular/core';
import { Marker , WayPoint  } from '../Interface/general';

@Injectable({
  providedIn: 'root'
})
export class LocacionService {
    
  public markers: Marker[] = [   
    {
      position: {
        lat: -11.9424502,
        lng: -77.042493
      },
      title: 'Santuario de la Hermandad del Señor de los Milagros',
    },
    {
      position: {
        lat: -11.9413847,
        lng: -77.0456427
      },
      title: 'Mercado Flor de Octubre',
    },
    {
      position: {
        lat: -11.944030, 
        lng: -77.039274
      },
      title: 'Mi Casa',
    }
  ];
  wayPoints: WayPoint[] = [
    {
      location: { lat: -11.9424502, lng: -77.042493},
      stopover: true,
    },
    {
      location: { lat: -11.9413847, lng: -77.0456427},
      stopover: true,
    },
   
  ];
//   public plan: Point[] = [
//     {
//       origen: {
//         lat: -11.9589,
//         lng: -77.0760,
//       },
//       destino: {
//         lat: -12.0431,
//         lng: -77.0438
//       },
    
//       waypoints :[
//       {
//         location: { lat: -11.9424502, lng: -77.0454958 }, 
//         stopover: true,
//       },
//       {
//         location: { lat: -11.9413847, lng: -77.0456427}, 
//         stopover: true,
//       },
//       {
//         location: { lat: -11.9336181, lng: -77.0454958},
//         stopover: true,
//       },
//     ]
//   }
// ];

  constructor() { }
 
  public getCurrentPosition(): Promise<any>  {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });
  }
}
