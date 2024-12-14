interface ValidationError {
  field: string;
  message: string;
}
export function validateRequest(
  body: Record<string, any>,
  requiredFields: string[]
): { isValid: boolean; errors?: ValidationError[] } {
  const errors: ValidationError[] = [];

  // Check for missing required fields
  requiredFields.forEach((field) => {
    if (
      body[field] === undefined ||
      body[field] === null ||
      body[field] === ""
    ) {
      errors.push({
        field,
        message: `${field} is required`,
      });
    }
  });

  // Check for string length
  const stringLengthValidations: Record<
    string,
    { min?: number; max?: number }
  > = {
    name: { min: 2, max: 100 },
    title: { min: 3, max: 200 },
    description: { min: 10, max: 1000 },
  };

  Object.entries(stringLengthValidations).forEach(([field, validation]) => {
    if (body[field] && typeof body[field] === "string") {
      const value = body[field];
      if (validation.min && value.length < validation.min) {
        errors.push({
          field,
          message: `${field} must be at least ${validation.min} characters long`,
        });
      }
      if (validation.max && value.length > validation.max) {
        errors.push({
          field,
          message: `${field} cannot exceed ${validation.max} characters`,
        });
      }
    }
  });

  return {
    isValid: errors.length === 0,
    errors: errors.length > 0 ? errors : undefined,
  };
}
