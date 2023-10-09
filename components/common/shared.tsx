import React from 'react';

export const Text1 = React.forwardRef(
  (
    props:
      | undefined
      | { children: JSX.Element | string }
      | React.HTMLAttributes<HTMLParagraphElement>,
    ref: React.Ref<HTMLParagraphElement> | null
  ) => {
    let children,
      attributes = undefined;

    if (props) {
      const { children: childrenDest, ...attrs } = props;
      children = childrenDest;
      attributes = attrs;
    }

    return (
      <div
        ref={ref}
        className="text-base line-clamp-3 leading-relaxed tracking-normal "
        {...attributes}
      >
        {children}
      </div>
    );
  }
);

Text1.displayName = 'Text1';

export const Anchor1 = React.forwardRef(
  (
    props:
      | undefined
      | { children: JSX.Element | string }
      | React.AnchorHTMLAttributes<HTMLAnchorElement>,
    ref: React.Ref<HTMLAnchorElement> | null
  ) => {
    let children,
      attributes = undefined;

    if (props) {
      const { children: childrenDest, ...attrs } = props;
      children = childrenDest;
      attributes = attrs;
    }

    return (
      <a
        ref={ref}
        className="text-base line-clamp-3 leading-relaxed tracking-normal "
        {...attributes}
      >
        {children}
      </a>
    );
  }
);

Anchor1.displayName = 'Anchor1';

export const Title1 = React.forwardRef(
  (
    props:
      | undefined
      | { children: JSX.Element | string }
      | React.HTMLAttributes<HTMLHeadingElement>,
    ref: React.Ref<HTMLHeadingElement> | null
  ) => {
    let children,
      attributes = undefined;

    if (props) {
      const { children: childrenDest, ...attrs } = props;
      children = childrenDest;
      attributes = attrs;
    }

    return (
      <div
        ref={ref}
        className="text-5xl line-clamp-3 leading-relaxed tracking-normal"
        {...attributes}
      >
        {children}
      </div>
    );
  }
);

Title1.displayName = 'Title1';
