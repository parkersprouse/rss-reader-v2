class Object
  def blank?
    return !!empty? if respond_to?(:empty?)
    !self
  end

  def present?
    !blank?
  end
end
