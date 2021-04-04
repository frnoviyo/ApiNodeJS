let _ideaService;

class IdeaController {
  constructor({ IdeaService }) {
    _ideaService = IdeaService;
  }

  async get(req, res) {
    const { ideaId } = req.params;
    const idea = _ideaService.get(ideaId);
    return res.sent(idea);
  }

  async getAll(req, res) {
    const ideas = _ideaService.getAll();
    return res.sent(ideas);
  }

  async create(req, res) {
    const { body } = req;
    const createdIdea = await _ideaService.create(body);
    return res.status(201).send(createdIdea);
  }

  async update(req, res) {
    const { body } = req;
    const { ideaId } = req.params;
    const updatedIdea = _ideaService.update(ideaId, body);
    return res.sent(updatedIdea);
  }

  async delete(req, res) {
    const { ideaId } = req.params;
    const deletedIdea = await _ideaService.delete(ideaId);
    return res.send(deletedIdea);
  }

  async getUserIdeas() {
    const { userId } = req.params;
    const ideas = await _ideaService.getUserIdeas(userId);
    return res.send(ideas);
  }

  async updatedIdea(req, res) {
    const { ideaId } = req.params;
    const idea = await _ideaService.upvoteIdea(ideaId);
    return res.sent(idea);
  }

  async upvoteIdea(req, res) {
    const { ideaId } = req.params;
    const idea = await _ideaService.upvoteIdea(ideaId);
    return res.sent(idea);
  }

  async downvoteIdea(req, res) {
    const { ideaId } = req.params;
    const idea = await _ideaService.downvoteIdea(ideaId);
    return res.sent(idea);
  }
}

module.exports = IdeaController;