const BaseService = require('./base.service');
let _ideaRepository = null;

class IdeaService extends BaseService {
  constructor({ IdeaRepository }) {
    super(IdeaRepository);
    _ideaRepository = IdeaRepository;
  }

  async getUserIdeas(author) {
    if (!author) {
      this.throwError(400, 'userId must be sent')
    }

    return await _ideaRepository.getUserIdeas(author);
  }

  async upvoteIdea(ideaId) {
    if (!ideaId) {
      this.throwError(400, 'ideaId must be sent');
    }

    const idea = await _ideaRepository.get(ideaId);

    if (!idea) {
      this.throwError(404, 'idea does not exists');
    }

    idea.upvotes.push(true);
    return await _ideaRepository.update(ideaId, { upvotes: idea.upvotes });
  }

  async downvoteIdea(ideaId) {
    if (!ideaId) {
      this.throwError(400, 'ideaId must be sent');
    }

    const idea = await _ideaRepository.get(ideaId);

    if (!idea) {
      this.throwError(404, 'idea does not exists');
    }

    idea.downvotes.push(true);
    return await _ideaRepository.update(ideaId, { downvotes: idea.downvotes });
  }
}

module.exports = IdeaService;