export class RespModel {
  constructor(
    public code: number,
    public message: string,
    public data?: any,
    public data_string?: string
  ) {}
}
