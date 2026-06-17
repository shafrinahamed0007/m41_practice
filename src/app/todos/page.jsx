const TodosPage = async () => {
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (res) => res.json(),
  );
  return <div>
   Todos:  {todos.length}
  </div>;
};

export default TodosPage;
