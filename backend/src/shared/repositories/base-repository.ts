import {
  Model,
  Types,
  ProjectionType,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from 'mongoose';

export class BaseRepository<T_DBModel, T_Enforcement = object> {
  public _model: Model<T_DBModel>;

  constructor(private readonly MongooseModel: Model<T_DBModel>) {
    this._model = MongooseModel;
  }

  public static createObjectId() {
    return new Types.ObjectId().toString();
  }

  protected convertObjectIdToString(value: Types.ObjectId): string {
    return value.toString();
  }

  protected convertStringToObjectId(value: string): Types.ObjectId {
    return new Types.ObjectId(value);
  }

  async count(query: FilterQuery<T_DBModel>, limit?: number): Promise<number> {
    return this.MongooseModel.countDocuments(query, {
      limit,
    });
  }

  async aggregate(
    query: any[],
    options: { readPreference?: 'secondaryPreferred' | 'primary' } = {},
  ): Promise<any> {
    return await this.MongooseModel.aggregate(query).read(
      options.readPreference || 'primary',
    );
  }

  async findById(id: string, select?: string) {
    const data = await this.MongooseModel.findById(id, select).exec();
    if (!data) return null;

    return data;
  }

  async findOne(
    query: FilterQuery<T_DBModel>,
    select?: ProjectionType<T_DBModel & T_Enforcement>,
  ) {
    const data = await this.MongooseModel.findOne(query, select).exec();
    if (!data) return null;

    return data;
  }

  async delete(query: FilterQuery<T_DBModel>): Promise<void> {
    await this.MongooseModel.deleteOne(query);
  }

  async deleteById(id: string): Promise<void> {
    await this.MongooseModel.findByIdAndDelete(id);
  }

  async find(
    query: FilterQuery<T_DBModel>,
    select: ProjectionType<T_DBModel> = '',
    options: { limit?: number; sort?: any; skip?: number } = {},
  ) {
    const data = await this.MongooseModel.find(query, select, {
      sort: options.sort || null,
    })
      .skip(options.skip as number)
      .limit(options.limit as number)
      .exec();

    return data;
  }

  async create(data: T_DBModel) {
    const newEntity = new this.MongooseModel(data);
    return (await newEntity.save()).toObject();
  }

  async insertMany(data: FilterQuery<T_DBModel>[]): Promise<{
    acknowledged: boolean;
    insertedCount: number;
    insertedIds: Types.ObjectId[];
  }> {
    const result = await this.MongooseModel.insertMany(data, {
      ordered: false,
    });

    const insertedIds = result.map((inserted) =>
      this.convertStringToObjectId(inserted._id.toString()),
    );

    return {
      acknowledged: true,
      insertedCount: result.length,
      insertedIds,
    };
  }

  async update(
    query: FilterQuery<T_DBModel>,
    updateBody: UpdateQuery<T_DBModel>,
  ): Promise<{
    matched: number;
    modified: number;
  }> {
    const saved = await this.MongooseModel.updateMany(query, updateBody, {
      multi: true,
    }).exec();

    return {
      matched: saved.matchedCount,
      modified: saved.modifiedCount,
    };
  }

  async updateOne(
    query: FilterQuery<T_DBModel>,
    updateBody: UpdateQuery<T_DBModel>,
    options?: QueryOptions<T_DBModel> | null,
  ): Promise<{
    matched: number;
    modified: number;
  }> {
    const saved = await this.MongooseModel.updateOne(
      query,
      updateBody,
      options,
    ).exec();
    return {
      matched: saved.matchedCount,
      modified: saved.modifiedCount,
    };
  }

  async isExists(id: string) {
    return !!(await this.findById(id, '_id'));
  }

  /* async upsertMany(data: FilterQuery<T_DBModel>[]) {
    const promises = data.map((entry) =>
      this.MongooseModel.findOneAndUpdate(entry, entry, { upsert: true }),
    );

    return await Promise.all(promises);
  }

  async bulkWrite(bulkOperations: any) {
    await this.MongooseModel.bulkWrite(bulkOperations);
  } */

  /* protected mapEntity<TData>(
    data: TData,
  ): TData extends null ? null : T_MappedEntity {
    return plainToInstance(
      this.entity,
      JSON.parse(JSON.stringify(data)),
    ) as any;
  }

  protected mapEntities(data: any): T_MappedEntity[] {
    return plainToInstance<T_MappedEntity, T_MappedEntity[]>(
      this.entity,
      JSON.parse(JSON.stringify(data)),
    );
  } */
}
