import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Issue {
    @PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column({nullable: true})
	description: string;

    @CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}
