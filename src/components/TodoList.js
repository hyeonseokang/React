import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

const TodoList = ()=>{
    return (
        <TodoListBlock>
            <TodoItem text="잠자기" done={true}></TodoItem>
            <TodoItem text="공부하기" done={false}></TodoItem>
        </TodoListBlock>
    )
}

export default TodoList;