import {
  FiCheck,
  FiX,
  FiEdit,
  FiTrash2,
} from "react-icons/fi";

export const iconMap = {
  check: FiCheck,
  close: FiX,
  edit: FiEdit,
  delete: FiTrash2,
};

export type IconName = keyof typeof iconMap;
