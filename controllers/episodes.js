const models = require('../models')
const Episode = models.episode
const Webtoon = models.webtoon

exports.index = (req, res) => {
    Episode.findAll({
        where: {id_webtoon: req.params.id_webtoon},
        // include: [
        //     {
        //         model: Webtoon,
        //         as: 'webtoonId'
        //     },
        // ],
    })
    .then(result => res.send(result))
};

exports.createMyEpisode = (req, res) =>{
    const { title, image } = req.body
    Episode.create({
        title,
        image,
        id_webtoon: req.params.webtoon_id,
        id_user: req.params.user_id
    }).then(result => res.send(result))
    .catch((result) => {
        res.send({
            error: true,
            message: 'Gagal'
        })
    })
}
exports.getEpisode = (req, res)=>{
    const webtoonId = req.params.webtoon_id

    Episode.findAll({
        where: { id_webtoon: webtoonId},
        attributes: { exclude:["id", "id_webtoon"] }
    }).then(data => {
        res.send(data);
    });
};
exports.updateEpisode = (req, res) => {
    const {title, image} = req.body
    Episode.update({
        title,
        image
    },
    {
        where:{id: req.params.episode_id}
    }
    ).then(result=>{
        if(result){
            res.send({
                id: req.params.episode_id,
                webtoon_id: req.params.webtoon_id
            });
        } else{
            res.send('Update Failed')
        }
    });
}

exports.deleteEpisode = (req, res)=>{
    const { episode_id, webtoon_id} = req.params
    Episode.destroy({
        where: {id:episode_id, id_webtoon: webtoon_id}
    }).then(result =>
        res.send({
            id: episode_id,
            message:'Episode Berhasil dihapus'
        })
    )
}