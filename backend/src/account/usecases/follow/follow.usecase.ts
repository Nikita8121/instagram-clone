import { Injectable } from '@nestjs/common';
import { AccountRepository } from '../../account.repository';
import { FollowCommand } from './follow.command';
import { ApiException } from 'src/shared/exceptions/api.exception';

@Injectable()
export class Follow {
  constructor(private readonly accountRepository: AccountRepository) {}
  async execute(command: FollowCommand) {
    if (command.from === command.to)
      throw new ApiException('you cannot follow yourself');

    const accountToFollow = await this.accountRepository.findById(command.to);

    const isFollowingBack = !!accountToFollow.following.find(
      (f) => f.account.toString() === command.from,
    );
    await this.accountRepository.addFollowing(
      command.from,
      command.to,
      isFollowingBack,
    );

    await this.accountRepository.addFollower(
      command.from,
      command.to,
      isFollowingBack,
    );
  }
}
