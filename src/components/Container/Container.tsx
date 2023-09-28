import { ReactNode, FC } from 'react';

import styles from './Container.module.css';

type ContainerProps = {
  children?: ReactNode;
};

export const Container: FC<ContainerProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);