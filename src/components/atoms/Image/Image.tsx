type Props = {
  src: string,
  alt: string,
  className?: string,
  width?: number,
  height?: number,
}

const Image = ({
  src,
  alt,
  className = '',
  width,
  height,
}: Props) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  )
}

Image.defaultProps = {
  className: '',
  width: undefined,
  height: undefined,
}

export default Image;

export type ImageProps = Props;
