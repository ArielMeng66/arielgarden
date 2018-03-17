require 'time'

# Usage: rake post type="pages" title="A Title" img="" [date="2016-06-26"]
desc "Create a new post"
task :post do
  unless FileTest.directory?('./_posts')
    abort("rake aborted: '_posts' directory not found.")
  end
  title = ENV["title"] || "new-post"
  type = ENV["type"] || "pages"

  if type == "pages"
    folder = "_posts/pages"
    layout = "post"
    categorie ="page"
  elsif type == "voices"
    folder = "_posts/voices"
    layout = "voice"
    categorie = "voice"
  end

  imgpath = ENV["img"] || ""
  slug = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
  begin
    datetime = (ENV['date'] ? Time.parse(ENV['date']) : Time.now)
                                  .strftime('%Y-%m-%d %H:%M:%S %z')
    date = datetime.split.first
  rescue Exception => e
    puts "Error: date format must be YYYY-MM-DD!"
    exit -1
  end
  filename = File.join('.', "#{folder}", "#{date}-#{slug}.md")
  if File.exist?(filename)
    abort("rake aborted: #{filename} already exists.")
  end

  puts "Creating new post: #{filename}"
  open(filename, 'w') do |post|
    post.puts "---"
    post.puts "layout: #{layout}"
    post.puts "title: \"#{title.gsub(/-/,' ')}\""
    post.puts "date: #{datetime}"
    post.puts "categories: #{categorie}"
    post.puts "description:"
    post.puts "img:\"#{imgpath}\""
    post.puts "---"
  end
end


# Usage: rake draft title="A Title"
#desc "Create a new draft"
#task :draft do
#  unless FileTest.directory?('./_drafts')
#    abort("rake aborted: '_drafts' directory not found.")
#  end
#  title = ENV["title"] || "new-post"
#  slug = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
#  filename = File.join('.', '_drafts', "#{slug}.md")
#  if File.exist?(filename)
#    abort("rake aborted: #{filename} already exists.")
#  end

#  puts "Creating new draft: #{filename}"
#  open(filename, 'w') do |post|
#    post.puts "---"
#    post.puts "layout: post"
#    post.puts "title: \"#{title.gsub(/-/,' ')}\""
#    post.puts "date:"
#    post.puts "categories:"
#    post.puts "description:"
#    post.puts "---"
#  end
#end