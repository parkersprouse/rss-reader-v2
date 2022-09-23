require 'singleton'

# The {Repository} responsible for allowing a
# {User} to interface with the database.
class UserRepository < Hanami::Repository
  include Singleton

  associations do
    has_many :feeds
  end

  # Determines if the provided method is available on the `#instance` of this
  # {Repository}, or on the existing {ROM::Relation::Composite} `users`
  # and sends the method to the first object that responds to it.
  # Otherwise, send it up the chain.
  def self.method_missing(method, *args, &block)
    if instance.respond_to?(method)
      instance.send(method, *args, &block)
    elsif users.respond_to?(method)
      users.send(method, *args, &block)
    else
      super
    end
  end

  # Exposes the `#transaction` functionality so that it becomes easier
  # for us to start a transaction on this {Repository}.
  def self.transaction(&block)
    configuration.connection.transaction(&block)
  end

  # @param [UUID] id
  #   The ID of the {User} that we want to get the {Feed}s for.
  #
  # @return [ROM::Relation[Feed]]
  #   The collection of {Feed}s created by this {User}.
  def feeds_for(id:)
    feeds.where(user_id: id).as(:entity)
  end
end
