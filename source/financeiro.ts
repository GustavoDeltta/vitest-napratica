import { Transacao } from './types';
import { validarTransacao } from './validacoes';

export function calcularSaldo(transacoes: Transacao[]): number {
  if (!Array.isArray(transacoes)) {
    throw new Error('As transações devem ser enviadas em formato de lista (array).');
  }
  return transacoes.reduce((saldo, transacao) => {
    validarTransacao(transacao);   
    return transacao.tipo === 'receita' 
      ? saldo + transacao.valor 
      : saldo - transacao.valor;
  }, 0);
}

export function filtrarPorTipo(transacoes: Transacao[], tipo: 'receita' | 'despesa'): Transacao[] {
  return transacoes.filter(transacao => transacao.tipo === tipo);
}