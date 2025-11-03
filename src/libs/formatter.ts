export const separator = (value?: string | number | null): string => {
  if (!value) return '';
  value = value.toString();
  value = value.split(',').join('');
  value = value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$&,');
  return value;
};
export const removeSeparator = function (
  value?: string | number | null,
): number {
  if (!value) return 0;
  value = value.toString();
  value = value.split(',').join('');
  return Number(value);
};

export const FAS_NUM_REGEX = /[۰۱۲۳۴۵۶۷۸۹٩٨٧٦٥٤٣٢١٠]/g;
export const standardPersianNumberMap = {
  '۰': '0',
  '۱': '1',
  '۲': '2',
  '۳': '3',
  '۴': '4',
  '۵': '5',
  '۶': '6',
  '۷': '7',
  '۸': '8',
  '۹': '9',
  '٠': '0',
  '١': '1',
  '٢': '2',
  '٣': '3',
  '٤': '4',
  '٥': '5',
  '٦': '6',
  '٧': '7',
  '٨': '8',
  '٩': '9',
};

export function replacePersianNumbersWithEnglish(
  value: number | string,
): string {
  const stringValue = String(value);

  return stringValue.replace(FAS_NUM_REGEX, (matched) => {
    return (standardPersianNumberMap as Record<string, string>)[matched];
  });
}

export function convertToPersianDigits(numStr: string): string {
  if (numStr === undefined) return '';

  const arabicDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  return numStr.replace(
    /[0-9]/g,
    (digit) => persianDigits[arabicDigits.indexOf(digit)],
  );
}
