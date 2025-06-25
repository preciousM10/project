
import { useState, useEffect } from 'react';

export const useMidnightReset = <T>(initialData: T[], sortFn: (a: T, b: T) => number) => {
  const [data, setData] = useState(initialData);
  const [lastResetDate, setLastResetDate] = useState(new Date().toDateString());

  useEffect(() => {
    const checkMidnightReset = () => {
      const currentDate = new Date().toDateString();
      if (currentDate !== lastResetDate) {
        // Reset and sort data at midnight
        const sortedData = [...initialData].sort(sortFn);
        setData(sortedData);
        setLastResetDate(currentDate);
        console.log('Midnight reset triggered - data resorted');
      }
    };

    // Check immediately
    checkMidnightReset();

    // Set up interval to check every minute
    const interval = setInterval(checkMidnightReset, 60000);

    return () => clearInterval(interval);
  }, [initialData, lastResetDate, sortFn]);

  // Initial sort on component mount
  useEffect(() => {
    const sortedData = [...initialData].sort(sortFn);
    setData(sortedData);
  }, [initialData, sortFn]);

  return { data, setData };
};
