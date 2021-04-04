let _ideaService;

class IdeaController {
  constructor({ IdeaService }) {
    _ideaService = IdeaService;
  }

  async get(req, res) {
    const { ideaId } = req.params;
    const idea = await _ideaService.get(ideaId);
    return res.send(idea);
  }

  async getAll(req, res) {
    const ideas = await _ideaService.getAll();
    return res.send(ideas);
  }

  async create(req, res) {
    const { body } = req;
    const createdIdea = await _ideaService.create(body);
    return res.status(201).send(createdIdea);
  }

  async update(req, res) {
    const { body } = req;
    const { ideaId } = req.params;
    const updatedIdea = await _ideaService.update(ideaId, body);
    return res.send(updatedIdea);
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
    return res.send(idea);
  }

  async upvoteIdea(req, res) {
    const { ideaId } = req.params;
    const idea = await _ideaService.upvoteIdea(ideaId);
    return res.send(idea);
  }

  async downvoteIdea(req, res) {
    const { ideaId } = req.params;
    const idea = await _ideaService.downvoteIdea(ideaId);
    return res.sent(idea);
  }
}

module.exports = IdeaController;