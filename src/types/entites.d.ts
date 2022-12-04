interface User {
  id: string;
  firstName: string;
  lastName: string;
  mobileNo: string;
  district: string;
  nic: string;
}

interface Vehicle {
  fuelType: 'Diesel' | 'Petrol';
  registeredDate: Date;
  vehicleNo: string;
  vehicleType: string;
}
