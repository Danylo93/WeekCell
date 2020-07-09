import {useEffect, useState} from 'react';
import {
  getAllCategories,
  getCreditCategories,
  getFuncaoCategories,
  getInitCategories,
} from '../services/Categories';

const useCategories = () => {
  const [allCategories, setAllCategories] = useState();
  const [initCategories, setInitCategories] = useState();
  const [funcaoCategories, setFuncaoCategories] = useState();
  const [creditCategories, setCreditCategories] = useState();

  useEffect(() => {
    const loadAllCategories = async () => {
      const data = await getAllCategories();
      setAllCategories(data);
    };

    const loadInitCategories = async () => {
      const data = await getInitCategories();
      setInitCategories(data);
    };

    const loadCreditCategories = async () => {
      const data = await getCreditCategories();
      setCreditCategories(data);
    };

    const loadFuncaoCategories = async () => {
      const data = await getFuncaoCategories();
      setFuncaoCategories(data);
    };

    loadAllCategories();
    loadInitCategories();
    loadCreditCategories();
    loadFuncaoCategories();
  }, []);

  return [allCategories, initCategories, funcaoCategories, creditCategories];
};
