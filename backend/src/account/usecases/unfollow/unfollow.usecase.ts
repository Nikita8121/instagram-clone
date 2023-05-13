import { Injectable } from '@nestjs/common';
import { AccountRepository } from '../../account.repository';
import { UnfollowCommand } from './unfollow.command';
import { ApiException } from 'src/shared/exceptions/api.exception';

@Injectable()
export class Unfollow {
  constructor(private readonly accountRepository: AccountRepository) {}
  async execute(command: UnfollowCommand) {
    if (command.from === command.to)
      throw new ApiException('you cannot unfollow yourself');

    const accountToUnFollow = await this.accountRepository.findById(command.to);

    const isFollowingBack = !!accountToUnFollow.following.find(
      (f) => f.account.toString() === command.from,
    );
    await this.accountRepository.removeFollowing(
      command.from,
      command.to,
      isFollowingBack,
    );

    await this.accountRepository.removeFollower(
      command.from,
      command.to,
      isFollowingBack,
    );
  }
}
