import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {
  isEmpty, isNull
} from 'lodash';
import { Option } from "../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function isValueEmpty(value: any) {
  if (typeof value === "object") return areAllPropertiesEmpty(value);
  return value === null || value === undefined || value === '' || value.length === 0 || value === false;
}

export function areAllPropertiesEmpty(obj: any): boolean {
  if (isEmpty(obj)) return true;
  if (isNull(obj)) return true;
  let filled = 0;
  const values = Object.values(obj);
  values.forEach((value) => {
    if (!isValueEmpty(value)) {
      filled += 1;
    }
  });
  if (filled === 0) return true;
  return false;
}

export function capitalizeString(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function enumToOptions(enumObject:any): Option[] {
  return Object.keys(enumObject).map(key => ({ label: capitalizeString(enumObject[key]), value: key }));
}
