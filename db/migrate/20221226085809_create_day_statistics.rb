class CreateDayStatistics < ActiveRecord::Migration[7.0]
  def change
    create_table :day_statistics do |t|
      t.integer :pig_dogs
      t.integer :tanks
      t.integer :apv
      t.integer :artillery
      t.integer :mlrs
      t.integer :aircraft
      t.integer :helicopters

      t.timestamps
    end
  end
end
