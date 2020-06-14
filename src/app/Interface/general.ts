// Datos Generales
 export interface Marker {
    position: {
      lat: number,
      lng: number,
    };
    title: string;
  }
// Nos permite hacer una ruta de mis puntos a visitar
  // export interface Point {
  //   origen: {lat: number, lng: number};
  //   destino: {lat: number, lng: number};
  //   waypoints: Waypoint[];
  // }
  export interface WayPoint {
    location: {
      lat: number,
      lng: number,
    };
    stopover: boolean;
  }

  // export interface Waypoint {
  //   location: {lat: number, lng: number};
  //   // Check If it's mandatory to stop on this point
  //   stopover: boolean;
  // }