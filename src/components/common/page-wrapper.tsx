import { cn } from "@/lib/utils/cn";

type PageWrapperProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export default function PageWrapper({
  className,
  ...rest
}: PageWrapperProps): JSX.Element {
  return (
    <section
      className={cn([
        "grid grid-cols-1 lg:grid-cols-2 lg:pt-4 lg:pb-4 lg:gap-4 gap-3 place-content-center min-h-screen",
        className,
      ])}
      {...rest}
    />
  );
}
