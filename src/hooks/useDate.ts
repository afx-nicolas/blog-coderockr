import { useEffect, useState } from 'react';

type UseDate = (d: string) => Date | undefined;

const useDate: UseDate = (d) => {
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    setDate(new Date(d));
  }, [d]);

  return date;
}

export default useDate;
