'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Alumno extends Model {
        static associate(models) {
            // define association here
        }
    }
    Alumno.init({
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
            type: DataTypes.DATE,
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
        carrera: {
            type: DataTypes.STRING(75),
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'Alumno',
        freezeTableName: true,
        tableName: 'alumno',
        underscored: true
    });

    return Alumno;
};