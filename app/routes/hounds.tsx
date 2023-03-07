import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react'

export const loader: LoaderFunction = async () => {
  console.log('in loader')
  // get list of dog breeds from the dog.ceo API
  const data = await fetch('https://dog.ceo/api/breeds/list/all').then(res => res.json());

  console.log('data', data);

  // return the list of hounds
  return json(data.message.hound)
}
export default function Hounds () {
  const loaderData = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Hounds</h1>
      <ul>
        {loaderData.map((breed: string) => (
          <li key={breed}>{breed}</li>
        ))}
      </ul>
    </div>
  )
}
