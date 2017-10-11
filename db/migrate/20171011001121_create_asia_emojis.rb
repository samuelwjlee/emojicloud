class CreateAsiaEmojis < ActiveRecord::Migration[5.1]
  def change
    create_table :asia_emojis do |t|
      t.json "emojis", null:false

      t.timestamps
    end
  end
end
