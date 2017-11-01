class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.belongs_to :user
      t.belongs_to :workout

      t.timestamps null: false

    end
  end
end
