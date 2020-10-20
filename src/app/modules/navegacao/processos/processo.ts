export interface Processo {
  id: string;
  npu: string;
  codigoClasse: number;
  descricaoClasse: string;
  dataDistribuicao: any;
  validacoesRealizadas: number;
  erros: number;
}
