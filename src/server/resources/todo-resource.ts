import { ResourceBase } from './resource-base';
import { resource, get, template, TemplateResponse, RedirectResponse, ApiResponse, CookieResponse } from 'resource-decorator';
import {TodoModel} from '../models/todo-model';

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
  async getMessage(): Promise<ApiResponse | CookieResponse | void> {
    return new ApiResponse(_allTodos);
  }
}
