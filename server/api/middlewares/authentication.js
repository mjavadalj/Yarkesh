const ProjectMembers = require('../models/projectMembers');
const Projects = require('../models/projects');

module.exports.isMember = (req, res, next) => {
	ProjectMembers.findAll({
		where: {
			memberId: req.user.userId,
			projectId: req.body.projectId
		}
	})
		.then((member) => {
			if (member.length) {
				return next();
			} else {
				return res.status(401).json({
					message: 'user is not a member of this project'
				});
			}
		})
		.catch((error) => {
			return res.status(500).json({
				error
			});
		});
};

module.exports.isCreator = (req, res, next) => {
	Projects.findAll({
		where: {
			creatorId: req.user.userId,
			projectId: req.body.projectId
		}
	})
		.then((creator) => {
			if (creator.length) {
				return next();
			} else {
				return res.status(401).json({
					message: 'user is not the creator of this project'
				});
			}
		})
		.catch((error) => {
			return res.status(500).json({
				error
			});
		});
};
