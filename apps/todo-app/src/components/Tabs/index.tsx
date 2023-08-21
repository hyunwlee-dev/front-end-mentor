import { HTMLAttributes } from 'react';
import { TabList } from '@/types/tab';
import styles from './style.module.scss';

interface IProps extends HTMLAttributes<HTMLUListElement>, TabList {}

const Tabs: React.FC<IProps> = ({ tabs, activeTabIndex, onChangeTab, className = '', ...restProps }) => {
  const combineClassName = `${styles.tabs} ${className}`;
  const checkIsActive = (index: number) => {
    if (index === activeTabIndex) {
      return styles['active'];
    }
    return '';
  };
  return (
    <ul className={combineClassName} {...restProps}>
      {tabs.map((item, index) => (
        <li className={`${styles.item} ${checkIsActive(index)}`} key={index} onClick={() => onChangeTab(index)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
