import {useEffect, useState} from 'react';

import {getEntries, saveEntry, deleteEntry} from '../services/Entries';

const useEntries = (days = 7, funcao) => {
  const [entries, setEntries] = useState();

  useEffect(() => {
    async function loadBalance() {
      const data = await getEntries(days, funcao);
      setEntries(data);
    }

    loadBalance();
  }, [days, funcao]);

  return [entries, saveEntry, deleteEntry];
};

export default useEntries;
