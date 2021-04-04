const BaseService = require('./base.service');
let _commentRepository = null;
let _ideaRepository

class UserService extends BaseService {
  constructor({ CommentRepository, IdeaRepository }) {
    super(CommentRepository);
    _commentRepository = CommentRepository;
    _ideaRepository = IdeaRepository;
  }

  async getIdeasComments(ideaId) {
    if (!ideaId) {
      this.throwError(400, 'ideaId must be sent');
    }

    const idea = await _ideaRepository.get(ideaId);

    if (!idea) {
      this.throwError(404, 'idea does not exists');
    }

    const { comments } = idea;
    return comments;
  }

  async createComment (comment, ideaId) {
    if (!ideaId) {
      this.throwError(400, 'ideaId must be sent');
    }

    const idea = await _ideaRepository.get(ideaId);

    if (!idea) {
      this.throwError(404, 'idea does not exists');
    }

    const createdComment = await _commentRepository.create(comment);
    idea.comments.push(createdComment);

    return await _ideaRepository.update(ideaId, { comments: idea.comments});
  }
}

module.exports = UserService;