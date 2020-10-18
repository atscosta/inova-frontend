import {TipoJustica} from "../tipos-justica/tipo-justica";

export interface Tribunal {
  id?: string;
  codigo: string;
  sigla: string;
  justicas?: TipoJustica[];
  ufs?: string[];
}
