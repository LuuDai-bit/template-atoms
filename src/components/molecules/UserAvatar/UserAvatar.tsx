import Image from '@atoms/Image/Image'
import Text from '@atoms/Text/Text';

type Props = {
  src: string;
  userName: string;
}

const UserAvatar = ({ src, userName }: Props) => {
  return (
    <div className="w-12 h-12 rounded-full overflow-hidden">
      <Image
        src={src}
        title={userName}
        alt="User Avatar"
        className="w-full h-full object-cover" />
      <Text content={userName} className="sr-only" />
    </div>
  );
}

export default UserAvatar;
