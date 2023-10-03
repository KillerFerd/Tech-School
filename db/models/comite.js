'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Comite extends Model {
        static associate(models) {
            // define association here
        }
    }
    Comite.init({
        numeroSerie: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'numero_serie'
        },
        lugarExamen: {
            type: DataTypes.STRING(300),
            allowNull: false,
            field: 'lugar_examen'
        },
        fechaFormacion: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'fecha_formacion'
        },
        numeroIntegrantes: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'numero_integrantes'
        }
    }, {
        sequelize,
        modelName: 'Comite',
        freezeTableName: true,
        tableName: 'comite',
        underscored: true
    });

    return Comite;
};