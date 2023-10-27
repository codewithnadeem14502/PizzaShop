import React from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { DeleteItem } from './cartSlice';

const DeleteBtn = ({ pizzaId }) => {
  const dispatch = useDispatch();
  return (
    <Button
      type="small"
      onClick={() => dispatch(DeleteItem(pizzaId), console.log('hello'))}
    >
      Delete
    </Button>
  );
};

export default DeleteBtn;
