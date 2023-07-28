import { HTMLAttributes } from 'react';
import * as React from 'react';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  completed: number;
  isVisibleAmount?: boolean;
}

const ProgressBar: React.FC<IProps> = ({ className, completed, isVisibleAmount = false }) => {
  return (
    <div className={className}>
      <div style={{ width: `${completed}%` }}>{isVisibleAmount && <span>{`${completed}%`}</span>}</div>
    </div>
  );
};

export { ProgressBar };
