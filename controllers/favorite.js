const models = require('../models')
const Favorite = models.favourite
const Webtoon = models.webtoon

exports.getFav = (req, res) =>{
    const favorite = req.query.is_favorite
    const user = req.params.id

    if(favorite == 'true'){
        Favorite.findAll({
            where: {is_favorite: 1, user_id: user},
        }).then(result => res.send(result));
    }else{
        Favorite.findAll({
            where:{is_favorite:0, user_id: user},
        }).then(result => res.send(result))
    }
}

exports.addFav = (req, res) => {
    const userId = req.params.user_id
    const webtoonId = req.params.webtoon_id

    Favorite.create({
        user_id: userId,
        webtoon_id: webtoonId
    })
    .then(result => res.send(result))
}

exports.delFav = (req, res) => {
    Favorite.destroy({
        id: req.params.favorite_id,
        user_id: req.params.user_id,
        webtoon_id: req.params.webtoon_id
    })
    .then(result => res.send({
        id: req.params.favorite_id,
        message: 'Delete Success'
    }))
}

exports.showFav = (req, res) => {
    Favorite.findAll({
        where: {
            user_id: req.params.user_id
        },
        include: [{
            model: Webtoon,
            as: 'webtoonId'
        }]
    })
    .then(result => res.send(result))
}
