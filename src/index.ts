import { User } from './User';
import { Company } from './Company';

const user = new User();
const company = new Company();

console.log(user, company);

new google.maps.Map(document.getElementById('map') as HTMLElement, {
  zoom: 1,
  center: {
    lng: 0,
    lat: 0,
  },
});
