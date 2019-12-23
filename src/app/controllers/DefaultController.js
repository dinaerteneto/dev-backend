class DefaultController {

    index(req, res) {
        return res.json({message: 'Funcionou ;)'});
    }

}

module.exports = new DefaultController();