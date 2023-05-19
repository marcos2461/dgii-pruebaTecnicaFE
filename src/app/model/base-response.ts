export interface BaseResponse<T>{
  Data: T[];
  Messages: Exception;
  Success: boolean;
}


export interface Exception {
  Message: string;
}
