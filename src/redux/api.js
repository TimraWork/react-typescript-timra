const axios = require('axios');

const _transformPosts = ({id, title, _embedded, date, excerpt}) => {
  return {
    id: id,
    // img: _embedded['wp:featuredmedia'] ? _embedded['wp:featuredmedia'][0]['source_url'] : this._pushImageUrl,
    title: title['rendered']
    // date: this._formatDate(date),
    // excerpt: excerpt['rendered']
  };
};

export const getPosts = async () => {
  try {
    const {data} = await axios.get('https://timra.ru/timra/wp-json/wp/v2/posts?_embed&per_page=2&page=1');
    return data.map(_transformPosts);
  } catch (err) {
    console.error('Error in api = ', err);
  }
};

getPosts();

// TS
// export interface HttpResponse<T> extends Response {
//   parsedBody?: T;
//   status: number;
//   redirect?: boolean;
// }

// export async function http<T>(request: string): Promise<HttpResponse<T>> {
//   const response: HttpResponse<T> = await fetch(request);

//   try {
//     response.parsedBody = await response.json();
//   } catch (err) {
//     console.log('Error', err);
//   }

//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }

//   return response;
// }

// call
// interface IPost {
//   title?: string;
//   body?: string;
// }
// const getData = async (id: string) => {
//   try {
//     const resp = await http<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     console.log('Response', resp);
//   } catch (resp) {
//     console.log('Error', resp);
//   }
// };

// getData('1');

// const BASE_API_URL = `https://loft-taxi.glitch.me`;

// const commonParams = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// };

// const fetchData = (dataUrl, params) =>
//   fetch(dataUrl, params)
//     .then((res) => res.json())
//     .catch((err) => {
//       console.log('Could not fetch', err);
//     });

// export const getServerCard = async (token) => {
//   return await fetchData(`${BASE_API_URL}/card?token=${token}`, {});
// };

// export const getServerAddressList = () => {
//   return fetchData(`${BASE_API_URL}/addressList`, {});
// };

// export const getServerRoute = (payload) => {
//   return fetchData(`${BASE_API_URL}/route?address1=${payload.address1}&address2=${payload.address2}`, {});
// };

// export const serverLogin = async (payload) => {
//   const params = {
//     ...commonParams,
//     body: JSON.stringify(payload)
//   };
//   return await fetchData(`${BASE_API_URL}/auth`, params); //return [{},{}]
// };

// export const serverRegister = async ({email, password, name, surname}) => {
//   const params = {
//     ...commonParams,
//     body: JSON.stringify({
//       name: name,
//       surname: surname,
//       email: email,
//       password: password
//     })
//   };
//   return fetchData(`${BASE_API_URL}/register`, params);
// };

// export const serverCard = async ({token, cardNumber, expiryDate, cardName, cvc}) => {
//   const params = {
//     ...commonParams,
//     body: JSON.stringify({
//       token: token,
//       cardNumber: cardNumber,
//       expiryDate: expiryDate,
//       cardName: cardName,
//       cvc: cvc
//     })
//   };
//   return await fetchData(`${BASE_API_URL}/card`, params);
// };
