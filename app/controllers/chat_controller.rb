class ChatController < WebsocketRails::BaseController
  def client_connected
    broadcast_message :new_message, {user: current_user.nil? ? nil : current_user.name,
      message: t("chat.connected"), is_signed_in: user_signed_in?}
  end

  def client_disconnected
    broadcast_message :new_message, {user: current_user.nil? ? nil : current_user.name,
      message: t("chat.disconnected"), is_signed_in: user_signed_in?}
  end

  def incoming_message
    broadcast_message :new_message, {user: current_user.nil? ? nil : current_user.name,
      message: message, is_signed_in: user_signed_in?}
  end
end
