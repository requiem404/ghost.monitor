import classNames from 'classnames/bind';

import classes from './button-default.module.scss';
import { ButtonDefaultProps } from '../button-default';

const cn = classNames.bind(classes);

type PickedButtonDefaultProps = Pick<ButtonDefaultProps, 'className'>
export const getClasses = ({ className }: PickedButtonDefaultProps) => {
  const cnRoot = cn('button-default', className);

  return { cnRoot }
}