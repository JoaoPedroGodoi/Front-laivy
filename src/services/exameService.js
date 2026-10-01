// Dados de exemplo (por enquanto o projeto não usa backend).
const exames = [
  { id_exame: 1, nome_atleta: 'Lucas Andrade', peso: 82, altura: 1.88, gordura: 12, situacao: 'Apto' },
  { id_exame: 2, nome_atleta: 'Mariana Souza', peso: 64, altura: 1.72, gordura: 18, situacao: 'Apto' },
  { id_exame: 3, nome_atleta: 'Pedro Lima', peso: 95, altura: 1.95, gordura: 22, situacao: 'Inapto' },
  { id_exame: 4, nome_atleta: 'Ana Costa', peso: 58, altura: 1.65, gordura: 16, situacao: 'Apto' },
]

export function listarExames() {
  return exames
}
