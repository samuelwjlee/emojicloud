class CreateEuropeEmojis < ActiveRecord::Migration[5.0]
  def change
    create_table :europe_emojis do |t|
      t.json "emojis", null:false
      t.timestamps
    end
  end
end
