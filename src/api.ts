interface HttpResponse<T> extends Response {
  parsedBody?: T;
  status: number;
  redirect?: boolean;
}

export async function http<T>(request: string): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request);

  try {
    // Error if there is no body
    response.parsedBody = await response.json();
  } catch (err) {
    console.log('Error', err);
  }

  if (!response.ok) {
    // Error if there is response status issue
    throw new Error(response.statusText);
  }

  return response;
}

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
