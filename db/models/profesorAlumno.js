'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProfesorAlumno extends Model {        
        static associate(models) {
        ProfesorAlumno.belongsTo(models.Alumno, {foreignKey: {name: 'carnet_alumno', allowNull: false}});
        ProfesorAlumno.belongsTo(models.Profesor, {foreignKey: {name: 'carnet_profesor', allowNull: false}});
        }
    }
    ProfesorAlumno.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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