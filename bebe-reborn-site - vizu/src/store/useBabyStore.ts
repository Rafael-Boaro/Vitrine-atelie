import { create } from 'zustand';

// 1. Definindo as opções disponíveis (Tipagem estática)
export type TipoMolde = 'recem_nascido' | 'corpo_inteiro';
export type TipoOlhos = 'fechados' | 'azuis' | 'castanhos' | 'verdes';
export type TipoCabelo = 'careca' | 'loiro' | 'castanho' | 'preto';
export type TipoRoupa = 'fralda' | 'macacao_branco' | 'vestido_rosa' | 'conjunto_azul';

// 2. Interface do Estado
interface BabyState {
  molde: TipoMolde;
  olhos: TipoOlhos;
  cabelo: TipoCabelo;
  roupa: TipoRoupa;
  
  // Ações para atualizar o estado
  setMolde: (molde: TipoMolde) => void;
  setOlhos: (olhos: TipoOlhos) => void;
  setCabelo: (cabelo: TipoCabelo) => void;
  setRoupa: (roupa: TipoRoupa) => void;
}

// 3. Criando a Store com Zustand
export const useBabyStore = create<BabyState>((set) => ({
  // Valores iniciais (o bebê padrão que aparece quando o site carrega)
  molde: 'recem_nascido',
  olhos: 'fechados',
  cabelo: 'careca',
  roupa: 'fralda',

  // Funções de atualização
  setMolde: (molde) => set({ molde }),
  setOlhos: (olhos) => set({ olhos }),
  setCabelo: (cabelo) => set({ cabelo }),
  setRoupa: (roupa) => set({ roupa }),
}));