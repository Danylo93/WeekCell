import {useEffect, useState} from 'react';

import {getEntries, saveEntry, deleteEntry} from '../services/Entries';

const useEntries = (days = 7, category) => {
  const [entries, setEntries] = useState();

  useEffect(() => {
    async function loadBalance() {
      const data = await getEntries(days, category);
      setEntries(data);
    }

    loadBalance();
  }, [days, category]);

  return [entries, saveEntry, deleteEntry];
};

export default useEntries;
