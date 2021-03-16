import dynamic from 'next/dynamic';

interface Props {
  children: 'I001';
}

const Fallback = ({ spin = false, ...props }) => (
  <svg
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  ></svg>
);

const svg = {
  I001: dynamic(() => import('./SVG/I001'), { loading: () => <Fallback /> }),
};

export const Icon = ({ children, ...props }: Props) => {
  const Child = svg[children];

  return <Child {...props} />;
};

export default Icon;
