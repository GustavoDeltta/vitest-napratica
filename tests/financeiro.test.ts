// tests/financeiro.test.ts
import { describe, test, expect } from 'vitest';
import { calcularSaldo, filtrarPorTipo } from '../source/financeiro';
import { Transacao } from '../source/types';

describe('Módulo Financeiro', () => {
  const transacoesExemplo: Transacao[] = [
    { tipo: 'receita', valor: 2000 },
    { tipo: 'despesa', valor: 300 },
    { tipo: 'despesa', valor: 150 }
  ];
  test('Deve calcular o saldo final corretamente', () => {
    expect(calcularSaldo(transacoesExemplo)).toBe(1550);
  });
  test('Deve filtrar apenas as despesas do extrato', () => {
    const despesas = filtrarPorTipo(transacoesExemplo, 'despesa');
    expect(despesas.length).toBe(2);
    expect(despesas[0].valor).toBe(300);
  });
  test('Deve estourar erro se a transação inserida for inválida (Teste de Integração)', () => {
    const listaComErro: any = [ // Usei "any" apenas para forçar o erro no teste
      { tipo: 'receita', valor: 1000 },
      { tipo: 'despesa', valor: -50 } 
    ];    
    expect(() => calcularSaldo(listaComErro)).toThrowError('número positivo maior que zero');
  });
});