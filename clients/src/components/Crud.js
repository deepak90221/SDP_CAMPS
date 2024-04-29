import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radmmius: 3px;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

const CurdOp = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const [editedItemIndex, setEditedItemIndex] = useState(null);
  const [editedItemValue, setEditedItemValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const editItem = (index) => {
    setEditedItemIndex(index);
    setEditedItemValue(items[index]);
  };

  const updateItem = () => {
    if (editedItemValue.trim() !== '') {
      const updatedItems = [...items];
      updatedItems[editedItemIndex] = editedItemValue.trim();
      setItems(updatedItems);
      setEditedItemIndex(null);
      setEditedItemValue('');
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEditChange = (e) => {
    setEditedItemValue(e.target.value);
  };

  return (
    <Container>
      <h2>Campus Recruitment Users</h2>
      <Input
        type="text"
        placeholder="Enter a new user"
        value={inputValue}
        onChange={handleChange}
      />
      <Button onClick={addItem}>Add User</Button>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            {editedItemIndex === index ? (
              <>
                <Input
                  type="text"
                  value={editedItemValue}
                  onChange={handleEditChange}
                />
                <Button onClick={updateItem}>Update</Button>
              </>
            ) : (
              <>
                <span>{item}</span>
                <div>
                  <Button onClick={() => editItem(index)}>Edit</Button>
                  <Button onClick={() => deleteItem(index)}>Delete</Button>
                </div>
              </>
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default CurdOp;