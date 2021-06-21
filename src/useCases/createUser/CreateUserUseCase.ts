import { User } from "../../entities/User";
import { IUsersRepositories } from "../../repositories/IUsersRepositories";

interface CreateUserDTO {
  name: string;
  email: string;
}

class CreateUserUseCase {

  constructor(private usersRepository: IUsersRepositories) { }

  async execute({ name, email }: CreateUserDTO) {
    let user = new User();
    user = Object.assign({
      ...user, name, email
    });

    await this.usersRepository.create(user);
  }
}

export { CreateUserUseCase };