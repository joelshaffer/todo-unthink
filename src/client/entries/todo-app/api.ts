import {TodoModel} from '../../../server/models/todo-model';

export async function getTodos(): Promise<TodoModel[]> {
  const response = await window.fetch(
    '/api/todo',
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  return (await  response.json()).map((record: Record<string, unknown>) => new TodoModel(record));
}

export async function createTodo(title: string): Promise<Record<string, unknown>> {
  const response = await window.fetch(
    '/api/todo',
    {
      method: 'POST',
      body: JSON.stringify({
        title: title
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  return (await response.json());
}

export async function updateTodo(todo: TodoModel): Promise<void> {
  await window.fetch(
    `/api/todo/${todo.id}`,
    {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
}

export async function deleteTodo(todo: TodoModel): Promise<void> {
  await window.fetch(
    `/api/todo/${todo.id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
}