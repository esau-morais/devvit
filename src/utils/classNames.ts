export const cn = (...classNames: (false | null | undefined | string)[]) => {
  return classNames.filter(Boolean).join(' ');
};
