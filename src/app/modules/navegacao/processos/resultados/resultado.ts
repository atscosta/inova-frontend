export interface Resultado {
  id: string;
  numero: string;
  siglaTribunal: number;
  codClasseProcessual: string;
  codOrgaoJulgador: any;
  validations: Validation[];
}

export interface Validation {
  title: string;
  type: string;
  result: ValidationResult;
}

export interface ValidationResult {
  error: boolean;
  success: boolean;
  severity: string;
  message: string;
  causedBy: ValidationResult[];
}
