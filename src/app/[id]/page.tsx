type Props = {
    params: {
      id: string;
    };
  };
  
  const DynamicRoute = async ({ params }: Props) => {
   
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
     
  
      const result = await response.json();
  
      return (
        <h1 className="text-7xl">
          Dynamic Route <br /> <br />
          ID: {result.id} <br />
          Title: {result.title}
        </h1>
      );
   
  };
  
  export default DynamicRoute;
  