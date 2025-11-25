import { cn } from "@/lib/utils/cn";
import React from "react";

export default function ResumeHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      className={cn(
        "border-b border-b-zinc-200 dark:border-b-zinc-600 space-y-1 pb-2 mb-6",
        className
      )}
      {...props}
    />
  );
}

ResumeHeading.title = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>): JSX.Element => {
  return (
    <h2
      className={cn(
        "font-bold lg:text-5xl md:text-3xl text-2xl lg:mb-5 mb-1 text-center lg:text-left mt-4 lg:mt-0  ",
        className
      )}
      {...props}
    />
  );
};

ResumeHeading.description = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>): JSX.Element => {
  return (
    <p
      className={cn(
        "text-md leading-9 text-pretty mb-3 text-center lg:text-left",
        className
      )}
      {...props}
    />
  );
};
