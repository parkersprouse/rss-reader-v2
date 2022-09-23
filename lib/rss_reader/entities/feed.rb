require './lib/rss_reader/repositories/feed_repository'

# A {Feed} represents a user-provided RSS source.
class Feed < Hanami::Entity
  # Allows us to call all of the repository methods directly on the entity
  # for convenience such as `Feed.first` or `Feed.create`.
  def self.method_missing(method, *args, &block)
    FeedRepository.send(method, *args, &block)
  end

  # Allows us to call repository methods for an instance of the entity on an
  # instance of the entity, such as `Feed.find(1).update(...)`.
  def method_missing(method, *args, &block)
    method_sym = method.to_sym
    return hashed[method_sym] if hashed.key?(method_sym)
    FeedRepository.send(method, id, *args, &block)
  end

  # @return [ROM::Struct::User]
  #   The {User} who created this {Feed}.
  def user
    FeedRepository.user_for(user_id: user_id)
  end

  private

  # @return [Hash]
  #   The current {Feed} converted to a {Hash} for accessing its attributes.
  def hashed
    to_h
  end
end
