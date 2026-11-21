const { EntitySchema } = require('typeorm');

const NotificacaoSchema = new EntitySchema({
  name: 'Notificacao',
  tableName: 'notificacao',

  columns: {
    id_notificacao: {
      type: 'bigint',
      primary: true,
      generated: 'increment',
    },

    id_usuario: {
      type: 'bigint',
      nullable: false,
    },

    titulo: {
      type: 'varchar',
      length: 150,
      nullable: false,
    },

    mensagem: {
      type: 'text',
      nullable: false,
    },

    tipo: {
      type: 'enum',
      enum: ['AGENDAMENTO', 'LEMBRETE', 'SISTEMA'],
      nullable: false,
    },

    lida: {
      type: 'boolean',
      default: false,
      nullable: false,
    },

    criado_em: {
      type: 'timestamp',
      createDate: true,
    },
  },

  relations: {
    usuario: {
      type: 'many-to-one',
      target: 'Usuario',
      joinColumn: { name: 'id_usuario' },
      onDelete: 'RESTRICT',
    },
  },
});

module.exports = NotificacaoSchema;
