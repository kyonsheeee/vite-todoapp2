import { Checkbox, Button, Space, Typography } from "antd";
const { Text } = Typography;

type TodoItemProps = {
  id: number;
  title: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export const TodoItem = ({
  id,
  title,
  completed,
  onToggle,
  onDelete,
}: TodoItemProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Space>
        <Checkbox checked={completed} onChange={() => onToggle(id)} />
        <Text
          delete={completed}
          style={{ textDecoration: completed ? "line-through" : "none" }}
        >
          {title}
        </Text>
      </Space>
      <Button danger size="small" onClick={() => onDelete(id)}>
        削除
      </Button>
    </div>
  );
};
