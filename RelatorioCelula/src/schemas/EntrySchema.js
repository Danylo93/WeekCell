const EntrySchema = {
  name: 'Entry',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    funcao: 'string',
    entryAt: 'date',
    latitude: 'float?',
    longitude: 'float?',
    address: 'string?',
    photo: 'string?',
    isInit: 'bool',
    category: 'Category',
    idade: 'string',
    quantidade: 'float',
  },
};

export default EntrySchema;
