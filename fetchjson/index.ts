import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// Define structure of the Object (Todo)
interface Todo {
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todos = response.data as Todo;

  const id = todos.id;
  const title = todos.title;
  const completed = todos.completed;

  console.log(`
    The Todo with ID: ${id}
    Has a Title of: ${title}
    Is it finished? ${completed}
  `);
});
