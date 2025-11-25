import AnimatedStaggerParent, {
  AnimatedStaggerParentProps,
} from "@/components/feathers/animated-stagger-parent";
import { cn } from "@/lib/utils/cn";

export default function ResumeContainer({
  className,
  ...props
}: AnimatedStaggerParentProps): JSX.Element {
  return (
    <AnimatedStaggerParent
      delay={0}
      className={cn(" grid grid-cols-1 lg:grid-cols-2 gap-4 ", className)}
      {...props}
    >
      {props.children}
    </AnimatedStaggerParent>
  );
}

ResumeContainer.ResumeCard = (({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "py-6 bg-[#232329] px-10 rounded-xl flex flex-col items-center justify-between lg:items-start gap-1 hover:border-b ease-in-out transition-all hover:border-accent",
        className
      )}
      {...props}
    />
  );
}) as React.FC<React.HTMLAttributes<HTMLDivElement>>;

ResumeContainer.ResumeCard.displayName = "ResumeCard";

ResumeContainer.title = ({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLHeadingElement>): JSX.Element => {
  return (
    <h3
      className={cn(["text-xl font-semibold h-18 mb-6", className])}
      {...props}
    />
  );
};

ResumeContainer.duration = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>): JSX.Element => {
  return <p className={cn("text-accent text-sm", className)} {...props} />;
};

type ResumeHeadingDescriptionProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

ResumeContainer.place = <T extends React.ElementType = "p">({
  as,
  className,
  children,
  ...props
}: ResumeHeadingDescriptionProps<T>) => {
  const Component = as || "p";
  return (
    <Component
      className={cn(
        "flex items-center gap-2 text-gray-400 text-xs font-bold",
        className
      )}
      {...props}
    >
      <span className="size-2 rounded-full bg-accent inline-block" />
      {children}
    </Component>
  );
};
