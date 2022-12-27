Hanami::Model.migration do
  up do
    execute 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp"'

    create_table :user_settings do
      column :user_id, :uuid, null: false, unique: true
      column :value, :jsonb, null: false

      column :created_at, DateTime, null: false
      column :updated_at, DateTime, null: false

      foreign_key [:user_id], :users, name: :user_settings_fk_to_users
      primary_key [:user_id], name: :user_settings_pkey
    end
  end

  down do
    drop_table :user_settings
  end
end
