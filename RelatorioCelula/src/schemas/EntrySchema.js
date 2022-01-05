const EntrySchema = {
  name: 'Entry',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    entryAt: 'date',
    description: 'string?',
    latitude: 'float?',
    longitude: 'float?',
    address: 'string?',
    photo: 'string?',
    isInit: 'bool',
    category: 'Category',
    idade: 'string',
    quantidade: 'float',
    nameCelula: 'string',
  },
};

export default EntrySchema;
