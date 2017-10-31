class CreateWorkouts < ActiveRecord::Migration[5.1]
  def change
    create_table :workouts do |t|
      t.belongs_to :user
      t.string :type, null: false
      t.float :time, null: false
      t.float :distance, null: false
      t.float :rest
      t.float :reps, null: false, default: 1
      t.float :intervaldistance

      t.timestamps null: false
    end
  end
end
