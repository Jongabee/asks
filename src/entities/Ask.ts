import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
// import { Order } from "./Order";
// import { Category } from "./Category";

@Entity({ name: "asks" })
export class Ask {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  ask?: string;

  @Column()
  option1?: string;

  @Column()
  option2?: string;

  @Column()
  option3?: string;

  @Column()
  option4?: string;

  @Column()
  isCorrect?: string;

  // @Column()
  // categoryId: number;

  // @ManyToOne(() => Category, (category) => category.products)
  // @JoinColumn({ name: "categoryId" })
  // category: Category;
}
