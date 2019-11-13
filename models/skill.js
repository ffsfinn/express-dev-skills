const skill = [
    {skill: 'Javascript'},
    {skill: 'HTML'},
    {skill: 'CSS'}
];

module.exports = {
    getAll,
    getOne
};

function getOne(id) {
    return skill[id]
};

function getAll() {
    return skill
};

