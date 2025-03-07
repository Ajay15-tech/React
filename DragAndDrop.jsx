import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import "./DragAndDrop.css";

// Array of images with stable string IDs (ensure these images exist in /public/images)
const initialImages = [
  { id: "1", src: "/images/image 1.jpeg", alt: "Image 1" },
  { id: "2", src: "/images/image 2.jpg", alt: "Image 2" },
  { id: "3", src: "/images/image 3.webp", alt: "Image 3" },
  { id: "4", src: "/images/image 4.webp", alt: "Image 4" },
  { id: "5", src: "/images/image 5.jpg", alt: "Image 5" },
  { id: "6", src: "/images/image 6.jpg", alt: "Image 6" },
];

const DragAndDropList = () => {
  const [images, setImages] = useState(initialImages);

  // When the drag operation ends, update the image order.
  const handleOnDragEnd = (result) => {
    if (!result.destination) return; // If dropped outside, do nothing.

    setImages((prevImages) => {
      const newImages = Array.from(prevImages);
      const [movedImage] = newImages.splice(result.source.index, 1);
      newImages.splice(result.destination.index, 0, movedImage);
      return newImages;
    });
  };

  return (
    <div className="drag-and-drop-container">
      <h2 className="drag-and-drop-title">Drag and Drop Images</h2>
      <p className="instructions">
        You Can Drag And Drop The Images
      </p>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided) => (
            <ul
              className="drag-drop-list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {images.map((image, index) => (
                <Draggable key={image.id} draggableId={image.id} index={index}>
                  {(provided, snapshot) => (
                    <li
                      className="drag-drop-item"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        border: snapshot.isDragging
                          ? "2px solidrgb(159, 165, 46)"
                          : "2px solid transparent",
                      }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="drag-drop-image"
                      />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DragAndDropList;