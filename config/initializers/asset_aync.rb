AssetSync.configure do |config|
  s3_credentials  = {
      region: ENV['AWS_REGION'],
      s3_host_name: ENV['S3_HOST_NAME'],
      bucket: ENV['BUCKET'],
      access_key_id: ENV['AWS_ACCESS_KEY_ID'],
      secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'],
  }
  config.fog_provider = 'AWS'
  config.aws_access_key_id = s3_credentials[:access_key_id]
  config.aws_secret_access_key = s3_credentials[:secret_access_key]
  config.fog_directory = s3_credentials[:bucket]

  # Increase upload performance by configuring your region
  # config.fog_region = 'eu-west-1'
  #
  # Don't delete files from the store
  # config.existing_remote_files = "keep"
  #
  # Automatically replace files with their equivalent gzip compressed version
  # config.gzip_compression = true
  #
  # Use the Rails generated 'manifest.yml' file to produce the list of files to
  # upload instead of searching the assets directory.
  # config.manifest = true
  #
  # Fail silently.  Useful for environments such as Heroku
  # config.fail_silently = true
end