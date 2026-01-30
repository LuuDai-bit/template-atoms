type Props = {
  src: string,
  alt: string,
  className?: string,
  title?: string,
  width?: number,
  height?: number,
}

const Image = ({
  src,
  alt,
  className = '',
  title,
  width,
  height,
}: Props) => {
  return (
    <img
      src={src}
      alt={alt}
      title={title}
      className={className}
      width={width}
      height={height}
    />
  )
}

Image.defaultProps = {
  className: '',
  title: undefined,
  width: undefined,
  height: undefined,
}

export default Image;

export type ImageProps = Props;
