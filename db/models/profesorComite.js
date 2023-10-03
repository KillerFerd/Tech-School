'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProfesorComite extends Model {
        static associate(models) {
            // define association here
        }
    }
    ProfesorComite.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idProfesor: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'id_profesor'
        },
        idComite: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'id_comite'
        }
    }, {
        sequelize,
        modelName: 'ProfesorComite',
        freezeTableName: true,
        tableName: 'profesor_comite',
        underscored: true
    });

    return ProfesorComite;
};