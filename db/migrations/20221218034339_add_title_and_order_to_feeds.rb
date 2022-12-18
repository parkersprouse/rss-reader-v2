# frozen_string_literal: true

Hanami::Model.migration do
  up do
    alter_table(:feeds) do
      add_column :title, String, null: true, unique: false
      add_column :sort_order, Integer, null: true, unique: false
    end
  end

  down do
    alter_table(:feeds) do
      drop_column :title
      drop_column :sort_order
    end
  end
end
