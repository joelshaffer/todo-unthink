export class TodoModel {
  id?: number;
  title: string;
  completed: boolean = false;
  dateCreated: Date;

  constructor(init?: Partial<TodoModel>) {
    Object.assign(this, init);
  }
}