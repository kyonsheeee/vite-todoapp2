import { Input, Button, Space } from "antd";
import { useState } from "react";

type TodoFormProps = {
  onAdd: (title: string) => void;
};

export const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Space style={{ width: "100%" }}>
          <Input
            placeholder="新しい TODO を入力"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button type="primary" htmlType="submit">
            追加
          </Button>
        </Space>
      </form>
    </>
  );
};
