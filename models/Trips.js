const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Trips extends Model {}

Trips.init(
  {
    id: {
      type: DateTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    trip_budget: {
      type: DataTypes.DECIMAL(4, 2),
    },
    traveller_amount: {
      type: DateTypes.INTEGER,
      allowNull: false,
    },
    traveller_id: {
      type: DateTypes.INTEGER,
      references: {
        model: "Traveller",
        key: "Traveller.id",
      },
    },
    location_id: {
      type: DateTypes.INTEGER,
      references: {
        model: "location",
        key: "location.id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "trip",
  }
);

module.exports = Trips;
