import React from "react";
import Drag from './components/drag';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Project: React.FC = () => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Drag />
      </DndProvider>
    </>
  );
};

export default Project;
