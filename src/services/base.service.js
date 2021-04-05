class BaseService {
  constructor(repository) {
    this.repository = repository;
  }


  async get(id) {
    if (!id) {
      this.throwError(400, 'id must be send');
    }

    const currentEntity = await this.repository.get(id);

    if (!currentEntity) {
      this.throwError(404, 'entity does not found');
    }
    return currentEntity;
  }

  async getAll(pageSize, pageNum) {
    return await this.repository.getAll(pageSize, pageNum);
  }

  async create(entity) {
    return await this.repository.create(entity);
  }

  async update(id, entity) {
    if (!id) {
      this.throwError(400, 'id must be send');
    }

    return await this.repository.update(id, entity);
  }

  async delete(id) {
    if (!id) {
      this.throwError(400, 'id must be send');
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