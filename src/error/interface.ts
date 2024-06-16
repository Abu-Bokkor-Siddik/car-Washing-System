
export type ErrorTypes = {
    path: string | number;
    message: string;
  }[];
  export type  returnType= {
    statusCode: number;
    message: string;
    errorSource:ErrorTypes;
  };