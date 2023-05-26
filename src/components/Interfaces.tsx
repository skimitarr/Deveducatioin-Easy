export interface IstateTodosProps {
  stateTodos: ITask[];
}

export interface IProps {
  item: ITask
}
export interface ITask {
  description: string
  expertComment: string
  imageUrl: string
  title: string
}
