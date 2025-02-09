export interface Task {
  id: string
  name: string
  description?: string
  dueDate?: Date
  linkUrl?: string
  completed: boolean
}
