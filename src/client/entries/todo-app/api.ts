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