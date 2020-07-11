import {useEffect, useState} from 'react';

import {getAllCategories, getInitCategories} from '../services/Categories';

const useCategories = () => {
  const [allCategories, setAllCategories] = useState();
  const [initCategories, setInitCategories] = useState();

  useEffect(() => {
    const loadAllCategories = async () => {
      const data = await getAllCategories();
      setAllCategories(data);
    };

    const loadInitCategory = async () => {
      const data = await getInitCategories();
      setInitCategories(data);
    };

    loadAllCategories();
    loadInitCategory();
  }, []);

  return [allCategories, initCategories];
};

export default useCategories;
