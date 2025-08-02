interface Props {
  src: string;
  webpSrc?: string; // optional
  alt: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  className?: string;
  style?: React.CSSProperties;
}

export default function Image({
  src,
  webpSrc,
  alt,
  width,
  height,
  loading = "lazy",
  className,
  style,
}: Props) {
  return (
    <picture>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={className}
        style={style}
      />
    </picture>
  );
}
