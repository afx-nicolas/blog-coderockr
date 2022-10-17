export interface FieldSchema {
  field: string;
  type: string;
}

type IsObjectValid = <T>(obj: Record<string, T>, fieldsSchema: FieldSchema[]) => boolean;

export const isObjectValid: IsObjectValid = (obj, fieldsSchema) => {
  const validFields = fieldsSchema.filter(({ field, type }) => {
    if (!obj.hasOwnProperty(field)) {
      return false;
    }

    if (typeof obj[field] !== type) {
      return false;
    }

    return true;
  });

  if (fieldsSchema.length !== validFields.length) {
    return false;
  }

  return true;
};

type ValidateArrayObjectFields = <T>(array: T[], fieldsSchema: FieldSchema[]) => T[];

export const validateArrayObjects: ValidateArrayObjectFields = (array, fieldsSchema) => {
  return array.filter((obj) => isObjectValid(obj as Record<string, any>, fieldsSchema));
};
