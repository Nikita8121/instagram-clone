import { AbstractUseCase } from 'src/shared/use-cases/abstract.use-case';

export class CreateAccount extends AbstractUseCase {
  execute(data: T): unknown {
    throw new Error('Method not implemented.');
  }
}
