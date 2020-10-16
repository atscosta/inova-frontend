import {MenuItem} from 'primeng/api';
import {Roles} from './auth/roles.enum';

export interface CustomMenuItem extends MenuItem {
  roles?: Roles[];
  items?: CustomMenuItem[];
}

export function accessGranted(item: CustomMenuItem, rolesGranted: string[] | Roles[]) {
  return !item.roles || item.roles.some(allowed => rolesGranted.find(granted => granted == allowed));
}

export const mainMenuItems: CustomMenuItem[] = [
  {
    label: 'Solicitações',
    icon: 'tjpb-icon icon-user',
    items: [
      {
        label: 'Minhas Solicitações',
        icon: 'tjpb-icon icon-user',
        routerLink: '/solicitacoes/servidor'
      },
      {
        label: 'Solicitar Certificado',
        icon: 'tjpb-icon icon-doc-new',
        routerLink: '/solicitacoes/certificado'
      },
      {
        label: 'Listar Solicitações',
        icon: 'tjpb-icon icon-list-bullet',
        routerLink: '/solicitacoes',
        roles: [Roles.Atendente, Roles.Gestor, Roles.Chefe]
      },
    ]
  },
  {
    label: 'Substituições',
    icon: 'tjpb-icon icon-exchange',
    routerLink: '/substituicoes',
    roles: [Roles.Gestor, Roles.Chefe]
  },
  {
    label: 'Cartas',
    icon: 'tjpb-icon icon-mail-open',
    routerLink: '/cartas',
    roles: [Roles.Atendente, Roles.Gestor]
  },
  {
    label: 'Atualizar Solicitações',
    icon: 'tjpb-icon icon-cw',
    routerLink: '/atualizacao',
    roles: [Roles.Atendente]
  },
];
