/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Index,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Question } from './Question';
import { User } from './User';

@Table({
  timestamps: false,
  paranoid: true,
  tableName: 'message',
})
export class Message extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  override id: number;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
  })
  userId: string;

  @Index
  @Column(DataType.STRING(10000))
  message: string;

  @Column(DataType.STRING)
  time: string;

  @ForeignKey(() => Question)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'question_id',
  })
  questionId: string;

  @BelongsTo(() => Question)
  question: Question;
}
