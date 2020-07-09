const CategorySchema = {
  name: 'Category',
  primaryKey: 'id',
  properties: {
    name: 'string',
    color: {type: 'string', default: '#fff'},
    isInit: {type: 'bool', default: false},
    isDefault: {type: 'bool', default: false},
    isQuantidade: {type: 'bool', default: false},
    isFuncao: {type: 'bool', default: false},
    order: {type: 'int', default: 0},
    entries: 'Entry[]',
    id: 'string',
  },
};

export default CategorySchema;
