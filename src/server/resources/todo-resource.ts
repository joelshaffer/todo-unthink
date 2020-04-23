import { ResourceBase } from './resource-base';
import {
  resource,
  get,
  post,
  template,
  TemplateResponse,
  RedirectResponse,
  ApiResponse,
  CookieResponse,
  body
} from 'resource-decorator';
import {TodoModel} from '../models/todo-model';

let _autoInc = 0;
const _allTodos: TodoModel[] = [
  new TodoModel({
    id: 0,
    title: 'First Item',
    completed: true
  }),
  new TodoModel({
    id: 1,
    title: 'Second Item',
    completed: false
  })
];

@resource({
  basePath: '',
})
export class TodoResource extends ResourceBase {
  @template()
  async indexPage(): Promise<TemplateResponse | RedirectResponse> {
    return new TemplateResponse('todo.html');
  }

  @get({
    path: '/api/todo'
  })
  async getTodos(): Promise<ApiResponse | CookieResponse | void> {
    return new ApiResponse(_allTodos);
  }

  @post({
    path: '/api/todo'
  })
  async postTodo(@body() model: Partial<TodoModel>): Promise<ApiResponse | CookieResponse | void>  {
    const result = new TodoModel({
      id:_autoInc,
      title:model.title,
      completed: false
    });

    _allTodos.push(result);
    ++_autoInc;

    return new ApiResponse({id: result.id});
  }
}
