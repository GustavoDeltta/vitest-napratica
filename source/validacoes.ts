import { Transacao } from './types';

export function validarTransacao(transacao: Transacao): boolean {
  if (!transacao.tipo || !['receita', 'despesa'].includes(transacao.tipo)) {
    throw new Error('Tipo de transação inválido. Use "receita" ou "despesa".');
  }
  if (typeof transacao.valor !== 'number' || transacao.valor <= 0) {
    throw new Error('O valor da transação deve ser um número positivo maior que zero.');
  }
  return true;
}