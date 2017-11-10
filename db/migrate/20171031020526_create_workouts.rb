class CreateWorkouts < ActiveRecord::Migration[5.1]
  def change
    create_table :workouts do |t|
      t.belongs_to :user
      t.integer :time, null: false
      t.float :distance, null: false
      t.integer :pace

      t.timestamps null: false
    end
  end
end
