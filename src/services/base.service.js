class BaseService {
  constructor(repository) {
    this.repsoitory = repository;
  }

  async get(id) {
    if (!id) {
      throwError(400, 'id must be send');
    }

    const currentEntity = await this.repsoitory.get(id);

    if (!currentEntity) {
      throwError(404, 'entity does not found');
    }
    return currentEntity;
  }

  async getAll() {
    return await this.repository.getAll()
  }

  async create(entity) {
    return await this.repository.create(entity);
  }

  async update(id, entity) {
    if (!id) {
      throwError(400, 'id must be send');
    }

    return await this.repsoitory.update(id, entity);
  }

  async delete(id) {
    if (!id) {
      throwError(400, 'id must be send');
    }

    return await this.repsoitory.delete(id);
  }

  throwError(statusCode, message) {
    const error = new Error();
    error.status = statusCode;
    error.message = message;
    throw error;
  }
}

module.exports = BaseService;