WebsocketRails::EventMap.describe do
  subscribe :client_connected, to: ChatsController, with_method: :client_connected
  subscribe :client_disconnected, to: ChatsController, with_method: :client_disconnected
  subscribe :new_message, to: ChatsController, with_method: :incoming_message
end
