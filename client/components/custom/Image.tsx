import React from "react";
import Image, { ImageProps } from "next/image";
interface Props {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  imageProps?: Omit<ImageProps, "src">;
}

export const FillNextImage = ({
  alt,
  src,
  style = {},
  imageProps = {},
}: Props) => {
  return (
    <div
      style={{ width: "100%", height: "100%", position: "relative", ...style }}
    >
      <Image
        alt={alt}
        src={src}
        layout="fill"
        objectFit="cover"
        {...imageProps}
      />
    </div>
  );
};
