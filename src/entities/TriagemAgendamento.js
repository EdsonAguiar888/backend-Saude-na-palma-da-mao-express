
const { EntitySchema } = require('typeorm');

const TriagemAgendamentoSchema = new EntitySchema({
  name: 'TriagemAgendamento',
  tableName: 'triagem_agendamento',

  columns: {
    id_triagem_agendamento: {
      type: 'bigint',
      primary: true,
      generated: 'increment',
    },

    id_triagem: {
      type: 'bigint',
      nullable: false,
      unique: true,
    },

    id_agendamento: {
      type: 'bigint',
      nullable: false,
    },

    criado_em: {
      type: 'timestamp',
      createDate: true,
    },
  },

  relations: {
    preTriagem: {
      type: 'many-to-one',
      target: 'PreTriagem',
      joinColumn: { name: 'id_triagem' },
      onDelete: 'RESTRICT',
    },

    agendamento: {
      type: 'many-to-one',
      target: 'Agendamento',
      joinColumn: { name: 'id_agendamento' },
      onDelete: 'RESTRICT',
    },
  },
});

module.exports = TriagemAgendamentoSchema;
