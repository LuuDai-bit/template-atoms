import Text from '@atoms/Text/Text';
import type { ButtonProps } from '@atoms/Button/Button';
import Icon from '@atoms/Icon/Icon';
import type { IconName } from '@atoms/Icon/IconMap';
import Button from '@atoms/Button/Button';

type Props = {
  cells: Array<{
    content: string;
    isNumeric?: boolean;
    isBoolean?: boolean;
    className?: string;
    customIcon?: IconName;
    isButton?: boolean;
    buttonContent?: Array<ButtonProps>;
  }>;
};

const TableRow = ({ cells }: Props) => {
  return (
    <tr>
      {cells.map((cell, index) => (
        <td
          key={index}
          className={`${cell.className || ''} ${
            cell.isNumeric ? 'text-right' : 'text-left'
          }`}
        >
          <div className="flex items-center">
            {cell.isBoolean && (
              <Icon name={cell.customIcon || 'check'} className="mr-2" />
            )}

            {cell.isButton && cell.buttonContent && (
              <div className="flex space-x-2">
                {cell.buttonContent.map((buttonProps, btnIndex) => (
                  <Button key={btnIndex} {...buttonProps} />
                ))}
              </div>
            )}

            {!cell.isButton && <Text content={cell.content} />}
          </div>
        </td>
      ))}
    </tr>
  );
};

export default TableRow;

export type TableRowProps = Props;
