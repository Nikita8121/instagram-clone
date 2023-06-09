import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './account.model';
import { BaseRepository } from 'src/shared/repositories/base-repository';

@Injectable()
export class AccountRepository extends BaseRepository<Account> {
  constructor(@InjectModel(Account.name) accountModel: Model<Account>) {
    super(accountModel);
  }

  async updateAvatar(accountId: string, url: string) {
    return this.updateOne(
      { _id: accountId },
      {
        $set: {
          avatar: url,
        },
      },
    );
  }

  async findByEmailAndUsername(email: string, username: string) {
    return this.findOne({ $or: [{ email }, { username }] });
  }

  async findByEmail(email: string) {
    return this.findOne({ email });
  }

  async findByUsername(username: string) {
    return this.findOne({ username });
  }

  async addFollowing(from: string, to: string, isFollowBack = false) {
    if (!isFollowBack) {
      return this.updateOne(
        { _id: from },
        {
          $addToSet: {
            following: {
              account: this.convertStringToObjectId(to),
              isFollowBack,
            },
          },
        },
      );
    }
    return this.updateOne(
      { _id: from },
      {
        $addToSet: {
          following: {
            account: this.convertStringToObjectId(to),
            isFollowBack,
          },
        },
        $set: {
          'followers.$[outer].isFollowBack': isFollowBack,
        },
      },
      {
        arrayFilters: [
          {
            'outer.account': this.convertStringToObjectId(to),
          },
        ],
      },
    );
  }

  async addFollower(from: string, to: string, isFollowBack = false) {
    if (!isFollowBack) {
      return this.updateOne(
        { _id: to },
        {
          $addToSet: {
            followers: {
              account: this.convertStringToObjectId(from),
              isFollowBack,
            },
          },
        },
      );
    }

    return this.updateOne(
      { _id: to },
      {
        $addToSet: {
          followers: {
            account: this.convertStringToObjectId(from),
            isFollowBack,
          },
        },
        $set: {
          'following.$[outer].isFollowBack': isFollowBack,
        },
      },
      {
        arrayFilters: [
          {
            'outer.account': this.convertStringToObjectId(from),
          },
        ],
      },
    );
  }

  async removeFollowing(from: string, to: string, isFollowBack = false) {
    if (!isFollowBack) {
      return this.updateOne(
        { _id: from },
        {
          $pull: {
            following: {
              account: this.convertStringToObjectId(to),
            },
          },
        },
      );
    }

    return this.updateOne(
      { _id: from },
      {
        $pull: {
          following: {
            account: this.convertStringToObjectId(to),
          },
        },
        $set: {
          'followers.$[outer].isFollowBack': false,
        },
      },
      {
        arrayFilters: [
          {
            'outer.account': this.convertStringToObjectId(to),
          },
        ],
      },
    );
  }

  async removeFollower(from: string, to: string, isFollowBack = false) {
    if (!isFollowBack) {
      return this.updateOne(
        { _id: to },
        {
          $pull: {
            followers: {
              account: this.convertStringToObjectId(from),
            },
          },
        },
      );
    }

    return this.updateOne(
      { _id: to },
      {
        $pull: {
          followers: {
            account: this.convertStringToObjectId(from),
          },
        },
        $set: {
          'following.$[outer].isFollowBack': false,
        },
      },
      {
        arrayFilters: [
          {
            'outer.account': this.convertStringToObjectId(from),
          },
        ],
      },
    );
  }
}
