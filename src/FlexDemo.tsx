import React, {
  FC,
  ChangeEventHandler,
  PropsWithChildren,
  CSSProperties,
} from "react";
import { motion } from "framer-motion";

import styles from "./FlexDemo.module.css";

function FlexDemo() {
  const [flexDirection, setFlexDirection] = React.useState("row");
  const [justifyContent, setJustifyContent] = React.useState("flex-start");
  const [alignItems, setAlignItems] = React.useState("stretch");
  const style = {
    flexDirection,
    justifyContent,
    alignItems,
  } as CSSProperties;
  const transition = { type: "spring", stiffness: 500, damping: 40 };

  return (
    <section className={styles.wrapper}>
      <div style={style} className={styles.demoArea}>
        {ITEMS.map((item) => (
          <motion.div
            layout
            transition={transition}
            key={item.id}
            className={styles.flexItem}
          >
            <motion.div layout="position">{item.label}</motion.div>
          </motion.div>
        ))}
      </div>

      <div className={styles.controls}>
        <SelectControl
          label="flex-direction"
          value={flexDirection}
          onChange={(event) => setFlexDirection(event.target.value)}
        >
          <option value="row">row</option>
          <option value="column">column</option>
        </SelectControl>
        <SelectControl
          label="justify-content"
          value={justifyContent}
          onChange={(event) => setJustifyContent(event.target.value)}
        >
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
          <option value="space-evenly">space-evenly</option>
        </SelectControl>
        <SelectControl
          label="align-items"
          value={alignItems}
          onChange={(event) => setAlignItems(event.target.value)}
        >
          <option value="stretch">stretch</option>
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
        </SelectControl>
      </div>
    </section>
  );
}

const SelectControl: FC<
  PropsWithChildren<{
    label: string;
    value: string;
    onChange: ChangeEventHandler<HTMLSelectElement>;
  }>
> = ({ label, value, onChange, children }) => {
  const id = React.useId();

  return (
    <div className={styles.selectControl}>
      <label htmlFor={id}>{label}</label>
      <select className={styles.select} value={value} onChange={onChange}>
        {children}
      </select>
    </div>
  );
};

const ITEMS = [
  {
    id: "001",
    label: "Hello",
  },
  {
    id: "002",
    label: "to",
  },
  {
    id: "003",
    label: "the",
  },
  {
    id: "004",
    label: "World!",
  },
];

export default FlexDemo;
