require 'terser'

class TerserCompressor
  def compress(filename)
    Terser.compile(File.read(filename))
  end
end
