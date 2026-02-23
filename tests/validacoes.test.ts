import { describe, test, expect } from 'vitest';
import { validarTransacao } from '../source/validacoes';
import { Transacao } from '../source/types';

describe('Módulo de Validações', () => {
  test('Deve aprovar uma transação válida', () => {
    const transacao: Transacao = { tipo: 'receita', valor: 100 };
    expect(validarTransacao(transacao)).toBe(true);
  });
  test('Deve barrar transações com tipos desconhecidos', () => {
    // Usei "as any" para driblar o TS no teste e garantir que a regra de negócio em JavaScript lance o erro corretamente no runtime!
    const transacaoInvalida = { tipo: 'investimento', valor: 500 } as any;
    expect(() => validarTransacao(transacaoInvalida)).toThrowError('Tipo de transação inválido');
  });
  test('Deve barrar valores negativos ou zerados', () => {
    const transacaoZerada: Transacao = { tipo: 'despesa', valor: 0 };
    expect(() => validarTransacao(transacaoZerada)).toThrowError('número positivo maior que zero');
  });
});