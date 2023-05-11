import React from 'react';
import { clsx } from 'clsx';

type SwitchElementProps = {
  labelText: string;
  checked: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};
export const SwitchElement = React.forwardRef(
  (props: SwitchElementProps, ref: React.Ref<HTMLDivElement> | null) => {
    const { labelText, checked, onClick } = props;

    return (
      <div className="flex justify-end items-center gap-2">
        <div
          ref={ref}
          onClick={onClick}
          className="
            pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset 
            transition duration-200 ease-in-out bg-slate-900/10 ring-slate-900/5 
            dark:bg-[#E7E7E9] dark:ring-[#DCDCDF] "
        >
          <div
            className={clsx(
              'h-4 w-4 rounded-full bg-white  shadow-sm ring-1 ring-slate-700/10  transition duration-200 ease-in-out',
              checked && 'translate-x-4'
            )}
          ></div>
        </div>
        <div className="px-1 inline-block">{labelText}</div>
      </div>
    );
  }
);
SwitchElement.displayName = 'SwitchElement';
