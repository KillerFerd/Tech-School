'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProfesorAlumno extends Model {
        static associate(models) {
            // define association here
        }
    }
    ProfesorAlumno.init({
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
        idAlumno: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'id_alumno'
        }
    }, {
        sequelize,
        modelName: 'ProfesorAlumno',
        freezeTableName: true,
        tableName: 'profesor_alumno',
        underscored: true
    });

    return ProfesorAlumno;
};