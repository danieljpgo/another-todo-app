const variants = {
  sub: 'text-gray-400 text-sm',
  base: 'text-gray-400 text-base',
  title: 'text-gray-400 text-xl font-bold',
} as const;

interface TextProps {
  variant?: keyof typeof variants;
  children: string;
}

const Text = ({ children, variant = 'base' }: TextProps) => (
  <p className={`${variants[variant]}`}>{children}</p>
);

export default Text;
