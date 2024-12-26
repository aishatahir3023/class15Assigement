import Link from "next/link";

export default async function Home() {
  
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
 
    const data = await response.json();
    console.log(data);

    return (
      <main>
        {data.map((jasonplace: any) => (
          <div key={jasonplace.id}>
            <Link href={`/todos/${jasonplace.id}`}>
              <h1 className="text-7xl">
                {jasonplace.id} &nbsp; &nbsp; {jasonplace.title}
              </h1>
            </Link>
          </div>
        ))}
      </main>
    );
 
}
