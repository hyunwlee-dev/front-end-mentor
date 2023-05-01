import { HTMLAttributes } from "react";
import styles from "./style.module.scss";
import { TabList } from "@/types/tab";

interface IProps extends HTMLAttributes<HTMLUListElement>, TabList {
  items: string[];
  activeIndex: number;
  onChangeTab: (index: number) => void;
}

const Tabs: React.FC<IProps> = ({
  items,
  activeIndex,
  onChangeTab,
  className = "",
  ...restProps
}) => {
  const combineClassName = `${styles.tabs} ${className}`;
  const checkIsActive = (index: number) => {
    if (index === activeIndex) return styles["activeIndex"];
    return "";
  };
  return (
    <ul className={combineClassName} {...restProps}>
      {items.map((item, index) => (
        <li
          className={`${styles.item} ${checkIsActive(index)}`}
          key={index}
          onClick={() => onChangeTab(index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
