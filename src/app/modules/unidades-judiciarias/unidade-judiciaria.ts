import {TipoJustica} from "../tipos-justica/tipo-justica";
import {Tribunal} from "../tribunais/tribunal";

export interface TipoUnidade {
  codigo: string;
  descricao: string;
}

export interface ClassificacaoUnidade {
  codigo: string;
  descricao: string;
}

export interface UnidadeJudiciaria {
  id: string;
  codigo: string;
  unidadeJudiciaria: string;
  justica: TipoJustica;
  tribunal: Tribunal;
  uf: string;
  tipoUnidade: TipoUnidade;
  classificacaoUnidade: ClassificacaoUnidade;
  unidadesJudiciarias: number;
  estoque: number;
  taxaCongestionamentoLiquida: number;
  taxaCongestionamentoTotal: number;
}
