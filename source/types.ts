export interface Transacao {
  tipo: 'receita' | 'despesa';
  valor: number;
}