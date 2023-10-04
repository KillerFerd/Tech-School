'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class TFC extends Model {
        static associate(models) {
            // define association here
        }
    }
    TFC.init({
        numeroOrden: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'numero_orden'
        },
        tema: {
            type: DataTypes.STRING(75),
            allowNull: false,
            unique: true
        },
        fechaInicio: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            field: 'fecha_inicio'
        },
        idAlumno: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'TFC',
        freezeTableName: true,
        tableName: 'TFC',
        underscored: true
    });

    return TFC;
};