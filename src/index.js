import './sass/main.scss';
import { getAllPassengers } from './js/apiService';
import { createCard } from './js/createCard';
import refs from './js/refs';

// getAllPassengers()
//   .then(({ data }) => {
//     const markup = data.map(passenger => createCard(passenger)).join('');

//     refs.passengersList.innerHTML = markup;

//     console.log(data);
//   })
//   .catch(error => console.error(error));

// const runApp = async () => {
//   try {
//     const passengers = await getAllPassengers();

//     const markup = passengers.map(passenger => createCard(passenger)).join('');

//     refs.passengersList.innerHTML = markup;
//   } catch (error) {
//     console.error(error);
//   }
// };

// runApp();
