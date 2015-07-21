class ChatsController < WebsocketRails::BaseController
  def client_connected
    unless current_user.nil?
      broadcast_message :new_message,
        {user: {id: current_user.id, name: current_user.name},
          message: {type: "connected", content: t("chat.connected")},
          is_signed_in: user_signed_in?}
    end
  end

  def client_disconnected
    unless current_user.nil?
      broadcast_message :client_disconnected,
        {user: {id: current_user.id, name: current_user.name},
          message: {type: "disconnected", content: t("chat.disconnected")},
          is_signed_in: user_signed_in?}
    end
  end

  def incoming_message
    broadcast_message :new_message,
      {user: {id: current_user.id, name: current_user.name},
        message: {type: "new_message", content: message},
        is_signed_in: user_signed_in?}
  end
end
