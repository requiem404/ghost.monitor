import classNames from 'classnames/bind';

import classes from './main-page.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  const cnRoot = cn('main-page');

  const cnContainer = cn('main-page__container');

  return {
    cnRoot,
    cnContainer
  }
}