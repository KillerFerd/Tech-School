'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Profesor extends Model {
        static associate(models) {
            // define association here
        }
    }
    Profesor.init({
        carnet: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        dpi: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        nombre: {
            type: DataTypes.STRING(75),
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING(75),
            allowNull: false
        },
        fechaNacimiento: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            field: 'fecha_nacimiento'
        },
        telefono: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        direccion: {
            type: DataTypes.STRING(300),
            allowNull: true,
        },
        gradoAcademico: {
            type: DataTypes.STRING(75),
            allowNull: false,
            field: 'grado_academico'
        }
    }, {
        sequelize,
        modelName: 'Profesor',
        freezeTableName: true,
        tableName: 'profesor',
        underscored: true
    });

    return Profesor;
};