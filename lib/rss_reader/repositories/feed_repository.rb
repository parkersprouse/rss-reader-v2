require 'singleton'

# The {Repository} responsible for allowing a
# {Feed} to interface with the database.
class FeedRepository < Hanami::Repository
  include Singleton

  associations do
    belongs_to :user
  end

  # Determines if the provided method is available on the `#instance` of this
  # {Repository}, or on the existing {ROM::Relation::Composite} `feeds`
  # and sends the method to the first object that responds to it.
  # Otherwise, send it up the chain.
  def self.method_missing(method, *args, &block)
    if instance.respond_to?(method)
      instance.send(method, *args, &block)
    elsif feeds.respond_to?(method)
      feeds.send(method, *args, &block)
    else
      super
    end
  end

  # Exposes the `#transaction` functionality so that it becomes easier
  # for us to start a transaction on this {Repository}.
  def self.transaction(&block)
    configuration.connection.transaction(&block)
  end

  def find_by(*args)
    feeds.where(*args).as(:entity).first
  end

  # @param [UUID] user_id
  #   The ID of the {User} who created this {Feed}.
  #
  # @return [ROM::Struct::User]
  #   The {User} who created this {Feed}.
  def user_for(user_id:)
    users.where(id: user_id).as(:entity).first
  end
end
