import Image from "next/image";
import * as React from "react"

interface Props {
  size: number
}

const SummerbudAvatar: React.FC<Props> = ({ size }) => {
  return (
    <Image
      className="rounded-full object-contain"
      src="/me.jpeg"
      alt="summerbud's avatar"
      width={size}
      height={size}
    />
  );
};

export default SummerbudAvatar;