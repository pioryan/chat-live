if ENV["REDISCLOUD_URL"]
  $redis = Redis.new(:url => ENV["REDISTOGO_URL"])
else
  $redis = Redis.new
end