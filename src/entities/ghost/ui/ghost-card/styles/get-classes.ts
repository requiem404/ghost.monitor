import classNames from 'classnames/bind';

import classes from './ghost-card.module.scss';
import { GhostCardProps } from '../ghost-card';

const cn = classNames.bind(classes);

type PickedGhostCardProps = Pick<GhostCardProps, 'className' | 'dangerLevel'>
export const getClasses = ({ className, dangerLevel }: PickedGhostCardProps) => {
  const cnRoot = cn('ghost-card', className);

  const cnDangerStatus = cn('ghost-card__danger-status', `ghost-card__danger-status--${dangerLevel}`);

  const cnStatus = cn('ghost-card__status');

  const cnTitle = cn('ghost-card__title');

  const cnTitleWrapper = cn('ghost-card__title-wrapper');

  const cnLocation = cn('ghost-card__location');

  return {
    cnRoot,
    cnTitle,
    cnStatus,
    cnLocation,
    cnTitleWrapper,
    cnDangerStatus,
  }
}