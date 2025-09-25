// // src/components/SortableItem.jsx
// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";

// export default function SortableItem({ id, children }) {
//   // useSortable gives us transform & listeners. We will attach listeners only to the handle.
//   const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition: transition || undefined,
//     // Ensure a little 3D uplift while dragging (works well with shadow)
//     zIndex: transform ? 50 : "auto",
//   };

//   return (
//     <div ref={setNodeRef} style={style} {...attributes}>
//       {/* children is a render-prop: passes listeners -> child attaches to handle */}
//       {typeof children === "function" ? children(listeners) : children}
//     </div>
//   );
// }
// src/components/SortableItem.jsx
// src/components/SortableItem.jsx
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function SortableItem({ id, children }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: transform ? 50 : "auto",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      {typeof children === "function" ? children(listeners) : children}
    </div>
  );
}
