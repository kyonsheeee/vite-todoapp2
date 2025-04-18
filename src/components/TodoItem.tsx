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
    <>
      <Space style={{ width: "100%", justifyContent: "space-between" }}>
        <Space>
          <Checkbox checked={completed} onChange={() => onToggle(id)} />
          <Text
            delete={completed}
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {title}
          </Text>
        </Space>
        <Button danger onClick={() => onDelete(id)}>
          削除
        </Button>
      </Space>
    </>
  );
};
