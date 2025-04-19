import clsx from 'clsx';

export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center font-medium rounded-md transition-all',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
