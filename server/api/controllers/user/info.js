const Sequelize = require('sequelize');
const ProjectMembers = require('../../models/projectMembers');
const Projects = require('../../models/projects');
const Users = require('../../models/users');
const Op = Sequelize.Op;

exports.getUserInfo = (req, res) => {
    Users.findOne({
        where: {
            userId: req.user.userId
        }
    })
        .then((user) => {
            return res.status(200).json({
                userInfo: user
            });
        })
        .catch((err) => {
            return res.status(500).json({
                error: "User not found"
            });
        });
};



exports.getUserProjects = (req, res) => {
    ProjectMembers.findAll({
        where: {
            memberId: req.user.userId
        },
        include: [{
            model: Projects,
            as: 'project',
            attributes: ['title', 'projectId', 'description', 'createdAt'],
            include: [{
                model: Users,
                as: 'creator',
                attributes: ['name']
            }]
        }]
    })
        .then((projects) => {
            return res.status(200).json(
                projects.map((project) => {
                    return project.project;
                })
            );
        })
        .catch((err) => {
            return res.status(500).json({
                error: "Can't find user projects"
            });
        });
};


module.exports.searchUsers = (req, res) => {
    var searchTerm = req.body.email;
    Users.findAll({
        where: {
            email: {
                [Op.like]: '%' + searchTerm + '%'
            }

        },
        attributes: ['userId', 'userName', 'email', 'name'],
        limit: 6,
        subQuery: false
    })
        .then((users) => {
            return res.status(200).json({
                users
            });
        })
        .catch(() => {
            return res.status(500).json({
                message: 'error finding users'
            })
        });
};
