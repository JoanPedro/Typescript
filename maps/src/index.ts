import { Company } from './Company';
import { User } from './User';
import { CustomMap } from './CustomMap'

// new CustomMap('map');
const customMap = new CustomMap('map');
const user = new User();
const company = new Company();

customMap.addUserMarker(user);
customMap.addCompanyMarker(company);