import * as React from "react";

interface Props {}

const SectionContainer: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="flex flex-col max-w-4xl lg:max-w-5xl px-8 lg:px-4"
    >
      {children}
    </div>
  )
}

export default SectionContainer