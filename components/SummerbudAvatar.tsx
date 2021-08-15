import Image from "next/image";
import * as React from "react"

interface Props {
  size: string;
  className: string | null;
}

const SummerbudAvatar: React.FC<Props> = ({ size, className }) => {
  return (
    <div
      className="relative"
    >
      <Image
        className={"rounded-full object-contain " + className}
        src="/me.jpeg"
        alt="summerbud's avatar"
        width={size}
        height={size}
      />
    </div>

  );
};

export default SummerbudAvatar;