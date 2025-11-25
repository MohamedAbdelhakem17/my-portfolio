import SocialLinks from "@/components/feathers/social-links";

export default function Content() {
  return (
    <div className="col-span-full lg:col-span-1 lg:order-1 order-2 lg:p-6 p-2 space-y-4 lg:text-left text-center flex flex-col justify-center">
      {/* Title */}
      <p className="font-bold text-lg lg:text-xl">Software Developer</p>

      {/* My Name */}
      <h1 className="font-bold lg:text-5xl text-2xl lg:my-6 my-2 [&_span]:block">
        {/* Hey */}
        <span>Hello I&apos;m</span>

        {/* Name */}
        <span className="text-accent my-2">Mohamed Abdelhakem</span>
      </h1>

      {/* Short description */}
      <p className="text-pretty leading-7 lg:leading-10 text-base lg:text-lg max-w-lg mx-auto lg:mx-0 whitespace-normal break-words">
        I build modern, high-performance web applications with a focus on clean
        architecture and great user experiences. I specialize in full-stack
        development using cutting-edge technologies and scalable solutions.
      </p>

      {/* Social inks and download  CV action  */}
      <SocialLinks />
    </div>
  );
}
