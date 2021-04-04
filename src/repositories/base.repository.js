class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async get(id) {
    return await this.model.findById(id);
  }

  async getAll() {
    return await this.model.find();
  }

  async update(entity) {
    return await this.model.findByIdAndUpdate(id, entity, {new: true});
  }

  async delete(id) {
    return await this.model.findByIdAndDelete(id);
  }

}

module.exports = BaseRepository;
