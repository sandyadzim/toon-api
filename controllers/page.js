const models = require('../models')
const Episode = models.episode
const Page = models.page
const Webtoon = models.webtoon

exports.getPages = (req, res)=>{
    const webtoonId = req.params.id_webtoon
    const episodeId = req.params.id_episode

    Episode.findAll({
        where: { id_webtoon: webtoonId, id_episode: episodeId },
    }).then(result => res.send(result))
    .catch(err => console.log(err))
};

exports.createPage = (req, res)=>{
    const{page, image} = req.body
    Page.create({
        page,
        image,
        id_episode: req.params.episode_id,
        id_user: req.params.user_id,
        id_webtoon: req.params.webtoon_id
    }).then(result=> res.send(result))
}

exports.deletePage = (req, res)=>{
    const { image_id } = req.params
    Page.destroy({
        where: {id:image_id}
    }).then(result =>
        res.send({
            id: image_id,
            message:'Episode Berhasil dihapus'
        })
    )
}