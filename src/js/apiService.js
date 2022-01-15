// import axios from 'axios';
// axios.defaults.baseURL = 'https://api.instantwebtools.net';

// export const getAllPassengers = async () => {
//   const response = await fetch('https://api.instantwebtools.net/v1/passengerrrr?page=1&size=10');

//   const data = await response.json();

//   return data.data;
// };

// export const getAllPassengers = async () => {
//   const response = await axios.get('/v1/passenger?page=1&size=10');

//   const { data } = response.data;
//   return data;
// };

// export const getAllPassengers = () => {
//   return fetch('https://api.instantwebtools.net/v1/passenger?page=1&size=10').then(response => {
//     if (!response.ok) throw new Error(`${response.status}`);

//     return response.json();
//   });
// };
