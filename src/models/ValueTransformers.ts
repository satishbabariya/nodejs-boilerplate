import { ValueTransformer } from 'typeorm';

export const encode: ValueTransformer = {
  to: (entityValue: string) => {
    return encodeURI(entityValue);
  },
  from: (databaseValue: string) => {
    return decodeURI(databaseValue);
  },
};

export const encrypt: ValueTransformer = {
  to: (entityValue: string) => {
    return Buffer.from(entityValue).toString('base64');
  },
  from: (databaseValue: string) => {
    return Buffer.from(databaseValue, 'base64').toString();
  },
};

export const lowercase: ValueTransformer = {
  to: (entityValue: string) => {
    return entityValue.toLocaleLowerCase();
  },
  from: (databaseValue: string) => {
    return databaseValue;
  },
};
