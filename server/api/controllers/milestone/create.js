const Milestone = require('../../models/milestone');
const Project = require('../../models/projects');

module.exports.createMilestone = (req, res) => {
    getLastDueDate2(req).then(lastMilestone => {
        Project.findOne({
            where: {
                projectId: req.body.projectId
            }
        }).then(project => {
            const end = new Date(lastMilestone.getTime())
            Milestone.create({
                    projectId: req.body.projectId,
                    dueDate: new Date(end.setDate(end.getDate() + project.sprintDuration * req.body.howManyDurations)),
                    description: req.body.description,
                })
                .then((milestone) => {
                    return res.status(200).json({
                        milestone
                    });
                })
                .catch((err) => {
                    return res.status(500).json({
                        err
                    });
                });
        })
    })



};


getLastDueDate2 = (req) => {
    return new Promise((res, rej) => {
        Project.findOne({
            where: {
                projectId: req.body.projectId
            }
        }).then(project => {
            Milestone.findOne({
                where: {
                    projectId: req.body.projectId
                },
                attributes: ['dueDate'],
                order: [
                    ['dueDate', 'DESC']
                ]
            }).then((milestone) => {

                    if (!milestone) {
                        res(new Date(project.createdAt.getTime() + 1))
                    } else {
                        res(new Date((milestone.dueDate.getTime())));
                    }
                }

            ).catch(() => {

            })
        })


    })



}