require './lib/rss_reader/repositories/user_repository'

# A {User} represents a user of the app who signed up to read their feeds.
class User < Hanami::Entity
  # Allows us to call all of the repository methods directly on the entity for convenience,
  # such as `User.first` or `User.create`.
  def self.method_missing(method, *args, &block)
    UserRepository.send(method, *args, &block)
  end

  # Allows us to call repository methods for an instance of the entity on an
  # instance of the entity, such as `User.find(1).update(...)`.
  def method_missing(method, *args, &block)
    method_sym = method.to_sym
    return hashed[method_sym] if hashed.key?(method_sym)
    UserRepository.send(method, id, *args, &block)
  end

  # @return [ROM::Relation[Feed]]
  #   The collection of {Feed}s created by this {User}.
  def feeds
    UserRepository.feeds_for(id: id)
  end

  # @return [UserSettings]
  #   The {UserSettings} object associated with this {User}.
  def settings
    UserRepository.user_settings_for(id: id)
  end

  # @return [Boolean]
  #   Whether or not the {User} has an assigned password, which will
  #   define if it is active or not.
  def active?
    UserRepository.user_active?(id: id)
  end

  # @param [String, Symbol]
  #   The name of the attribute we want to retrieve the value of from the object.
  # @return [any]
  #   The value associated with the provided attribute key on this object, if the object
  #   has an attribute matching the provided key.
  # @raise [ROM::Struct::MissingAttribute]
  #   If the object does not have a matching attribute.
  def [](key)
    return hashed[key.to_sym] if hashed.key?(key.to_sym)
    raise ROM::Struct::MissingAttribute, "No attribute '#{key}' for object '#{self.class.name}'"
  end

  private

  # @return [Hash]
  #   The current {User} converted to a {Hash} for accessing its attributes.
  def hashed
    to_h
  end
end
