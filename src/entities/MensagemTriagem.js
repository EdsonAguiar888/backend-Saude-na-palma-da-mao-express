
const { EntitySchema } = require('typeorm');

const MensagemTriagemSchema = new EntitySchema({
  name: 'MensagemTriagem',
  tableName: 'mensagem_triagem',

  columns: {
    id_mensagem: {
      type: 'bigint',
      primary: true,
      generated: 'increment',
    },

    id_triagem: {
      type: 'bigint',
      nullable: false,
    },

    autor: {
      type: 'enum',
      enum: ['PACIENTE', 'IA'],
      nullable: false,
    },

    conteudo: {
      type: 'text',
      nullable: false,
    },

    ordem: {
      type: 'integer',
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
      onDelete: 'CASCADE',
    },
  },
});

module.exports = MensagemTriagemSchema;
