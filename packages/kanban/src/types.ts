export interface KanbanItem {
  id: string;
  title: string;
  description?: string;
  labels?: { text: string; color: string }[];
  assignee?: string;
  dueDate?: string;
}

export interface KanbanColumnData {
  id: string;
  title: string;
  items: KanbanItem[];
  color?: string;
}
