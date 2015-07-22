Rails.application.config.middleware.use Warden::Manager do |manager|
  manager.default_strategies :password
end

Warden:Manager.serialize_into_session do |user|
  user.id
end

Warden:Manager.serialize_from_session do |user|
  User.find(id)
end

