
const { EntitySchema } = require('typeorm');

const PreTriagemSchema = new EntitySchema({
  name: 'PreTriagem',
  tableName: 'pre_triagem',

  columns: {
    id_triagem: {
      type: 'bigint',
      primary: true,
      generated: 'increment',
    },

    id_paciente: {
      type: 'bigint',
      nullable: false,
    },

    id_especialidade_sugerida: {
      type: 'bigint',
      nullable: true,
    },

    descricao_sintomas: {
      type: 'text',
      nullable: true,
    },

    duracao_sintomas: {
      type: 'varchar',
      length: 60,
      nullable: true,
    },

    intensidade: {
      type: 'smallint',
      nullable: true,
    },

    nivel_prioridade: {
      type: 'enum',
      enum: ['BAIXA', 'MEDIA', 'ALTA'],
      nullable: true,
    },

    resumo_ia: {
      type: 'text',
      nullable: true,
    },

    criado_em: {
      type: 'timestamp',
      createDate: true,
    },
  },

  relations: {
    paciente: {
      type: 'many-to-one',
      target: 'Paciente',
      joinColumn: { name: 'id_paciente' },
      onDelete: 'RESTRICT',
    },

    especialidadeSugerida: {
      type: 'many-to-one',
      target: 'Especialidade',
      joinColumn: { name: 'id_especialidade_sugerida' },
      onDelete: 'RESTRICT',
    },
  },
});

module.exports = PreTriagemSchema;
